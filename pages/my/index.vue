<template>
	<view class="my">
		<LogIn v-if="!isShow"></LogIn>
		<UserInfo v-else></UserInfo>
	</view>

</template>

<script>
	import UserInfo from "@/component/userInfo/index.vue";
	import LogIn from "@/component/login/index.vue";
	export default {
		data() {
			return {
				isShow: false
			}
		},
		components: {
			UserInfo,
			LogIn
		},
		created() {
			const userInfo =uni.getStorageSync("userInfo")
			if (userInfo) {
				this.isShow = true
			}
		}

	}
</script>

<style>
</style>
