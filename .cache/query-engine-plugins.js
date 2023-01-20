
import * as pluginGatsbyNode0 from "../node_modules/gatsby-plugin-image/gatsby-node"
import * as pluginGatsbyNode1 from "../node_modules/gatsby-source-filesystem/gatsby-node"
import * as pluginGatsbyNode2 from "../node_modules/gatsby-transformer-sharp/gatsby-node"
import * as pluginGatsbyNode3 from "../node_modules/gatsby-plugin-sharp/gatsby-node"
import * as pluginGatsbyNode4 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyWorker0 from "../node_modules/gatsby-plugin-sharp/gatsby-worker"

export const gatsbyNodes = {
"gatsby-plugin-image": pluginGatsbyNode0,
"gatsby-source-filesystem": pluginGatsbyNode1,
"gatsby-transformer-sharp": pluginGatsbyNode2,
"gatsby-plugin-sharp": pluginGatsbyNode3,
"gatsby-plugin-page-creator": pluginGatsbyNode4,
}

export const gatsbyWorkers = {
"gatsby-plugin-sharp": pluginGatsbyWorker0,
}

export const flattenedPlugins =
  [
  {
    "resolve": "",
    "id": "a9f9c4c1-d74b-569b-a6ec-6093f5d12592",
    "name": "gatsby-plugin-image",
    "version": "3.3.2",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "createSchemaCustomization",
      "onCreateBabelConfig",
      "onCreateWebpackConfig",
      "preprocessSource"
    ],
    "browserAPIs": [],
    "ssrAPIs": [
      "onRenderBody"
    ],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "8a780ae2-4e60-5e53-9a52-2a11dd3525e2",
    "name": "gatsby-source-filesystem",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "name": "images",
      "path": "/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/src/images"
    },
    "nodeAPIs": [
      "onPreInit",
      "pluginOptionsSchema",
      "sourceNodes",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "822bdf7b-a95a-5885-9351-158705910ac3",
    "name": "gatsby-transformer-sharp",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "onPreInit",
      "onCreateNode",
      "shouldOnCreateNode",
      "createSchemaCustomization",
      "createResolvers"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "9e618b1c-a2d0-52b1-86ab-f91016f37381",
    "name": "gatsby-plugin-sharp",
    "version": "5.3.2",
    "pluginOptions": {
      "plugins": [],
      "base64Width": 20,
      "stripMetadata": true,
      "defaultQuality": 50,
      "failOnError": true,
      "failOn": "warning"
    },
    "nodeAPIs": [
      "onCreateDevServer",
      "onPostBootstrap",
      "onPluginInit",
      "onPreBootstrap",
      "pluginOptionsSchema"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "ac1c2ca9-0a9d-591d-a793-5fe0183108a9",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/node_modules/gatsby/dist/internal-plugins/dev-404-page/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "ae234ca0-f6a3-5b88-b80c-0d3f1752903f",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/node_modules/gatsby/dist/internal-plugins/load-babel-config/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "36073aad-b92d-5182-9ba5-744357e331e3",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/node_modules/gatsby/dist/internal-plugins/internal-data-bridge/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "019b5e21-e7fe-5e8d-b5ed-aee05b6abf39",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/node_modules/gatsby/dist/internal-plugins/prod-404-500/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "3127a9d0-0d81-59e6-b8e5-b95f2581d3db",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "8d4bdfaf-ebdf-5207-8134-fe260e331e17",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "e9dd22af-a95a-55b4-9362-a37fc31aa1c0",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/node_modules/gatsby/dist/internal-plugins/functions/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "21e2e8a4-902f-52d0-9d01-706bb6f791f6",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/node_modules/gatsby-plugin-image/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "db9e25e5-3685-51b3-9e0f-90a9e0e855b5",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/node_modules/gatsby-source-filesystem/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "9b9942d4-35c4-527e-9ae6-0ecd73252d16",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/node_modules/gatsby-transformer-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "9d7856ab-6bf4-5eaa-8c09-ff41becb569a",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/node_modules/gatsby-plugin-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "0b817d89-ed7e-541e-bc0c-55a6d56634e6",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/node_modules/gatsby-plugin-manifest/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "fd3835ff-229b-5102-badf-6d390310aa04",
    "name": "gatsby-plugin-page-creator",
    "version": "5.3.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/alexornwara/Documents/WebAppDev/stock-mgnt-gatsby/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  }
]
