<template>
    <div class="plan">
        <top :text="header"></top>
        <div class="plan-content">
            <div class="plan-content-top">
                <ul class="clearfix">
                    <li class="fl plan-content-top-li" @click="y">
                        {{yun}}月
                        <div class="play-content-top-text" :style="height">
                            <ul>
                                <li @click.stop="yf(1)">1</li>
                                <li @click.stop="yf(2)">2</li>
                                <li @click.stop="yf(3)">3</li>
                                <li @click.stop="yf(4)">4</li>
                                <li @click.stop="yf(5)">5</li>
                                <li @click.stop="yf(6)">6</li>
                                <li @click.stop="yf(7)">7</li>
                                <li @click.stop="yf(8)">8</li>
                                <li @click.stop="yf(9)">9</li>
                                <li @click.stop="yf(10)">10</li>
                                <li @click.stop="yf(11)">11</li>
                                <li @click.stop="yf(12)">12</li>
                            </ul>
                        </div>
                    </li>
                    <li class="fl plan-content-top-li" @click="z">
                        第{{zho}}周
                        <div class="play-content-top-text" :style="heights">
                            <ul>
                                <li @click.stop="zh(1)">1</li>
                                <li @click.stop="zh(2)">2</li>
                                <li @click.stop="zh(3)">3</li>
                                <li @click.stop="zh(4)">4</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="plan-content-text">
                <ul>
                    <li v-for='item in planList' @click='goPlanDetails(item)'>
                        <div class="clearfix plan-content-texts">
                            <div class="fl plan-content-img">
                                <img :src="item.original_img" alt="">
                            </div>
                            <div class="fr plan-content-r">
                                <p class="clearfix">
                                    <span style='display: none;' class="fl">减肥计划</span>
                                    <span class="fr">￥{{item.shop_price}}</span>
                                </p>
                                <p class="clearfix">
                                    <span class="fr">
                                        X1
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="plan-content-num clearfix">
                            <span class="fr">
                                共1件
                            </span>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import header from './header.vue'
export default {
    components:{
        top:header
    },
    data(){
        return {
            header:'我的计划',
            height:'height:0',
            yun:6,
            heights:'height:0',
            zho:1,
            planList:'',
            planId:''
        }
    },
    created(){
    	this.getPlanList()
    },
    methods:{
        //控制月份出现
        y:function(){
            if(this.height == 'height:0'){
                this.height = 'height:auto'
            }else{
                this.height = 'height:0'
            }
        },
        //选择月份
        yf:function(num){
            this.yun = num;
            this.height = 'height:0'
            console.log(num)
        },
        //控制周出现
        z:function(){
            if(this.heights == 'height:0'){
                this.heights = 'height:auto'
            }else{
                this.heights = 'height:0'
            }
        },
        //选择周
        zh:function(num){
            this.zho = num;
            this.heights = 'height:0'
            console.log(num)
        },
        getPlanList(){
        	let _this=this;
        	let user_id=sessionStorage.getItem('user_id')
        	_this.$axios({
        		method:'POST',
        		url:_this.$host+'/index.php/Home/Myplan/myplan',
        		params:{
        			user_id:user_id
        		}
        	}).then((res)=>{
        		console.log(res)
        		_this.planList=res.data.data;
        		
        	})
        },
        goPlanDetails(item){
        	let _this=this;
//      	 switch (_this.zho) {
//		      case '1':
//		        name = 'one_status';
//		        break;
//		      case '2':
//		        name = 'two_status';
//		        break;
//		      case '3':
//		        name = 'san_status';
//		        break;
//		      case '4':
//		        name = 'si_status';
//		        break;
//		    }
             if(_this.zho==1){
             	_this.zho='one_status'
             }else if(_this.zho==2){
             	_this.zho='two_status'
             	
             }else if(_this.zho==3){
             	_this.zho='san_status'
             	
             }else if(_this.zho==4){
             	_this.zho='si_status'
             	
             }
        	 console.log(_this.zho)
        	_this.$router.push({path:'plan_detail',query:{id:item.id,status:_this.zho}})
        }
    }
}
</script>

<style scoped>
.plan-content-num{
    padding: .3rem;
    font-size: .26rem;
}
.plan-content-r p:first-child{
    margin-bottom: .2rem;
}
.plan-content-r{
    width: 4.8rem;
    font-size: .26rem;
}
.plan-content-img img{
    width: 1rem;
    height: 1rem;
}
.plan-content-img{
    width: .1rem;
    height: 1rem;
    margin-right: .4rem;
}
.plan-content-texts{
    padding: .4rem .3rem;
    border-bottom: 1px solid rgb(243, 243, 243);
}
.plan-content-text li{
    width: 6.9rem;
    margin:0 auto;
    margin-top: .2rem;
    background: #fff;  
    border-radius: 5px;
    overflow: hidden;  
}
.play-content-top-text{
    width: 100%;
    position: absolute;
    background: #009aff;
    border: 1px solid rgb(243, 243, 243);
    transition: all 1s;
    overflow: hidden;
    height: 0;
    color: #fff;
    z-index: 99999;
}
.plan-content-top{
    height: .8rem;
    line-height: .8rem;
    text-align:center;
    font-size: .3rem;
    background: #fff;
}
.plan-content-top-li{
    width: 50%;
    position: relative;
}
</style>
