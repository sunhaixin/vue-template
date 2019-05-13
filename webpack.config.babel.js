const path = require(path)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader')
const CleanWebpackPlugin = require('clean-webpack-plugin')

export default {
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(vue)$/,
        use: 'vue-loader',
      },
      {
        test: /\.(js|es6)$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, './src')
      },
      {
        test: /\.(scss|css)/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'img/[name].[hash].[ext]',
            fallback: 'file-loader'
          }
        }]
      },
      {
        tets: /\.(woff|woff2|ttc|ttf|eot|otf)/,
        loader: 'file-loader',
        options: {
          name: 'font/[name].[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new VueLoaderPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10
        }
      }
    }
  },
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@static': path.resolve(__dirname, '../src/static'),
      '@request': path.resolve(__dirname, '../src/request'),
      '@components': path.resolve(__dirname, '../src/view/components'),
      '@src': path.resolve(__dirname, '../src'),
    }
  }
}