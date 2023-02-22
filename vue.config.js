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
      favicon32: "./favicons/favicon-32x32.png",
      favicon16: "./favicons/favicon-16x16.png",
      appleTouchIcon: "./favicons/apple-touch-icon-152x152.png",
      msTileImage: "./favicons/ms-tile-144x144.png",
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
        {
          'src': './favicons/android-chrome-192x192.png',
          'sizes': '192x192',
          'type': 'image/png'
        },
        {
          'src': './favicons/android-chrome-512x512.png',
          'sizes': '512x512',
          'type': 'image/png'
        },
        {
          'src': './favicons/android-chrome-maskable-192x192.png',
          'sizes': '192x192',
          'type': 'image/png',
          'purpose': 'maskable'
        },
        {
          'src': './favicons/android-chrome-maskable-512x512.png',
          'sizes': '512x512',
          'type': 'image/png',
          'purpose': 'maskable'
        }
      ],      
    }
  }
})
