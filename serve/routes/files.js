// 引入插件上传附件
var multer = require('multer')
const fs = require("fs");

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

// 引入模块
var COS = require('cos-nodejs-sdk-v5');
// 创建实例
var cos = new COS({
    SecretId: 'AKIDFF3h9SisrzPrIar14tUqzvc6OWClxzoO',
    SecretKey: 'SjutBIGJ8oIXXJtJWb5RbX3QhmiV9bqr',
});



// 存储桶名称，由bucketname-appid 组成，appid必须填入，可以在COS控制台查看存储桶名称。 https://console.cloud.tencent.com/cos5/bucket
var Bucket = 'jgox-image-1316409677';
// 存储桶Region可以在COS控制台指定存储桶的概览页查看 https://console.cloud.tencent.com/cos5/bucket/ 
// 关于地域的详情见 https://cloud.tencent.com/document/product/436/6224
var Region = 'ap-guangzhou';



module.exports = function (app) {

    app.post('/profile', upload.single('file'), function (req, res, next) {
        let name = req.file.filename;
        let imgurl = '/photo/' + name;
        console.log(imgurl);

        const filePath = './data/' + imgurl // 本地文件路径
        cos.putObject({
            Bucket: Bucket, /* 填入您自己的存储桶，必须字段 */
            Region: Region,  /* 存储桶所在地域，例如ap-beijing，必须字段 */
            Key: name,  /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */
            StorageClass: 'STANDARD',
            /* 当Body为stream类型时，ContentLength必传，否则onProgress不能返回正确的进度信息 */
            Body: fs.createReadStream(filePath), // 上传文件对象
            ContentLength: fs.statSync(filePath).size,
            onProgress: function (progressData) {
                console.log(JSON.stringify(progressData));
            }
        }, function (err, data) {
            if (err) {
                console.log('上传出错', err);
            } else {
                console.log('图片上传成功', data);
            }
        });
        imgurl = 'https://jgox-image-1316409677.cos.ap-guangzhou.myqcloud.com/' + name;
        console.log(imgurl)
        res.send(imgurl);
    })
}
