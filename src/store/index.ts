import { createStore } from 'vuex'
import getters from './getters'

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.ts$/)

// you do not need `import app from './modules/user'`
// it will auto require all vuex module from modules file
const modules: { [key: string]: any } = modulesFiles
  .keys()
  .reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value: { [key: string]: any } = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
  }, {} as { [key: string]: any })

export default createStore({
  getters,
  modules,
})
