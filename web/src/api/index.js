// 对接后端接口
import fetch from '@/utils/axios'

// 获取访问者id
export const signInApi = () => fetch.post('/signip');

//新建wall
export const insertWallApi = data => fetch.post('/insertwall', data);