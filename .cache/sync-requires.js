
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/src/pages/about.js")),
  "component---src-pages-coffee-js": preferDefault(require("/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/src/pages/coffee.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/src/pages/index.js")),
  "component---src-pages-page-1-js": preferDefault(require("/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/src/pages/page1.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/src/pages/page-2.js")),
  "component---src-pages-pos-index-js": preferDefault(require("/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/src/pages/pos/index.js")),
  "component---src-pages-pos-wine-pos-js": preferDefault(require("/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/src/pages/pos/wine-pos.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/src/pages/using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/src/pages/using-typescript.tsx")),
  "component---src-pages-wine-js": preferDefault(require("/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/src/pages/wine.js")),
  "component---src-templates-using-dsg-js": preferDefault(require("/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/src/templates/using-dsg.js"))
}

