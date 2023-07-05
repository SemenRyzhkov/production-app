import webpuck from 'webpack';
import path from 'path';
import { buildWebpuckConfig } from './config/build/buildWebpuckConfig';
import { BuildPaths, BuildEnv } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';

  const config: webpuck.Configuration = buildWebpuckConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
