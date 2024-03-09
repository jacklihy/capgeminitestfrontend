const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/book': {
        target: 'http://localhost:8484',
        changeOrigin: true
      }
    }
  }  
},

)
