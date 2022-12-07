<template>
  <div class="card-detail">
    <div class="top-bt">
      <p class="revoke">联系博主撕掉该便签</p>
      <p class="report">举报</p>
    </div>
    <note-card-vue :note="card"></note-card-vue>
    <div class="form">
      <textarea class="message" placeholder="请输入..."></textarea>
      <div class="bt">
        <input type="text" class="name" placeholder="签名" />
        <hh-button-vue>评论</hh-button-vue>
      </div>
    </div>
    <p class="title">评论{{ card.comment }}</p>
    <div class="comment">
      <div class="comment-li" v-for="(e,index) in comment" :key="index">
        <div class="user-head" :style="{backgroundImage:portrait[e.imgurl]}"></div>
        <div class="comm-m">
          <div class="m-top">
            <p class="name">{{ e.name }}</p>
            <p class="time">{{ dataOne(e.moment) }}</p>
          </div>
          <div class="mm">{{ e.message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoteCardVue from './NoteCard.vue';
import HhButtonVue from './HhButton.vue';
import { comment } from '../../mock/index'
import { portrait } from '@/utils/data'
import { dataOne } from '../utils/hhsg'
export default {
  data() {
    return {
      comment: comment.data,
      portrait,
      dataOne
    }
  },
  props: {
    card: {
      default: {},
    }
  },
  components: {
    NoteCardVue,
    HhButtonVue,
  },


}

</script>

<style lang="less" scoped>
.card-detail {
  position: relative;
  padding: 0 @padding-20;

  .top-bt {
    position: fixed;
    top: 0;
    left: 0;
    padding: @padding-20;
    display: flex;

    .revoke {
      color: @primary-color;
      cursor: pointer;
      margin-right: 30px;
      font-size: @size-16;
    }

    .report {
      cursor: pointer;
      font-size: @size-16;
      color: @warning-color;
    }
  }

  .form {
    .message {
      background: none;
      resize: none;
      padding: @padding-8;
      border: 1px solid rgba(148, 148, 148, 1);
      box-sizing: border-box;
      height: 56px;
      width: 100%;
      margin-top: @padding-12;
      font-family: fa;
      font-size: 15px;
    }

    .bt {
      display: flex;
      padding-top: 8px;
      justify-content: space-between;
    }

    .name {
      font-family: fa;
      width: 200px;
      box-sizing: border-box;
      padding: @padding-8;
      background: none;
      border: 1px solid rgba(148, 148, 148, 1);
      line-height: 20px;
    }
  }

  .title {
    font-weight: 600;
    padding-top: 25px;
    padding-bottom: 20px;
  }
  .comment-li {
    display: flex;
    padding-bottom: 30px;
    .user-head {
      flex: none;
      width: 28px;
      height: 28px;
      border-radius: 20px;
      background-color: red;
    }
    .comm-m {
      padding-left: @padding-8;
    }
    .m-top {
      display: flex;
      align-items: center;
      .name{
        font-weight: 600;  
      }
      .time{
        font-size: @size-12;
        padding-left: 4px;
        color: @gray-3;
      }
    }
    .mm {
      padding-top: @padding-4;
    }

  }
}
</style>