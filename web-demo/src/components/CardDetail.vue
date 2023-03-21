<template>
  <div class="card-detail">
    <div class="top-bt">
      <p class="revoke" @click="deleteWall">联系博主撕掉该便签</p>
      <p class="report">举报</p>
    </div>
    <note-card-vue :note="card"></note-card-vue>
    <div class="form">
      <textarea class="message" placeholder="请输入..." v-model="discuss"></textarea>
      <div class="bt">
        <input type="text" class="name" placeholder="签名" v-model="name" />
        <hh-button-vue class="btt" :class="{ notallowed: !isDis }" @click="submit">评论</hh-button-vue>
      </div>
    </div>
    <p class="title">评论{{ cards.comcount[0].count }}</p>
    <div class="comment">
      <div class="comment-li" v-for="(e, index) in comments" :key="index">
        <div class="user-head" :style="{ backgroundImage: portrait[e.imgurl] }"></div>
        <div class="comm-m">
          <div class="m-top">
            <p class="name">{{ e.name }}</p>
            <p class="time">{{ dataOne(e.moment) }}</p>
          </div>
          <div class="mm">{{ e.comment }}</div>
        </div>
      </div>
      <p class="more" @click="getComment" v-show="nowpage">加载更多...</p>
    </div>
  </div>
</template>

<script>
import NoteCardVue from './NoteCard.vue';
import HhButtonVue from './HhButton.vue';
import { portrait } from '@/utils/data'
import { dataOne } from '@/utils/hhsg'
import { insertCommentApi } from '@/api/index'
import { findCommentPageApi } from '@/api/index'
import { deleteWallApi } from '@/api/index';
export default {
  data() {
    return {
      comments: [],
      portrait,
      dataOne,
      discuss: '',
      name: '',
      user: this.$store.state.user,
      nowpage: 1,   //当前页
      pagesize: 9,
    }
  },
  props: {
    card: {
      default: {},
    }
  },
  computed: {
    isDis() {
      return !!this.discuss;
    },
    cards() {
      return this.card;
    }
  },
  components: {
    NoteCardVue,
    HhButtonVue,
  },
  methods: {
    submit() {
      if (this.isDis) {
        let img = Math.floor(Math.random() * 14);
        let name = this.name ? this.name : "匿名";
        let data = {
          wallId: this.cards.id,
          userId: this.user.id,
          imgurl: img,
          moment: new Date(),
          name: name,
          comment: this.discuss,
        }
        console.log(data)
        insertCommentApi(data).then(() => {
          this.comments.unshift(data);
          this.cards.comcount[0].count++;
          this.discuss = '';
        })
      }
    },
    // 获取评论
    getComment() {
      if (this.nowpage > 0) {
        let data = {
          id: this.cards.id,
          page: this.nowpage,
          pagesize: this.pagesize,
        }
        findCommentPageApi(data).then((res) => {
          this.comments = this.comments.concat(res.message);
          console.log(this.comments)
          if (res.message.length == this.pagesize) {
            this.nowpage++;
          } else {
            this.nowpage = 0;
          }
        })
      }
    },
    deleteWall() {
      console.log(this.cards);
      if (this.cards.userId == this.user.id) {
        let data = {
          id: this.cards.id,
        }
        deleteWallApi(data).then((res) => {
          console.log(res);
          this.$emit('deleteWall');
        })
      }
    }
  },
  mounted() {
    this.getComment();
  },
  watch: {
    card() {
      this.nowpage = 1;
      this.comments = [];
      this.getComment();
    }
  }
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

      .btt {
        transition: opacity ease 0.3s;

      }

      .notallowed {
        opacity: 0.6;
        cursor: not-allowed;
      }
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

      .name {
        font-weight: 600;
      }

      .time {
        font-size: @size-12;
        padding-left: 4px;
        color: @gray-3;
      }
    }

    .mm {
      padding-top: @padding-4;
    }
  }

  .more {
    margin-bottom: 29px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
}
</style>