<template>
    <div class="comment_index">
        <top :text="header"></top>
        <div class="commentselect">
            <div class="select">
                 <img class="shopimg" src="../assets/images/series/commodity.png" alt="">
                 <ul>
                     <li @click='toggle'>
                     	<div v-if='type=="好评"'>
	                         <img  src="../assets/images/ping/ping_b.png" alt="">
	                         <label for="" style='color:#5acfec'>好评</label>
                     		
                     	</div>
                        <div v-else>
	                         <img src="../assets/images/ping/ping_a.png" alt="">                        
	                         <label for="">好评</label>
                         </div>
                     </li>
                     <li  @click='toggle'>
                     	<div v-if='type=="中评"'>                     	
	                         <img src="../assets/images/ping/negative_b.png" alt="">                        
	                         <label for="" style='color:#5acfec'>中评</label>
                     	</div>
                        <div v-else>                     	
	                         <img src="../assets/images/ping/negative_a.png" alt="">                        
	                         <label for="">中评</label>
                     	</div> 
                     </li>
                     <li @click='toggle'>
                         <div v-if='type=="差评"'>                     	
	                         <img src="../assets/images/ping/negative_b.png" alt="">                        
	                         <label for="" style='color:#5acfec'>差评</label>
                     	</div>
                        <div v-else>                     	
	                         <img src="../assets/images/ping/negative_a.png" alt="">                        
	                         <label for="">差评</label>
                     	</div> 
                     </li>
                 </ul>
            </div>
            <div class="commenttextarea">
                <textarea v-model='content' name="" id="" cols="30" rows="10" placeholder="宝贝满足你的期待吗？说说你的感受吧~">
                </textarea>
            </div>
            <div class="fabubtn">
                <a href="javascript:;" @click='sendCommentInfo()'>
                    发布
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import header from './header'
import Qs from 'qs'
import { Toast } from 'we-vue'
export default {
    components:{
        top:header
    },
    data(){
        return{
            header:'发表评价',
            type:'好评',
            content:'',
            goods_rank:''
        }
    },
    methods:{
    	toggle:function(e){
    		console.log(e.target.innerText)
    		let _this=this;
    		_this.type=e.target.innerText;
    	},
    	sendCommentInfo(){
    		let _this=this;
    		let user_id=sessionStorage.getItem('user_id');
    		let order_sn=_this.$route.query.order_sn;
    		if(!_this.content){
    			Toast.text({
					duration: 1000,
						message: '请输入评论内容!'
					})
    		}else{
    			if(_this.type=='好评'){
	    		   _this.goods_rank="1";
	    		}else if(_this.type=='中评'){
	    		   _this.goods_rank="0";    			
	    		}else{
	    		   _this.goods_rank="-1";    			
	    			
	    		}
	    		let postData={
	    			goods_rank:_this.goods_rank,
	    			content:_this.content,
	    			user_id:sessionStorage.getItem('user_id'),
	    			order_sn:order_sn
	    		}
	    		_this.$axios({
	    			method:'POST',
	    			url:_this.$host+'/index.php/Home/Homeapi/goods_rank',
	    			data:Qs.stringify(postData)
	                
	    		}).then((res)=>{
	    			console.log(res)
	    			if(res.status==200){
	    				_this.$router.push('/evaluationsuccess');
	    			}
	    		})
    		}
    		
    	}
    }
}
</script>
<style scoped>
    .comment_index{
        padding-top: .18rem;
    }
    .commentselect .select{
        height: 1.25rem;
        background: #fff;
    }
    .select{
        overflow: hidden;
    }
    .select .shopimg{
        width: 0.76rem;
        height: 0.76rem;
        float: left;
        margin: .26rem .32rem .26rem .32rem;
    }
    .select ul{
        padding-top: .4rem;
        margin-left: .3rem;
        float: left;
    }
    .select ul li {
        vertical-align: middle;
        display: inline-flex;
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #8f8f8f;
        margin-right: .77rem;
    }
    .select ul li label{
        margin-left: .29rem;
    }
    .select ul li:last-child{
        margin-right: 0;
    }
    .select ul li img{
        width: 0.34rem;
        height: 0.41rem;
        float: left;
    }
    .commenttextarea{
        overflow: hidden;
        background: #fff;
        border-top: 1px solid #ddd;
    }
    .commenttextarea  textarea{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #8f8f8f;
        border: none;
        resize: none;
        outline: none;
        width: 90%;
        margin-top: .38rem;
    }
    .fabubtn{
        margin: auto;
    }
    .fabubtn a{
         margin: 1.09rem auto 0;
        display: block;
        width: 3.77rem;
        height: 0.65rem;
        color: #fff;
        font-size: 0.3rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0.65rem;
        text-decoration: none;
        background-color: #5acfec;
        border-radius: 0.05rem;
    }
</style>
