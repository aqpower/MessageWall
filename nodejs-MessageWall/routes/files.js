// 引入插件上传附件
var multer = require('multer')

//
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const stoarge = multer.diskStorage({
    //保存路径
    destination: function (req, file, cb) {
        cb(null, './data/photo')
        //这里的文件路径不是相对路径
    },
    // 保存在destination中的文件名
    filename: function (req, file, cb) {
        // 正则匹配后缀名
        let type = file.originalname.replace(/.+\./, ".")

        cb(null, Date.now() + random(1, 100) + type)
    }
})

const upload = multer({ storage: stoarge })

module.exports = function (app) {

    app.post('/profile', upload.single('file'), function (req, res, next) {
        let name = req.file.filename;
        let imgurl = '/photo/' + name;
        console.log(imgurl);
        res.send(imgurl);
    })
}