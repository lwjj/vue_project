<template>
    <div class="customdetails_index">
        <top :text="header"></top>
        <!-- 定制商品 -->
        <div class="customshop">
            <div class="lr">
                <img src="../assets/images/series/commodity.png" alt="">
                <div class="content">
                    <p class="title ellipsis2">{{orderDetail.goods_name}} <span>￥{{orderDetail.shop_price}}</span></p>
                    <span class="num">X1</span>
                </div>
            </div>
            <div class="sxprice">
                 <p>共1件</p>
                 <p>实付 <span>￥{{orderDetail.shop_price}}</span></p>
            </div>
        </div>
        <!-- 下单编号 -->
        <div class="customorder_sn">
            <ul class="orderbh">
                <li>
                    <label for="">订单编号:</label>
                    {{orderDetail.order_sn}}
                </li>
                <li>
                    <label for="">下单时间:</label>
                    {{add_time}}
                </li>
                <li>
                    <label for="">付款时间:</label>
                    {{pay_time}}
                </li>
            </ul>
            <ul class="orderzy">
                 <li v-if='phone!=null'>
                    <label for="">受赠人手机号码:</label>
                    {{phone}}
                </li>
                <li>
                    <label for="">订单状态:</label>
                    <span v-if='status==1'>待定制</span>
                    <span v-if='status==2'>定制中</span>
                    <span v-if='status==3'>待评价</span>
                    <span v-if='status==4'>已完成</span>
                    
                </li>
                 <li>
                    <label for="">订单时间:</label>
                    2018/06/03 18:03:33
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
                header:'定制详情',
                orderDetail:'',
                add_time:'',
                pay_time:'',
                phone:'',
                status: ''  //订单状态
            }
        },
        created(){
        	this.getOrderDetails()
        	this.status=this.$route.query.status;
        },
        methods:{
        	getOrderDetails(){
        		let _this=this;
        		let order_id=_this.$route.query.orderId;
        		_this.$axios({
		    		method:'POST',
		    		url:_this.$host+'/index.php/Home/Homeapi/mydetail',
		    		params:{
		    			oid:order_id
		    		}
		    	}).then((res)=>{
		    		console.log(res)
		    		_this.orderDetail= res.data.data,
		            _this.add_time=_this.formatDateTime(res.data.data.add_time),  //下单时间
		            _this.pay_time= _this.formatDateTime(res.data.data.pay_time),  //付款时间
		            _this.phone= res.data.phone,  //手机号码
		            console.log(_this.pay_time)
		    	})
        	},
        	 formatDateTime: function(timeStamp) {
			    var date = new Date();
			    date.setTime(timeStamp * 1000);
			    var y = date.getFullYear();
			    var m = date.getMonth() + 1;
			    m = m < 10 ? ('0' + m) : m;
			    var d = date.getDate();
			    d = d < 10 ? ('0' + d) : d;
			    var h = date.getHours();
			    h = h < 10 ? ('0' + h) : h;
			    var minute = date.getMinutes();
			    var second = date.getSeconds();
			    minute = minute < 10 ? ('0' + minute) : minute;
			    second = second < 10 ? ('0' + second) : second;
			    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
			  }
		}
    }
</script>
<style scoped>
    .customshop{
        overflow: hidden;
        padding: .2rem .3rem .32rem;
    }
    .customshop .lr img{
        float: left;
        margin: .41rem .32rem;
        width: 1rem;
        height: 1rem;
    }
    .customshop .lr{
        overflow: hidden;;
        width:100%;
        height:1.83rem;
        background-color: #ffffff;
        border-radius: 0.1rem;
    }
    .customshop .content{
        padding-left: 1.652rem;
        text-align: left;
        position: relative;
        padding-bottom: .5rem;
        margin-top: .56rem;
    }
    .customshop .title{
        width: 3rem;
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #000000;
    }
    .customshop .title span{
        position: absolute;
        right: .32rem;
        top: 0;
    }
     .customshop  .num{
        height: 0.19rem;
        font-family: PingFang-SC-Regular;
        font-size: 0.24rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0rem;
        letter-spacing: 0rem;
        color: #8f8f8f;
        position: absolute;
        right: .32rem;
        top: .6rem;
    }
    .customshop .sxprice{
        border-top: 1px solid #ddd;
        height: 0.73rem;
        font-family: PingFang-SC-Regular;
        font-size: 0.24rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #8f8f8f;
        background: #fff;
        border-bottom-left-radius: .1rem;
        border-bottom-right-radius: .1rem;
    }
    .customshop .sxprice p:nth-child(1){
        float: left;
        margin: .19rem 0 0 .32rem;
    }
    .customshop .sxprice p:nth-child(2){
        float: right;
        margin: .19rem .32rem 0 .32rem;
    }
    .customshop .sxprice p span{
        color: #000000;
    }
    .customorder_sn{
        overflow: hidden;
        padding: 0rem .3rem .32rem;
    }
    .customorder_sn .orderbh{
        overflow: hidden;
         padding: .27rem;
        background: #fff;
        text-align: left;
        border-bottom: 1px solid #ddd;
         border-top-left-radius: .1rem;
        border-top-right-radius: .1rem;
    }
    .customorder_sn .orderbh li{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        letter-spacing: 0rem;
        color: #000000;
        margin-bottom: .29rem;
    }
    .customorder_sn .orderbh li:last-child{
        margin-bottom: 0;
    }
    .customorder_sn .orderbh li label{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #8f8f8f;
    }
    .customorder_sn .orderzy{
        overflow: hidden;
         text-align: left;
         background: #fff;
         padding: .27rem;
          border-bottom-left-radius: .1rem;
        border-bottom-right-radius: .1rem;
    }
     .customorder_sn .orderzy li{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        letter-spacing: 0rem;
        color: #000000;
         margin-bottom: .29rem;
    }
    .customorder_sn .orderzy li label{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #8f8f8f;
    }
</style>
