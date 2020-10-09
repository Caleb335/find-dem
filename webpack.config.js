const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    output: {
        path: path.resolve(__dirname, "build")
    },
    // to bundle/resolve jsx modules
    resolve: { 
        modules: [
            'node_modules', 'src'
        ], 
        extensions: ['.jsx', '.js', '.scss'] 
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.html/,
                use: [
                  {
                    loader: 'html-loader',
                  },
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader", 
                    "css-loader", 
                    "sass-loader"
                ]        
            },
            // bundles our assets (images, gifs, icon etc.) into modules
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },
    // prevents the issue of having
    // cannot get /route
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}