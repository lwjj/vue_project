<template>
    <div class="classify">
        <top :text="head"></top>
        <ul class="classify-ul">
            <li class="fl" v-for="item in proList" style="width: 47%;">
	            	<router-link :to="{path:'/product',query:{goodId:item.goods_id}}">
	            		<div class="classify-ul-img">
		                    <img :src="item.original_img" alt="">
		                    
		                </div>
		            </router-link>
		                <div class="classify-ul-text clearfix">
		                	<div style="text-align: left;font-size: 14px;line-height: 1;padding: 4px 0;">{{item.goods_name}}</div>
		                	<p style="padding: 2px 0;margin: 0;line-height:1;text-align: left;font-size: 12px;color:#999;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{item.goods_remark}}</p>
		                    <span style="color:#ff6976" class="fl">￥{{item.shop_price}}</span>
		                    <span class="fr" style='color:#999;'>		                	
	            	        销量{{item.sales_sum}}
		                    </span>
		                </div>
	            	
	               
	            </li>

        </ul>
    </div>
</template>
    
<script>
import header from './header.vue'
import { Toast } from 'we-vue'
import Qs from 'qs'
export default {
    components:{
        top:header
    },
    data(){
        return {
            head:'',
            proList:'',
            current:'false'
        }
    },
     created(){
    	this.getServiceDetails()
        this.head=this.$route.query.name;
    	
    },
    methods:{
    	choose(){
    		this.current=this.current=='true'?'false':'true';
    	},
    	getServiceDetails(){
        	let _this=this;
        	let id=_this.$route.query.serviceId;       	
        	console.log(name)
        	let user_id=sessionStorage.getItem('user_id');
        	_this.$axios({
					method:'POST',
					url:_this.$host+'/index.php/Home/Homeapi/good_list',
					params:{
						id:id,
						user_id:user_id
					}
					}).then((res)=>{
						console.log(res)
						_this.proList=res.data.data;
						_this.header=res.data.data.goods_name;
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
				    		_this.getServiceDetails()
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
				    		_this.getServiceDetails()	
				    	}
				})
		     }
    }
}
</script>

<style scoped>
.classify-ul{
    padding: .2rem .3rem;
    margin-top: 1.1rem;
}
    .classify-ul li{
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: .2rem;
         box-shadow: -1px 0px 8px 0px 
		rgba(155, 155, 155, 0.5);
    }
     .classify-ul li:nth-child(2n){
         margin-left: .58rem;
     }
    .classify-ul-img{
        width: 3.16rem;
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
