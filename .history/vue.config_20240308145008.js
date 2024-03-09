const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: port,
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
