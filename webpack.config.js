const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // o 'development'
  entry: {
    index: './src/index.js',
    login: './src/login.js',
	novedades: './src/novedades.js',
    register: './src/register.js',
    usuario: './src/usuario.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      chunks: ['index'] 
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './public/login.html',
      chunks: ['login'] 
    }),
    new HtmlWebpackPlugin({
      filename: 'register.html',
      template: './public/register.html',
      chunks: ['register'] 
    }),
    new HtmlWebpackPlugin({
      filename: 'usuario.html',
      template: './public/usuario.html',
      chunks: ['usuario'] 
    }),
    new HtmlWebpackPlugin({
      filename: 'novedades.html',
      template: './public/novedades.html',
      chunks: ['novedades']
    })
  ],
};