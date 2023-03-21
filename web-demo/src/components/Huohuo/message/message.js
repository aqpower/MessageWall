// js也可以建结构
import { createVNode, render } from "vue";

import HhMessage from './HhMessage.vue'

const divVNode = createVNode('div', { class: 'xtx-message-container' })
render(divVNode, document.body)

const div = divVNode.el

const HHMessage = ({ message, type }) => {
    // 1.动态创建虚拟DOM - createVNode（h）函数
    const comVNode = createVNode(HhMessage, { message, type })
    // 2.渲染到body页面中 - render函数
    render(comVNode, div)
    // 3.提示在6s后自动卸载
    setTimeout(() => {
        render(null, div)
    }, 6000)
}

export default HHMessage