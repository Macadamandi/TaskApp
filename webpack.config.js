const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    calendar: './src/calendar.js',
    tasks: './src/tasks.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: (pathData) => {
      const name = pathData.chunk.name;
      return `${name}/${name}.bundle.js`; // JS файлы будут собираться в папки по имени
    },
    clean: true, // Очистка папки dist перед сборкой
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/, // Для обработки JavaScript файлов
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Используем Babel для транспиляции
        },
      },
      {
        test: /\.css$/, // Для обработки CSS файлов (если нужно)
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.html', // Шаблон для главной страницы
      filename: 'index/index.html', // Генерируем файл в папке index с именем index.html
      chunks: ['index'], // Подключаем только index.bundle.js
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/calendar.html', // Шаблон для страницы календаря
      filename: 'calendar/calendar.html', // Генерируем файл в папке calendar с именем calendar.html
      chunks: ['calendar'], // Подключаем только calendar.bundle.js
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/tasks.html', // Шаблон для страницы задач
      filename: 'tasks/tasks.html', // Генерируем файл в папке tasks с именем tasks.html
      chunks: ['tasks'], // Подключаем только tasks.bundle.js
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
