<template>
    <div class="myorder_index">
        <top :text="header"></top>
        <div class="tab_index">
            <ul>
                <li @click='selectNav(index,item)' v-for='(item,index) in navList' :class="{active:index==current}">{{item}}</li>
                
            </ul>
        </div>
        <div class="shoplist">
            <ul>
                <li v-for='item in orderList'  v-if='item.status!=1'>
                    <a href="javascript:;">
                        <div class="order_sn">
                            <p>订单号:{{item.order_sn}}</p>
                            <span v-if='status==1'>待定制</span>
                            <span v-if='status==2'>定制中</span>
                            <span v-if='status==3'>待评价</span>
                            <span v-if='status==4'>已完成</span>
                            
                        </div>
	            	    <router-link :to="{path:'/customdetails',query:{orderId:item.order_id,status:status}}">
                        
	                        <div class="lr">
	                            <img :src="item.original_img" alt="">
	                            <div class="content">
	                                <p class="title ellipsis2">{{item.goods_name}}<span>￥{{item.goods_price}}</span></p>
	                                <span class="num">共1件</span>
	                            </div>
	                        </div>
                        </router-link>
                        <div class="sent" style="height:48px;">
                            <div class="senttip" v-if='item.phone!=1'>赠送朋友</div>
                            
                            
                            <div class="orderbtn">
                                 <ul>
                                     <li v-if='item.shipping_status == 1 && item.phone == 1 && item.screen != 1'>
	            	                     <router-link :to="{path:'/condition',query:{orderId:item.order_id}}">
                                                                                                               完善信息
	            	                     </router-link>
                                     </li>
                                     <li style="display: none;">
                                         <a href="javascript:;">中止发送</a>
                                     </li>
                                     <li class="pjbtn" v-if='status==3'>
       
	            	                     <router-link :to="{path:'/comment',query:{order_sn:item.order_sn}}">
                                         	去评价
	            	                     </router-link>
                                     </li>
                                 </ul>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import header from './header'
    export default {
        components:{
            top:header
        },
        data(){
            return{
                header:'我的订单',
                navList:['待定制','定制中','待评价','已完成'],
                orderList:'',
                current:'0',
                status:'1'
            }
        },
        created(){
//      	this.getOrderList()
        	this.showNav()
        },
        methods:{
        	getOrderList(){
        		let _this=this;
        		_this.$axios({
		    		method:'POST',
		    		url:_this.$host+'/index.php/Home/Homeapi/myorderlist',
		    		params:{
		    			user_id:sessionStorage.getItem('user_id'),
		    			status:_this.status
		    		}
		    	}).then((res)=>{
		    		console.log(res)
		    		_this.orderList=res.data.data;
		    		console.log(_this.orderList)
		    	})
        	},
        	selectNav:function(index,item){
		    	this.current=index;
		    	this.status=index+1;
		    	console.log(this.status)
		    	console.log(item)
		    	this.getOrderList()
		    },
		    showNav(){
		    	let status=this.$route.query.status;
		    	this.status=status;
		    	this.current=status-1;
		    	this.getOrderList()
		    	
		    }
        }
    }
</script>
<style scoped>
    .tab_index {
        overflow: hidden;
        background: #fff;
        padding-top: .12rem;
    }
    .tab_index ul {
        overflow: hidden;
    }
    .tab_index ul li{
        width: 25%;
        float: left;
        font-family: PingFang-SC-Medium;
        font-size: 0.3rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #000;
        position: relative;
        padding-bottom: .2rem;
    }
    .tab_index ul li.active{
        color: #41cff2;
    }
    .tab_index ul li.active:before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -.615rem;
        width: 1.23rem;
        height: .2rem;
        border-bottom: 1px solid #41cff2;
    }
    .shoplist{
        margin-top: .2rem;
    }
    .shoplist>ul>li{
        padding: 0 .3rem 0rem;
        margin-bottom: .3rem;
    }
    .shoplist>ul>li a{
        background: #fff;
    }
    .shoplist>ul>li .order_sn{
        height: .8rem;
        position: relative;
        text-align: left;
        line-height: .8rem;
        padding: 0 .37rem;
    }
    .shoplist>ul>li .order_sn p{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #8f8f8f;
        width: 80%;
        float: left;
    }
    .shoplist>ul>li .order_sn span{
        float: right;
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #41cff2;
    }
     .shoplist>ul>li .lr{
         height: 1.45rem;
         background-color: #efefef;
         padding:0 .38rem;
         text-align: left;
         overflow: hidden;
         position: relative;
     }
     .shoplist>ul>li .lr img{
        width: 1.45rem;
        height: 1.45rem;
        float: left;
     }
     .shoplist>ul>li .lr .content{
         float: left;
     }
     .shoplist>ul>li .lr .content .title{
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #8f8f8f;
        padding-top: .38rem;
        padding-left: .2rem;
        width: 3rem;
     }
     .shoplist>ul>li a{
         border-radius: 0.1rem;
         display: block;
     }
     .shoplist>ul>li .lr .content .title span{
         position: absolute;
         right: .38rem;
         top: .38rem;
     }
     .shoplist>ul>li .lr .content .num{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #8f8f8f;
        position: absolute;
         right: .38rem;
         top: .78rem;
     }
     .shoplist>ul>li .sent{
        height: 1.06rem;
        position: relative;
     }
     .shoplist>ul>li .sent .senttip{
        font-family: PingFang-SC-Regular;
        font-size: 0.24rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #000000;
        position: absolute;
        left: .38rem;
        top: .3rem;
     }
     .shoplist>ul>li .sent .orderbtn{
             overflow: hidden;
		    padding-top: .25rem;
		    padding-right: .23rem;
		    padding-bottom: .25rem;
     }
     .shoplist>ul>li .sent .orderbtn ul li{
         width: 1.32rem;
        height: 0.41rem;
        border-radius: 0.21rem;
        border: solid 0.01rem #8f8f8f;
        float: right;
        margin-right: .15rem;
     }
  
      .shoplist>ul>li .sent .orderbtn ul li a{
        display: block;
        font-family: PingFang-SC-Regular;
        font-size: 0.24rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #8f8f8f;
        background: none;
        text-decoration: none;
      }
      .shoplist>ul>li .sent .orderbtn ul li.pjbtn{
          border: solid 0.01rem #41cff2;
      }
      .shoplist>ul>li .sent .orderbtn ul li.pjbtn a{
          color: #41cff2;
      }
</style>
