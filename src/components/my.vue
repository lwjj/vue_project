<template>
    <div class="my">
        <div class="my-top">
        	
                <img @click="checkLogin('set')" src="../assets/images/me/me_set.png" alt="" class="my-top-icon">
          
            <div>

            	
                <img class="my-top-header" v-if='head_pic' :src="head_pic" alt="">
                <img class="my-top-header" v-else :src="img" alt="">
                
                <p class="my-top-deng">
                	<div style="font-size: .3rem;" v-if='flag=="true"'>
                        <router-link style='color:#000' to='/login'><span>登录</span></router-link>/<span>注册</span>
                    </div>
                    <div v-else style="font-size: .3rem;">
                    	{{nickname}}
                    </div>
                   <!--<router-link v-else to='/login'><span>登录</span></router-link>/<router-link to='/register'><span>注册</span></router-link>-->
                    
                </p>
            </div>
        </div>
        <div class="my-top-ding">
            <p class="my-top-ding-title clearfix">
                <router-link style='color:#000' :to="{path:'myorder',query:{status:'1'}}">
            	
	                <span class="fl">我的订单</span>
	                <span  @click="checkLogin('order')" class="fr" style="color:#999">查看全部订单 ></span>
                </router-link>
                
            </p>
            <ul class="my-top-ding-ul clearfix">
                <li class="fl" v-for='item in data.navs' @click="checkLogin('myorder',item)">
	                    <div class="my-top-ding-ul-img">
	                        <img :src="item.icon" alt="">
	                    </div>
	                    <p>{{item.title}}</p>
                </li>
                
            </ul>
        </div>
        <div class="my-top-ul">
            <ul>
                <li @click="checkLogin('plan')">
                    <div class="my-top-ul-img">
                        <img src="../assets/images/me/plan_logo.png" alt="">
                    </div>
                                                             我的食谱
                    <img src="../assets/images/me/order_skip.png" alt="" class="my-top-ul-icon">
                </li>
                <li @click="checkLogin('nutritionistrules')">
                    <div class="my-top-ul-img">
                        <img src="../assets/images/me/plan_logo.png" alt="">
                    </div>
                                                              营养师认证
                    <img src="../assets/images/me/order_skip.png" alt="" class="my-top-ul-icon">
                </li>
                <li @click="checkLogin('about')">
                	
	                    <div class="my-top-ul-img">
	                        <img src="../assets/images/me/guanyu@2x.png" alt="">
	                    </div>
	                                                             关于我们
	                    <img src="../assets/images/me/order_skip.png" alt="" class="my-top-ul-icon">
                    
                </li>
                <li @click="checkLogin('problem')">
                	
	                    <div class="my-top-ul-img">
	                        <img src="../assets/images/me/wenti@2x.png" alt="">
	                    </div>
	                                                             常见问题
	                    <img src="../assets/images/me/order_skip.png" alt="" class="my-top-ul-icon">
                    
                </li>
                <li>
                    <div class="my-top-ul-img">
                        <img src="../assets/images/me/lianxi@2x.png" alt="">
                    </div>
                                                              联系方式
                    <img src="../assets/images/me/order_skip.png" alt="" class="my-top-ul-icon">
                </li>
            </ul>
        </div>
         <!-- 底部 -->
        <div class="footer_index">
            <ul>
                <li>
                	<router-link to='/'>               	
                	
                    <img src="../assets/images/tabbar/everyone_a.png" alt="">
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
                    <img src="../assets/images/tabbar/service_a.png" alt="">
                    <p>在线客服</p>
                </li>
                <li  class="active">
                    <img src="../assets/images/tabbar/me_b.png" alt="">
                    <p>个人中心</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Toast } from 'we-vue'
	
