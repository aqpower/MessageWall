---
title: 留言墙开发文档✏️
date: 2022-11-03 20:13:00
tags: Web
---

记录在开发留言墙的过程中所学到和运用的知识，以及心得。

希望能够好好坚持下去！😀😀😀

<!--more-->
# 前端
一切的开始
### 创建vue项目

```vue
 vue create web
```

### 完善开发目录

##### ①默认目录

* |-- 留言墙
    * |-- .gitignore
    * |-- babel.config.js
    * |-- directoryList.md
    * |-- jsconfig.json
    * |-- package-lock.json
    * |-- package.json
    * |-- README.md
    * |-- vue.config.js
    * |-- 开发文档.md
    * |-- public/
    * |   |-- favicon.ico
    * |   |-- index.html
    * |-- src/
    * |   |-- App.vue
    * |   |-- main.js
        |-- assets
        |   |-- logo.png
        |-- components/                   
            |-- HelloWorld.vue


##### ② 完善目录

* |-- 留言墙
    * |-- .gitignore
    * |-- babel.config.js
    * |-- directoryList.md
    * |-- jsconfig.json
    * |-- package-lock.json
    * |-- package.json
    * |-- README.md
    * |-- vue.config.js
    * |-- 开发文档.md
    * |-- mock/                             &emsp;//模拟数据
    * |-- public/
    * |   |-- favicon.ico
    * |   |-- index.html
    * |-- src/
    * |   |-- App.vue
    * |   |-- main.js
    * |   |-- api/ 
    * |   |-- assets/                       &emsp;//静态资源目录
    * |   |   |-- logo.png
    * |   |   |-- fonts
    * |   |   |-- images
    * |   |-- components/                   &emsp;//公共组件目录
    * |   |   |-- HelloWorld.vue
    * |   |-- pinia/
    * |   |-- router/                       &emsp;//路由配置目录
    * |   |-- store/                        &emsp;//状态管理目录
    * |   |-- styles/                       &emsp;//公共样式目录
    * |   |-- utils/                        &emsp;//工具函目录
    * |   |-- views/                        &emsp;//页面目录
    * |-- static/                           &emsp;//静态资源目录，不会被打包


### 安装路由插件
由于网络原因采用`cnpm`，这样下载更快，报错再用npm
```
cnpm install router --save
```
#### vue-router（路由）
> 由于 Vue.js 是一个视图层框架，并且作者（尤雨溪）严格准守 SoC （关注度分离原则），所以 Vue.js 并不包含页面的跳转以及通信功能，而是使用vue-router路由插件（页面跳转）和axios（通信）实现的。在前后端分离的模式下，原本由后端来做的重定向和转发的事情就交给前端来做了。
> 
> 传统的页面应用，是用一些超链接来实现页面切换和跳转的。在vue-router单页面应用中，则是路径之间的切换，实际上就是组件的切换。路由就是SPA（单页应用）的路径管理器。再通俗的说，vue-router就是我们WebApp的链接路径管理系统。为什么我们不能像原来一样直接用a标签编写链接呢？因为我们一般用Vue做的都是单页应用，只有一个主页面index.html，所以你写的<a></a>标签是不起作用的，要使用vue-router来进行管理。

vue中每一个页面都是一个组件，我们写好的页面需要导出（export），在需要用的地方再导入(import)，之后我会在router下的index.js里导入main页面

### 安装vuex插件
```
cnpm install vuex --save
```

