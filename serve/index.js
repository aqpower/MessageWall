const express = require('express')
const path = require('path')
//解析html
var ejs = require('ejs')
var config = require('./config/dedault')

const app = express()

//获取静态路径
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/data'))

//设置允许跨域访问该服务
// 允许跨域
app.all('*', function (req, res, next) {
    console.log(req.headers.origin)
    console.log(req.environ)
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    // res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method === "OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else {
        next();
    }
});

//加入html视图
app.engine('html', ejs.__express);
app.set('view engine', 'html');

//解析前端数据
app.use(express.json())
app.use(express.urlencoded({ extented: true }))

//引入路由
require('./routes/index')(app);


app.listen(config.port, () => {
    console.log(`我启动了端口${config.port}`)
})