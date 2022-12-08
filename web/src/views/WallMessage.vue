<template>
  <div class="wall-message">
    <p class="title">{{ wallType[id].name }}</p>
    <p class="slogan">{{ wallType[id].slogan }}</p>
    <div class="label">
      <p class="label-list" :class="{ lbselected: nlabel == -1 }" @click="selectNode(-1)">全部</p>
      <p class="label-list" :class="{ lbselected: nlabel == index }" @click="selectNode(index)"
        v-for="(e, index) in label[id]" :key="index">{{ e }}</p>
    </div>
    <div class="card" :style="{ width: nWidth + 'px' }" v-show="id == 0">
      <node-card-vue v-for="(e, index) in note" :key="index" :note="e" class="card-inner" :width="'288px'"
        :class="{ cardselected: index == cardSelected }" @click="selectCard(index)">
      </node-card-vue>
    </div>
    <div class="photo" v-show="id == 1">
      <photo-card-vue class="photo-card" :photo="e" v-for="(e, index) in photo" :key="index" @click="selectCard(index)">
      </photo-card-vue>
    </div>

    <!-- 卡片状态 -->
    <div class="none-msg" v-if="(isOk == 0)">
      <p>{{ none[id].message }}</p>
    </div>
    <!-- lottie动画 -->
    <div class="loading" v-show="(isOk == -1)">
      <div id=lottie></div>
      <p>加载中...</p>
    </div>

    <p class="bottom-tip" v-show="(isOk == 2)">没有更多...</p>

    <div class="add" :style="{ bottom: addBottom + 'px' }" @click="addCard" v-show="!modal">
      <span class="iconfont icon-tianjia"></span>
    </div>
    <hh-modal-vue :title="title" @close="closeModal" :isModal="modal">
      <new-card-vue :id="id" @addClose="closeModal" v-if="cardSelected == -1" @clickbt="newCard"></new-card-vue>
      <card-detail-vue v-if="cardSelected != -1" :card="cards[cardSelected]"></card-detail-vue>
    </hh-modal-vue>
    <hh-viewer-vue :isView="view" :photos="photoArr" :nowNumber="cardSelected" @viewSwitch="viewSwitch()">
    </hh-viewer-vue>
  </div>
</template>

