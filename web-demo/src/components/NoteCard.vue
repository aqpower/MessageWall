<template>
  <div class="hh-node-card" :style="{ width: width, background: cardColor[card.color] }">
    <div class="top">
      <p class="time">{{ dataOne(card.moment) }}</p>
      <p class="label">{{ label[card.type][card.label] }}</p>
    </div>
    <div class="message" @click="toDetail">
      {{ card.message }}
    </div>
    <div class="foot">
      <div class="foot-left">
        <div class="icon">
          <span class="iconfont icon-aixin" @click="clickLike()" :class="{ islike: card.islike[0].count > 0 }"></span>
          <span class="value">{{ card.like[0].count }}</span>
        </div>
        <div class="icon" v-if="card.comcount[0].count">
          <span class="iconfont icon-liuyan"></span>
          <span class="value">{{ card.comcount[0].count }}</span>
        </div>
      </div>
      <div class="name">
        {{ card.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { label, cardColor } from '../utils/data'
import { dataOne } from '../utils/hhsg'
import { insertFeedbackApi } from '@/api/index'
export default {
  data() {
    return {
      label,
      cardColor,
      dataOne,
      user: this.$store.state.user,
    }
  },
  props: {
    width: {
      default: '100%',
    },
    note: {
      default: {},
    }
  },
  computed: {
    card() {
      return this.note;
    }
  },
  created() {
    // console.log(this.card)
  },
  methods: {
    toDetail() {
      this.$emit('toDetail')
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

  }
}
</script>

<style lang="less" scoped>
.hh-node-card {
  height: 240px;
  padding: 10px 20px;
  box-sizing: border-box;
  position: relative;

  .top {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;

    p {
      font-size: 12px;
      color: @gray-3;
    }
  }

  .message {
    height: 140px;
    font-family: fa;
    font-size: 15px;
    color: @gray-1;
    cursor: pointer;
  }

  .foot {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 16px;
    left: 0;
    padding: 0 @padding-20;
    box-sizing: border-box;
    width: 100%;

    .foot-left {
      display: flex;

      .value {
        font-size: @size-12;
        color: @gray-2;
        line-height: 16px;
        padding-left: 4px;
      }

      .icon-font {
        font-size: 16px;
        color: @gray-2;
      }

      .icon {
        padding-right: @padding-8;
        display: flex;
        align-items: center;
      }

      .icon-aixin {
        cursor: pointer;
        transition: @tr;

        &:hover {
          color: @like-color;
        }
      }

      .islike {
        color: @like-color;
      }
    }

    .name {
      font-family: fa;
      font-size: 17px;
      color: @gray-1;
      font-weight: 500;
    }
  }
}
</style>