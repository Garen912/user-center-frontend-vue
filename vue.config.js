const { defineConfig } = require('@vue/cli-service')

const name = '用户中心' // page title

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 添加 .vue 后缀
    },
    devtool: 'source-map', // 使用 source-map
    devServer: {
      port: 3300,
      proxy: {
        '/api': {
          target: 'http://localhost:8080', // 目标服务器的地址
          changeOrigin: true, // 是否改变请求源
          // pathRewrite: { '^/api': '' }, // 重写路径
        },
      }
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap(args => {
      args[0].title = name // 设置网页标题
      return args;
    })
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      })
      return definitions
    })
  },
})
