<template>
    <div class="index">
        <div class="index-logo">
            <img src="../assets/images/index/index_logo.png" alt="">
        </div>
        <!-- 轮播图 -->
        <wv-swipe  class="index-swipe" :autoplay="4000">
            <wv-swipe-item v-for='item in bannerList' :key='item.id'>
            	<img :src="item.adress"/>
            </wv-swipe-item>
            
        </wv-swipe>
        <!-- 介绍 -->
        <div class="index-v">
            <div class="index-v-top clearfix">
                <div class="fl index-v-top-l" @click="switch1V1Serve()">               	
					<img src="../../dist/static/img/1v1_serve.7c7d8ed.png"/>				
                </div>
                <div class="fr index-v-top-r" @click='switchActivity()'>
                	<img src="../../dist/static/img/activity.d79b3e8.png"/>
                </div>
            </div>
            <div class="index-v-bottom" @click='switchCard()'>
            	
				    <img src="../assets/images/index/index_gifts.jpg" style="width: 100%;"/>
				
            </div>
        </div>
        <!-- 爆款推荐 -->
        <div class="index-bao">
            <p>爆款区</p>
            <ul class="index-bao-ul">
                <li v-for='item in hotList' @click="switchHot(item)">
                		<img :src="item.image"/>
	                    <div class="index-bao-ul-text">
	                        {{item.name}}
	                    </div>
                	
                </li>
                
            </ul>
        </div>
        
        <!-- 分类专区 -->
        <div class="index-bao">
            <p>分类专区</p>
            <ul class="index-fen-ul">
                <li v-for='item in categoryList'>
                    <router-link style='width: 100%;height: 3.5rem;display: inline-block;' :to="{path:'/classify',query:{serviceId:item.id,name:item.name}}">
           
	                	<img :src="item.image"/>
	                    <div class="index-fen-ul-text">
	                        {{item.name}}
	                    </div>
                	</router-link>
                    
                </li>
                
            </ul>
        </div>
        <!--商品展示-->
        <div class="classify index-bao">
        	<p>商品展示</p>
	        <ul class="classify-ul">
	        	
	            <li class="fl" v-for="item in goods">
	            	<router-link :to="{path:'/product',query:{goodId:item.goods_id}}">
	            		<div class="classify-ul-img">
		                    <img :src="item.original_img" alt="">
		                    
		                </div>
		            </router-link>
		                <div class="classify-ul-text clearfix" style="padding: 0 0.1rem;">
		                	<div style="text-align: left;font-size: 14px;line-height: 1;padding: 4px 0;">{{item.goods_name}}</div>
		                	<p style="padding: 2px 0;margin: 0;line-height:1.3;text-align: left;font-size: 12px;color:#999;">{{item.goods_remark}}</p>
		                    <span style="color:#ff6976" class="fl">￥{{item.shop_price}}</span>
		                    <span class="fr" style='color:#999;'>		                	
	            	        销量{{item.sales_sum}}
		                    </span>
		                </div>
	            	
	               
	            </li>
	
	        </ul>
    </div>

        <!-- 食谱头条 -->
        <div class="index-tiao">
            <p class="index-tiao-title">
                食谱头条
            </p>
            <div class="index-tiao-content">
                <router-link to='/headline'>          	
	                <div class="index-tiao-content-text" v-html='goods_title'>
	                	
	                </div>
		        </router-link>
                
                <p class="clearfix index-tiao-content-num" style="display: none;">
                    <span class="fr">1</span>
                    <span class="fr">2</span>
                </p>
            </div>
        </div>
         <!-- 底部 -->
        <div class="footer_index">
            <ul>
                <li class="active">
                	<router-link to='/'>               	
	                    <img src="../assets/images/tabbar/everyone_b.png" alt="">
	                    <p>全民食谱</p>
                    </router-link>
                    
                </li>
                <li>
                	<router-link to='/everyonethin'>
	                    <img src="../assets/images/tabbar/recipe_a.png" alt="">
	                    <p>人人瘦</p>
                    </router-link>
                </li>
                <li>
                	<router-link to='/'>               	
	                    <img src="../assets/images/tabbar/service_a.png" alt="">
	                    <p>在线客服</p>
                    </router-link>
                    
                </li>
                <li>   
                	<router-link to='/my'>               	
                	
		                <img src="../assets/images/tabbar/me_a.png" alt="">
		                <p>个人中心</p>  
                    </router-link>
	                
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import header from './index.vue'
import FootNav from './footernav.vue'
import { Toast } from 'we-vue'
import Qs from 'qs'

