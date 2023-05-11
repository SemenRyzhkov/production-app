import path from 'path';
import webpuck from 'webpack'
import HTMLWebpuckPlugin from 'html-webpack-plugin'

const config: webpuck.Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [
    new HTMLWebpuckPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpuck.ProgressPlugin(),
  ],
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
    extensions: ['.tsx', '.ts', '.js'],
  },
};

export default config;
