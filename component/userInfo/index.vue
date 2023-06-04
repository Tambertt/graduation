<template>
	<!-- <view class="userinfo">
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
	</view> -->
	<view class="userinfo">
		<view class="avatar">
			<image :src="avatar" mode="" class="image"></image>
			<view class="info">
				<view class="nickname">
					{{nickname}}
				</view>
			</view>
			<image src="../../static/arc.png" mode="" class="img"></image>
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
			const userInfo =JSON.parse(uni.getStorageSync('userInfo'))[0]
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
							uni.removeStorageSync("userInfo")
							uni.removeStorageSync("token")
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
		background-image: url('../../static/3.jpg');
		background-size: cover;
		//background-color: #b7ffb3;
		width: 750rpx;

		.avatar {
			position: relative;
			padding: 0 0 80rpx 20rpx;
			display: flex;
			align-items: flex-end;
			height: 360rpx;

			.image {
				width: 150rpx;
				height: 150rpx;
				margin-right: 60rpx;
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
				color: #353535;
				font-size: 40rpx;
				font-weight: 400;

			}

			.img {
				position: absolute;
				bottom: -4rpx;
				left: 0;
				width: 100%;
				height: 30rpx;
				z-index: 999;
			}
		}

	}
</style>
