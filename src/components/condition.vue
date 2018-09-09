<template>
    <div class="condition">
        <top :text="header"></top>
        <div class="condition-content">
        	<!-- 提示 -->
			  <div class="hint">特别提示：定制食谱需要您完善以下信息，请务必认真填写，填写完成后请点击提交。</div>
			  <div class="hint">注意: 体重单位为千克，年龄单位为岁，身高单位为米</div>
            <p class="condition-content-title">
                请如实填写以下信息：
            </p>
            <ul class="condition-content-top clearfix">
                <li class="fl">
                    <input v-model="age" type="text" placeholder="请输入您的年龄">
                </li>
                <li class="fl">
                    <input v-model="gender" type="text" placeholder="请输入您的性别">
                </li>
                <li class="fl">
                    <input v-model="stature" type="text" placeholder="请输入您的身高">
                </li>
                <li class="fl">
                    <input v-model='weight' type="text" placeholder="请输入您的体重">
                </li>
                <li class="fl">
                    <input v-model='occupation' type="text" placeholder="请输入您的职业">
                </li>
                <li class="fl">
                    <input v-model="region" type="text" placeholder="请输入您的地区">
                </li>
            </ul>
            <div class="condition-xz">
                <p class="condition-xz-title">
                    1、劳动强度 <span style="color:#FF6976">(劳动强度说明)</span>：
                </p>
                <ul class="condition-xz-ul clearfix">
                    <li @click='select1(1,index,item)'  v-for='(item,index) in arr1' :class="{blue:index==current1}" class="fl">
                        {{item}}
                    </li>
                    
                </ul>
            </div>
            <div class="condition-xz">
                <p class="condition-xz-title">
                    2、您的饮食习惯：
                </p>
                <ul class="condition-xz-ul clearfix">
                    <li v-for="(item,index) in arr2" @click='select1(2,index,item)' :class="{blue:index==current2}"  class="fl">
                        {{item}}
                    </li>
                    
                </ul>
            </div>
            <div class="condition-xz">
                <p class="condition-xz-title">
                    3、您是素食主义者吗?
                </p>
                <ul class="condition-xzs-ul">
                    <li @click='select1(3,index,item)' v-for='(item,index) in arr3' :class="{blue:index==current3}" >
                        {{item}}
                    </li>
                    
                </ul>
            </div>
            <div class="condition-xz">
                <p class="condition-xz-title">
                    4、您每月饮食花费：
                </p>
                <ul class="condition-xz-ul clearfix">
                    <li v-for="(item,index) in arr4" @click='select1(4,index,item)' :class="{blue:index==current4}"  class="fl">
                        {{item}}
                    </li>
                    
                </ul>
            </div>
            <div class="condition-xz">
                <p class="condition-xz-title">
                    5、您每周运动情况：
                </p>
                <ul class="condition-xz-ul clearfix">
                    <li v-for="(item,index) in arr5" @click='select1(5,index,item)' :class="{blue:index==current5}"  class="fl">
                        {{item}}
                    </li>
                    
                </ul>
            </div>
            <div class="condition-xz">
                <p class="condition-xz-title">
                    6、您每周应酬情况
                </p>
                <ul class="condition-xz-ul clearfix">
                    <li v-for="(item,index) in arr6" @click='select1(6,index,item)' :class="{blue:index==current6}"  class="fl">
                        {{item}}
                    </li>
                    
                </ul>
            </div>
            <div class="condition-xz">
                <p class="condition-xz-title">
                    7、您经常处在高度紧张的工作压力状态吗？
                </p>
                <ul class="condition-xz-ul clearfix item7" >
                    <li style="width: 45%;padding-right: 10px;" v-for="(item,index) in arr7" @click='select1(7,index,item)' :class="{blue:index==current7}"  class="fl">
                        {{item}}
                    </li>
                    
                </ul>
            </div>
            <div class="condition-xz">
                <p class="condition-xz-title">
                    8、您每天工作的时间平均为：
                </p>
                <ul class="condition-xz-ul clearfix">
                    <li v-for="(item,index) in arr8" @click='select1(8,index,item)' :class="{blue:index==current8}"  class="fl">
                        {{item}}
                    </li>
                    
                </ul>
            </div>
            <div class="condition-xz">
                <p class="condition-xz-title">
                    9、您每天睡眠时间为：
                </p>
                <ul class="condition-xz-ul clearfix">
                    <li v-for="(item,index) in arr9" @click='select1(9,index,item)' :class="{blue:index==current9}"  class="fl">
                        {{item}}
                    </li>
                    
                </ul>
            </div>
            <div class="condition-xz">
                <p class="condition-xz-title">
                    10、您排便情况为：
                </p>
                <ul class="condition-xz-ul clearfix">
                    <li v-for="(item,index) in arr10" @click='select1(10,index,item)' :class="{blue:index==current10}"  class="fl">
                        {{item}}
                    </li>
                    
                </ul>
            </div>
            <div class="condition-xz">
                <p class="condition-xz-title">
                    11、您是否抽烟：
                </p>
                <ul class="condition-xz-ul clearfix">
                    <li v-for="(item,index) in arr11" @click='select1(11,index,item)' :class="{blue:index==current11}"  class="fl">
                        {{item}}
                    </li>
                    
                </ul>
            </div>
            <div class="condition-xz">
                <p class="condition-xz-title">
                   12、您是否饮酒：
                </p>
                <ul class="condition-xz-ul clearfix">
                    <li v-for="(item,index) in arr12" @click='select1(12,index,item)' :class="{blue:index==current12}"  class="fl">
                        {{item}}
                    </li>
                    
                </ul>
            </div>
            <div class="condition-xz">
                <p class="condition-xz-title">
                   13、饮食详述（爱吃/不吃/其他）：
                </p>
                <textarea v-model="describe" name="" id="" class="textarea">

                </textarea>
            </div>
            <div class="confirm-foot clearfix">
                <div class="fl confirm-xy">
                    为保证食谱更有效果，请如实填写以上信息
                </div>
                <div @click="submitOrder" class="fr confirm-foot-btn">
                    提交订单
                </div>
            </div>
            <div class="condition-xz">
                <p class="condition-xz-title">
                    14、您是否是孕妇、乳母：
                </p>
                <ul class="condition-xz-ul clearfix">
                    <li v-for="(item,index) in arr14" @click='select1(14,index,item)' :class="{blue:index==current14}"  class="fl">
                        {{item}}
                    </li>
                    
                </ul>
            </div>
            <div class="condition-xz">
                <p class="condition-xz-title">
                   15、是否有遗传病或其他疾病：
                </p>
                <ul class="condition-xz-ul clearfix">
                    <li v-for="(item,index) in arr15" @click='select1(15,index,item)' :class="{blue:index==current15}"  class="fl">
                        {{item}}
                    </li>
                    
                </ul>
            </div>
            <div class="condition-xz">
                <p class="condition-xz-title">
                   疾病与伴随症状：
                </p>
                <p class="condition-xz-title">
                  其他疾病/曾就医次数/如今情况/伴随症状。
                </p>
                <p class="condition-xz-title">例：同时患糖尿病/曾因糖尿病就医3次/血糖指数最高值/如今血糖指数/失眠、多汗、便秘</p>
                <textarea v-model="disease" name="" id="" class="textarea">

                </textarea>
            </div>
        </div>
        
    </div>
