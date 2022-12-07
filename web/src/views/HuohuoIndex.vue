<template>
  <div class="wall-index">
    <top-bar></top-bar>
    <video src="@/assets/images/qm1.mp4" autoplay="autoplay" muted="nuted" loop="loop" class="bg-video" ></video>
    <router-view></router-view>
    <foot-bar-vue></foot-bar-vue>
  </div>
</template>

<script>
import topBar from '@/components/TopBar.vue'
import FootBarVue from '@/components/FootBar.vue'
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

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.wall-index {
  .bg-video {
    height: 840px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
</style>