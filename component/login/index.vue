<template>
	<view class="login-container">
		<!-- 提示登录的图标 -->
		<uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
		<!-- 登录按钮 -->
		<button type="primary" class="btn-login" @click="getUserInfo">一键登录</button>
		<!-- 登录提示 -->
		<view class="tips-text">登录后尽享更多权益</view>
	</view>
</template>

<script>
	export default {
		name: "my-login",
		data() {
			return {

			};
		},

		methods: {

			getUserInfo() {
				const data = uni.getStorageSync('token')
				if (data) {
					uni.removeStorageSync('token')
					uni.removeStorageSync('userInfo')
				} else {
					let that = this;
					uni.login({
						success(result) {
							const params = {
								appid: 'wxe76f40a9a303ef9c',
								appsecret: 'b1846c8b0a38f3b6d3609c481521f8a1',
								code: result.code
							}
							uni.$http.get('/api/user', params).then(res => {
								if (res.data.code == 200) {
									uni.setStorageSync('userInfo',JSON.stringify(res.data.data))
									uni.setStorageSync('token',JSON.stringify(res.data.token))
									uni.reLaunch({
										url: '../../pages/my/index'
									})
								}
							})
						}
					})
				}


			},


		}
	}
</script>

<style lang="scss">
	.login-container {
		// 登录盒子的样式
		height: 1107rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f8f8f8;
		position: relative;
		overflow: hidden;

		// 绘制登录盒子底部的半椭圆造型
		&::after {
			content: ' ';
			display: block;
			position: absolute;
			width: 100%;
			height: 40px;
			left: 0;
			bottom: 0;
			background-color: white;
			border-radius: 100%;
			transform: translateY(50%);
		}

		// 登录按钮的样式
		.btn-login {
			width: 90%;
			border-radius: 100px;
			margin: 15px 0;
			background-color: #c00000;
		}

		// 按钮下方提示消息的样式
		.tips-text {
			font-size: 12px;
			color: gray;
		}
	}
</style>
