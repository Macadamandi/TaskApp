const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    calendar: './src/calendar.js',
    tasks: './src/tasks.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: (pathData) => {
      const name = pathData.chunk.name;
      return `${name}/${name}.bundle.js`; // JS в папках
    },
    assetModuleFilename: 'assets/images/[name][ext]', // Путь для изображений
    clean: true, // Очистка dist перед сборкой
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Для JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Для CSS
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/, // Для изображений
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css', // Собирает все стили в папку css
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      filename: 'index/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/calendar.html',
      filename: 'calendar/calendar.html',
      chunks: ['calendar'],
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/tasks.html',
      filename: 'tasks/tasks.html',
      chunks: ['tasks'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'assets/images' }, // Копировать изображения
        { from: 'src/css', to: 'css' }, // Копировать стили
      ],
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
