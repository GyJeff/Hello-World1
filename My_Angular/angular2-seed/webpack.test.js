module.exports = {
  devtool:'cheap-module-eval-source-map',

  entry: {
    'main': './src/main.browser.ts',
    'vendor':'./src/vendor.browser.ts'
  },

  oupput:{
    filename:'[name].js'
  },

  resolve:{
    extensions:['ts','.js']
  },

  module:{
    loaders:[
      {test:/\.ts$/,loader:'awesome-typescript-loader'},
      {
        test:/\.html$/,
        loader:'html',
      },
      {
        test:/\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader:'null'
      },
      {
        test:/\.css$/,
        loader:'null'
      }
    ]
  }
}
