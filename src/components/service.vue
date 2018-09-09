<template>
    <div class="service">
        <top :text="header"></top>
        <div class="service-content">
                <ul class="clearfix">
                    <li v-for='item in serviceList' class="service-content-li fl">
                    	<router-link :to="{path:'/classify',query:{serviceId:item.id,name:item.name}}">
	                        <img :src="item.image" alt="">
	                        <div class="service-content-li-text ellipsis1">{{item.name}}</div>
                        </router-link>
                    </li>
                    
                </ul>
        </div>
    </div>
</template>

<script>
import header from './header.vue';
export default {
    components:{
        top:header
        
    },
    data(){
        return {
            header:'1V1服务区',
            serviceList:[]
        }
    },
    created(){
    	this.getServiceList()
    },
    methods:{
    	getServiceList(){
    		var that=this;
    		that.$axios(that.$host+'/index.php/Home/Homeapi/good_type').then((res)=>{

    			that.serviceList=res.data.data;
    			console.log(res.data.data)
    			
    		})
    	}
    }
}
</script>

<style scoped>
    .service-content-li{
        width: 3.3rem;
        height: 3.3rem;
        border-radius: 10px;
        background: rgba(0,0,0,.5);
        margin-left: .3rem;
        overflow: hidden;
        position: relative;
        margin-top: .3rem;
    }
    .service-content-li img{
        width: 100%;
        height: 100%;
    }
    .service-content-li-text{
        width: 100%;
        height: 100%;
        
        color: #fff;
        line-height: 3.3rem;
        font-size: .3rem;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