export default {
    data(){
    	return{
    		flag:'',
    		nickname:'昵称',
    		head_pic:'',
    		nutritionStatus:[],
    		img:require('../assets/images/commonality/portrait.png'),
    		data: {
				    navs: [{
				        icon: require('../assets/images/me/custom_not.png'),
				        title: "待定制",
				        status: 1
				      },
				      {
				        icon: require('../assets/images/me/zhong@2x.png'),
				        title: "定制中",
				        status: 2
				      },
				      {
				        icon: require('../assets/images/me/pingjia@2x.png'),
				        title: "待评价",
				        status: 3
				      },
				      {
				        icon: require('../assets/images/me/wancheng@2x.png'),
				        title: "已完成",
				        status: 4
				      },
				
				    ],
		    	}
		   }
		 }, 
    created(){
    	this.getName()
    	this.getUserInfo()
    },
    methods:{
    	getName(){
    		let _this=this;
    		let uid=sessionStorage.getItem('user_id');
    		console.log(uid)
    		if(uid==null||uid==''){
    			
    			_this.flag='true';
    		}else{
    			_this.flag='false';
    			
    		}
    	},
    	getUserInfo(){
//  		let _this=this;
    		this.$axios({
		      		method:'POST',
		      		url:this.$host+'/index.php/Home/Homeapi/myself',
		      		params:{
		      			user_id:sessionStorage.getItem('user_id')
		      		}
		      	}).then((res)=>{
		      		console.log(res)
		      		if(res.data.re.nickname!=null){
		      			this.nickname=res.data.re.nickname;
		      			this.head_pic=res.data.re.head_pic;
		      			this.nutritionStatus= res.data.data
		      		}		      		
		      	})
    	},
    	checkLogin:function(type,item){
		    let user_id=sessionStorage.getItem('user_id');
		    if(user_id){
		    	if(type=='problem'){
    			   this.$router.push('/problem');
    		    }else if(type=='order'){
    			   this.$router.push('/myorder');
    		    	
    		    }
    		    else if(type=='nutritionistrules'){
    		    	if(this.nutritionStatus== 'null'|| !this.nutritionStatus){
    		    		this.$router.push('/nutritionistguidance');

    		    	}else if(this.nutritionStatus.status == 0){
    		    		Toast.text({
						  duration: 1000,
						  message: '审核中!'
						})
    		    	}else if(this.nutritionStatus.status == 1){
    		            Toast.text({
						  duration: 1000,
						  message: '你已经是营养师!'
						})
    		    		
    		    	}

    		    	
    		    }else if(type=='plan'){
    			   this.$router.push('/plan');
    		    	
    		    }else if(type=='myorder'){
    			   this.$router.push({
    			   	  path:'myorder',
    			   	  query:{
    			   	  	status:item.status
    			   	  }
    			   });
    		    	
    		    }else if(type=='about'){
    		    	this.$router.push('/about');
    		    }else if(type=='set'){
    		    	this.$router.push('/set');
    		    }
		    }else{
		    	Toast.text({
				  duration: 1000,
				  message: '请先登录!'
				})
		    }
    		
    	}
    }
}
</script>

<style scoped>
.my-top-ul-icon{
    width: .12rem;
    height: .23rem;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    overflow: hidden;
}
.my-top-ul-img img{
    width: 100%;
    height: 100%;
}
.my-top-ul-img{
    overflow: hidden;
    display: block;
    width: .34rem;
    height: auto;
    position: absolute;
    top: 60%;
    left: 0;
    transform: translateY(-50%);
 
}
.my-top-ul{
    background: #fff;
    margin-bottom: 56px;
    border-bottom: .2rem solid rgb(243,243,243);
}
.my-top-ul li{
    height:1rem;
    margin: 0 .2rem;
    border-bottom:1px solid rgb(243,243,243);
    line-height: 1rem;
    font-size: .3rem;
    text-align:left;
    padding-left: .7rem;
    position: relative;
}
.my-top-ul li a{
	color:#000;
}
.my-top-ding-ul-img img{
    width: 100%;
    height: auto;
}
.my-top-ding-ul-img{
    width: .5rem;
    height: .54rem;
    margin: .2rem auto .1rem;
   
}
.my-top-ding-ul li{
    width: 25%;
    font-size: .26rem;
    margin-bottom: .2rem;
}
.my-top-ding{
    background: #fff;
}
.my-top-ding-title{
    margin: 0 .3rem;
    border-bottom:1px solid rgb(243,243,243);
    height: 1rem;
    line-height: 1rem;
    font-size: .3rem;
}
.my-top-ding{
    border-top: .2rem solid rgb(243,243,243);
    border-bottom: .2rem solid rgb(243,243,243)
}
.my-top-deng{
    font-size: .3rem;
    

}
.my-top-deng a{
	color:#000;
}
.my-top-header img{
    width: 100%;
    height:100%;
}
.my-top-header{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 1.1rem;
}
.my-top-icon{
    width: .44rem;
    height: .44rem;
    position: absolute;
    top: .25rem;
    right: .3rem;
}
.my-top{
    width: 100%;
    height: 4.7rem;
    background:url(../assets/images/me/me_bgm.png);
    position: relative;
}
    .my{
        margin-top: -1rem;
    }
</style>
