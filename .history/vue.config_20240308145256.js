const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '127.0.0.1',
    port: 8484,
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      '/api': {
        target: `http://localhost:8484`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    disableHostCheck: true
  },
})
