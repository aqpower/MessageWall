/*  
* 地址
* 配置编译环境和线上环境之间的切换
*
* 统一定义了地址变量
* baseUrl: 域名地址
* routerMode: 路由模式
* baseImgPath: 图片存放地址
*
*/

let baseUrl = ' ';
let routeMode = 'hash';
let baseImgPath = ' ';


if (process.env.NODE_ENV == 'development') {
    baseUrl = 'http://localhost:3000';
    baseImgPath = 'http://localhost:3000/img/';
} else {
    baseUrl = 'http://aqpower.cn:3009';
    baseImgPath = 'http://aqpower.cn:3009/img/';
}

export {
    baseUrl,
    routeMode,
    baseImgPath
}