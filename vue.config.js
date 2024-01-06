process.env.VUE_CLI_TEST = false

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false
};
