const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map', // use this for faster debugging (better for smaller projects)
    // devtool: 'eval-source-map -use this if project is too big
    devServer: {
        watchFiles: ["./src/template.html"], //only include html, no need to watch css as that is imported via index.js which is watched by common.js
    },
});