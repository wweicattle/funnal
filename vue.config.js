module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    lintOnSave: false,
    productionSourceMap:false,
    devServer: {
      // hot:true,
      proxy: {
        '/dev': {
          target: 'http://192.168.35.231/tl_e/reqRedirect.ashx?action=reqRedirect',
          pathRewrite: {
            '^/dev': ''
          }
        },
        "/upload":{
          target: 'http://192.168.35.131:9501/fileOss/base642Oss',
          pathRewrite: {
            '^/upload': ''
          }
        }
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
  