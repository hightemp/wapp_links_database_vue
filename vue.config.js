const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "./",
  outputDir: "docs",
  transpileDependencies: true,
  lintOnSave: false,
  pwa: {
    // iconPaths: {
    //   favicon32: 'img/icons/favicon-32x32.png',
    //   favicon16: 'img/icons/favicon-16x16.png',
    //   appleTouchIcon: 'img/icons/apple-touch-icon.png',
    //   msTileImage: 'img/icons/msapplication-icon-144x144.png'
    // },
    manifestOptions: {
      "share_target": {
        "action": "index.html",
        "params": {
          "title": "title",
          "text": "text",
          "url": "url"
        }
      }
    }
  }
})
