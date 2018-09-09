<template>
    <div class="problem">
        <top :text="header"></top>
        <div class="problem-content">
            <ul style="text-align: left;">
                <li v-for='(item,index) in content' class="clearfix">
	            	<router-link style='color:#000' :to="{path:'/problemdets',query:{id:item.id}}">
                	
	                    <div class="fl" id='content'>{{index+1}}. {{item.title}}</div>
	                    <div class="fr">></div>
                    </router-link>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
import header from './header.vue'
export default {
    components:{
        top : header
    },
    data(){
        return {
            header:'常见问题',
            content:[]
        }
    },
    created(){
    	this.getProblemList()
    },
    methods:{
    	getProblemList(){
    		let _this=this;
    		_this.$axios(_this.$host+'/index.php/Home/Homeapi/problem').then((res)=>{
    			console.log(res)
    			_this.content=res.data.data;
    		})
    	}
    }
}
</script>

<style scoped>
.problem-content{
    border-top: .2rem solid rgb(243, 243, 243)
}
.problem-content li{
    line-height: .8rem;
    height: .8rem;
    padding: 0 .3rem;
    font-size: .26rem;
    background: #fff;
   
}
#content{
	 overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	display: block;
	width: 96%;
}
</style>
