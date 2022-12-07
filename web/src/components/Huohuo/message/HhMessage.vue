<template>
  <Transition name="down">
    <div class="Hh-message" v-if="isShow">
      <div class="hh-m-i">
        <i class="iconfont" :class="style[type].icon"></i>
        <span class="text">{{ message }}</span>
      </div>
    </div>
  </Transition>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
  name: "HhMessage",
  props: {
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      // warn error success
      default: "warn"
    },
  },
  setup() {
    //定义一个对象，包含三种情况的样式，对象key就是类型字符串
    const style = {
      warning: {
        icon: "icon-xinxitishi"
      },
      error: {
        icon: "icon-shibaibaocuo"
      },
      success: {
        icon: "icon-chenggongyijiejue"
      }
    };
    const isShow = ref(false);
    onMounted(() => {
      isShow.value = true;
      setTimeout(() => {
        isShow.value = false;
      }, 3000);
    })
    return { style, isShow };
  }
}
</script>

<style scoped lang="less">
.down {
  &-enter {
    &-from {
      transform: translateY(-30px);
      opacity: 0;
    }

    &-active {
      transition: all 0.3s;
    }

    &-to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  &-leave {
    &-from {
      transform: translateY(0px);
      opacity: 1;
    }

    &-active {
      transition: all 0.3s;
    }

    &-to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
}

.Hh-message {
  width: 100%;
  height: 40px;
  position: fixed;
  z-index: 9999;
  top: 20px;
  line-height: 40px;
  display: flex;
  justify-content: center;

  .hh-m-i {
    padding: 0 20px;
    border-radius: 6px;
    color: @gray-3;
    background: #fff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  i {
    margin-right: 6px;
    vertical-align: middle;
  }

  .text {
    vertical-align: middle;
  }
}

.icon-xinxitishi {
  color: @warning-color;
}

.icon-shibaibaocuo {
  color: @error-color;
}

.icon-chenggongyijiejue {
  color: @success-color;
}
</style>