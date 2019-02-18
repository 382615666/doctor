module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/followup', // 默认'/'，部署应用包时的基本 URL
  devServer: {
    proxy: {
      '/a': {
        target: 'http://goodboys.benecess.com/a', // 本地调试
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