<script>
import { wallType, label, none } from '../utils/data'
import NodeCardVue from '@/components/NoteCard.vue'
import HhModalVue from '@/components/HhModal.vue'
import NewCardVue from '@/components/NewCard.vue'
import CardDetailVue from '@/components/CardDetail.vue'
import PhotoCardVue from '@/components/PhotoCard.vue'
import HhViewerVue from '@/components/HhViewer.vue'
import { photo } from '../../mock/index'
import lottie from 'lottie-web'
import loading from '@/assets/images/loading.json'
export default {
  data() {
    return {
      wallType,
      label,
      none,
      // id: 0,//留言墙与照片墙的切换id
      nlabel: -1, //当前对应的标签
      note: '',
      photo: photo.data,
      photoArr: [],//图片列表
      nWidth: 0,//卡片模块宽度
      addBottom: 30,//add按钮距离底部高度
      title: "",//新建标题
      modal: false,//是否调用弹窗
      view: false,//预览大图
      cardSelected: -1, //当前选择卡片
      isOk: -1,// 是否加载中 -1加载状态
    }
  },
  components: {
    NodeCardVue,
    HhModalVue,
    NewCardVue,
    CardDetailVue,
    PhotoCardVue,
    HhViewerVue
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
    cards() {
      let a = '';
      if (this.$route.query.id == 0) {
        a = this.note;
      } else if (this.$route.query.id == 1) {
        a = photo.data;
      }
      return a;
    }
  },
  methods: {
    //切换label
    selectNode(e) {
      this.nlabel = e;
    },
    // note的宽度
    noteWidth() {
      //页面宽度
      let wWidth = document.body.clientWidth;
      this.nWidth = Math.floor((wWidth - 120) / 300) * 300;
    },
    //监听页面滚动
    scrollBottom() {
      //距离顶部高度
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      //屏幕高度
      let clientHeight = document.documentElement.clientHeight;
      //内容高度
      let scrollHeight = document.documentElement.scrollHeight;
      if (scrollTop + clientHeight + 230 >= scrollHeight) {
        this.addBottom = scrollTop + clientHeight + 230 - scrollHeight;
      } else {
        this.addBottom = 30;
      }
    },

    //新增卡片
    addCard() {
      this.title = "写留言";
      this.modal = true;
    },

    //切换窗口打开与关闭
    closeModal() {
      this.modal = false;
      this.view = false;
      if (this.cardSelected != -1) {
        this.cardSelected = -1;
      }
    },

    //选择卡片
    selectCard(e) {
      this.title = '';
      if (e == this.cardSelected) {
        this.cardSelected = -1;
        this.modal = false;
      } else {
        this.cardSelected = e;
        this.modal = true;
      }
      if (this.id == 1) {
        this.view = true;
      }
    },
    getPhoto() {
      for (let i = 0; i < this.photo.length; i++) {
        this.photoArr.push(this.photo[i].imgurl)
      }
    },
    //切换图片
    viewSwitch(e) {
      if (e == 0) {
        this.cardSelected--;
      } else {
        this.cardSelected++;
      }
    },
    // 前端插入卡片
    newCard(e) {
      console.log(e);
    },
    // lottie加载动画
    loading() {
      if (this.isOk == -1) {
        this.$nextTick(async () => {
          var params1 = {
            container: document.getElementById("lottie"),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: loading,
          };
          lottie.loadAnimation(params1);
        })
      }
    },
  },
  watch: {
    id() {
      this.modal = false;
      this.view = false;
      this.cardSelected = -1;
      this.nlabel = -1;
    },
  },
  mounted() {
    this.noteWidth();
    this.getPhoto();
    this.loading();
    //监听屏幕宽度变化
    window.addEventListener('resize', this.noteWidth);
    //监听高度变化
    window.addEventListener('scroll', this.scrollBottom);
  }
}
</script>

<style lang="less" scoped>
.wall-message {
  min-height: 700px;
  padding-top: 52px;

  .title {
    padding-top: 48px;
    padding-bottom: 8px;
    font-size: 56px;
    color: @gray-1;
    text-align: center;
    font-weight: 600;
  }

  .slogan {
    color: @gray-2;
    text-align: center;
  }

  .label {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    .label-list {
      padding: 0 14px;
      display: flex;
      align-items: center;
      height: 30px;
      line-height: 28px;
      margin: @padding-4;
      color: @gray-2;
      box-sizing: border-box;
      cursor: pointer;
    }

    .lbselected {
      color: @gray-1;
      font-weight: 600;
      border: 1px solid @gray-1;
      border-radius: 16px;
    }
  }

  .card {
    display: flex;
    flex-wrap: wrap;
    padding-top: 28px;
    margin: auto;

    .card-inner {
      margin: 6px;
    }

    .cardselected {
      border: 1px solid @primary-color;
    }
  }

  .photo {
    padding-top: 28px;
    width: 88%;
    margin: 0 auto;
    columns: 6;
    column-gap: @padding-4;

    .photo-card {
      width: 200px;
      margin-bottom: @padding-4;
      break-inside: avoid;
    }
  }

  .none-msg {
    width: 100%;
    text-align: center;
    // padding-top: 80px;
    position: absolute;
    top: 320px;

    img {
      display: inline;
    }

    p {
      font-family: fa;
      // font-weight: 600;
      font-size: 19px;
      color: @gray-3;
    }
  }

  .loading {
    text-align: center;
    width: 100%;

    #lottie {
      height: 200px;
    }

    p {
      font-family: fa;
      font-size: 19px;
      color: @gray-3;
    }
  }

  .bottom-tip {
    text-align: center;
    color: @gray-3;
    padding: 20px;
  }

  .add {
    width: 56px;
    height: 56px;
    background: @gray-1;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
    border-radius: 28px;
    position: fixed;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: @tr;

    .icon-tianjia {
      font-size: 24px;
      color: @gray-10;
    }
  }
}
</style>