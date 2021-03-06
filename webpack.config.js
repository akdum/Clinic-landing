const webpack = require('webpack');

module.exports = {
    entry: {
        clinic: "./app/clinic.tsx",
        heroes: "./app/heroes.tsx",
        doctors: "./app/doctors.tsx",
        services: "./app/services.tsx"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist",
        publicPath: "/dist/"
    },

    devServer: {
        contentBase: __dirname,
        compress: false,
        port: 9000,
        open: true,
        progress: true,
        quiet: false
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader", options: {
                    } // translates CSS into CommonJS
                }, {
                    loader: "resolve-url-loader"
                },
                {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    } // compiles Sass to CSS
                }]
            },

            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true,
                    },
                  },
                ],
              },
              {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader?exportAsEs6Default"
              }
        ]
    },

    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.SEND_GRID_USER_ID': JSON.stringify(''),
            'process.env.SEND_GRID_API_KEY': JSON.stringify(''),
            'process.env.SEND_GRID_TO': JSON.stringify(''),
            'process.env.SEND_GRID_SUBJECT': JSON.stringify(''),
            'process.env.SEND_GRID_FROM': JSON.stringify(''),
          })
    ]
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};