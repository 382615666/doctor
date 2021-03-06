module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/followup', // 默认'/'，部署应用包时的基本 URL
  devServer: {
    proxy: {
      '/common': {
        target: 'http://111.8.51.2:8089/common', // 本地调试
        changeOrigin: true,
        pathRewrite: {
          '^/common': ''
        }
      }
    }
  }
};