</template>

<script>
import header from './header.vue'
import { Toast } from 'we-vue'
import test from '../assets/js/String.js'
import Qs from 'qs'
export default {
    components:{
        top:header
    },
    data(){
        return {
            header:'条件筛选',
            arr1:['A、轻体力','B、中体力',' C、重体力',' D、极重体力'],
            arr2:['A、清淡','B、中等适度',' C、中等偏重','D、重口味'],
            arr3:[' A、不是,每天都吃些瘦肉和鱼肉','B、不是,喜欢吃肉,尤其肥肉','C、是素食主义者'],
            arr4:['A、800元以下','B、800元-1500元','C、1500-2000元以上','D、 2500元以上'],
            arr5:['A、从不运动','B、每周3次以下',' C、每周3次以上','D、几乎天天参加'],
            arr6:['A、1天1次以上','B、 2天1次','C、3天1次','D、3-5天1次'],
            arr7:['A、不处于紧张压力工作状态','B、偶尔会有压力','C、经常处于紧张、压力状态','D、天天处在高度紧张、压力状态'],
            arr8:['A、6-8小时','B、8-12小时',' C、6小时以下','D、12小时以上'],
            arr9:['A、6-8小时','B、8小时以上',' C、4-6小时','D、4小时以下'],
            arr10:['A、每天1-2次','B、两天1次','C、3-5天1次','D、5天以上1次'],
            arr11:['A、从不','B、偶尔',' C、经常','D、烟不离手'],
            arr12:['A、从不','B、偶尔',' C、经常','D、无酒不欢'],
            arr14:['A、孕妇','B、乳母',' C、否'],
            arr15:['A、是','B、否'],
            
            age: '', //年龄
		    gender: '', //性别
		    stature: '', //身高
		    weight: '', //体重
		    occupation: '', //职业
		    region: '', //地区
		    labour: '', //劳动强力 
		    diet: '', //饮食
		    vegetarianism: '', //素食主义
		    consumption: '', //消费
		    exercise: '', //运动
		    engagement: '', //应酬
		    pressure: '', //压力
		    jobTime: '', //工作时间
		    sleepTime: '', //睡眠时间
		    cacation: '', //排便情况
		    smoking: '', //是否抽烟
		    drink: '', //是否饮酒
		    describe: '', //饮食描述
		    pregnant: '', //孕妇、乳母
		    genetic: '', //遗传病
		    disease: '', //病症描述
		    orderID: '',  //订单id

            current1:'-1',
            current2:'-1',
            current3:'-1',
            current4:'-1',
            current5:'-1',
            current6:'-1',
            current7:'-1',
            current8:'-1',
            current9:'-1',
            current10:'-1',
            current11:'-1',
            current12:'-1',
            current14:'-1',
            current15:'-1'
            
        }
    },
    methods:{
        select1:function(num,index,item){
        	let _this=this;
        	if(num==1){
        		this.current1=index;
        		_this.labour=item;
        	    console.log(item)
        	}else if(num==2){
        		this.current2=index;
        		_this.diet=item;
        		
        	    console.log(item)
        	}else if(num==3){
        		this.current3=index;
        		_this.vegetarianism=item;
        	    console.log(item)
        	}else if(num==4){
        		this.current4=index;
        		_this.consumption=item;
        	    console.log(item)
        	}else if(num==5){
        		this.current5=index;
        		_this.exercise=item;
        	    console.log(item)
        	}else if(num==6){
        		this.current6=index;
        		_this.engagement=item;
        	    console.log(item)
        	}else if(num==7){
        		this.current7=index;
        		_this.pressure=item;
        	    console.log(item)
        	}else if(num==8){
        		this.current8=index;
        		_this.jobTime=item;
        	    console.log(item)
        	}else if(num==9){
        		this.current9=index;
        		_this.sleepTime=item;
        	    console.log(item)
        	}else if(num==10){
        		this.current10=index;
        		_this.cacation=item;
        	    console.log(item)
        	}else if(num==11){
        		this.current11=index;
        		_this.smoking=item;
        	    console.log(item)
        	}else if(num==12){
        		this.current12=index;
        		_this. drink=item;
        	    console.log(item)
        	}else if(num==14){
        		this.current14=index;
        		_this. pregnant=item;
        	    console.log(item)
        	}else if(num==15){
        		this.current15=index;
        		_this. genetic=item;
        	    console.log(item)
        	}
        },
        submitOrder(){

        	let _this=this;
//      	console.log(_this.detail)
        	
        	if(!_this.age){
        		Toast.text({
					duration: 1000,
					message: '输入您的年龄!'
				})
        	}else if(!test.isPureNumber(_this.age)){
        		Toast.text({
					duration: 1000,
					message: '年龄必须是数字!'
				})
        	}
        	else if(!_this.gender){
        		Toast.text({
					duration: 1000,
					message: '输入您的性别!'
				})
        	}
        	else if(!_this.stature){
        		Toast.text({
					duration: 1000,
					message: '输入您的身高!'
				})
        	}else if(!_this.weight){
        		Toast.text({
					duration: 1000,
					message: '输入您的体重!'
				})
        	}else if(!_this.occupation){
        		Toast.text({
					duration: 1000,
					message: '输入您的职业!'
				})
        	}else if(!_this.region){
        		Toast.text({
					duration: 1000,
					message: '请输入您的地区!'
				})
        	}
        	else if(!_this.labour){
        		Toast.text({
					duration: 1000,
					message: '选择劳动强度!'
				})
        	}else if(!_this.diet){
        		Toast.text({
					duration: 1000,
					message: '选择饮食习惯!'
				})
        	}else if(!_this.vegetarianism){
        		Toast.text({
					duration: 1000,
					message: '选择是否是素食主义者!'
				})
        	}else if(!_this.consumption){
        		Toast.text({
					duration: 1000,
					message: '请选择您每月的饮食花费!'
				})
        	}else if(!_this.exercise){
        		Toast.text({
					duration: 1000,
					message: '请选择您每周运动情况!'
				})
        	}else if(!_this.engagement){
        		Toast.text({
					duration: 1000,
					message: '请选择您每周应酬情况!'
				})
        	}else if(!_this.pressure){
        		Toast.text({
					duration: 1000,
					message: '请选择您的工作压力!'
				})
        	}else if(!_this.jobTime){
        		Toast.text({
					duration: 1000,
					message: '请选择您的工作时间!'
				})
        	}else if(!_this.sleepTime){
        		Toast.text({
					duration: 1000,
					message: '请选择您的睡眠时间!'
				})
        	}else if(!_this.cacation){
        		Toast.text({
					duration: 1000,
					message: '请选择您的排便情况!'
				})
        	}else if(!_this.smoking){
        		Toast.text({
					duration: 1000,
					message: '请选择您是否抽烟!'
				})
        	}
        	else if(!_this.drink){
        		Toast.text({
					duration: 1000,
					message: '请选择您是否饮酒!'
				})
        	}else if(!_this.describe){
        		Toast.text({
					duration: 1000,
					message: '请输入饮食描述!'
				})
        	}else if(!_this.pregnant){
        		Toast.text({
					duration: 1000,
					message: '请选择您是否为孕妇或乳母!'
				})
        	}
        	else if(!_this.genetic){
        		Toast.text({
					duration: 1000,
					message: '请选择您是否有遗传病或其他疾病!'
				})
        	}else if(!_this.disease){
        		Toast.text({
					duration: 1000,
					message: '请输入您的疾病与伴随症状!'
				})
        	}
        	else{
        		let postData={
        			order_sn: _this.orderID,
			        user_id: sessionStorage.getItem('user_id'),
			        age: _this.age, //年龄
			        sex: _this.gender, //性别
			        hight: _this.stature, //身高
			        weight: _this.weight, //体重
			        occupation: _this.occupation, //职业
			        area: _this.region, //地区
			        labour: _this.labour, //劳动强度
			        eatfoot: _this.diet, //饮食
			        vegetarianism: _this.vegetarianism, //素食主义
			        pregnant: _this.pregnant, //孕妇
			        disease: _this.exercise, //疾病
			        disease_content: _this.disease, //疾病描述
			        evenpay: _this.consumption, //消费
			        weekpay: _this.engagement, //应酬
			        weekmotion: _this.exercise, //每周运动
			        work_status: _this.pressure, //工作压力状态
			        eventime: _this.jobTime, //工作时间
			        evensleep: _this.sleepTime, //睡眠时间
			        defecation: _this.cacation, //排便情况
			        smoking: _this.smoking, //吸烟
			        alcohol: _this.drink, //饮酒
			        detail: _this.describe, //饮食描述
        		}
        		_this.$axios({
        			method:'POST',
        			url:_this.$host+'/index.php/Home/Myplan/select',
		  		    data:Qs.stringify(postData)
        			
        		}).then((res)=>{
        			console.log(res)
        			if(res.data.status==1){
        				Toast.text({
							duration: 1000,
							message: '提交成功!'
						})
        			    _this.$router.push('/myorder')
        			}else{
        				Toast.text({
							duration: 1000,
							message: '提交失败!'
						})
        			}
        		})
        	}
        }
    }
}
</script>

