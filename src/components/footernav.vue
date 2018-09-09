<template>
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
                    <img src="../assets/images/tabbar/service_a.png" alt="">
                    <p>在线客服</p>
                </li>
                <li>               	
	                <img src="../assets/images/tabbar/me_a.png" alt="">
	                <p>个人中心</p>                   
                </li>
            </ul>
        </div>
</template>

<script>
export default {
	data(){
		return{
			
		}
	},
	created(){
		
	},
	methods:{
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
    background: #009aff;
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
