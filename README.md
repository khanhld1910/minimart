# minimart

> An electron-vue project

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


# install sqlite on package electron:
1. First, add a postinstall step in your package.json:

"scripts": {
  "postinstall": "install-app-deps"
  ...
}
2. Install the necessary dependencies and build:

`npm install --save-dev electron-builder`
`npm install --save sqlite3`
`npm run postinstall`

electron-builder will build the native module for your platform, with the correct name for the Electron binding; and you can then require it in code as normal.

```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[8fae476](https://github.com/SimulatedGREG/electron-vue/tree/8fae4763e9d225d3691b627e83b9e09b56f6c935) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
