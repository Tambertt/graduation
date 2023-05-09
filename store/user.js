export default {
	namespaced:true,
	state:{
		userInfo:uni.getStorageSync("userInfo")?JSON.parse(uni.getStorageSync("userInfo")):{},
		token:uni.getStorageSync('token')?JSON.parse(uni.getStorageSync('token')):""
	},
	mutations:{
		setUserInfo(state,data){
			uni.setStorageSync("userInfo",JSON.stringify(data))
		},
		setToken(state,token){
			uni.setStorageSync('token',JSON.stringify(token))
		},
		removeInfo(state){
			state.userInfo={};
			state.token="";s
			uni.removeStorageSync("token");
			uni.removeStorageSync("userInfo")
		}
	}
}