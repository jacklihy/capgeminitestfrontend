const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
      proxy: {  
          '/book': {
              target: 'http://127.0.0.1:8484/',
              changOrigin: true,  
              pathRewrite: {
                  '^/book': '' 
              }
          }
      }
  }
}
