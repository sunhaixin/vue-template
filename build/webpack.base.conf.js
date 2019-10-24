const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const optimizeCss = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
        test: /\.(woff|woff2|ttc|ttf|eot|otf)/,
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
      template: './src/index.html',
      // favicon: path.resolve('./src/favicon.ico')
    }),
    new optimizeCss({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].[contenthash].css',
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
      '@src': path.resolve(__dirname, '../src'),
      '@static': path.resolve(__dirname, '../src/static'),
      '@request': path.resolve(__dirname, '../src/request'),
      '@view': path.resolve(__dirname, '../src/view'),
      '@components': path.resolve(__dirname, '../src/view/components'),
    }
  }
}