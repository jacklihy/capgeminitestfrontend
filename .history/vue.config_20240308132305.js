const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
      open: true,
      host: '127.0.0.1',//本机
      port: 8484,//端口号
      https: false,
      proxy: {  //配置跨域
          '/book': {
              target: '',//需要请求的地址
              ws: true,
              changOrigin: true,  //允许跨域
              pathRewrite: {
                  '^/book': ''  //请求的时候使用这个api就可以
              }
          }
      }
  }
}
