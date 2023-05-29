
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from "@/store/index.js"
import amap from './common/amap-wx.130';  
import { $http }from '@escook/request-miniprogram'
Vue.config.productionTip = false

App.mpType = 'app'

//请求封装

uni.$http=$http
$http.baseUrl="https://74334h82j5.zicp.fun"
$http.beforeRequest=function(options){
	const token = uni.getStorageSync('token') 
	if(token){	 
		options.header.Authorization = `Bearer ${JSON.parse(token)}`
		options.header['Access-Control-Allow-Origin'] = '*'
	}
	uni.showLoading({
		title:'数据加载中...'
	})
}
$http.afterRequest=function(options){
	uni.hideLoading()
}

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