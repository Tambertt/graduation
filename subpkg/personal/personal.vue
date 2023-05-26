<template>
    
	<uni-section title="个人信息" type="line">
		<view class="example">
			<!-- 基础用法，不包含校验规则 -->
			<uni-forms ref="baseForm" :modelValue="baseFormData">
				<uni-forms-item label="姓名" required>
					<uni-easyinput v-model="baseFormData.username" placeholder="请输入姓名" />
				</uni-forms-item>
				<uni-forms-item label="年龄" required>
					<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
				</uni-forms-item>
				<uni-forms-item label="性别" required>
					<uni-data-checkbox v-model="baseFormData.gender" :localdata="sexs" />
				</uni-forms-item>
				<uni-forms-item label="电话" required>
					<uni-easyinput v-model="baseFormData.phone" placeholder="请输入电话" />
				</uni-forms-item >  
				<uni-forms-item>
					<button type="primary" style="margin-top:20rpx" @click="postData">保存</button>
				</uni-forms-item>
			</uni-forms>
		</view>
	</uni-section>

</template>

<script>
	export default {
		data() {
			return {
				baseFormData: {
					username: '111',
					age: '18',
					gender: 0,
					phone: '15349180591'
				},
				
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}, {
					text: '保密',
					value: 2
				}],
			}
		},
		created() {
			uni.$http.get('/getUserInfo').then(res=>{
				if(res.code == 400){
					uni.showToast({
						title:res.msg,
						icon:'error'
					})
				}else{
					this.baseFormData.username = res.data.user_name
					this.baseFormData.age = res.data.age
					this.baseFormData.gender = res.data.gender
					this.baseFormData.phone = res.data.phone
				}
			})
		},
		methods:{
			postData(){
				uni.$http.post('/personal',this.baseFormData).then(res=>{
					if(res.code==200){
						uni.showToast({
							title:'提交成功',
							
						})
					}
				})
			}
		}
	}
</script>

<style>
</style>
