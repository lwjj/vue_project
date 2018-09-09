<template>
    <div class="everyonethin_index" style="height: 100%;">
    	<top :text="header"></top>
        <div class="img" v-html="actimg">
            
        </div>
        <div class="classify index-bao">
        	<p style="margin: 20px 0;display: none;">商品展示</p>
	        <ul class="classify-ul" style="padding: 50px 0;margin-top: 20px;">
	        	
	            <li class="fl" v-for="item in renList">
	            	<router-link :to="{path:'/product',query:{goodId:item.goods_id}}">
	            		<div class="classify-ul-img" style="background: #eee;">
		                    <img :src="item.original_img" alt="">
		                    
		                </div>
		            </router-link>
		                <div class="classify-ul-text clearfix">
		                	<div style="text-align: left;font-size: 14px;line-height: 1;padding: 4px 0;">{{item.goods_name}}</div>
		                	<p style="padding: 2px 0;margin: 0 0 5px;line-height:1;text-align: left;font-size: 12px;color:#999;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{item.goods_remark}}</p>
		                    <span style="color:#ff6976" class="fl">￥{{item.shop_price}}</span>
		                    <span class="fr" style='color:#999;'>		                	
	            	        销量{{item.sales_sum}}
		                    </span>
		                </div>
	            	
	               
	            </li>
	
	        </ul>
    </div>
        
    </div>
</template>
<script>
import { Toast } from 'we-vue'
import Qs from 'qs'
import header from './header.vue'
export default {
    components:{
    	top:header
    },
    data(){
        return{
        	renList:'',
        	header:'活动区',
        	actimg:''
        }
    },
    created(){
    	this.getInfoList()
    },
    methods:{
    	goUserCenter(){
    		var _this=this;
    		let user_id=sessionStorage.getItem('user_id');
    		if(user_id){
    			_this.$router.push('/my');
    		}else{
    			_this.$router.push('/login');
    		}
    	},
    	getInfoList(){
    		let _this=this;
        		_this.$axios({
		    		method:'POST',
		    		url:_this.$host+'/index.php/Home/Homeapi/actlist',
		    		params:{
		    			user_id:sessionStorage.getItem('user_id')		    			
		    		}
		    	}).then((res)=>{
		    		console.log(res.data)
		    		_this.renList=res.data.re;
					_this.actimg=res.data.actimg;
		    	})
    	},
    	setSelect1(item){
     	let _this=this;
     	console.log(item.goods_id)    	
     	_this.$axios({
		    method:'POST',
		    url:_this.$host+'/index.php/Home/Homeapi/gzshop',
		    params:{
		    	user_id:sessionStorage.getItem('user_id'),
		    	goods_id:item.goods_id
		    }
		    }).then((res)=>{
		    	console.log(res)
		    	if(res.data.msg==1){
		    		_this.getInfoList()
		    		Toast.text({
						uration: 1000,
						message: '取消收藏成功!'
					})		    		
		    	}
		})
     },
     setSelect2(item){
     	let _this=this;
     	console.log(item.goods_id)
     	let postData={
     		user_id:sessionStorage.getItem('user_id'),
		    goods_id:item.goods_id,
		    op:'op'
     	}
     	_this.$axios({
		    method:'POST',
		    url:_this.$host+'/index.php/Home/Homeapi/gzshop',
		  	data:Qs.stringify(postData)
		    }).then((res)=>{
		    	console.log(res)
		    	if(res.data.msg==1){		    			    		
		    		Toast.text({
						uration: 1000,
						message: '收藏成功!'
					})
		    		_this.getInfoList()	
		    	}
		})
     }
    }
}
</script>
<style>
    
    .everyonethin_index{
        padding-bottom: 1.15rem;
    }
    .img p img{
    	width: 100%;
    }
    .everyonethin_index .img img{
        width: 100%;
    }
    .everyonethin_index .customshop{
        overflow: hidden;
    }
    .everyonethin_index .customshop ul{
        overflow: hidden;
        margin-top: .2rem;
    }
    .everyonethin_index .customshop ul li{
        width: 50%;
        float: left;
        margin-bottom: .33rem;
    }
    .everyonethin_index .customshop ul li .content{
        width: 3.16rem;
        height: 3.985rem;
        background-color: #ffffff;
        box-shadow: -0.01rem 0rem 0.08rem 0rem 
		rgba(155, 155, 155, 0.5);
        border-radius: 0.1rem;
        margin-left: .29rem;
    }
    .everyonethin_index .customshop ul li .content .topimg{
        position: relative;
    }
    .everyonethin_index .customshop ul li .content .topimg img{
        width: 100%;
    }
    .everyonethin_index .customshop ul li .content .topimg p{
        position: absolute;
        top: 1.36rem;
        color: #fff;
        width: 100%;
        left: 0;
        text-align: center;
    }
    .everyonethin_index .customshop ul li .price_buy{
        overflow: hidden;
    }
    .everyonethin_index .customshop ul li .price_buy .price{
        float: left;
        width: 0.96rem;
        height: 0.19rem;
        font-family: PingFang-SC-Regular;
        font-size: 0.24rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #ff6976;
        margin-left: .23rem;
    }
    .everyonethin_index .customshop ul li .price_buy .collect{
        float:right;
        font-family: PingFang-SC-Regular;
        font-size: 0.24rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #8f8f8f;
        margin-right: .23rem;
     }
    .everyonethin_index .customshop ul li .price_buy .collect img{
        width: 0.23rem;
        height: 0.2rem;
        margin-right: .11rem;
    }
      .classify-ul{
        background: #fff;
	    padding: 0 .3rem;
	    overflow: hidden;
}
    .classify-ul li{
    	width: 47.5%;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: .2rem;
         box-shadow: -1px 0px 8px 0px 
		rgba(155, 155, 155, 0.5);
    }
     .classify-ul li:nth-child(2n){
         margin-left: .3rem;
     }
    .classify-ul-img{
        width: 100%;
        height: 3.22rem;
        overflow: hidden;
        position: relative;

    }
    .classify-ul-img img{
        width: 100%;
        height: 100%;
    }
    .classify-ul-text{
        padding:0 .2rem;
        line-height: .65rem;
        font-size: .24rem;
        background: #fff;
    }
    .classify-ul-text span:first-child{
        color: #ff6976;
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
