const { watch } = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname,'src')]
            }
        ]
    },
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}