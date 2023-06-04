<template>
	<view class="wrapper">
		<!-- 滑动组件 -->
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="item in swiperList" :key="item.id">
					<image
						:src="item.img_url"
						style="width:100%;height: 150px;"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 公告通知栏 -->
		<view class="container">
			<uni-section class="uni-section">
				<uni-notice-bar show-icon scrollable text="预计一个月后全面解封,出行不必再扫码戴口罩,即将就要恢复三年前的生活" />
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
						<uni-list-chat v-for="item in notes" :key="item.id" :title="item.title"
							:avatar="item.avatar"
							:note="item.note" :time="item.time"
							badge-positon="left" badge-text="dot"></uni-list-chat>
						

					</uni-list>
				</uni-list>
			</uni-section>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [],
				notes: [],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		onLoad() {
			this.getSwiperList()
			this.getNotesList()
		},
		methods: {
			gotoInfo() {
				uni.navigateTo({
					url: "/subpkg/infoCollection/infoCollection"
				})
			},
			gotoMap() {
				uni.navigateTo({
					url: "/subpkg/healthMap/healthMap"
				})
			},
			 getSwiperList() {
					 uni.$http.get('/api/carousel').then(res=>{
						 console.log(res);
						 if(res.data.code == 200){
							 this.swiperList = res.data.data
						 }
					 })
					
				
			},
			async getNotesList() {
				const res = await uni.$http.get('/api/notes')
				if (res.data.code == 200) {
					 res.data.data.map(item=>{
						let date = item.time.split('T')[0]
						let t = item.time.split('T')[1].split('.')[0]
						item.time = `${date} ${t}`
					})
					this.notes = res.data.data
				}
			}
		},

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
