<template>
	<view class="map_container">
		<map class="map" id="map" :longitude="longitude" :latitude="latitude" scale="14" show-location="true"
			:markers="covers" bindmarkertap="makertap" style="width:750rpx;height: 1334rpx;"></map>
	</view>
</template>

<script>
	import amapFile from '@/libs/amap-wx.130.js'
	export default {
		data() {
			return {
				longitude: '108.906944',
				latitude: '34.158668',
				covers: [{
                    id:1,
					width:38,
					height:38,
					latitude:34.158426,
					longitude:108.909926,
					iconPath: '../../static/1.png'
				}, {
					id:2,
					width:38,
					height:38,
			    	latitude:34.15615,
					longitude:108.909335,
					iconPath: '../../static/2.png'
				},
				{
					id:3,
					width:38,
					height:38,
					latitude:34.157752,
					longitude:108.906879,
					iconPath: '../../static/1.png'
				},
				{
					id:4,
					width:38,
					height:38,
					latitude:34.158916,
					longitude:108.907337,
					iconPath: '../../static/2.png'
				},
				{
					id:5,
					width:38,
					height:38,
					latitude:34.15615,
					longitude:108.909335,
					iconPath: '../../static/1.png'
				},
				{
					id:6,
					width:38,
					height:38,
					latitude:34.159016,
					longitude:108.906917,
					iconPath: '../../static/1.png'
				},
				{
					id:7,
					width:38,
					height:38,
					latitude:34.157996,
					longitude:108.908939,
					iconPath: '../../static/2.png'
				},
				{
					id:8,
					width:38,
					height:38,
					latitude:34.158132,
					longitude:108.909233,
					iconPath: '../../static/1.png'
				},
				{
					id:9,
					width:38,
					height:38,
					latitude:34.159008,
					longitude:108.904944,
					iconPath: '../../static/2.png'
				},
				{
					id:10,
					width:38,
					height:38,
					latitude:34.156708,
					longitude:108.909635,
					iconPath: '../../static/2.png'
				},
				{
					id:11,
					width:38,
					height:38,
					latitude:34.156729,
					longitude:108.909977,
					iconPath: '../../static/2.png'
				},
				{
					id:12,
					width:38,
					height:38,
					latitude:34.156739,
					longitude:108.907677,
					iconPath: '../../static/2.png'
				},
				{
					id:13,
					width:38,
					height:38,
					latitude:34.156769,
					longitude:108.906677,
					iconPath: '../../static/2.png'
				},
				{
					id:14,
					width:38,
					height:38,
					latitude:34.156799,
					longitude:108.905677,
					iconPath: '../../static/2.png'
				},
				{
					id:15,
					width:38,
					height:38,
					latitude:34.158729,
					longitude:108.907677,
					iconPath: '../../static/2.png'
				},
				{
					id:16,
					width:38,
					height:38,
					latitude:34.156829,
					longitude:108.919677,
					iconPath: '../../static/2.png'
				}]
			}
		},
		onLoad() {
			var myAmapFun = new amapFile.AMapWX({
				key: 'bfab788f4c0103cb9324caaa9b40b9ae'
			});
			var that = this
			myAmapFun.getPoiAround({
				success: function(data) {
					//成功回调
					console.log(data.markers);
					//that.markers = data.markers
				},
				fail: function(info) {
					//失败回调
					console.log(info)
				}
			})
		}
	}
</script>

<style>
	.map_container {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 750rpx;
		height: 1334rpx;
	}
</style>