### 安装less插件
```
cnpm install less less-loader --save
```
less是一个css预编译器，有很多很好的功能，比如**可以嵌套选择器**，运用比如[[留言墙开发文档✏️#Transition实现动画弹出]]

> 定义：预编译又称为预处理，是做些代码文本的替换工作处理，条件编译等就是为编译做的预备工作的阶段主要处理#开始的预编译指令预编译指令指示了在程序正式编译前就由编译器进行的操作，可以放在程序中的任何位置。

### 安装axios插件
```
cnpm install axios --save
```
如果在Vue3中直接使用安装vue扩展axios插件
```
cnpm install vue-axios --save
```

###  main.js的插件引入
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(router);
app.use(store);
app.use(VueAxios, axios);

app.mount('#app')

```

### 完成公共样式文件的创作

### vue-cli4中引入全局less变量的方式
[链接](https://blog.csdn.net/qq_34607371/article/details/110391424)

### 引入iconfont字体图库
[iconfont](https://www.iconfont.cn/) 

### video自动循环播放
```html
<video src="@/assets/images/qm1.mp4" autoplay="autoplay" muted="nuted" loop="loop" class="bg-video" ></video>
```

### 引入mock模拟数据
前端开发经常会用来模拟静态数据。
```
cnpm install mockjs --save
```
使用示例
```javascript
/mock/index.js:
// 引入mock
let Mock = require("mockjs");
// 留言node
export const note = Mock.mock({
  "data|99": [
    {
      //创建时间
      moment: new Date(),  //可自己调试看看样式到底啥样，是
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
```
使用时引入即可
```javascript
import { note, photo } from '../../mock/index'

data(){
  note: note.data,  //note的格式是一个数组
}
```
```html
<node-card-vue v-for="(e, index) in note" :key="index" :note="e" :class="{ cardselected: index == cardSelected }" @click="selectCard(index)">

      </node-card-vue>``
```

### 字体包的引入
```CSS
@font-face {
    font-family: fa;
    src: url();
}
```
### 字体使用
```CSS
font-family: fa;
```
## 设置弹出层组件--写留言

### 监听屏幕宽度变化

目的是为了做到add按钮始终距离footbar组件有一点的距离。

```javascript
window.addEventListener('resize', this.noteWidth);
```

### 背景毛玻璃效果
```CSS
backdrop-filter: blur(10px);
```
### 滚动条样式调整
```CSS
.hh-modal-main {
    overflow-x: auto;
    margin: 2px;
  }
  .hh-modal-main::-webkit-scrollbar {
    // 滚动条整体样式
    width: 4px;
    // 高宽分别对应横竖滚动条的尺寸
    height: 4px;
  }
  .hh-modal-main::-webkit-scrollbar-thumb {
    // 滚动条里面小方块
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.2);
  }
  .hh-modal-main::-webkit-scrollbar-track {
    // 滚动条里面轨道
    border-radius: 4px;
    background: rgba(0, 0, 0, 0);
  }
```
###  Transition实现动画弹出
vue内置了[[Transition]]组件可以进行动画操作,注意规范一下格式就可。
[[留言墙开发文档✏️#安装less插件]]
```css
.modal {
  //入场
  &-enter {
    &-from {
      transform: translateX(360px);
    }
    &-active {
      transition: all 0.2s ease-out;
    }
    &-to {
      transform: translateX(0px);
    }
  }
  //出场
  &-leave {
    &-from {
      transform: translateX(0px);
    }
    &-active {
      transition: all 0.2s ease-in;
    }
    &-to {
      transform: translateX(360px);
    }
  }
}
```
### vue--slot实现组件标签嵌套

在这里我浪费了非常多时间百思不得其解！气死了！还是没有去仔细深究每一个不懂的地方。

> `<slot>` 元素是一个**插槽出口** (slot outlet)，标示了父元素提供的**插槽内容** (slot content) 将在哪里被渲染。

说人话就是slot组件在子组件中使用，在组件渲染时，slot组件将会被替换为父组件的模板内容，slot组件相当于**子组件留给父组件的占位符**。

在把NewCardvue组件插入到HhModalVue中时就需要在HhModalVue中使用slot标记出口！否则不会成功渲染出被嵌套的组件。
```html
WallMessage.vue:
<hh-modal-vue :title="title" @close="changeModal" :isModal="modal">
  <new-card-vue></new-card-vue>
</hh-modal-vue>

HhModal.vue:
<template>
  <transition name="modal">
    <div class="hh-modal" v-if="isModal">
      <div class="hh-modal-head">
        <p class="modal-name">{{ title }}</p>
        <span class="iconfont icon-guanbi" @click="closeModal"></span>
      </div>
      <div class="hh-modal-main">
        <!-- 这个很重要 -->
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
```

### 变量记录当前选择颜色

很简单的操作，主要是通过这个对vue的语法规则更加了解。

```html
<p class="color-li" v-for="(e, index) in cardColor1" :key="index" :style="{ background: e }"  :class="{ colorselected: index == colorSelected }" @click="changeColor(index)"></p>

<div class=" card-main" :style="{ background: cardColor[colorSelected] }">
 </div>
```
```javascript
methods: {
    changeColor(e) {
      this.colorSelected = e;
    }
  }
```

### 底部按钮设置
#### 调用之前的HhButtom组件
### 关闭窗口
发送信息给父级即可。

## 设置弹出层组件--留言详情
### 修改交互系统
### 向父级获得卡片信息
### mock模拟评论数据

## 照片墙页面

#### Tips🌍：通过路由id控制留言墙界面和照片墙界面
通过id标识在哪个页面。
#### 页面切换时关闭弹窗。
在前端简单的监听一下id就可以实现效果
```javascript
watch:{
    id(){
      this.modal = false;
      this.view = false;
      this.cardSelected = -1;
      this.nlabel = -1;
    },
  },
```

### （一）设置PhotoCard组件
需要注意的是模拟数据怎么得到本地图片，因为是静态模拟数据直接简单粗暴的采用0-4作为索引。
```html
<img :src="require('../../static/' + photo.imgurl + '.jpg')"  /> //必须使用require 
```

```html
<photo-card-vue  :photo="e" v-for="(e, index) in photo" :key="index" >
</photo-card-vue>    //通过photo传给子组件
```

### （二）图片瀑布流显示
CSS的column可以很轻松的做到，这里对这里先用这个这样简单地处理把。
**具体等到要做这个效果的时候再google都是可以的**😋
### （三）设置弹出层组件--照片详情
想要的效果是点击图片能够预览图片并且右侧侧边栏弹出照片信息。
#### 侧边栏信息部分
1.更改carddetail所获得的标签
我们点击照片墙组件时，想要的效果是和点开卡片一样，右侧会打开弹出层并显示卡片详情，点击方法显然可以直接用同一个，但是点开后显示的卡片内容需要稍微改一下。

通过路由id获取当前所在页面从而改变传给他们的card值即可。
```html
 WallMessage.vue:
 <card-detail-vue v-if="cardSelected != -1" :card="cards[cardSelected]"></card-detail-vue>
```
```javascript
WallMessage.vue:
computed: {
    cards(){
      let a = '';
      if (this.$route.query.id == 0) {
        a = note.data;
      } else if (this.$route.query.id == 1) {
        a = photo.data;
      }
      return a;
    }
  }
```
#### 图片放大预览
Hhviewer这边拿到父组件传过来的图片即可。
#### 图片切换 $emit

本来是简单的想把**整个图片数组和图片下标**给Hhviewer组件，然后在组件内修改下标即可修改图片。

**但是**忽略了一个很重要的东西，按照上面那样确实可以做到图片切换，但是右边的信息carddetail不会改变，我们修改的下标仅仅是这个子组件里面的。

这样的话，那就再重构一下，我们就不修改传过来的下标了，当触发操作时，我们直接告诉父组件！
> 在vue中，**$emit** 用于触发当前实例上的事件，附近参数都会传给监听器回调；子组件可以利用 $emit 触发父组件的自定义事件，语法为“vm.$emit( event, […args] )”。
```javascript
changeNumber(e){
      this.$emit('viewSwitch',e); //把左移右移映射到e上，和父组件约定好即可
    }
```
接下来在父组件接受传过来的信息，刚好有一个value叫cardSelected，那么直接修改他的值即可。

对于减到0和加到最大做出的处理，本来是想不能再减的，其实直接`v-show="nowNumber>0"`不能再减的话隐藏就行。

# 后端
### 一、框架搭建
#### 1.下载express插件
```
cnpm install express --save
```
#### 2.创建后端目录
* |-- 留言墙
     * |-- jsconfig.json
     * |-- index.js
     * |-- config/
     * |-- |-- dafault.js
     * |-- controller/
     * |-- lib/
     * |-- |-- db.js
     * |-- routes/
#### 3.安装必要插件
①下载mysql插件

### 二、连接数据库

```
cnpm install mysql --save
```

②下载multer插件，有利于图片上传
```
cnpm install multer --save
```
③下载ejs插件，用于解析html
```
cnpm install ejs --save
```

### 配置编译环境和线上环境之间的切换
```js
/*  
* baseUrl: 域名地址
* routerMode: 路由模式
* baseImgPath: 图片存放地址
*
*/

let baseUrl = ' ';
let routeMode = 'hash'; 

if (process.env.NODE_ENV == 'development') {
    baseUrl = 'http://localhost:3000';
    baseImgPath = 'http://localhost:3000';
} else {
    baseUrl = 'https://aqpower:3009';
    baseImgPath = 'https://aqpower:3009';
}  
export {
    baseUrl,
    routeMode,
    baseImgPath
}
```

### 三、前后端链接

#### 获取ip地址
在前端获取ip可能有点麻烦，但是后端node获取很简单，那么我们向后端请求一下就OK。

#### 全局消息提醒

#### 插件安装
```
cnpm install lottie-web --save
```
### 加入Lottie动画

### 优化仅点击卡片内容触发