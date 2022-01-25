module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        webpackImporter: false,
        sassOptions: {
          includePaths: ['node_modules'],
        },
      }
    }
  },
  pwa: { name: "AjiVocabuary", themeColor: "#ffffff" }
};