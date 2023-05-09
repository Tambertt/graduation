<template>
	<view class="userinfo">
		<view class="avatar">
			<image :src="userInfo.avatarUrl" mode=""></image>
			<view class="info">
				<view class="nickname">
					{{userInfo.nickName}}
				</view>
				<view class="number">
					15349180591
				</view>
			</view>
		</view>
		<view class="card">
			<uni-list>
				<uni-list-item showArrow title="个人信息" />
				<uni-list-item @click="logout" clickable showArrow title="退出登录" />
			</uni-list>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				userInfo:{}
			}
		},
         onLoad() {
         	uni.getStorage({
         		key:"user-info",
				success(res) {
					//console.log(res);
					//this.userInfo=res.data
				}
         	})
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
