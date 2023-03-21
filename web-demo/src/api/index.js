// 对接后端接口
import fetch from '@/utils/axios'

// 获取访问者id
export const signInApi = () => fetch.post('/signip');

//新建wall
export const insertWallApi = data => fetch.post('/insertwall', data);

// 查询墙
export const findWallPageApi = data => fetch.post('/findwallpage', data);

// 反馈
export const insertFeedbackApi = data => fetch.post('/insertfeedback', data);

// 插入评论
export const insertCommentApi = data => fetch.post('/insertcomment', data);

// 获取评论
export const findCommentPageApi = data => fetch.post('/findcommentpage', data);

//上传图片
export const proFileApi = data => fetch.post('/profile', data);

// 删除墙
export const deleteWallApi = data => fetch.post('/deleteWall', data);