const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/music163",proxy({
            target:"http://116.62.108.133:3000",
            changeOrigin:true,
            pathRewrite:{
                "^/music163":""
            }
    }))
}