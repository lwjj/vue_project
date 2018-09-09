<template>
    <div class="explosive">
        <top :text="header"></top>
        <div class="explosive-content">
            <ul>
                <li v-for='(item,index) in hotList'>
            	    <router-link :to="{path:'/product',query:{goodId:item.goods_id}}">
                	
	                    <div class="explosive-content-img">
	                        <img :src="item.original_img" alt="">
	                    </div>
	                </router-link>
	                    <div class="explosive-content-text">
	                        <img v-if='index==0' src="../assets/images/hot/product_icon.png" alt="" class="explosive-content-text-wei">
	                        <img v-if='index==1' src="../assets/images/hot/2@2x.png" alt="" class="explosive-content-text-wei">
	                        <img v-if='index==2' src="../assets/images/hot/3@2x.png" alt="" class="explosive-content-text-wei">
	                        
	                        <h1>{{item.goods_name}}</h1>
	                        <div style="font-size: 13px;text-align: left;color:#989898;padding-bottom: 10px;">{{item.goods_remark}}</div>
	                        <div class="clearfix explosive-content-texts">
	                            <div class="fl explosive-content-texts-money">
	                                ￥{{item.shop_price}}
	                            </div>
	                            <div class="fr">
	                            	销量{{item.sales_sum}}
	                            </div>
	                        </div>
	                    </div>
            	   
                    
            	  
            	   
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
import header from './header.vue'
import { Toast } from 'we-vue'
export default {
    components:{
        top : header
    },
    data(){
        return {
            header : '爆款区',
            hotList:'',
            current:'false'
        }
    },
    created(){
    	this.getExplosiveDetails()
    },
    methods:{
    	choose(){
    		this.current=this.current=='true'?'false':'true';
    	},
    	getExplosiveDetails(){
        	let _this=this;
        	let id=_this.$route.query.explosiveId;
        	_this.$axios({
			method:'POST',
			url:_this.$host+'/index.php/Home/Homeapi/good_list',
			params:{
				pid:id
				
			}
			}).then((res)=>{
				console.log(res)
				_this.hotList=res.data.data;
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
		    		_this.getExplosiveDetails()
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
		    		_this.getExplosiveDetails()
		    			
		    	}
		})
     }
    }
    
}
</script>

<style scoped>
.explosive-content{
    padding-top: .2rem;
}
.explosive-content li{
    width: 6.9rem;
    margin: 0 auto;
    border-radius: 5px;
    background:#fff;
    overflow: hidden;
    margin-bottom: .25rem;
}
.explosive-content li a{
	color:#000;
}
.explosive-content-img{
    width: 6.9rem;
    height: 3.1rem;
    background: #eee;

}
.explosive-content-img img{
    width: 100%;
    height: 100%;
}
.explosive-content-text{
    padding: .25rem .25rem .25rem .7rem;
     position: relative;
}
.explosive-content-text h1{
    font-size: .26rem;
    text-align: left;
    font-weight: 500;
    margin-bottom: .15rem;
}
.explosive-content-texts{
    font-size: .26rem;
   
}
.explosive-content-texts-money{
    color: #ff6976;
}
.explosive-content-text-wei{
    position: absolute;
    top: 0;
    left: .1rem;
    width: .42rem;
    height: .55rem;
   
}
</style>
