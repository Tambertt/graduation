<template>
	<personal-container>
		<uni-section title="基本用法" type="line">
			<view class="example">
				<!-- 基础用法，不包含校验规则 -->
				<uni-forms ref="baseForm" :modelValue="baseFormData">
					<uni-forms-item label="姓名" required>
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required>
						<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="性别" required>
						<uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
					</uni-forms-item>
					<uni-forms-item label="兴趣爱好" required>
						<uni-data-checkbox v-model="baseFormData.hobby" multiple :localdata="hobbys" />
					</uni-forms-item>
					<uni-forms-item label="自我介绍">
						<uni-easyinput type="textarea" v-model="baseFormData.introduction" placeholder="请输入自我介绍" />
					</uni-forms-item>
					<uni-forms-item label="日期时间">
						<uni-datetime-picker type="datetime" return-type="timestamp"
							v-model="baseFormData.datetimesingle" />
					</uni-forms-item>
				</uni-forms>
			</view>
		</uni-section>
	</personal-container>
	
</template>

<script>
	export default{
		data(){
			return { 
				baseFormData:{
					name:'',
					age:'',
					sex:'',
					city:''
				}
			}
		}
	}
</script>

<style>
</style>
