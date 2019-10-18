const config = require('./src/config');

module.exports = {
  devServer: {
    port: config.port,
    // proxy: 'http://localhost:3000/',
  },
};
