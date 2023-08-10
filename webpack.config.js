const path = require('path')
const dotenv = require('dotenv-webpack')

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
    },
    plugins:[
        new dotenv({
            path:'./.env'
        })
    ]
}