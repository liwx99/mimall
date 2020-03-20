module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/activity':{
                traget:'https://www/imooc.com',
                changeOrigin:true,
                pathRewrite:{
                    '/activity':  '/activity'
                }
            }
        }
    }
}