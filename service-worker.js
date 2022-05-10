/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a90ce3a8159dda86c992919dc034150e"
  },
  {
    "url": "assets/css/0.styles.beb15823.css",
    "revision": "bec6f531c14a04b0190b09162f4ec835"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fc345f48.js",
    "revision": "329a1c0bbce18b9215402b7c12fdb1c7"
  },
  {
    "url": "assets/js/11.b1eb3efe.js",
    "revision": "aff987386c6e6e8be2af36b8f05b94d6"
  },
  {
    "url": "assets/js/12.1c03dc5b.js",
    "revision": "c9f1d0f1e8a26edfb1b24be6f0095a6b"
  },
  {
    "url": "assets/js/13.a5b026c4.js",
    "revision": "84e6f9b8bb8341e5560ecaeda39076ea"
  },
  {
    "url": "assets/js/14.4882253c.js",
    "revision": "9429be50336ef3d3aae3be77b43a67e5"
  },
  {
    "url": "assets/js/15.b1be2d4b.js",
    "revision": "8a6c717624a7117ef295a505af2a0fed"
  },
  {
    "url": "assets/js/16.13b19297.js",
    "revision": "3d040f898b525de706d0a68cf8133e86"
  },
  {
    "url": "assets/js/17.96fd03b8.js",
    "revision": "166ce0b54e9058877dc0ce1a4ce4e61c"
  },
  {
    "url": "assets/js/18.3e7d1193.js",
    "revision": "333a20ecd24fc34272280490e0ea46d7"
  },
  {
    "url": "assets/js/19.e351393c.js",
    "revision": "b418ca729eaae479501665ae9bb939b2"
  },
  {
    "url": "assets/js/2.12a03c4e.js",
    "revision": "ceb9fa3cee7072f793d199fddaaa6b24"
  },
  {
    "url": "assets/js/20.19819121.js",
    "revision": "fe455388f5c3ad006862df765cb8cd6a"
  },
  {
    "url": "assets/js/21.448bf79a.js",
    "revision": "4d6f81838a4988679e185ee28f205571"
  },
  {
    "url": "assets/js/22.cec2c829.js",
    "revision": "a73446f0168eda9a3f769cac9758278f"
  },
  {
    "url": "assets/js/23.388e615b.js",
    "revision": "14041d2102584e32cc4008c0e2fc85d0"
  },
  {
    "url": "assets/js/24.ceb0e22a.js",
    "revision": "203b113b6d9558beff6269ea0b21b33e"
  },
  {
    "url": "assets/js/25.01f445e2.js",
    "revision": "c3314c59850d86949cf0683093793e55"
  },
  {
    "url": "assets/js/26.d2246ac6.js",
    "revision": "49fe2cb2596cd48acf7fff9665ee90a1"
  },
  {
    "url": "assets/js/27.1880a850.js",
    "revision": "d91b623fe658034fb34a91a738f998c2"
  },
  {
    "url": "assets/js/28.79343574.js",
    "revision": "95f3a7846069a661dd7dca727a480b70"
  },
  {
    "url": "assets/js/29.37cf5295.js",
    "revision": "b75d70cf180f796d58fa8045a29b973d"
  },
  {
    "url": "assets/js/3.d25ec344.js",
    "revision": "d681a277ffdc9ee5121226bad1cf6342"
  },
  {
    "url": "assets/js/30.152aa64b.js",
    "revision": "72cdf64d5f265e29174cc1e09c6ee145"
  },
  {
    "url": "assets/js/31.67dcbdce.js",
    "revision": "ceb024d24c67fba040a2fff8d13d55eb"
  },
  {
    "url": "assets/js/32.17b07ca2.js",
    "revision": "f1840770a458929bb8a6aaaf46b3e0aa"
  },
  {
    "url": "assets/js/33.e8113733.js",
    "revision": "5d9f9125b3fc031e77054bb3defbe4ae"
  },
  {
    "url": "assets/js/34.86f42dc3.js",
    "revision": "307115daa52cea8b7bf61322db33f798"
  },
  {
    "url": "assets/js/35.081ec756.js",
    "revision": "96468d87ba174bd5993a26cd1ac755fb"
  },
  {
    "url": "assets/js/36.f1419481.js",
    "revision": "6c621fa92750e726586c265ee45f12f8"
  },
  {
    "url": "assets/js/37.1d056e6a.js",
    "revision": "a247c0bd7855247f936356dc8a4c4c27"
  },
  {
    "url": "assets/js/38.ec662a63.js",
    "revision": "b6bc679e6054f4cef68226371ff2b283"
  },
  {
    "url": "assets/js/39.6ab149d3.js",
    "revision": "058d67c9e810cf6174b75c9fa659a6d0"
  },
  {
    "url": "assets/js/4.a95cd250.js",
    "revision": "b3d95744250d69dfa85484c6251fbd64"
  },
  {
    "url": "assets/js/40.e7b5cfa4.js",
    "revision": "503212b2b544749c6e0bdcc71e40073f"
  },
  {
    "url": "assets/js/41.3619074c.js",
    "revision": "0aee07c91625b884692c0428193038af"
  },
  {
    "url": "assets/js/42.708577d3.js",
    "revision": "344d94a9cae4f116998ca3529ebe182d"
  },
  {
    "url": "assets/js/43.48c71501.js",
    "revision": "2f3e0bac885022936515f42c35bc5d23"
  },
  {
    "url": "assets/js/44.544c0f6b.js",
    "revision": "cc80fd395abd439e66f43791a0d4e663"
  },
  {
    "url": "assets/js/45.726647fc.js",
    "revision": "9866d811c4c170f5d1b0cf3ca17c42ea"
  },
  {
    "url": "assets/js/46.5cc52012.js",
    "revision": "15515436ed5c07953ec72b7737b015d9"
  },
  {
    "url": "assets/js/47.8112ea32.js",
    "revision": "e38de4777dc4684824b2d40ff026b667"
  },
  {
    "url": "assets/js/48.de151aa5.js",
    "revision": "fd4b913074ff6b657bdc35a008fcf38d"
  },
  {
    "url": "assets/js/5.4fc038fb.js",
    "revision": "8065501530e934e7ad7e87417d2d1209"
  },
  {
    "url": "assets/js/6.28ab6acb.js",
    "revision": "705a2849fa449e729e491d1200fd0fd8"
  },
  {
    "url": "assets/js/7.900c5bc2.js",
    "revision": "2e15f5023a8a83d5f35b55246cc937d8"
  },
  {
    "url": "assets/js/8.86f150a2.js",
    "revision": "c9ad62d072b6d92237c74efc1d01c6d2"
  },
  {
    "url": "assets/js/9.b64ba6b5.js",
    "revision": "7ed44d2cd541e3bf149f9ff9d99e3d56"
  },
  {
    "url": "assets/js/app.68c339e5.js",
    "revision": "5f1f650bc65188b95203f87c60597f2a"
  },
  {
    "url": "cli/clear/index.html",
    "revision": "9a13f1dc825360ae6ed95d422d2254db"
  },
  {
    "url": "cli/describe/index.html",
    "revision": "369f6fb5f6b093a1ff226e16e12c959c"
  },
  {
    "url": "cli/devtools/index.html",
    "revision": "96c00f5ebdfb5a601a3a69b34d300e62"
  },
  {
    "url": "cli/hide/index.html",
    "revision": "27a793f66e9d60572f119c13def31d5f"
  },
  {
    "url": "cli/index.html",
    "revision": "abcd22a0b9a288d2aa3d6fc5075fb2f6"
  },
  {
    "url": "cli/info/index.html",
    "revision": "d94ab02683f7f1591302df76917a9851"
  },
  {
    "url": "cli/init/index.html",
    "revision": "222a0d6eefeb9dfdf90cc18a70b51d33"
  },
  {
    "url": "cli/kill/index.html",
    "revision": "4aaff41cd61119bae5c52fc6beff1ac0"
  },
  {
    "url": "cli/logs/index.html",
    "revision": "101a527087d2d9c75cde772f21acd2f1"
  },
  {
    "url": "cli/ps/index.html",
    "revision": "0fdea318bf864b20086f17016ad3bd2a"
  },
  {
    "url": "cli/restart/index.html",
    "revision": "9c09e7b7d312413554215fc9fae81bcc"
  },
  {
    "url": "cli/show/index.html",
    "revision": "d7a5fb086802967b7c5d845e13a9a445"
  },
  {
    "url": "cli/shutdown/index.html",
    "revision": "619aec718d6b98a89dee1542457d0e97"
  },
  {
    "url": "cli/start/index.html",
    "revision": "4614d3b050c56493181dd5a8a523883b"
  },
  {
    "url": "cli/stop/index.html",
    "revision": "2a8c30df4844399ee36a4b9fa8f2b44a"
  },
  {
    "url": "cli/version/index.html",
    "revision": "a436d864f5a6d3eb92be57bd80afb21a"
  },
  {
    "url": "config/application/index.html",
    "revision": "70e5010a6f172a0423ff7d9f9ffde26c"
  },
  {
    "url": "config/applicationSecurityPolicy/index.html",
    "revision": "58ae700ed19a8f7e51a1698c94abe9f3"
  },
  {
    "url": "config/external/index.html",
    "revision": "43e948410d012ed2950921eb6df4c1a1"
  },
  {
    "url": "config/externalSecurityPolicy/index.html",
    "revision": "4ce4fcb683979cec74b32391b8d15968"
  },
  {
    "url": "config/index.html",
    "revision": "7e8b338d8c51b9d024b522590061da4a"
  },
  {
    "url": "config/metadata/index.html",
    "revision": "0f2ad2f5f0a46194134aab2e88cdd603"
  },
  {
    "url": "config/service/index.html",
    "revision": "e4c308a083aa52e4273e925e486886b8"
  },
  {
    "url": "config/serviceSecurityPolicy/index.html",
    "revision": "634cfe2a94fcc708c0287dcf2c5501d8"
  },
  {
    "url": "config/session/index.html",
    "revision": "9a1bca853224cb77477e96f606dd7f48"
  },
  {
    "url": "config/storage/index.html",
    "revision": "fe3a42b813ee7877e1d5d04707978c43"
  },
  {
    "url": "config/tray/index.html",
    "revision": "f35c4dbcf17b187e00f136f81e67ada4"
  },
  {
    "url": "config/updatePolicy/index.html",
    "revision": "393e72d89833af65e5ceb9467ca38f14"
  },
  {
    "url": "favicon-16.png",
    "revision": "96549c584a8e0fe1736caedac20ba4ce"
  },
  {
    "url": "favicon-32.png",
    "revision": "fd6f990095840d43ddde90a3e06ddd12"
  },
  {
    "url": "guide/index.html",
    "revision": "94a957126f0d398565266b57c2852d74"
  },
  {
    "url": "icon-256.png",
    "revision": "630a99247bd8c4bff944a41035c5f1b5"
  },
  {
    "url": "icon-512.png",
    "revision": "079bf353ee7c2456844800e3ff607e5f"
  },
  {
    "url": "index.html",
    "revision": "cea5fd3e3d85164dc81055ab2877e84c"
  },
  {
    "url": "sdk/desktop/index.html",
    "revision": "43469fcefb87c28f8aab0d38d923092a"
  },
  {
    "url": "sdk/globalshortcut/index.html",
    "revision": "ae97bc17116d1a4080eabd0f93626f6a"
  },
  {
    "url": "sdk/index.html",
    "revision": "a382b5beb748909f5d3cfcae51d2f620"
  },
  {
    "url": "sdk/launcher/index.html",
    "revision": "d6540c56b09ff4d8802bcb9e2a10f36e"
  },
  {
    "url": "sdk/logger/index.html",
    "revision": "68a7cabf70da99c60cf88f781ea7b6ba"
  },
  {
    "url": "sdk/registry/index.html",
    "revision": "b30417d75011e66149d33e955c099436"
  },
  {
    "url": "sdk/router/index.html",
    "revision": "194cc3c0f8bbb4cee56e1ce6da811a02"
  },
  {
    "url": "sdk/screen/index.html",
    "revision": "8641aadfba2b8d1d68ed61c8549a052b"
  },
  {
    "url": "sdk/window/index.html",
    "revision": "33ecef09475c6d71c0bab7655d859f99"
  },
  {
    "url": "support/index.html",
    "revision": "45228701b31c94519fa4710b26a67cb3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
