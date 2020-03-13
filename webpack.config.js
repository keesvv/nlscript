const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  target: 'node',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '~@': path.resolve(__dirname, 'src')
    }
  },
  output: {
    filename: 'nlscript.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
