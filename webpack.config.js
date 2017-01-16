var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/App.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Timer: 'app/components/Timer.jsx',
            CountDown: 'app/components/CountDown.jsx',
            Css: 'app/styles/app.scss'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'latest']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
        }
        ]
    },
    devtool: 'source-map'
};