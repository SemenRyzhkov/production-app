import webpuck from 'webpack';

export function buildResolvers(): webpuck.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  };
}
