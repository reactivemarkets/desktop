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
    "revision": "a9bcfb31b29aa716ddaabbf3c92c328b"
  },
  {
    "url": "assets/css/0.styles.4a9311fe.css",
    "revision": "0ac538e54acc8d0e73af76b46c0b068c"
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
    "url": "assets/js/15.0e7c210a.js",
    "revision": "c63487b0b4c5cab6adfa7c144491f347"
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
    "url": "assets/js/22.8435c6a1.js",
    "revision": "ffc355e8f414de61d9ce8869b2d1328a"
  },
  {
    "url": "assets/js/23.3a13da42.js",
    "revision": "163ac2cfdcf878f8e7ed370de3780d79"
  },
  {
    "url": "assets/js/24.d6dcbb4e.js",
    "revision": "b01b454eaf8c88d99865389afc0bcfbe"
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
    "url": "assets/js/app.a615624e.js",
    "revision": "7fa9456bbe1e82b644a71906ea73fc6e"
  },
  {
    "url": "cli/clear/index.html",
    "revision": "2074ff3a707f935393873139eac2ea4d"
  },
  {
    "url": "cli/describe/index.html",
    "revision": "b880c0fe188deabfeb8adb88a006fe82"
  },
  {
    "url": "cli/devtools/index.html",
    "revision": "5a4849de68b7d24cafd5e3490125abe0"
  },
  {
    "url": "cli/hide/index.html",
    "revision": "a82a2aeda24f4bf580f0b3b0d3a235fe"
  },
  {
    "url": "cli/index.html",
    "revision": "6e8bd99bb5677f6f1e308746a872332b"
  },
  {
    "url": "cli/info/index.html",
    "revision": "b04b5cdc78d61c5a894fd526de2290b2"
  },
  {
    "url": "cli/init/index.html",
    "revision": "ccab5db70fa2d919dbf85f4f3538a158"
  },
  {
    "url": "cli/kill/index.html",
    "revision": "d15d48ae4ddc232401e313dad686b661"
  },
  {
    "url": "cli/logs/index.html",
    "revision": "1abacabf1545b4a33d11855f882220cf"
  },
  {
    "url": "cli/ps/index.html",
    "revision": "580b3b3473b648132571131713bd4b70"
  },
  {
    "url": "cli/restart/index.html",
    "revision": "00f62865adac95cdd0eebc27edb35c75"
  },
  {
    "url": "cli/show/index.html",
    "revision": "b37451f0e3083e2e04c84273a75893b8"
  },
  {
    "url": "cli/shutdown/index.html",
    "revision": "6f7d46a944845336204d0f63543b3af9"
  },
  {
    "url": "cli/start/index.html",
    "revision": "37a5d94a289348b2273e6da91f249286"
  },
  {
    "url": "cli/stop/index.html",
    "revision": "68ef1cb36407350b5cf067a1600c922a"
  },
  {
    "url": "cli/version/index.html",
    "revision": "d91c45b07089c365db8fac8fc024d60c"
  },
  {
    "url": "config/application/index.html",
    "revision": "1cea20b5cae2e0c666da2995a407145b"
  },
  {
    "url": "config/applicationSecurityPolicy/index.html",
    "revision": "8e073e1fa7bdad462e12dd70364b82a8"
  },
  {
    "url": "config/external/index.html",
    "revision": "3fea4fc7056704f9cff6290120149a97"
  },
  {
    "url": "config/externalSecurityPolicy/index.html",
    "revision": "ee119c09698a04306502bb773044dd72"
  },
  {
    "url": "config/index.html",
    "revision": "5550871ebffb178cbcd99e5f9aae9873"
  },
  {
    "url": "config/metadata/index.html",
    "revision": "e9fbd93ef24561007f68c90aa2f7b1d6"
  },
  {
    "url": "config/service/index.html",
    "revision": "ccbb207e62e1c58c80ac8033a913db09"
  },
  {
    "url": "config/serviceSecurityPolicy/index.html",
    "revision": "f9cfb4259a56b979e54870ca369756f4"
  },
  {
    "url": "config/session/index.html",
    "revision": "943d5aa517f170e6a898070eabac199a"
  },
  {
    "url": "config/storage/index.html",
    "revision": "19379a5896f4899e8973f8229cffe334"
  },
  {
    "url": "config/tray/index.html",
    "revision": "9900ab12b7f45a7d84c933bfb239d6ab"
  },
  {
    "url": "config/updatePolicy/index.html",
    "revision": "fcce32a287f0c976c14aa91b8b5f5432"
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
    "revision": "0f352c775c6cf7d0a11b67a9b4ef4da3"
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
    "revision": "8f0fab90ca0a181d15d018ecce46d69b"
  },
  {
    "url": "sdk/desktop/index.html",
    "revision": "e75792cb81530b2066163f273a1d19cb"
  },
  {
    "url": "sdk/globalshortcut/index.html",
    "revision": "bb28b71a3254884dde3422fba4ad267b"
  },
  {
    "url": "sdk/index.html",
    "revision": "8c0f88f8d5f5355773a2cad42f6b5e82"
  },
  {
    "url": "sdk/launcher/index.html",
    "revision": "4d3c7d16099ebec2ae4cdb664d8bfa23"
  },
  {
    "url": "sdk/logger/index.html",
    "revision": "e97458e6e4fa1859d6036f6552f90cc3"
  },
  {
    "url": "sdk/registry/index.html",
    "revision": "8c0c56bcb76bfed62994058c18ecc33d"
  },
  {
    "url": "sdk/router/index.html",
    "revision": "a0c4be913452e259f367ea127aaf024a"
  },
  {
    "url": "sdk/screen/index.html",
    "revision": "023b8093185beed27fd57992712fc274"
  },
  {
    "url": "sdk/window/index.html",
    "revision": "f69104996e619ae5c678784f7c33fe22"
  },
  {
    "url": "support/index.html",
    "revision": "e46e87cd9cad93a453442401c4ada32c"
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
