
const path = require('path')

const development = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  mode: 'development',
  devServer:{
    hot: true,
    inline: true
  }
}

const production = {
  entry: './src/lightimage.js',
  output: {
    filename: 'lightimage.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  mode: 'production',
  module: {  
    rules: [
      {
        test: /\.js$/,
        use: {
            loader: 'babel-loader'
        },
        exclude: '/node_modules/'
      }
    ] 
  }
}

module.exports = process.env.NODE_ENV === 'production' ? production : development