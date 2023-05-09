<template>
	<view class="my">
		<!-- <LogIn v-if="!userInfo.nickName"></LogIn> -->
		<!-- <UserInfo></UserInfo> -->
	</view>

</template>

<script>
	import UserInfo from "@/component/userInfo/index.vue";
	import LogIn from "@/component/login/index.vue";
	export default {
		data(){
			return{
			  userInfo:{}	
			}
		},
		components: {
			UserInfo,
			LogIn
		},
		
		onLoad(options) {
			uni.getStorage({
				key: "user-info",
				success(res) {
					console.log(this);
					//this.userInfo = res.data
				}
			})
		}
	}
</script>

<style>
</style>
