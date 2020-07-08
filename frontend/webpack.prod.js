const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
// const webpack = require('webpack');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const terser = require('terser');

const common = require('./webpack.common.js');

// const

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        // new UglifyJsPlugin(),
        new CompressionPlugin({
            // filename: '[path].gz[query]',
            // algorithm: 'gzip',
            // threshold: 10240,
            // test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
            // minRatio: 0.8,
            // deleteOriginalAssets: true,
            // include: /\/includes/,
        }),
        // new BundleAnalyzerPlugin(),
        // new TerserPlugin({
        //     parallel: true,
        //     terserOptions: {
        //       ecma: 6,
        //     },
        //   }),
    ],
    optimization: {
        runtimeChunk: 'single',
        // minimize: true,
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
        minimizer: [
            new UglifyJsPlugin({
                // Uncomment lines below for cache invalidation correctly
                // cache: true,
                // cacheKeys(defaultCacheKeys) {
                //   delete defaultCacheKeys['uglify-js'];
                //
                //   return Object.assign(
                //     {},
                //     defaultCacheKeys,
                //     { 'uglify-js': require('uglify-js/package.json').version },
                //   );
                // },
                minify(file, sourceMap) {
                    // https://github.com/mishoo/UglifyJS2#minify-options
                    const uglifyJsOptions = {
                        /* your `uglify-js` package options */
                    };

                    if (sourceMap) {
                        uglifyJsOptions.sourceMap = {
                            content: sourceMap,
                        };
                    }

                    return terser.minify(file, uglifyJsOptions);
                },
            }),
        ],
    },
});
