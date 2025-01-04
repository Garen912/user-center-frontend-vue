const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 添加 .vue 后缀
    },
    devtool: 'source-map', // 使用 source-map
    devServer: {
      port: 3300,
    },
  },
})
