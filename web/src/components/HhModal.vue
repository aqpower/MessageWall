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

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: {
    default: '标题'
  },
  isModal: {
    default: false
  },
});
const emit = defineEmits(['close']);

function closeModal() {
  emit('close');
}

// onMounted(closeModal);
props;
</script>

<style lang="less" scoped>
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



.hh-modal {
  width: 360px;
  height: 100%;
  background: rgba(255, 255, 255, 0.80);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 52px;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(20px);

  .hh-modal-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: @padding-20;
    box-sizing: border-box;

    .modal-name {
      font-size: 16px;
      color: @gray-1;
      font-weight: 600;
    }

    .icon-guanbi {
      color: @gray-2;
      cursor: pointer;
    }
  }

  .hh-modal-main {
    height: 100%;
    overflow-y: auto;
    padding-bottom: 116px;
    box-sizing: border-box;
  }

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
}
</style>