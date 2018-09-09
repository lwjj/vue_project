<template>
    <div class="service">
        <top :text="header"></top>
        <div class="evaluation-content">
            <div class="evaluation-content-header">
                <ul class="clearfix evaluation-content-header-ul">
                    <div >
                        <li @click="selectNav('')" class="evaluation-content-header-li fl" :class="status==''?'evaluation-content-header-li-act':''">
                                                                      全部{{evaluateSum.numall}}
                        </li>
                        <li @click="selectNav(2)" class="evaluation-content-header-li fl" :class="status==2?'evaluation-content-header-li-act':''">
                                                                       好评{{evaluateSum.num}}
                        </li>
                        <li @click="selectNav(1)" class="evaluation-content-header-li fl" :class="status==1?'evaluation-content-header-li-act':''">
                                                                      中评{{evaluateSum.num1}}
                        </li>
                        <li @click="selectNav(-1)" class="evaluation-content-header-li fl" :class="status==-1?'evaluation-content-header-li-act':''">
                                                                     差评{{evaluateSum.num3}}
                        </li>
                    </div>
                </ul>
                <ul class="evaluation-content-text">
                    <li class="evaluation-content-texts" v-for='item in evaluationList'>
                        <div class="evaluation-content-texts-header clearfix">
                            <img src="../assets/images/commonality/portrait.png" alt="" class="fl evaluation-content-img">
                            <span class="fl evaluation-content-name">{{item.username}}</span>
                        </div>
                        <div class="evaluation-content-texts-time clearfix">
                            <span class="fl">{{item.time}}</span>
                            <span class="fl">{{item.name}}</span>
                        </div>
                        <div class="evaluation-content-texts-content">
                            {{item.content}}
                        </div>
                    </li>
                    
                </ul>
            </div>
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
            header:'详情',
            top:['全部','好评','中评','差评'],
            act:0,
            status:'',
            evaluationList:[],
            evaluateSum: []
        }
    },
    created(){
    	this.getDetails()
    },
    methods:{
    	getDetails(){
    		let _this=this;
    		let goods_id=_this.$route.query.goodId;
    		let status=_this.$route.query.status;
    		console.log(status)
    		console.log(goods_id)
    		_this.$axios({
    			method:'POST',
    			url:_this.$host+'/index.php/Home/Homeapi/content_list',
    			
    			params:{
    				oid:goods_id,
    				status:_this.status
    			}
    		}).then((res)=>{
    			console.log(res)
    			 _this.evaluationList=res.data.data;
                 _this.evaluateSum=res.data.num;
                 _this.evaluationList.forEach(item =>{
		            console.log(item);
		           
		            item.time = _this.format(item.add_time, 'yyyy-MM-dd');
          })
    		})
    	},
        selectNav:function(num){
		    this.status=num;
		    this.getDetails()
		},
		format: function (time, format) {
		    var t = new Date(time);
		    var tf = function (i) { return (i < 10 ? '0' : '') + i };
		    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
		      switch (a) {
		        case 'yyyy':
		          return tf(t.getFullYear());
		          break;
		        case 'MM':
		          return tf(t.getMonth() + 1);
		          break;
		        case 'mm':
		          return tf(t.getMinutes());
		          break;
		        case 'dd':
		          return tf(t.getDate());
		          break;
		        case 'HH':
		          return tf(t.getHours());
		          break;
		        case 'ss':
		          return tf(t.getSeconds());
		          break;
		      }
		    })
		  }
		
    }
}
</script>

<style scoped>
.evaluation-content-header{
    background: #fff;
}
.evaluation-content-header-ul{
    border-bottom: 1px solid rgb(245, 245, 245)
}
.evaluation-content-header-li{
    width: 1.3rem;
    height: .46rem;
    border-radius: .3rem;
    text-align: center;
    line-height: .46rem;
    background: #98e6f9;
    margin: .2rem;
    font-size: .22rem;
    color:#fff;
}
.evaluation-content-header-li-act{
    background: #5acfec;
   
}
.evaluation-content-text{
    background: #f0f0f0;
}
.evaluation-content-texts{
    padding: .35rem;
    background: #fff;
    margin-bottom: .2rem;
}
.evaluation-content-texts-header{
    margin-bottom: .25rem;
}
.evaluation-content-img{
    width: .4rem;
    height: .4rem;
    display: block;
    border-radius: 50%;
 
    overflow: hidden;
    margin-right: .2rem;
}
.evaluation-content-name{
    font-size: .26rem;
    line-height: .4rem;
}
.evaluation-content-texts-time{
    font-size: .2rem;
    color: #8f8f8f;
}
.evaluation-content-texts-time span{
    margin-right: .3rem;
}
.evaluation-content-texts-content{
    margin-top: .1rem;
    font-size: .24rem;
    line-height: .4rem;
    text-align: left;
}
</style>
