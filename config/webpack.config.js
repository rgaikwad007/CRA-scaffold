const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = env => {
  env = env || {};
  const mode = env.mode || 'development';
  process.env.BABEL_ENV = mode;
  return {
    entry: './src/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: resolveApp('src'),
                loader: 'babel-loader',
                options: {
                    presets: [
                        require.resolve('babel-preset-react-app')
                    ]
                }
            },
            {
                test: /\.(css|s[ac]ss)$/,
                use: [
                // style-loader
                { loader: 'style-loader' },
                // css-loader
                {
                    loader: 'css-loader',
                    options: {
                    modules: true
                    }
                },
                { 
                    loader: 'postcss-loader',
                    options: { 
                    config: {
                        path: resolveApp('config/postcss.config.js')
                    },
                    }
                },
                // sass-loader
                { loader: 'sass-loader' }
                ]
            }
        ],
    },
    output: {
        filename: mode === 'production' ? '[name].[contenthash:8].bundle.js' : '[name].bundle.js',
        chunkFilename: mode === 'production' ? '[name].[contenthash:8]chunk.js' : '[name].chunk.js',
        path: resolveApp('build'),
    },
    devServer: {
        contentBase: resolveApp('public'),
        publicPath: '/',
        watchContentBase: true,
        hot: true,
        compress: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'Getting Started',
        inject: true,
        template: resolveApp('public/index.html'),
        }),
    ],
    mode
  };
};