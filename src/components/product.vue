<template>
    <div class="product">
        <top :text="header"></top>
        <div class="product-content">
            <div class="product-content-img">
                <img :src="proData.original_img" alt="">
            </div>
            <div class="product-content-name">
                <p class="product-content-p" style="margin-bottom: 2px;">
                    <span>热卖</span>{{proData.goods_name}}
                </p>
                <p v-if={isCount} style='padding-bottom: 10px;display:none;color: #ff6976;font-size: 13px;'>距团购结束还剩:</p>
                <p style="font-size: 13px;color:#989898;padding-bottom: 20px;">{{proData.goods_remark}}</p>
                <p class="clearfix product-content-num">
                    <span class="fl product-content-money">
                                                             ￥{{proData.shop_price}}
                    </span>
                    <span class="fl" style="display: none;">
                        231人已参团成功
                    </span>
                    <span class="fr">
                        销量{{num}}
                    </span>
                </p>
            </div>
            <div class="product-content-text">
                <div class="product-content-text-top clearfix">
                    <div class="fl product-content-text-top-l">
                        宝贝评价{{content.num}}
                    </div>
                    <div class="fr product-content-text-top-r" @click='todetails'>
		                	 查看全部>
                       
                    </div>
                </div>
                <ul class="evaluation-content-text" v-if='content==null'>
                    <li v-for='item in content' class="evaluation-content-texts">
                        <div class="evaluation-content-texts-header clearfix">
                            <img src="../assets/images/commonality/portrait.png" alt="" class="fl evaluation-content-img">
                            <span class="fl evaluation-content-name">{{item.username}}</span>
                        </div>
                        
                        <div class="evaluation-content-texts-content">
                            {{item.content}}
                        </div>
                    </li>
                    
                </ul>
                <ul v-else style="text-align: left;color:#989898">暂时没有评论</ul>
               
            </div>
            <div class="product-content-she" style="display: none;">
      
                
            </div>
            <div class="product-content-xiang">
                <h1 class="product-content-xiang-title">详情</h1>
                <p style="text-align: left;padding: 10px;font-size: 0.24rem;" v-html="article"></p>
            </div>
            <div class="product-content-xiang">
                <h1 class="product-content-xiang-title">相似商品</h1>
                <ul class="product-content-xiang-ul clearfix">	                       	
	                    <li class="fl" v-for='item in similarity'>
	                    	<router-link :to="{path:'/product',query:{goodId:item.goods_id}}">
		                        <div class="product-content-xiang-ul-img">
		                            <img :src="item.original_img" alt="">
			                        <div class="classify-ul-img-text">{{item.goods_name}}</div>
		                            
		                        </div>
		                        <div class="product-content-xiang-ul-text clearfix">
		                            <div class="fl">￥{{item.shop_price}}</div>
		                            <div @click="gobuy" class="fr">立即购买</div>
		                        </div>
	                        </router-link>
	                    </li>
	                   
                </ul>
            </div>
        </div>
        <div class="foot clearfix">
            <div class="fl foot-ke">客服</div>
            <div class="fl foot-you" @click="show">赠送朋友</div>
            <div class="fl foot-mai" @click="gobuy">立即购买</div>
        </div>
        <!-- 赠送朋友弹窗 -->
        <div class="product-tan" style='display: none;' ref="box" @click="over($event)">
            <div class="product-tan-content">
                <p class="product-tan-content-title">送给最关心的她/他</p>
                <input v-model='phone' type="text" class="product-tan-content-text" placeholder="请填写受赠人的手机号码">
                <span @click="sendFriend" class="product-tan-btn">确定</span>
                <p class="product-tan-text">送礼须知：</p>
                <ul>
                	<li style="font-size: 0.26rem;color:#8F8F8F;text-align: left;padding-bottom: 8px;" v-for='(item,index) in needList'>{{item.content}}</li>
                	
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import header from './header.vue'
import { Toast } from 'we-vue'
export default {
    components:{
        top:header
    },
    data(){
        return{
            header:'商品详情',
            similarity:[],
            proData:'',
            content:'',
            num:'',
            needList:'',
            phone:'',
            goods_id:'',
            status:'',
            isgroup:'',
            notice:'',
            sTime:'',
            eTime:'',
            isCount: true,  //是否团购
            article:''
        }
    },
    created(){
    	this.getProDetails()
    },
    methods:{
        show:function(){
            this.$refs.box.style.display = 'block';
        },
        over:function(event){
            var el1 = event.currentTarget;
            var el2 = event.target;
            if(el1 == el2){
                this.$refs.box.style.display = 'none';
            }
        },
        todetails(){
        	
        	this.$router.push({path:'/evaluation',query:{goodId:this.goods_id,status:this.status}});
        },
        getProDetails(){
        	let _this=this;
        	let goods_id=_this.$route.query.goodId;
        	console.log(goods_id)
        	let user_id=sessionStorage.getItem('user_id');
        	_this.$axios({
        		  method:'POST',
        		  url:_this.$host+'/index.php/Home/Homeapi/good_detail',
        		  params:{
        		  	goods_id:goods_id,
        		  	user_id:user_id
        		  }
        	}).then((res)=>{
        		console.log(res)
        		
        		_this.proData=res.data.data;
        		_this.content=res.data.content;
        		_this.num=res.data.goods_total;
        		_this.similarity=res.data.xm;
        		_this.needList=res.data.needs;
        		_this.goods_id=res.data.goods_id;
        		_this.status=res.data.status;
        		 _this.isgroup=res.data.restatus; //是否为团购商品
		         _this.notice=res.data.needs; //须知		          
		         _this.sTime=res.data.data.start_time; //开始时间
		         _this.eTime=res.data.data.end_time;
		         
		          let temp = document.createElement('div')
	    			temp.innerHTML = res.data.data.goods_content;
	    			
	    			_this.article = temp.innerText
		          console.log(_this.article)
        		
        	})
        },
        gobuy(){
        	let _this=this;
        	console.log(_this.goods_name)
        	_this.$router.push({
        		path:'confirm',
        		query:{
        			gid:_this.goods_id,
        			img:_this.proData.original_img,
        			good_name:_this.proData.goods_name,
        			good_price:_this.proData.shop_price
        			
        		}
        	})
        },
        sendFriend(){
        	let _this=this;
        	let phone=_this.phone;
        	let goods_id=_this.goods_id;
        	console.log(phone)
        	let user_id=sessionStorage.getItem('user_id');
        	if(!_this.phone){
//      		console.log(11)
        		Toast.text({
					  duration: 1000,
					  message: '请输入受赠人手机号码!'
					})
        	}else{
        		_this.$axios({
        		  method:'POST',
        		  url:_this.$host+'/index.php/Home/Homeapi/givegift',
        		  params:{
        		  	phone:phone,
        		  	goods_id:goods_id,
        		  	user_id:user_id
        		  }
        	}).then((res)=>{
        		console.log(res)
        		if(res.data.status==1){
        			
                _this.$refs.box.style.display = 'none';
        		_this.$router.push({
	        		path:'confirm',
	        		query:{
	        			gid:_this.goods_id,
	        			img:_this.proData.original_img,
	        			good_name:_this.proData.goods_name,
	        			good_price:_this.proData.shop_price,
	        			phone:_this.phone
	        			
        		}
        	})	
        		}
        	})
        	}
        	
        }
        
    }
}
</script>

