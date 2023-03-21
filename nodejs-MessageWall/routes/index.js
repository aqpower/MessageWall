const controller = require('../controller/dbServe')

//作为一个接收口用
module.exports = function (app) {
    //test
    app.get('/test', (req, res) => {
        res.type('html');
        res.render('test');
    })

    //新建wall数据
    app.post('/insertwall', (req, res) => {
        controller.insertWall(req, res)
    })

    //新建反馈
    app.post('/insertfeedback', (req, res) => {
        controller.insertFeedback(req, res)
    })

    //新建评论
    app.post('/insertcomment', (req, res) => {
        controller.insertComment(req, res)
    })

    //删除墙
    app.post('/deletewall', (req, res) => {
        controller.deleteWall(req, res)
    })

    //删除反馈
    app.post('/deletefeedback', (req, res) => {
        controller.deleteFeedback(req, res)
    })

    //分页查询wall并获取赞、举报数据
    app.post('/findwallpage', (req, res) => {
        controller.findWallPage(req, res)
    })

    app.post('/findcommentpage', (req, res) => {
        controller.findCommentPage(req, res)
    })


    //用户进入进行ip登记
    app.post('/signip', (req, res) => {
        var ip = req.ip;
        res.send({
            code: 200,
            ip: ip,
        })
    })
}