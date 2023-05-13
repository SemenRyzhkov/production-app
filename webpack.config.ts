import webpuck from 'webpack';
import path from 'path';
import { buildWebpuckConfig } from './congig/build/buildWebpuckConfig';
import { BuildPaths } from './congig/build/types/config';
import { BuildEnv } from './congig/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
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
