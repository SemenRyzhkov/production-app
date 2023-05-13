import webpuck from 'webpack';
import path from 'path';
import { buildWebpuckConfig } from './congig/build/buildWebpuckConfig';
import { BuildPaths } from './congig/build/types/config';

const paths: BuildPaths ={
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpuck.Configuration = buildWebpuckConfig({
  mode: 'development',
  paths,
  isDev,
});

export default config;
