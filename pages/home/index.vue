<template>
	<view class="wrapper">
		<!-- 滑动组件 -->
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<image
						src="https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/indigenouswarao.jpg"
						style="width:100%;height: 150px;"></image>
				</swiper-item>
				<swiper-item>
					<image src="https://www.un.org/sites/un2.un.org/files/2020/06/venezuelanrefugee.jpg" mode=""
						style="width:100%;height: 150px;"></image>
				</swiper-item>
				<swiper-item>
					<image src="http://www.xinhuanet.com/politics/2021-01/06/1126952445_16099187126981n.jpeg" mode=""
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
						<uni-list-chat title="最美舞蹈"
							avatar="http://www.xinhuanet.com/politics/2021-01/06/1126952445_16099187127121n.jpeg"
							note="在湖北省武汉客厅方舱医院，医护人员带领患者们跳舞" time="2020-02-02 20:20" badge-positon="left"
							badge-text="dot">
							<view class="chat-custom-right">
								<text class="chat-custom-text">刚刚</text>
								<uni-icons type="star-filled" color="#999" size="18"></uni-icons>
							</view>
						</uni-list-chat>
						<uni-list-chat title="社区防疫工作"
							avatar="http://www.xinhuanet.com/politics/2021-01/06/1126952445_16099187127141n.jpeg"
							note="湖北省武汉市中华路街道西城壕社区党委书记翁文静（右二）与志愿者柳莹（右三）、张琦（右一）上街进行防疫宣讲" time="2023-02-02 20:20"
							badge-positon="left" badge-text="dot"></uni-list-chat>
						<uni-list-chat title="方舱医院最新消息"
							avatar="http://www.xinhuanet.com/politics/2021-01/06/1126952445_16099187127071n.jpeg"
							note="患者在江汉方舱医院内。当日22时，位于湖北省武汉市江汉区武汉国际会展中心的“方舱医院”正式启用，开始接收新冠肺炎轻症患者" time="2023-02-01 20:20"
							badge-positon="left" badge-text="dot"></uni-list-chat>
						<uni-list-chat title="关于凌晨的医护人员"
							avatar="http://www.xinhuanet.com/politics/2021-01/06/1126952445_16099187127091n.jpeg"
							note="凌晨，江西省南昌大学第一附属医院象湖院区重症监护室的医护人员在救治一名新冠肺炎重症患者" time="2023-02-01 20:20"
							badge-positon="left" badge-text="dot"></uni-list-chat>
						<uni-list-chat title="口罩下的脸庞"
							avatar="http://www.xinhuanet.com/politics/2021-01/06/1126952445_16099187127101n.jpeg"
							note="江西省南昌大学第一附属医院象湖院区隔离病房重症监护室医护人员脸上被护目镜和口罩压出的印痕（拼版照片）" time="2023-02-01 20:20"
							badge-positon="left" badge-text="dot"></uni-list-chat>

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
				swiperList: [],
				notes: [],
				background: ['color1', 'color2', 'color3'],
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
			async getSwiperList() {
				const res = await uni.$http.get('/api/carousel')
				if (res.code == 200) {
					this.swiperList = res.data
				}
			},
			async getNotesList() {
				const res = await uni.$http.get('/api/notes')
				if (res.code == 200) {
					this.notes = res.data
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
