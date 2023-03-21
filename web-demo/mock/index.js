// 引入mock
let Mock = require("mockjs");

// 留言node
export const note = Mock.mock({
  "data|99": [
    {
      //创建时间
      moment: new Date(),
      //id
      "id+1": 1,
      //userid
      "userId|+1": 10,
      //内容
      "message|24-96": "@cword",
      //lable
      "label|0-10": 0,
      //name
      name: "@cname",
      //like
      "like|0-120": 0,
      //comments
      "comment|0-120": 0,
      //背景色
      "imgurl|0-4": 0,
      //是否撤销
      "revoke|0-20": 0,
      //是否举报
      "report|0-20": 0,
      //类型
      type: 0,
    },
  ],
});

// 照片node
export const photo = Mock.mock({
  "data|99": [
    {
      //创建时间
      moment: new Date(),
      //id
      "id+1": 1,
      //userid
      "userId|+1": 10,
      //内容
      "message|24-96": "@cword",
      //lable
      "label|0-10": 0,
      //name
      name: "@cname",
      //like
      "like|0-120": 0,
      //comments
      "comment|0-120": 0,
      //背景
      "imgurl|0-5": 0,
      //是否撤销
      "revoke|0-20": 0,
      //是否举报
      "report|0-20": 0,
      //类型
      type: 1,
    },
  ],
});


//评论
export const comment = Mock.mock({
  "data|99": [
    {
      //创建时间
      moment: new Date(),
      //id
      "id+1": 1,
      //userid
      "userId|+1": 10,
      //内容
      "message|24-96": "@cword",
      //name
      name: "@cname",
      //背景色
      "imgurl|0-13": 0,
    },
  ],
});
