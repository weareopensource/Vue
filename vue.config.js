import config from './src/config/index.cjs';

export default {
  runtimeCompiler: true,
  devServer: {
    port: config.port,
    // proxy: 'http://localhost:3000/',
  },
};
