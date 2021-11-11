module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    port: 8081,
    proxy: {
      '/stockOrder.ashx': {
        target: 'http://tm.lilanz.com/oa/project/rst2',
        pathRewrite: {
          // '^/sto': '/'
        }
      },
      '/dev': {
        target: 'http://192.168.35.96:8900/svr-become',
        pathRewrite: {
          '^/dev': ''
        }
      },
      '/file': {
        target: 'http://192.168.35.96:8900/svr-businesstool/uploadFile',
        pathRewrite: {
          '^/file': ''
        }
      },
      
      "/upload": {
        target: 'http://192.168.35.131:9501/fileOss/base642Oss',
        pathRewrite: {
          '^/upload': ''
        }
      },

       
      "/process": {
        target: 'http://192.168.37.132:9494',
        pathRewrite: {
          '^/process': ''
        }
      },
      
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "network": "@/network",
        "components": "@/components",
        "views": "@/views",
        "utils": "@/utils",
      }
    }
  }
}
