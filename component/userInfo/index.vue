<template>
	<view class="userinfo">
		<view class="avatar">
			<button open-type="chooseAvatar" @chooseavatar="bindchooseavatar">
				<image :src="avatarUrl" mode=""></image>
			</button>
			<view class="info">
				<view class="nickname">
					{{nickName}}
				</view>
				<view class="number">
					15349180591
				</view>
			</view>
		</view>
		<view class="card">
			<uni-list>
				<uni-list-item showArrow title="个人信息" @click="getInfo" clickable />
				<uni-list-item @click="logout" clickable showArrow title="退出登录" />
			</uni-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: '',
				nickname: '',
				userInfo: {}
			}
		},
		// created() {
		// 	try {
		// 		const value = uni.getStorageSync("user-info")
		// 		if (value) {
		// 			this.userInfo = JSON.parse(value)
		// 		}
		// 	} catch (e) {
		// 		console.log(e);
		// 		//TODO handle the exception
		// 		uni.showToast({
		// 			title: e.message,
		// 			duration: 2000
		// 		});

		// 	}
		// },
		methods: {
			logout() {
				uni.showModal({
					cancelText: "取消",
					confirmText: "确定",
					title: "确定要退出吗？",
					success(res) {
						if (res.confirm) {
							uni.removeStorageSync("user-info")
							uni.reLaunch({
								url: '../../pages/my/index'
							});
						} else {
							uni.reLaunch({
								url: '../../pages/my/index'
							});
						}

					}
				})

			},
			getInfo() {
				uni.navigateTo({
					url: '../../subpkg/personal/personal'
				})
			},
			bindchooseavatar(e) {
                console.log(e);
				this.avatar = e.detail.avatarUrl
			}
		}

	}
</script>

<style lang="less">
	.userinfo {

		background-color: #b7ffb3;
		width: 750rpx;

		.avatar {
			padding: 0 0 20rpx 20rpx;
			display: flex;
			align-items: flex-end;
			height: 250rpx;

			button {
				width: 150rpx;
				height: 150rpx;
				margin-right: 20rpx;
				border: 1px solid #fff;
				border-style: outset;
				border-radius: 10rpx;
			}

			.info {
				flex: 1;
				height: 150rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				color: #ff92fa;
				font-size: 32rpx;
				font-weight: 400;
			}
		}

	}
</style>
