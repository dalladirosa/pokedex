if(!self.define){let e,n={};const a=(a,s)=>(a=new URL(a+".js",s).href,n[a]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=n,document.head.appendChild(e)}else e=a,importScripts(a),n()})).then((()=>{let e=n[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let o={};const t=e=>a(e,c),r={module:{uri:c},exports:o,require:t};n[c]=Promise.all(s.map((e=>r[e]||t(e)))).then((e=>(i(...e),o)))}}define(["./workbox-82fa6c53"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/54-8382c0bf2ca33982.js",revision:"8382c0bf2ca33982"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-743f8aff90ea8642.js",revision:"743f8aff90ea8642"},{url:"/_next/static/chunks/pages/_app-8c229c4d0c4aac8e.js",revision:"8c229c4d0c4aac8e"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/compare-af1dec1c34e34d19.js",revision:"af1dec1c34e34d19"},{url:"/_next/static/chunks/pages/index-e38652af904ada06.js",revision:"e38652af904ada06"},{url:"/_next/static/chunks/pages/pokemon/%5Bname%5D-aa6c0d4e548eded5.js",revision:"aa6c0d4e548eded5"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b8f8d6679aaa5f42.js",revision:"b8f8d6679aaa5f42"},{url:"/_next/static/css/d6d0609431d767df.css",revision:"d6d0609431d767df"},{url:"/_next/static/tbCfVFm2WCig7w8C8dqfM/_buildManifest.js",revision:"5e1bd7c93ba84230f84eed2e5794b32e"},{url:"/_next/static/tbCfVFm2WCig7w8C8dqfM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/favicons/android-icon-144x144.png",revision:"14fc4d9499212d61750f0ae20299d904"},{url:"/favicons/android-icon-192x192.png",revision:"8e96341f25895bdc0d99516787002b40"},{url:"/favicons/android-icon-36x36.png",revision:"391dbf32594c04f37d3f7bec840760d8"},{url:"/favicons/android-icon-48x48.png",revision:"3dc8d8e44cbfdcbf38b195aa3cdb4280"},{url:"/favicons/android-icon-72x72.png",revision:"9303467ace1101b60508b1c5e33a96a6"},{url:"/favicons/android-icon-96x96.png",revision:"58ceb61070b3c019704be586641a29af"},{url:"/favicons/apple-icon-114x114.png",revision:"b661f9a4a30e4ddabc70620d17d30214"},{url:"/favicons/apple-icon-120x120.png",revision:"23f06468ad8f1a8001f7da2b38baed64"},{url:"/favicons/apple-icon-144x144.png",revision:"14fc4d9499212d61750f0ae20299d904"},{url:"/favicons/apple-icon-152x152.png",revision:"ad37d99ad9fdf4cd973be5f4f07ad9d9"},{url:"/favicons/apple-icon-180x180.png",revision:"2438aaafb1f873bc238e6902273095c4"},{url:"/favicons/apple-icon-57x57.png",revision:"deb02af1b7e58ffbfce18e6ad688f62d"},{url:"/favicons/apple-icon-60x60.png",revision:"31ecf7b1c34387785a9bb6e6a2570bb5"},{url:"/favicons/apple-icon-72x72.png",revision:"9303467ace1101b60508b1c5e33a96a6"},{url:"/favicons/apple-icon-76x76.png",revision:"98ec753af16f21ab08d3eb4747bb646c"},{url:"/favicons/apple-icon-precomposed.png",revision:"62b1d162aa3cf0b6c2bee022ff3c5cdf"},{url:"/favicons/apple-icon.png",revision:"62b1d162aa3cf0b6c2bee022ff3c5cdf"},{url:"/favicons/favicon-16x16.png",revision:"d0ef4999f8622a31384a38278545fd53"},{url:"/favicons/favicon-32x32.png",revision:"02a7ae8d5ae09ed9c93a68849e1b3390"},{url:"/favicons/favicon-96x96.png",revision:"58ceb61070b3c019704be586641a29af"},{url:"/favicons/ms-icon-144x144.png",revision:"14fc4d9499212d61750f0ae20299d904"},{url:"/favicons/ms-icon-150x150.png",revision:"3abaef449cf8ae85f954d19cbb96f80f"},{url:"/favicons/ms-icon-310x310.png",revision:"d6d27f77168aec4d1900faf5d1b45974"},{url:"/favicons/ms-icon-70x70.png",revision:"7a6547036fca19c26c26b9830ad1f5d2"},{url:"/manifest.json",revision:"78479e2c2928122f2dde92b64ae213a3"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:a,state:s})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.CacheFirst({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.CacheFirst({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.CacheFirst({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/https:\/\/beta.pokeapi.co\/graphql\/.*/,new e.NetworkFirst({cacheName:"pokemon-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:300}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute((({url:e})=>{const{pathname:n}=e;return n.startsWith("/api/pokemon")}),new e.CacheFirst({cacheName:"pokemon-api",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:604800})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const{pathname:n}=e;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const{pathname:n}=e;return!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:3600})]}),"GET")}));
