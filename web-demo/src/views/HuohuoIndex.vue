<template>
  <div class="wall-index">
    <top-bar></top-bar>
    <!-- <img src="@/assets/images/JGOX.png" class="bg"/> -->
    <!-- <video src="@/assets/images/qm1.mp4" autoplay="autoplay" muted="nuted" loop="loop" class="bg-video"></video> -->
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
      aaa: ' ',
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
    }
  }
}
</script>

<style lang="less" scoped>
.wall-index {
  .bg {
    height: 840px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.3;
  }
}
</style>