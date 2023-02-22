const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "./",
  outputDir: "docs",
  transpileDependencies: true,
  lintOnSave: false,
  pwa: {
    // iconPaths: {
    //   faviconSVG: 'img/icons/favicon.svg',
    //   favicon32: 'img/icons/favicon-32x32.png',
    //   favicon16: 'img/icons/favicon-16x16.png',
    //   appleTouchIcon: 'img/icons/apple-touch-icon.png',
    //   maskIcon: 'img/icons/safari-pinned-tab.svg',
    //   msTileImage: 'img/icons/msapplication-icon-144x144.png'
    // },
    iconPaths: {
      maskicon: null,
      favicon32: "./img/icons/favicon-32x32.png",
      favicon16: "./img/icons/favicon-16x16.png",
      appleTouchIcon: "./img/icons/apple-touch-icon.png",
      msTileImage: "./img/icons/msapplication-icon-144x144.png",
    },
    manifestOptions: {
      "share_target": {
        "action": "index.html",
        "params": {
          "title": "title",
          "text": "text",
          "url": "url"
        }
      },
      icons: [
        {
          src: "./favicon.ico",
          sizes: "256x256",
          type: "image/ico",
          purpose: "any maskable",
        },
      ],      
    }
  }
})
