const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'dir')],
        watchContentBase: true,
        compress: true,
        port: 3000,
        inline: true,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
});
