module.exports = {
    entry: __dirname + '/src/fade.js',
    output: {
        path: __dirname + '/dist',
        filename: 'fade.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