<style scoped>
.textarea{
    width: 6.1rem;
    height: 1.2rem;
    display: block;
    margin:0 auto;
    border: 1px solid rgb(243, 243, 243);
    margin-top: .2rem;
    resize: none;
    font-size: .26rem;
    padding: .1rem;
}
.condition-xzs-ul li{
    margin-top: .2rem;
}
.condition-xzs-ul{
    padding-left: .2rem;
     font-size: .26rem;
     text-align:left;
}
.condition-xz-ul li{
    width: 50%;
    text-align: left;
    font-size: .26rem;
    margin-top: .2rem;
}
.condition-xz-ul{
    padding-left: .2rem;
    display: flex;
    flex-wrap: wrap;
}
.condition-xz-title{
    text-align:left;
    font-size: .26rem;
}
.condition-xz{
    margin-bottom: .3rem;
}
.condition-content-top li input{
    width: 100%;
    height: 100%;
    line-height: .66rem;
    font-size: .26rem;
    text-align: center;
}
.condition-content-top li{
    width: 3.2rem;
    height: .66rem;
    margin-right: .5rem;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    margin-bottom: .2rem;
}
.condition-content-top li:nth-child(2n){
    margin-right: 0rem;
}
.condition-content-title{
    font-size:.26rem;
    margin-bottom: .3rem;
    text-align:left;
}
.condition-content{
    background: #fff;
    border-top: .2rem solid rgb(243, 243, 243);
    padding:.2rem .3rem;
    padding-bottom: 1.2rem;
}
.confirm-foot{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #fff;
    border-top: 1px solid rgb(243, 243, 243);
    box-sizing: border-box;
}
.confirm-foot-btn{
    width: 2.2rem;
    text-align: center;
    height: 1rem;
    height: 1rem;
    background: #5acfec;
    color: #fff;
    font-size: .3rem;
}
.confirm-content-texts{
    width: 4.5rem;
}
.blue{
    color: #5acfec;
}
.confirm-xy{
    font-size: .22rem;
    padding-left: .2rem;
}
.check{
    vertical-align: middle;
}
/* 提示 */
.hint{
  background-color: #fff;
  color: red;
  font-size: .22rem;
  /* padding: 10rpx 30rpx; */
  /*padding: 0 .2rem;*/
  padding-top: 10px;
  text-align: left;
  
}
.hint:nth-child(2){
  padding: 10px 0 20px;
  color: #f4a110;
}

</style>
