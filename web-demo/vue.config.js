const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false   // 解决命名不规范而报错的问题
})

const path = require("path");
 
module.exports = {
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "./src/styles/commons.less")], //引入全局less文件
        }
    },

    
};