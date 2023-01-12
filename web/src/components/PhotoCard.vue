<template>
  <div class="hh-photo-card">
    <img :src="photo.imgurl" class="photo-img" />
    <div class="photo-bg" @click="toDetail"></div>
    <div class="photo-like" @click="clickLike">
      <span class="iconfont icon-aixin" :class="{ islike: card.islike[0].count > 0 }"></span>
      <span class="like-data">{{ photo.like[0].count }}</span>
    </div>
  </div>
</template>

<script>
import { baseUrl } from '@/utils/env'
import { insertFeedbackApi } from '@/api';
export default {
  data() {
    return {
      baseUrl,
      user: this.$store.state.user,
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
  methods: {
    // 显示详情
    toDetail() {
      this.$emit('toDetail');
    },
    clickLike() {
      if (this.card.islike[0].count == 0) {
        let data = {
          wallId: this.card.id,
          userId: this.user.id,
          type: 0,
          moment: new Date(),
        }
        insertFeedbackApi(data).then(() => {
          //反馈完成
          this.card.like[0].count++;
          this.card.islike[0].count++;
        })
      }
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

  .photo-img {
    width: 100%;
  }

  .photo-bg {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: @tr;
    cursor: pointer;
  }

  .photo-like {
    position: absolute;
    top: @padding-8;
    left: @padding-8;
    background: rgba(255, 255, 255, 0.80);
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
      color: @gray-3;
      margin-right: @padding-4;
    }

    .like-data {
      color: @gray-1;
    }
  }



  &:hover {
    .photo-bg {
      opacity: 1;
    }

    .islike {
      color: @like-color;
    }

    .photo-like {
      opacity: 1;
    }
  }
}
</style>