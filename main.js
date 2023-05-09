
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from "@/store/index.js"

Vue.config.productionTip = false

App.mpType = 'app'

//封装提示函数
uni.$showMsg = function(title='数据请求失败！',duration = 1500){
	uni.showToast({
		title,
		duration,
		icon:"none"
	})
}

const app = new Vue({
    ...App,
	store
})

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif