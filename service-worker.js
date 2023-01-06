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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "7f90c44922e89f2e13b2564d6b31af8e"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.f236643c.css",
    "revision": "d2c7496d3342592b98e4c0487cc57fb0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.12bee4e3.js",
    "revision": "bdbe87be0392974ea413a9848c8d47f2"
  },
  {
    "url": "assets/js/11.7d903cd2.js",
    "revision": "c0a2af32e4c6630e099fca38d7ee0a76"
  },
  {
    "url": "assets/js/12.d2d33c12.js",
    "revision": "df76f50098ceddc254ca1926b9c0a077"
  },
  {
    "url": "assets/js/13.7a49c899.js",
    "revision": "3f3e2341ad64ffa6c7ed2d715480de6e"
  },
  {
    "url": "assets/js/14.1f335776.js",
    "revision": "15c0ab3388cccfc8c9ae646852aa62d3"
  },
  {
    "url": "assets/js/15.876ff827.js",
    "revision": "ff1810895f222659f703654b792d7ca8"
  },
  {
    "url": "assets/js/16.4f6328d0.js",
    "revision": "a2b6805cd31964bbe238c099468d1c57"
  },
  {
    "url": "assets/js/17.34761b43.js",
    "revision": "05741df8b90025b2a2a3e85a9ae096b1"
  },
  {
    "url": "assets/js/18.232f6d59.js",
    "revision": "25a0e56689c73e39e37ff866afefcd84"
  },
  {
    "url": "assets/js/19.1b258a52.js",
    "revision": "9b02248427dbb7f0000808bcd9609ba4"
  },
  {
    "url": "assets/js/2.f66e91b7.js",
    "revision": "f1fbaf26930c8e3df5229468da645732"
  },
  {
    "url": "assets/js/20.5679ac9b.js",
    "revision": "e6d872b10bcbe67883f4f4516eb62a07"
  },
  {
    "url": "assets/js/21.e44e377f.js",
    "revision": "3ffebb074b871d45ee564f40fc081922"
  },
  {
    "url": "assets/js/22.30c3bfa6.js",
    "revision": "3e982574a8c443e7f589cfcf58a48e43"
  },
  {
    "url": "assets/js/23.2af6a73d.js",
    "revision": "505316b5e0e0f117cdff635145e5eed4"
  },
  {
    "url": "assets/js/24.dcbb7a7a.js",
    "revision": "84a3bd21911cc36c536e548d4ffa402e"
  },
  {
    "url": "assets/js/26.6a6a3cbe.js",
    "revision": "ebdc7172390b026dbb6207613865d827"
  },
  {
    "url": "assets/js/3.0812e691.js",
    "revision": "df2b2f1a4237e12fbb83154d670636dd"
  },
  {
    "url": "assets/js/4.446e76e1.js",
    "revision": "539e7d368852976190d889658b92dc8f"
  },
  {
    "url": "assets/js/5.a29fd4f3.js",
    "revision": "3e3a81749b9af80aa28b971b6979fa32"
  },
  {
    "url": "assets/js/6.1ac9775b.js",
    "revision": "b2b88a5e641683dabda5924051d99a1a"
  },
  {
    "url": "assets/js/7.5c85de2e.js",
    "revision": "a895a831faa574d80524940878a03c4a"
  },
  {
    "url": "assets/js/8.eb8fe209.js",
    "revision": "8a9c1d44e37d89f9f5ac8a77b3402bfa"
  },
  {
    "url": "assets/js/9.82d705a7.js",
    "revision": "80caeb61a4a1a6761696fa75783ff18e"
  },
  {
    "url": "assets/js/app.9a1c00d4.js",
    "revision": "a6fa0a0aec86889e8fcbacb61f25bf85"
  },
  {
    "url": "conclusion/index.html",
    "revision": "6167026954aef3b25558565a841643d1"
  },
  {
    "url": "design/index.html",
    "revision": "c853b45c5d1f1f08ec4543cb8b4f535b"
  },
  {
    "url": "index.html",
    "revision": "a29acc18c5a604f925c2f8fae9fb48d9"
  },
  {
    "url": "intro/index.html",
    "revision": "f1938125e0a5ee72f0cbfa21917383a9"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f156e8d0f66e3f62415ae24781a8d559"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "5806b6e6969fb684ad5935348465edbd"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "1c7c3b4f1326723dd2a16d8b41fdd2f6"
  },
  {
    "url": "software/index.html",
    "revision": "d0e9c54433156e97197c8c37e8e63d75"
  },
  {
    "url": "test/index.html",
    "revision": "abca739d3296b9e5678c70a0def26234"
  },
  {
    "url": "use cases/index.html",
    "revision": "f6d39b90c271a1db8c0f9630f469564d"
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
