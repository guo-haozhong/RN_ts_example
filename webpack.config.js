module.exports = {
    module: {
        rules: [
            {
                // 支持图片等静态文件的加载
                test: /\.(gif|jpe?g|png|svg)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                // react-native包中有很多es6语法的js，需要用babel转换后才能在浏览器中运行
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: false,
                        presets: ['react-native'],
                        plugins: [
                            // 支持 async/await 语法
                            'transform-runtime'
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        // 优先加载以web.js结尾的针对web平台的文件
        extensions: {
            '.web.js',
            '.js',
            '.json',
        },
        alias: {
            // 把react-native包映射成react-native-web
            'react-native$': 'react-native-web'
        }
    }
}
