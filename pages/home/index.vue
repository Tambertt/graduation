<template>
	<view class="wrapper">
		<!-- 滑动组件 -->
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 公告通知栏 -->
		<view class="container">
			<uni-section class="uni-section">
				<uni-notice-bar show-icon scrollable
					text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
			</uni-section>
		</view>
		<!-- 按钮区 -->
		<view class="buttons">
			<button class="btn" @click="gotoInfo">每日打卡</button>
			<button class="btn" @click="gotoMap">周边健康</button>
		</view>
		<!-- 最新通告 -->

		<view class="content">
			<uni-section title="最新通告" type="line">
				<uni-list>
					<uni-list :border="true">
						<uni-list-chat title="哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈" avatar="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
							note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot"></uni-list-chat>
						<uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息" time="2020-02-02 20:20"
							badge-positon="left" badge-text="dot">
							<view class="chat-custom-right">
								<text class="chat-custom-text">刚刚</text>
								<uni-icons type="star-filled" color="#999" size="18"></uni-icons>
							</view>
						</uni-list-chat>
					</uni-list>
				</uni-list>
			</uni-section>
			
			<!-- <uni-list>
				<uni-list-item  title="哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈" ></uni-list-item>
				<uni-list-item :disabled="true" title="列表禁用状态" ></uni-list-item>
			</uni-list> -->
			<!-- <uni-list>
				<uni-list-item title="列表左侧带略缩图" note="列表描述信息"
					thumb="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" thumb-size="lg"
					rightText="右侧文字"></uni-list-item>
			</uni-list> --> 



		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				//avatarList: [{
					//url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png'
				//}, {
				//	url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png'
				//}, {
				//	url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png'
				//}]
			}
		},
		methods:{
			gotoInfo(){
				uni.navigateTo({
					url:"/subpkg/infoCollection/infoCollection"
				})
			},
			gotoMap(){
				uni.navigateTo({
					url:"/subpkg/healthMap/healthMap"
				})
			}
		}
	}
</script>

<style lang="less">
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 300rpx;
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.uni-bg-red {
		background-color: red;
	}

	.uni-bg-green {
		background-color: green;
	}

	.uni-bg-blue {
		background-color: blue;
	}

	.container {
		position: absolute;
		left: 0;
		right: 0;
		top: 255rpx;
		bottom: 0;
		z-index: -1;
	}

	.buttons {
		margin-top: 120rpx;

		width: 100%;

		.btn {
			margin-bottom: 5rpx;
			width: 700rpx;
			height: 100rpx;
			border-radius: 10rpx;
			line-height: 100rpx;
			background-color: #ffaa7f;
		}
	}

	.notice {
		margin: 30rpx 0 0;
		padding: 5rpx;
		border: 1px solid #ccc;
		background-color: #fff;

		.title {
			display: flex;
			align-items: center;

			.text {
				margin-right: 10rpx;
			}
		}

		.content {
			.chat-custom-right {
				flex: 1;
				/* #ifndef APP-NVUE */
				display: flex;
				/* #endif */
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-end;
			}

			.chat-custom-text {
				font-size: 12px;
				color: #999;
			}

		}
	}
</style>
