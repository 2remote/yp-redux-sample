const webpack = require('webpack');
const path = require('path');

const PATHS = {
  base: path.join(__dirname, 'public'),
  app: path.join(__dirname, 'public/src'),
  dist: path.join(__dirname, 'public/dist')
};

// TODO: entry是一个index文件还是一个路径？
module.exports = {
  entry: path.join(PATHS.app, 'index.js'),
  output: {
    path: PATHS.dist,
    publicPath: 'dist', // 逗逼逗逼逗逼逗逼
    filename: 'all.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: PATHS.app
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    // 1. 把所有可能路径在index.html里罗列一遍才发现是你，contentBase！
    // 卧槽，你特么生成好的bundle.js放在这个目录怎么不写文章说一下？草泥马我用了一天好么
    //
    // 2. 你特么生成的文件用的filename
    // 而且你特么都读取了output的filename了，就不能读取一下output的path么？坑你大爷啊！
    //
    // 3. 回去看了文档，终于看到这个publicPath了，特么的跟着Survive配置了3遍啊
    // 卧槽还要再写一遍publicPath，你特么烦不烦？妈蛋的Survive.js也没说呀，操你大爷
    //
    // 4. 操你妈逼，咋设置了publicPath还把项目玩儿挂了？
    // 真是日了狗了，居然把publicPath的路径基于contentBase，path用绝对路径，特么的
    // publicPath为啥不保持一致？
    contentBase: PATHS.base, // Express要serve静态页面的根路径
    hot: true, // Hot Module Replacement
    historyApiFallback: true,
    inline: true, // HMR的一种方式
    progress: true, // 显示进度条
    port: 8888 // 指定端口
  }
}
