<template>
    <div class="card">
        <div class="card-top">
            <img src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" alt="">
        </div>
        <p class="card-card">
            送礼卡
        </p>
        <div class="card-content">
            <div class="card-content-top">
                <p class="card-content-title">特别的礼物送给特别的你</p>
                <p class="card-content-titles">SPECIAL GIFTS FOR SPECAIL YOU</p>
            </div>
            <div class="card-content-ul">
                <ul class="clearfix">
                    <li class="fl" v-for='item in cartList'>
            	        <router-link :to="{path:'/classify',query:{serviceId:item.id,name:item.name}}">
                    	
	                        <div class="card-content-ul-img">
	                            <img :src="item.image" alt="">
	                        </div>
	                        <div class="card-content-ul-text">
	                             {{item.name}}
	                        </div>
            	        </router-link>
                        
                    </li>
                   
                </ul>
            </div>
            <div class="card-y">
                <p>你好，我才安心。</p>
                <p>我好，你才放心。</p>
                <p>我们都要好好的。</p>
            </div>
        </div>
        <div class="card-z">
            <p class="card-z-title">
送礼须知：
            </p>
            <div class="card-z-text">
                你好，我才安心。你好，我才安心。你好，我才安心。你好，我才安心。你好，我才安心。你好，我才安心。
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data(){
		return{
			cartList:''
		}
	},
	created(){
		this.getCartList()
	},
	methods:{
		getCartList(){
			var that=this;
    		that.$axios(that.$host+'/index.php/Home//Homeapi/catena').then((res)=>{
    			console.log(res)
    			that.cartList=res.data.data;
    			console.log(that.cartList)
    		})
		}
	}
}
</script>

<style scoped>
.card-z-text{
    font-size: .26rem;
    text-align: left;
}
.card-z{
    padding: 0 .3rem;
}
.card-z-title{
font-size: .26rem;
text-align: left;
}
.card-y{
    margin-top: .6rem;
}
.card-y p{
    font-size: .24rem;
    text-align: center;
}
.card-content-ul-text{
    height: .6rem;
    line-height: .6rem;
    font-size: .26rem;
    text-align: center;
}
.card-content-ul-img img{
    width: 100%;
    height: 100%;
}
.card-content-ul-img{
    width: 3rem;
    height: 2.3rem;
    margin: 0 auto;
    background: #eee;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
}
.card-content-ul li{
    width: 3.1rem;
    margin-right: .5rem;
    padding: .05rem;
    border-radius: 5px;
    overflow: hidden;
    background: #fff;
    margin-bottom: .3rem;
}
.card-content-ul li a{
	color:#000;
}
.card-content-ul li:nth-child(2n){
    margin-right: 0;
}
.card-content-top{
    text-align: left;
    border-left: 1px solid rgb(132, 132, 132);
    padding-left: .1rem;
    margin-bottom: .5rem;
}
.card-content-title{
    font-size: .26rem;
}
.card-content-titles{
    font-size: .16rem;
}
.card-content{
    padding: .4rem .3rem;
}
.card-card{
    height: .85rem;
    line-height: .85rem;
    padding: 0 .3rem;
    font-size: .3rem;
    background: #fff;
    text-align: left;
}
.card-top img{
    width: 100%;
    height: 100%;
}
.card-top{
    width: 100%;
    height: 5rem;
    background: #009aff;
}
.card{
    margin-top: -1rem;
}
</style>
