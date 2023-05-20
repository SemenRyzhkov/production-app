import path from 'path';
import webpuck from 'webpack';

import HTMLWebpuckPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({
  paths,
}: BuildOptions): webpuck.WebpackPluginInstance[] {
  return [
    new HTMLWebpuckPlugin({
      template: paths.html,
    }),
    new webpuck.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
}