<style scoped>
.product-content-img{
    width: 100%;
    height: 5rem;
    
}
.product-content-img img{
    width: 100%;
    height: 100%;
}
.product-content-name{
    padding: .3rem;
    background: #fff;
    text-align: left;
    font-size: .3rem;
    border-bottom:2px dashed #d6d6d6;
}
.product-content-name .product-content-p{
    margin-bottom: .25rem;
}
.product-content-p span{
    display: inline-block;
    width: .72rem;
    height: .34rem;
    font-size: .2rem;
    text-align: center;
    line-height: .34rem;
    color: #fff;
    background:#ff6976;
     border-radius: 5px;
    vertical-align: middle;
    margin-right: .2rem;
    margin-bottom: .1rem;
}
.product-content-num{
    font-size: .22rem;
    color: #8f8f8f;
    line-height: .3rem;
}
.product-content-money{
    font-size: .3rem;
    color: #ff6976;
    margin-right: .2rem;
}
.product-content-text{
    padding: .35rem;
    background:#fff;
    
}
.product-content-text-top{
    line-height: .3rem;
    margin-bottom:.3rem;
}
.product-content-text-top-l{
    font-size: .26rem;
}
.product-content-text-top-r{
    font-size: .2rem;
    color: #ff6976;
}
.evaluation-content-text{
    background: #fff;
}
.evaluation-content-texts{
    background: #fff;
    border-bottom:1px solid #f1f1f1;
    padding-bottom:.3rem;
    margin-bottom: .3rem;
}
.evaluation-content-texts:last-child{
    border-bottom:0px;
    margin-bottom: 0rem;
    padding-bottom:0rem;
}
.evaluation-content-texts-header{
    margin-bottom: .25rem;
}
.evaluation-content-img{
    width: .4rem;
    height: .4rem;
    display: block;
    border-radius: 50%;
    background: #009aff;
    overflow: hidden;
    margin-right: .2rem;
}
.evaluation-content-name{
    font-size: .26rem;
    line-height: .4rem;
}
.evaluation-content-texts-time{
    font-size: .2rem;
    color: #8f8f8f;
}
.evaluation-content-texts-time span{
    margin-right: .3rem;
}
.evaluation-content-texts-content{
    margin-top: .1rem;
    font-size: .24rem;
    line-height: .4rem;
    text-align: left;
}
.product-content-she{
    border-top: 2px dashed #d6d6d6;
    line-height:1rem;
    height: 1rem;
    border-bottom: 2px dashed #d6d6d6;
    background: #fff;
    font-size: .26rem;
    padding: 0 .35rem;
    text-align: left;
}
.product-content-she span{
    font-size: .4rem;
    color: #ff6976;
}
.product-content-xiang{
    background: #fff;
    border-bottom: 2px dashed #d6d6d6;
    border-top: 2px dashed #d6d6d6;
}
.product-content-xiang p p img{
	width:100%
}
.product-content-xiang:last-child{
    border-bottom: 0px;
}
.product-content-xiang-title{
    font-size: .3rem;
    width: 1.8rem;
    padding: .1rem;
    border-bottom: 2px solid #5acfec;
    display: block;
    margin: 0 auto;
    padding-top: .3rem;
    margin-bottom: .2rem;
}
.product-content-xiang-ul{
    padding: .3rem;
    padding-bottom: 1.2rem;
    
}
.product-content-xiang-ul li{
    border-radius: 5px ;
    overflow: hidden;
	  box-shadow:4px 4px 5px #eee,2px -2px 2px #eee,-4px 4px 4px #eee,-2px -2px 2px #eee;
    
}
.product-content-xiang-ul li:first-child{
    margin-right: .58rem;
}
.product-content-xiang-ul-img{
    width: 3.16rem;
    height: 3.22rem;
   
    position: relative;
}
.product-content-xiang-ul-text{
    height: .65rem;
    line-height: .65rem;
    padding: 0 .23rem;
    box-shadow: -4px 3px 12px #000;
    font-size: .24rem;
}
.product-content-xiang-ul-text div:first-child{
    color: #ff6976;
}
.product-content-xiang-ul-text div:last-child{
    color: #8f8f8f;
}
.foot{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #fff;
    overflow: hidden;
    border-top: 1px solid #f3f3f3;
}
.foot div{
    width: 33.3%;
    text-align: center;
}
.foot-you{
    background: #ff6976;
    color: #fff;
    font-size: .3rem;
}
.foot-mai{
    background: #5acfec;
    color: #fff;
    font-size: .3rem;
}
.product-tan{
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .5);
    z-index: 9999999;
}
.product-tan-content{
    width: 5.6rem;
    padding: .4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background:#fff;
}
.product-tan-content-title{
    font-size: .26rem;
    color: #5acfec;
    margin-bottom:.5rem;
}
.product-tan-content-text{
    width: 100%;
    text-align: center;
    height: 1rem;
    border-bottom: 1px solid rgb(243,243,243);
    margin-bottom:.3rem;
    font-size: .3rem;
}
.product-tan-btn{
    font-size: .3rem;
    color: #5acfec;
    text-align: center;
   display: inline-block;
   margin-bottom: .4rem;
}
.product-tan-text{
    color: #8f8f8f;
    font-size: .26rem;
    margin-bottom: .2rem;
    text-align: left;
}
.classify-ul-img-text{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        line-height: 3.22rem;
        color: #fff;
        text-align: center
    }
</style>
