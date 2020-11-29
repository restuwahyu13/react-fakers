const { resolve } = require('path')
const zlib = require('zlib')
const TenserWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackProgressBar = require('webpackbar')
const ThreeShakingWebpackPlugin = require('webpack-common-shake').Plugin
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin')
const CaseSensitivePathWebpackPlugin = require('case-sensitive-paths-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    main: ['whatwg-fetch', resolve(process.cwd(), 'src/index.js')]
  },
  output: {
    filename: 'index.js',
    path: resolve(process.cwd(), 'build'),
    libraryTarget: 'umd',
    globalObject: 'typeof self !== "undefined" ? self : this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3,
                    bugfixes: true,
                    forceAllTransforms: true,
                    modules: false
                  }
                ],
                ['@babel/preset-react', { useBuiltIns: true }]
              ],
              plugins: [
                'babel-plugin-transform-remove-console',
                'babel-plugin-transform-remove-undefined',
                'babel-plugin-transform-remove-strict-mode',
                'babel-plugin-minify-dead-code-elimination',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-async-to-generator',
                '@babel/plugin-transform-shorthand-properties',
                '@babel/plugin-proposal-nullish-coalescing-operator',
                '@babel/plugin-proposal-optional-chaining',
                ['@babel/plugin-transform-runtime', { corejs: 3 }]
              ],
              minified: true,
              cacheDirectory: false,
              comments: false,
              babelrc: false
            }
          }
        ],
        include: resolve(process.cwd(), 'src'),
        exclude: [
          '/(node_modules|bower_components)/',
          '/.(test.js|spec.js)/$',
          resolve(process.cwd(), 'build/**/*'),
          resolve(process.cwd(), 'coverage/**/*')
        ]
      }
    ]
  },
  plugins: [
    new CaseSensitivePathWebpackPlugin(),
    new WebpackProgressBar(),
    new UnminifiedWebpackPlugin(),
    new ThreeShakingWebpackPlugin(),
    new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['build'] })
  ],
  optimization: {
    nodeEnv: 'production',
    minimize: true,
    minimizer: [
      new TenserWebpackPlugin({
        test: /\.js$/,
        terserOptions: {
          parser: { ecma: 6, bare_returns: true, html5_comments: false },
          compress: { module: true, inline: 1 },
          mangle: { module: true, toplevel: true },
          output: { comments: false, preserve_annotations: true, braces: true, indent_level: 2 },
          module: false,
          keep_classnames: false,
          keep_fname: false,
          nameCache: false,
          ie8: false,
          safari10: false
        },
        parallel: require('os').cpus().length,
        extractComments: false,
        sourceMap: true,
        cache: false,
        exclude: [
          '/(node_modules|bower_components)/',
          '/.(test.js|spec.js)/$',
          resolve(process.cwd(), 'build/**/*'),
          resolve(process.cwd(), 'coverage/**/*')
        ]
      })
    ],
    noEmitOnErrors: true,
    sideEffects: true,
    providedExports: true,
    usedExports: true,
    concatenateModules: true,
    removeEmptyChunks: true
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },
  resolve: {
    modules: [resolve(process.cwd(), 'src'), 'node_modules'],
    extensions: ['.js'],
    symlinks: false,
    cacheWithContext: false
  },
  devtool: false,
  stats: {
    assetsSort: '!size',
    entrypoints: false,
    cached: false,
    children: false,
    modules: false,
    warnings: false
  }
}
