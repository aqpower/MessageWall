<template>
  <div class="new-card">
    <div class="colors">
      <p class="color-li" v-for="(e, index) in cardColor1" :key="index" :style="{ background: e }"
        :class="{ colorselected: index == colorSelected }" @click="changeColor(index)"></p>
    </div>
    <div class=" card-main" :style="{ background: cardColor[colorSelected] }">
      <textarea placeholder="留言..." class="message" maxlength="96" v-model="message"></textarea>
      <input type="text" placeholder="签名" class="name" v-model="name" />
    </div>
    <div class="labels">
      <p class="title">选择标签</p>
      <!-- 从主页面拿标签 -->
      <div class="label">
        <p class="label-li" v-for="(e, index) in label[id] " :key="index"
          :class="{ labelselected: index == labelSelected }" @click="changeLabel(index)">
          {{ e }}
        </p>
      </div>
    </div>
    <div>
      <p class="title">温馨提示</p>
      <p class="mzsm">
        请不要利用此平台服务制作、上传、下载、复制、发布、传播或者转载如下内容：<br />
        1、反对宪法所确定的基本原则的；<br />
        2、危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家 统一的；<br />
        3、损害国家荣誉和利益的；<br />
        4、煽动民族仇恨、民族歧视，破坏民族团结的；<br />
        5、破坏国家宗教政策，宣扬邪教和封建迷信的；<br />
        6、散布谣言，扰乱社会秩序，破坏社会稳定的；<br />
        7、散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；<br />
        8、侮辱或者诽谤他人，侵害他人合法权益的；<br />
        9、含有法律、行政法规禁止的其他内容的信息。
      </p>
    </div>
    <div class="footbt">
      <hh-button-vue size="max" nom="secondary" @click="closeModal(0)">丢弃</hh-button-vue>
      <hh-button-vue size="max" class="submit" @click="apiTest()">确定</hh-button-vue>
    </div>
  </div>
</template>

<script>
import { cardColor, cardColor1, label } from "@/utils/data"
import HhButtonVue from "./HhButton.vue";
export default {
  data() {
    return {
      cardColor,
      cardColor1,
      colorSelected: 0, // 当前选择颜色
      labelSelected: 0, // 当前选择标签
      label,
      message: '',      // 留言信息
      name: '',         // 签名
    }
  },
  props: {
    id: {
      default: 0,
    }

  },
  methods: {
    // 点击切换颜色
    changeColor(e) {
      this.colorSelected = e;
    },
    // 点击切换标签
    changeLabel(e) {
      this.labelSelected = e;
    },

    //关闭窗口
    closeModal(data) {
      this.$emit('addClose', data);
    },

    apiTest() {
      let data = {
        type: 0,
        message: 'Hello!',
        name: 'JGOX',
        userId: '32',
        moment: new Date(),
        label: 0,
        color: 3,
        imgurl: 'www.aqpower.cn',
      }
      this.axios
        .post("http://localhost:3000/insertwall", data)
        .then((res) => {
          console.log(res)
          console.log('111')
        })
    }
  },
  components: {
    HhButtonVue,
  },
}
</script>

<style lang="less" scoped>
.new-card {
  padding: 0 @padding-20 120px;

  .colors {
    padding-bottom: @padding-12;
    display: flex;
    align-items: center;

    .color-li {
      width: 24px;
      height: 24px;
      margin-right: @padding-8;
      float: left;
    }

    .colorselected {
      border: 1px solid @primary-color;
    }
  }

  .card-main {
    height: 240px;
    width: 100%;
    padding: @padding-12;
    box-sizing: border-box;
    transition: @tr;

    .message {
      background: none;
      border: none;
      resize: none;
      padding: @padding-8;
      box-sizing: border-box;
      height: 172px;
      width: 100%;
      font-size: 15px;
      font-family: fa;
    }

    .name {
      width: 100%;
      box-sizing: border-box;
      padding: @padding-8;
      background: none;
      border: 1px #fff solid;
      line-height: 20px;
      font-size: 15px;
      font-family: fa;
    }
  }

  .title {
    color: @gray-1;
    font-weight: 600;
    padding-top: 25px;
  }

  .label {
    display: flex;
    flex-wrap: wrap;
    width: 320px;

    .label-li {
      padding: 2px 10px;
      border-radius: 20px;
      margin: 16px @padding-4 0 0;
      cursor: pointer;
      color: @gray-2;
      transition: @tr;
    }

    .labelselected {
      background: #EBEBEB;
      color: @gray-1;
      font-weight: 600;
    }
  }

  .mzsm {
    padding-top: 10px;
    font-size: 12px;
    color: @gray-3;
  }

  .footbt {
    padding: @padding-20;
    box-sizing: border-box;
    position: fixed;
    bottom: 52px;
    left: 0;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    width: 100%;

    .submit {
      margin-left: @padding-20;
      width: 200px;
    }
  }
}
</style>