<template>
	<view class="container">
		<uni-section title="今日健康打卡" type="line">
			<!-- 基础用法，不包含校验规则 -->
			<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top" label-width="100">
				<uni-forms-item label="体温" required>
					<uni-data-select placeholder="请选择体温" v-model="baseFormData.temperature.value"
						:localdata="baseFormData.temperature.range" @change="changeTemp"></uni-data-select>
				</uni-forms-item>

				<uni-forms-item label="今日健康状况" required>
					<uni-data-checkbox icon="left" v-model="baseFormData.symptoms.value"
						:localdata="baseFormData.symptoms.selection" @change="changeSymp"></uni-data-checkbox>
				</uni-forms-item>

				<uni-forms-item label="定位" required>
					<uni-easyinput class="input" v-model="baseFormData.address" type="text" />
					<button class="btn" type="primary" @click="getRegeo">定位
						<uni-icons class="icons" type="location" size="25" color="white"></uni-icons>
					</button>
				</uni-forms-item>
			</uni-forms>

			<button type="primary" @click="submit('valiForm')">提交</button>
		</uni-section>
	</view>
</template>

<script>
	import amap from '@/common/amap-wx.130.js';
	export default {
		data() {
			return {
				baseFormData: {
					temperature: {
						value: 0,
						range: [{
								value: 0,
								text: "36.0℃~37.2℃"
							},
							{
								value: 1,
								text: "37.2℃~38.5℃"
							},
							{
								value: 2,
								text: "38.5℃以上"
							},

						]
					},
					symptoms: {
						value: 0,
						selection: [{
								value: 0,
								text: "正常"
							},
							{
								value: 1,
								text: "异常（发热、干咳、乏力、鼻塞、流涕、咽痛、结膜炎、肌肉疼痛、腹泻等）"
							}
						]
					},
					address: ''
				},
				amapPlugin: null,
				key: 'bfab788f4c0103cb9324caaa9b40b9ae'
			}
		},
		onLoad() {
			this.amapPlugin = new amap.AMapWX({
				key: this.key
			});
			console.log(this.amapPlugin);
		},
		methods: {
			changeTemp(e) {
				console.log(e);
			},
			changeSymp(e) {
				console.log(e.detail.value);
			},
			getRegeo() {
				uni.showLoading({
					title: '获取信息中'
				});
				this.amapPlugin.getRegeo({
					success: (data) => {
						console.log(this)
						this.baseFormData.address = data[0].name;
						
						uni.hideLoading();
					},
					fail:(err) =>{
						console.log(err);
					}
				});
			}

		},

	}
</script>

<style lang="less">
	.container {
		padding: 0 10rpx;

		.btn {
			width: 200rpx;
			height: 72rpx;
			line-height: 72rpx;
			position: absolute;
			top: 0;
			right: 3rpx;
			font-size: 32rpx;
			z-index: 999;
			.icons {
				position: absolute;
				top: 0;
				right: 16rpx;
				margin-left: 10rpx;
			}
		}
	}
</style>
