<template>
  <div class="wall-index">
    <top-bar @openBg="getBackground"></top-bar>
    <div class="bgup"></div>
    <img v-if="this.isShow == true"
      :src="`https://jgox-image-1316409677.cos.ap-guangzhou.myqcloud.com/MessageWall-background/bg${this.bgRandom}.jpg`"
      class="bg" id="bg" />
    <router-view></router-view>
    <foot-bar-vue></foot-bar-vue>
  </div>
</template>

<script>
import topBar from '@/components/TopBar.vue'
import FootBarVue from '@/components/FootBar.vue'

import { signInApi } from '@/api/index'

export default {
  data() {
    return {
      bgRandom: Math.floor(Math.random() * 10),
      aaa: ' ',
      isShow: false,
    }
  },

  components: {
    //组件  
    topBar,
    FootBarVue,
  },
  computed: {
  },
  created() {
    this.getUser();
  },
  methods: {
    // 获取ip地址，前端难,去node后端
    // 前后端再次串起来了!
    getUser() {
      signInApi().then((res) => {
        console.log(res);
        let user = {
          id: res.ip,
        }
        this.$store.commit('getUser', user)
      })
    },


    getBackground() {
      if (this.isShow) {
        let t = Math.floor(Math.random() * 10);
        while (t == this.bgRandom) {
          t = Math.floor(Math.random() * 10);
        }
        this.bgRandom = t;
      } else {
        this.isShow = true;
      }
    },
  }
}
</script>

<style lang="less" scoped>
.wall-index {
  .bgup {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    background-color: white;
    opacity: 0.6;

  }

  .bg {
    transition: @tr;
    width: 100%;
    // height: 840px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -2;
    opacity: 1;

    @media screen and (orientation:portrait) and (max-device-width:600px) and (max-device-height:900px) {
      height: 100% !important;
      width: auto;
      left: -249px;
    }
  }
}
</style>