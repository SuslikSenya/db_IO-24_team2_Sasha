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
    "revision": "3c3ba10081fe6404483a01b60c71f203"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "516b9da26e7004ca4407227a239a712e"
  },
  {
    "url": "assets/css/0.styles.ce82693d.css",
    "revision": "57d20933b3874a66b2708ec1f00a0833"
  },
  {
    "url": "assets/img/Database_connecting.0c5c6f1c.png",
    "revision": "0c5c6f1ca817539164f71f54a0bd2a8f"
  },
  {
    "url": "assets/img/DeletePost.4ce3aad0.png",
    "revision": "4ce3aad09624ed776c15e1b80bd13718"
  },
  {
    "url": "assets/img/Endpoints_Users.a493cc1e.png",
    "revision": "a493cc1e84a4610986b88e899f3c6fb9"
  },
  {
    "url": "assets/img/Endpoints.c8effa42.png",
    "revision": "c8effa42ab97bf0ec693701a784ec512"
  },
  {
    "url": "assets/img/FirstPost.855cb7b0.png",
    "revision": "855cb7b0c225bd7572578cbab3cfcf8e"
  },
  {
    "url": "assets/img/GetPost.55fd2ca7.png",
    "revision": "55fd2ca71caf86bbc4bc318a727c0635"
  },
  {
    "url": "assets/img/relation_scheme.94590443.png",
    "revision": "9459044361aadcdd25fe8aa59afec3ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Start_Server.5af69e2b.png",
    "revision": "5af69e2bbf094b52fb97735e81edae6c"
  },
  {
    "url": "assets/img/title_1.f74ec1ea.png",
    "revision": "f74ec1ea6b2276cae83758722b593b43"
  },
  {
    "url": "assets/img/Update_Post.bbe09d4d.png",
    "revision": "bbe09d4d64c44ed9c3f78c4f0f12d807"
  },
  {
    "url": "assets/js/10.3486928d.js",
    "revision": "e249ae60d5e28c11cb1c5dba7764ee7d"
  },
  {
    "url": "assets/js/11.4d5677f5.js",
    "revision": "b7f535f38db8dbbaf93696ce282959b7"
  },
  {
    "url": "assets/js/12.fe39fc48.js",
    "revision": "65bbc134c67a83aa434a5971b949b03f"
  },
  {
    "url": "assets/js/13.1774ece6.js",
    "revision": "eaf80ed21be5c97c5e54a62ecc307449"
  },
  {
    "url": "assets/js/14.3c9a1a20.js",
    "revision": "aafe6b3f342dce116fd6ca2853988bd1"
  },
  {
    "url": "assets/js/15.bb3b1c21.js",
    "revision": "c9ffaa61b8d5f7b0bebc04c72183c5a3"
  },
  {
    "url": "assets/js/16.bbeaa02e.js",
    "revision": "2e6ac655e16046bd0b5adb8ef317dbaf"
  },
  {
    "url": "assets/js/17.ef5d4ba9.js",
    "revision": "7053d59b8ec073ac42d46459005c6fa1"
  },
  {
    "url": "assets/js/18.1ecb85f5.js",
    "revision": "dc37f54399180aa22a3c8f2d9c1fb166"
  },
  {
    "url": "assets/js/19.9f708c13.js",
    "revision": "486b3cc0b2a5a8ec54f4eb881f9c25ac"
  },
  {
    "url": "assets/js/2.5ee659ec.js",
    "revision": "34d33f2dd73983bbfa074236a61708eb"
  },
  {
    "url": "assets/js/20.b59f98cc.js",
    "revision": "d8ded989633b431718144a6571baca06"
  },
  {
    "url": "assets/js/21.a7b43430.js",
    "revision": "6d9cbc17d087b43cff544d2c0f38a488"
  },
  {
    "url": "assets/js/22.82cc449b.js",
    "revision": "89b6e789a3c3bf85069ad8d7a47590c5"
  },
  {
    "url": "assets/js/24.e3ec3467.js",
    "revision": "b42b6ea9f00d7b0c05fa75b6338961f1"
  },
  {
    "url": "assets/js/3.97cb8913.js",
    "revision": "9772e8f07fc45adf70ac7ddb66b9bcc1"
  },
  {
    "url": "assets/js/4.a9c9d19b.js",
    "revision": "a70d36f7e6d561403cf5bf74408ceb5a"
  },
  {
    "url": "assets/js/5.3bd163c8.js",
    "revision": "6d82c535d3855b481baa112c0eeab35c"
  },
  {
    "url": "assets/js/6.5da5481a.js",
    "revision": "468ace7436d466f264071ee02ba05d01"
  },
  {
    "url": "assets/js/7.9fbc1a5e.js",
    "revision": "deb62e3887caa1138fdf2087d5185f64"
  },
  {
    "url": "assets/js/8.2a3c098b.js",
    "revision": "772037e63387f9601863e230fad28db5"
  },
  {
    "url": "assets/js/9.b7641df8.js",
    "revision": "e6b7802eb2f7d7c8abab04cf4e047a83"
  },
  {
    "url": "assets/js/app.2be05072.js",
    "revision": "5e9567ca83a79679084bb274bff757f5"
  },
  {
    "url": "conclusion/index.html",
    "revision": "97e817f5fbc6836be88147b0df9ceccf"
  },
  {
    "url": "design/index.html",
    "revision": "bba13991f87482477bca3e44fcd0a7a8"
  },
  {
    "url": "index.html",
    "revision": "101911feeb3bdb36d97a5acc7ef0b092"
  },
  {
    "url": "intro/index.html",
    "revision": "2ec329fa6db57aa345ebde772eea84c9"
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
    "revision": "5dfededeb8e95df5f1ebfe06df82d3c7"
  },
  {
    "url": "software/index.html",
    "revision": "2e9aba9f6cac47efff0dfd4c27c08e85"
  },
  {
    "url": "test/index.html",
    "revision": "e3ad7d219e016abf09532ae61f4eae0b"
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
