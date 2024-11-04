const { watch } = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    calendar: './src/calendar.js',
    tasks: './src/tasks.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/, // Для обработки JavaScript файлов
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Используйте Babel для транспиляции
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      filename: 'index.html',
      chunks: ['index'],  // Подключение index.bundle.js к index.html
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/calendar.html',
      filename: 'calendar.html',
      chunks: ['calendar'],  // Подключение calendar.bundle.js к calendar.html
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/tasks.html',
      filename: 'tasks.html',
      chunks: ['tasks'],  // Подключение tasks.bundle.js к tasks.html
    }),
  ],
  resolve: {
    extensions: ['.js'], // Расширения файлов для импорта
  },
};