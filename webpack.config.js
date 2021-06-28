const { watch } = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    resolve:{
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
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