export default {
	components:{FootNav},
    data(){
    	return{
    		bannerList:'',
    		categoryList:'',
    		hotList:'',
    		goods_title:'',
    		goods:''
    	
    	}
    },
    created(){
    	this.getIndexInfo()
    },
    methods:{
    	getIndexInfo(){
    		var that=this;
//  		that.$axios(that.$host+'/Home/Homeapi/index').then((res)=>{
//  			console.log(res)
//  			that.bannerList=res.data.data.guntop;
//  			that.categoryList=res.data.data.goods_category;
//  			that.hotList=res.data.data.sp_list;
//  			that.goods_title=res.data.data.goods_title.content;
//  			that.goods=res.data.data.goods;
//  		})
            that.$axios({
            	method:'POST',
            	url:that.$host+'/Home/Homeapi/index',
            	params:{
            		user_id:sessionStorage.getItem('user_id')
            	}
            }).then((res)=>{
            	console.log(res)
    			that.bannerList=res.data.data.guntop;
    			that.categoryList=res.data.data.goods_category;
    			that.hotList=res.data.data.sp_list;
    			that.goods_title=res.data.data.goods_title.content;
    			that.goods=res.data.data.goods;
    			let temp = document.createElement('div')
    			temp.innerHTML = res.data.data.goods_title.content
    			
    			that.goods_title = temp.innerText
            })
    	},
    	goUserCenter(){
    		var _this=this;
    		let user_id=sessionStorage.getItem('user_id');
    		if(user_id){
    			_this.$router.push('/my');
    		}else{
    			_this.$router.push('/login');
    		}
    	},
    	switch1V1Serve(){
    		var _this=this;
    		
    		let user_id=sessionStorage.getItem('user_id');
    	 	if(user_id){
    			_this.$router.push('/service');  	 		
    	 	}else{
    			_this.$router.push('/login');  	 		
    	 		
    	 	}
    	},
    	switchCard(){
    		var _this=this;
    		
    		let user_id=sessionStorage.getItem('user_id');
    	 	if(user_id){
    			_this.$router.push('/card');  	 		
    	 	}else{
    			_this.$router.push('/login');  	 		
    	 		
    	 	}
    	},
    	switchGifts(){
    		var _this=this;
    		
    		let user_id=sessionStorage.getItem('user_id');
    	 	if(user_id){
    			_this.$router.push('/card');  	 		
    	 	}else{
    			_this.$router.push('/login');  	 		
    	 		
    	 	}
    	},
    	switchHot(item){
    		var _this=this;
    		
    		let user_id=sessionStorage.getItem('user_id');
    	 	if(user_id){
    			_this.$router.push({
    				path:'/explosive',
    				query:{
    					explosiveId:item.goods_id
    				}
    			});
    	 	}else{
    			_this.$router.push('/login');  	 		
    	 		
    	 	}
    	},
    	switchActivity(){
    		var _this=this;
    		_this.$router.push('/activity');  	
//  		let user_id=sessionStorage.getItem('user_id');
//  	 	if(user_id){
//  			_this.$router.push('/everyonethin');  	 		
//  	 	}else{
//  			_this.$router.push('/login');  	 		
//  	 		
//  	 	}
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
		    		_this.getIndexInfo()
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
		    		_this.getIndexInfo()	
		    	}
		})
     }
    	
    }
}
</script>

<style scoped>
.index-tiao-content-text{
    font-size: .26rem;
    line-height: .4rem;
    text-align: left;
}
.index-tiao-content-text p img{
	width: 100%;
	
}
.index-tiao-content-num span{
    font-size: .22rem;
    margin-right: .2rem;
}
.index-tiao-content{
   
    border-radius: 10px;
    overflow: hidden;
    
    padding-bottom:.1rem;
}
.index-tiao{
    background:#fff;
}
.index-tiao-title{
    font-size: .3rem;
    margin-bottom: .35rem;
}
.index-tiao{
    padding: .3rem;
    padding-bottom: 1.3rem;
}
.index-fen-ul-text{
    position: absolute;
    width: 100%;
    height: .52rem;
    line-height: .52rem;
    background: rgba(0, 0, 0, .5);
    color: #fff;
    font-size: .26rem;
    text-align: left;
    bottom: 0;
    left: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
    text-align: center;
}
.index-fen-ul{
    width: 100vw;
    overflow-x: auto;
    white-space: nowrap
}
.index-fen-ul li{
    width: 2.45rem;
    height: 3.56rem;
    position: relative;
    margin-right: .2rem;
    background:#eee;
    display: inline-block;
    border-radius: 5px;
    overflow: hidden;
}
.index-bao-ul-text{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background:rgba(0, 0, 0, .5);
    color: #fff;
    font-size: .26rem;
    line-height: 2.1rem;
}
.index-bao-ul li{
    width: 2.1rem;
    height: 2.1rem;
    display: inline-block;
    background: #eee;
    margin-right: .2rem;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
}
.index-bao-ul{
    width: 100vw;
    overflow-x: auto;
    white-space: nowrap
}
.index-bao-ul::-webkit-scrollbar {
display:none
}
.index-fen-ul::-webkit-scrollbar {
display:none
}
.index-bao p{
    padding-left: .3rem;
    font-size: .3rem;
    margin-bottom: .26rem;
    text-align:left;
}
.index-bao{
    padding: .3rem 0;
    background:#fff;
    margin-bottom: .2rem;
}
.index-v-bottom{
    width: 100%;
    height: 3.45rem;
 
    border-radius: 5px;
}
.index-v-top{
    margin-bottom: .3rem;
}
.index-v-top img{
	width: 100%;
}
.index-v-top-l{
    width: 48%;
    height: 1.65rem;
    border-radius: 5px;
    
}
.index-v-top-r{
    width: 48%;
    height: 1.65rem;
    border-radius: 5px;
    
}
.index-v{
    padding: .3rem;
}
    .index{
        margin-top: -1rem;
    }
    .index-logo{
        width: 100%;
        height: 1rem;
        position: relative;
        background: #fff;
    }
    .index-logo img{
        width: 1.75rem;
        height: .42rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        
    }
    .index-swipe{
        width: 100%;
        height: 4.6rem;
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
        background: #eee;

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
