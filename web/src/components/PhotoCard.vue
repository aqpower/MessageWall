<template>
  <div class="hh-photo-card">
    <img :src="require('../../static/' + photo.imgurl + '.jpg')" class="photo-img" />
    <div class="photo-bg"></div>
    <div class="photo-like">
      <span class="iconfont icon-aixin"></span>
      <span class="like-data">{{ photo.like }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    photo: {
      default: {},
    }
  },
  computed: {
    card() {
      return this.photo;
    }
  },
  created() {
    // console.log(this.photo)
  }
}
</script>

<style lang="less" scoped>
.hh-photo-card {
  position: relative;
  .photo-img{
    width: 100%;
  }

  .photo-bg {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.2);
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: @tr;
  }
  .photo-like{
    position: absolute;
    top: @padding-8;
    left: @padding-8;
    background: rgba(255,255,255,0.80);
    border-radius: 20px;
    height: 28px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: @tr;
    cursor: pointer;
    .icon-aixin {
      color:@gray-3;
      margin-right: @padding-4;
    }
    .like-data {
      color: @gray-1;
    }
  }
  &:hover{
    .photo-bg{
      opacity: 1;
    }
    .photo-like{
      opacity: 1;
    }
  }
}
</style>