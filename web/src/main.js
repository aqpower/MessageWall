import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// import axios from 'axios'
// import VueAxios from 'vue-axios'

//注册自己的组件
import HUOHUO from '@/components/Huohuo/index'

const app = createApp(App)
app.use(router);
app.use(store);
// app.use(VueAxios, axios);
app.use(HUOHUO)

app.mount('#app')