<template>
	<view class="userinfo">
		<view class="avatar">	
				<image :src="avatar" mode=""></image>
			<view class="info">
				<view class="nickname">
					{{nickname}}
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
			}
		},
		created() {
			const userInfo = uni.getStorageSync('userInfo')[0]
			this.avatar = userInfo.avatar_url
			this.nickname = userInfo.nick_name
		},
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

			image {
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
