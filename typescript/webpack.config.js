const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// module.exports = {
//   entry: './src/test.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// };

module.exports = {
  entry: './src/js/patterns/proxy.ts',
  // entry: './src/js/patterns/car-decorator.ts',
  // entry: './src/index.ts',
  // entry: './src/js/classes/exercise-classes.ts',
  watch: true,
  mode: 'development',
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 5000,
      server: { baseDir: ['src', 'dist'] }
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};