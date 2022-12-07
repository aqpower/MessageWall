import { createStore } from 'vuex'

// 创建一个新的 store 实例
// 修改这里的整个系统都会更新
const store = createStore({
  state() {
    return {
      count: 0,
      user: '',
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    //进来的时候创建
    getUser(state, n) {
      state.user = n;
    }
  }
})

export default store;
