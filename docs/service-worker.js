if(!self.define){let e,n={};const c=(c,s)=>(c=new URL(c+".js",s).href,n[c]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=n,document.head.appendChild(e)}else e=c,importScripts(c),n()})).then((()=>{let e=n[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(n[a])return;let r={};const o=e=>c(e,a),f={module:{uri:a},exports:r,require:o};n[a]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(i(...e),r)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"wapp_links_database_vue"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"config.xml",revision:"829cf5fc059f46f23c78e205da656b68"},{url:"css/app.a75778db.css",revision:null},{url:"css/chunk-vendors.6657981d.css",revision:null},{url:"favicon.png",revision:"7cfacf6e4eabce30c2b5443570735b3f"},{url:"favicons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"favicons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"favicons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"favicons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"favicons/apple-touch-icon-114x114.png",revision:"635308258e7a8976a5747c233481eb24"},{url:"favicons/apple-touch-icon-120x120.png",revision:"d0be66825efaeb3123f8865a0e0d0dda"},{url:"favicons/apple-touch-icon-144x144.png",revision:"cdf9c834f06a807d7db2ec0fb51c500f"},{url:"favicons/apple-touch-icon-152x152.png",revision:"b4a5f06fedf8bde9079b13d7e03e1d22"},{url:"favicons/apple-touch-icon-57x57.png",revision:"3c2563a8c2646a5534508750c94aaa90"},{url:"favicons/apple-touch-icon-60x60.png",revision:"9abd4ab010ff1a670374483c7e96ca8b"},{url:"favicons/apple-touch-icon-72x72.png",revision:"554b7f12d09f187530c36caeae2a2e25"},{url:"favicons/apple-touch-icon-76x76.png",revision:"79364b0d6bfb2d1194381e3711be8f6d"},{url:"favicons/favicon-128x128.png",revision:"5d44648cbf17c0de29d44cb210b5e8be"},{url:"favicons/favicon-16x16.png",revision:"39a2b342d93fbc5362808aba8a2dec47"},{url:"favicons/favicon-196x196.png",revision:"ae26a9e1746316b481f07517ac7f0fa1"},{url:"favicons/favicon-32x32.png",revision:"53888a158e43de2deb701bc9d4a2c22a"},{url:"favicons/favicon-96x96.png",revision:"b1d59cd5b9f066c14c68d8e901ddeaad"},{url:"favicons/ms-tile-144x144.png",revision:"cdf9c834f06a807d7db2ec0fb51c500f"},{url:"favicons/ms-tile-150x150.png",revision:"9eb8a57d3aef7fcf8240c14518d62182"},{url:"favicons/ms-tile-310x150.png",revision:"644882cc86beb890b3bda06bd3c7f065"},{url:"favicons/ms-tile-310x310.png",revision:"9c6cc39efab534942e2ec8d7e2b602a5"},{url:"favicons/ms-tile-70x70.png",revision:"7ea3da1e468b579318d885852933fb79"},{url:"fonts/bootstrap-icons.35e09da2.woff2",revision:null},{url:"fonts/bootstrap-icons.cb4c7c05.woff",revision:null},{url:"icons/icon-128x128.png",revision:"5d44648cbf17c0de29d44cb210b5e8be"},{url:"icons/icon-144x144.png",revision:"cdf9c834f06a807d7db2ec0fb51c500f"},{url:"icons/icon-152x152.png",revision:"b4a5f06fedf8bde9079b13d7e03e1d22"},{url:"icons/icon-192x192.png",revision:"32e553c214f1fdb2494e0af609b2045f"},{url:"icons/icon-384x384.png",revision:"56961f6b92c065ea0fd1b6d6dfe9554e"},{url:"icons/icon-512x512.png",revision:"2f679a836c20233d2277ff2b09b0db04"},{url:"icons/icon-72x72.png",revision:"554b7f12d09f187530c36caeae2a2e25"},{url:"icons/icon-96x96.png",revision:"b1d59cd5b9f066c14c68d8e901ddeaad"},{url:"index.html",revision:"bd359cf9874527e82e1de37e04f81001"},{url:"js/app.99fbda91.js",revision:null},{url:"js/chunk-vendors.4c525e5f.js",revision:null},{url:"jsstore.worker.js",revision:"d8abc03c0fdb3406b0ae5117d315bb61"},{url:"launch-screens/launch-screen-1125x2436.png",revision:"d21df9227316ea9189d4c40c2493ac3f"},{url:"launch-screens/launch-screen-1136x640.png",revision:"a734f4b72e219c658a238736b387220d"},{url:"launch-screens/launch-screen-1242x2208.png",revision:"4113fd93b0ad0364d2a41e3bdc9e1dd3"},{url:"launch-screens/launch-screen-1242x2688.png",revision:"7c182e99fae046f2e96b03b7d9022fe1"},{url:"launch-screens/launch-screen-1334x750.png",revision:"8d75bac92760a943278e077e33ebbe64"},{url:"launch-screens/launch-screen-1536x2048.png",revision:"51e40b7482d5aed977ed9fd462a3cc50"},{url:"launch-screens/launch-screen-1668x2224.png",revision:"dfb82b3e6bb97c67443d836d12ff1f70"},{url:"launch-screens/launch-screen-1668x2388.png",revision:"98462d1748aa8ca28966f54992b2d04a"},{url:"launch-screens/launch-screen-1792x828.png",revision:"9984d49b942f7f4e68e046492667dda6"},{url:"launch-screens/launch-screen-2048x1536.png",revision:"c678786baec07ab2b326945a4fc92596"},{url:"launch-screens/launch-screen-2048x2732.png",revision:"279bfbbbbe45ef366f99904bc50afed9"},{url:"launch-screens/launch-screen-2208x1242.png",revision:"63f2fa2b8903fdb345bd9fa2729ea2fe"},{url:"launch-screens/launch-screen-2224x1668.png",revision:"bdd0e9fd54a1ceea89f10db9aac500fa"},{url:"launch-screens/launch-screen-2388x1668.png",revision:"77bc6e12d1513c4d459847af103c1c37"},{url:"launch-screens/launch-screen-2436x1125.png",revision:"191b9c2c940669a79deb2151e84aba48"},{url:"launch-screens/launch-screen-2688x1242.png",revision:"6dbd974c4efb5fea3bfca971f13e8ce5"},{url:"launch-screens/launch-screen-2732x2048.png",revision:"270e7a0b19c7a300780f615bee458314"},{url:"launch-screens/launch-screen-640x1136.png",revision:"eb09b4d15736311d23345b56e876ce72"},{url:"launch-screens/launch-screen-750x1334.png",revision:"19cf9bbe770a4eac962bcf4c3c98d935"},{url:"launch-screens/launch-screen-828x1792.png",revision:"237ce6e2176176efed0e568a8bddb971"},{url:"manifest.json",revision:"501f5033d46d75bfa1cd55aee25ab9d0"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"styles.css",revision:"1f3b08f80037eda40bb935e5cdfc1a80"}],{})}));
//# sourceMappingURL=service-worker.js.map
