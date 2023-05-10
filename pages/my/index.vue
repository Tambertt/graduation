<template>
	<view class="my">
		<LogIn v-if="!userInfo.avatarUrl"></LogIn>
		<UserInfo v-else></UserInfo>
	</view>

</template>

<script>
	import UserInfo from "@/component/userInfo/index.vue";
	import LogIn from "@/component/login/index.vue";
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		components: {
			UserInfo,
			LogIn
		},
     
		onLoad() {
			try {
				const value = uni.getStorageSync("user-info")
				if (value) {
					this.userInfo = JSON.parse(value)
					this.onLoad()
				}
			} catch (e) {
				//TODO handle the exception
				uni.showToast({
					title: e.message,
					duration: 2000
				});

			}
		}
		
	}
</script>

<style>
</style>
