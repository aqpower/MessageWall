import Message from './message/message.js'

// Vue 3注册全局组件写法：
// app.component(组件名，组件文件)

//导出一个配置，用于app.use()安装组件使用
export default {
    install (app){
        //全局挂载 原型函数 过组件实例调用的属性 this.$message
        app.config.globalProperties.$message = Message 
    }
}