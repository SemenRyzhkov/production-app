import webpuck from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpuck.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  };
}
