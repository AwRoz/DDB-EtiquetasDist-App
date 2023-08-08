const path = require('path')
const { Chunk } = require('webpack')

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    resolve:{
        extensions: ['.js'] 
    }
}