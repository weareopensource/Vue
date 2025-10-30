/* eslint-disable */

import fs from 'fs';
import _ from 'lodash';
import objectPath from 'object-path';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the current config
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development';

const getBaseConfiguration = async () => {
  const _path = path.join(process.cwd(), './src/config', 'defaults', `${process.env.NODE_ENV}.cjs`);
  if (fs.existsSync(`${_path}`)) {
    console.log(`+ Configuration based on : "${process.env.NODE_ENV}"`);
    return await import(path.join('file://', _path));
  }
  console.error(`+ Error: No configuration file found for "${process.env.NODE_ENV}" environment using development instead`);
  return await import(path.join(process.cwd(), './src/config', 'defaults', 'development.cjs'));
};

const getConfiguration = async () => {
  let defaultConfig = await getBaseConfiguration();

  // Get the config from  process.env.WAOS_NODE_*
  const environmentVars = _.mapKeys(
    _.pickBy(process.env, (_value, key) => key.startsWith('WAOS_VUE_')),
    (_v, k) => k.split('_').slice(2).join('.'),
  );
  const environmentConfigVars = {};
  _.forEach(environmentVars, (v, k) => objectPath.set(environmentConfigVars, k, v));
  // Merge config files
  const config = _.merge(await defaultConfig.default, environmentConfigVars);

  // Generate both CJS (for vite.config.js compatibility) and ESM (for browser imports)
  const configJSON = JSON.stringify(config, undefined, 2)
    .replace(/"([^(")"]+)":/g, '$1:')
    .replace(/\n|\r/g, ',\n')
    .replace(/{,/g, '{')
    .replace(/\[,/g, '[')
    .replace(/,,/g, ',');

  // Generate CJS version for Node.js (vite.config.js)
  const cjsConfigFile = `/**
 * don't edit this file /!\\
 * it' a generated one
 * edit in defaults/*, cf readme
 */
/* eslint-disable */
module.exports = ${configJSON};
`;

  // Generate ESM version for browser imports
  const esmConfigFile = `/**
 * don't edit this file /!\\
 * it' a generated one
 * edit in defaults/*, cf readme
 */
/* eslint-disable */
export default ${configJSON};
`;

  // Write both files
  fs.writeFileSync('./src/config/index.cjs', cjsConfigFile);
  fs.writeFileSync('./src/config/index.js', esmConfigFile);

  console.log('+ Configuration files generated: index.cjs and index.js');
};

getConfiguration();
