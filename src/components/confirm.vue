<template>
    <div class="confirm">
        <top :text="header"></top>
        <div class="confirm-content">
            <ul >
                <li>
                    <div class="confirm-content-title">
                        全民食谱
                    </div>
                    <div class="confirm-content-text clearfix">
                        <div class="fl confirm-content-img">
                            <img src="" alt="">
                        </div>
                        <div class="fl confirm-content-texts">
                            <p class="confirm-content-name">减肥党必备菜谱，享受美食不发胖</p>
                            <p class="clearfix confirm-content-money">
                                <span class="fl">￥188.00</span>
                                <span class="fr">X1</span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="confirm-foot clearfix">
                <div class="fl confirm-xy">
                    <input type="checkbox" class="check" v-model="check">
                    	<!--<img @click='chooseProtocol()' v-if='current=="true"' src="../assets/images/commonality/check.png" alt="">
                 	    <img @click='chooseProtocol()' v-else src="../assets/images/commonality/unselected.png" alt="">-->
                    	
                    	 我已阅读并同意<span class="blue">《全民食谱购买服务协议》</span>
                </div>
                <div @click="confirmOrder()" class="fr confirm-foot-btn">
                    提交订单
                </div>
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
        return {
            header:'确认订单',
            gid:'',
            good_name:'',
            img:'',
            good_price:'',
            current:'',
            check:'',
            gid:''
        }
    },
    created(){
    	this.getOrder()
    },
    methods:{
    	chooseProtocol(){
    		this.current=this.current=='true'?'false':'true';
    	},
    	getOrder(){
    		let _this=this;
    		_this.gid=_this.$route.query.gid;
    		_this.good_name=_this.$route.query.good_name;
    		_this.img=_this.$route.query.img;
    		_this.good_price=_this.$route.query.good_price;
    		_this.phone=_this.$route.query.phone;
    	},
    	confirmOrder(){
    		let _this=this;
    		if(_this.check==false){
    			Toast.text({
					duration: 1000,
					message: '请勾选服务协议!'
				})
    		}else{
    			_this.$axios({
    				method:'POST',
    				url:_this.$host+'/index.php/Home/Homeapi/order',
    				params:{
    					user_id:sessionStorage.getItem('user_id'),
    					goods_id:_this.gid,
    					phone:_this.phone
    				}
    			}).then((res)=>{
    				console.log(res)
    				if(res.status==200){
    					_this.$axios({
		    				method:'POST',
		    				url:_this.$host+'/index.php/Home/Homeapi/get_order',
		    				params:{
		    					ordersn:res.data.order_sn,
		    					give_id:res.data.give_id
		    				}
		    			}).then((res)=>{
		    				console.log(res)
		    			})
    				}
    			})
    		}
    	}
    	
    }
}
</script>

<style scoped>
.confirm-content{
    border-top: .2rem solid rgb(243,243,243);
    background: #fff;
}
.confirm-content li{
    padding-bottom: .88rem;
    margin-bottom: .3rem;
}
.confirm-content-title{
    line-height: .88rem;
    height: .88rem;
    font-size: .3rem;
    padding: 0 .48rem;
    text-align:left;
}
.confirm-content-text{
    padding: 0 .48rem;
    background: rgb(243,243,243);
}
.confirm-content-img{
    width: 1.45rem;
    height: 1.45rem;
    background: #fff;
    margin-right: .4rem;
}
.confirm-content-img img{
    width: 100%;
    height: 100%;
}
.confirm-content-name{
    font-size: .26rem;
    margin-top: .2rem;
    margin-bottom:.4rem;
    text-align: left;
}
.confirm-content-money{
    font-size: .26rem;
}
.confirm-foot{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #fff;
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
.xychoose{
         text-align: left;
         padding: 0 .32rem;
         margin-top: .22rem;
     }
    .xychoose img{
        width: 0.26rem;
        height: 0.26rem;
        float: left;
        margin: .14rem .1rem .1rem 0;
    }
</style>
