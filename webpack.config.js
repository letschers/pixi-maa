const path = require("path");
const fs = require("fs");

module.exports = {
    devtool: "eval-source-map",
    mode: "development",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "src")]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    experiments: {
        topLevelAwait: true
    },
    module: {
        rules: [
            { test: /\.png$/, use: 'file-loader' },
            { test: /\.ts$/, use: 'ts-loader' }
        ],
    }
}