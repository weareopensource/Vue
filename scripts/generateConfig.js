/* eslint-disable */

import fs from 'fs';
import _ from 'lodash';
import objectPath from 'object-path';
import path from 'path';
import chalk from 'chalk';

// Get the current config
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development';
const _path = path.join(process.cwd(), './src/config', 'defaults', `${process.env.NODE_ENV}.cjs`);

console.log('path', _path);

let defaultConfig;
if (fs.existsSync(`${_path}`)) {
  defaultConfig = await import(_path);
  console.log(chalk.green(`+ Configuration based on : "${process.env.NODE_ENV}"`));
} else {
  console.error(chalk.red(`+ Error: No configuration file found for "${process.env.NODE_ENV}" environment using development instead`));
  defaultConfig = await import(path.join(process.cwd(), './src/config', 'defaults', 'development.cjs'));
}

// Get the config from  process.env.WAOS_NODE_*
const environmentVars = _.mapKeys(
  _.pickBy(process.env, (_value, key) => key.startsWith('WAOS_VUE_')),
  (_v, k) => k.split('_').slice(2).join('.'),
);
const environmentConfigVars = {};
_.forEach(environmentVars, (v, k) => objectPath.set(environmentConfigVars, k, v));
// Merge config files
const config = _.merge(defaultConfig.default, environmentConfigVars);
// generate config
fs.open('./src/config/index.cjs', 'w', (err, fd) => {
  if (err) {
    throw err;
  }
  // const envConfigFile = `\/\/ don't edit this file /!\\ \n\/\/ it' a generated one \n\/\/ edit in defaults *, see Readme \nmodule.exports = ${config};`;
  const envConfigFile = `/**
 * don't edit this file /!\\
 * it' a generated one
 * edit in defaults/*, cf readme
 */
/* eslint-disable */
module.exports = ${JSON.stringify(config, undefined, 2)
    .replace(/"([^(")"]+)":/g, '$1:')
    .replace(/"/g, "'")
    .replace(/\n|\r/g, ',\n')
    .replace(/{,/g, '{')
    .replace(/\[,/g, '[')
    .replace(/,,/g, ',')};
`;
  fs.writeSync(fd, envConfigFile);
});
