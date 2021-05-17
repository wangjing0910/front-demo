const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/my-app/' : './', //my-app：项目名
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 4455,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://172.17.5.245:8099',
        changeOrigin: true,
        secure: false,
        // ws: true, // proxy websockets
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      //css检查
      new StyleLintPlugin({
        files: ['**/*.{html,vue,css,sass,scss,less}']
      })
    ]
  },
  //css全局式样
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/styles/global.less')]
    }
  },
  //Ant Design Vue全局式样
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
};
