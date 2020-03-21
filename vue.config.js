module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                traget:'https://www/imooc.com',
                changeOrigin:true,
                pathRewrite:{
                    '/api':  ''
                }
            }
        }
    }
}