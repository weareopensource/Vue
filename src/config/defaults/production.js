import _ from 'lodash';
import defaultConfig from './development.js';

export default _.merge(defaultConfig, {
  app: {
    title: 'WAOS',
    status: 'Prod',
  },
});
