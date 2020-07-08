const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = (filePath) => path.resolve(__dirname, filePath);

module.exports = {
    entry: [root('App/src/index.js')],
    output: {
        path: root('App/dist'),
        publicPath: '/',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        filename: 'js/[name].[hash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            /**
             * Để an toàn, bạn có thể sử dụng phần thi hành: 'pre' để kiểm tra các tệp nguồn, không bị sửa đổi bởi các trình tải khác (như babel-loader)
             */
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                options: {
                    fix: true,
                    emitError: true,
                    configFile: './.eslintrc',
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                // cấu hình đường dẫn đến file postcss.config.js.
                                path: './postcss.config.js',
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            publicPath: 'images/',
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|webp|gif|jpe?g)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.9],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(eot|tiff|woff2|woff|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash].[ext]',
                            outputPath: './public/fonts/',
                            verbose: false,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            src: root('App/src'),
            framework: root('App/scss/framewok'),
            header: root('App/src/containers/header'),
            content: root('App/src/containers/content'),
            footer: root('App/src/containers/footer'),
            pathUrl: root('App/src/config'),

            user: root('App/src/containers/content/user'),
            routes: root('App/src/routes'),
        },
        extensions: ['.js', '.jsx', '.scss', '.css'],
        modules: [root('node_modules'), root('App/src'), root('App/public')],
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: root('./App/public/index.html'),
            // favicon: "./App/public/favicon.ico",
        }),
        new CleanWebpackPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
};
