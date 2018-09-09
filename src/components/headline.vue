<template>
    <div class="about">
        <top :text="header"></top>
        <div class="about-content">
            <div style="padding-bottom: 20px;font-size: 14px;" v-html="content"></div>
            
        </div>
        
    </div>
</template>

<script>
import header from "./header.vue";
export default {
  components: {
    top: header
  },
  data() {
    return {
      header: "头条详情",
      content:''
      
    }
  },
  created(){
  	this.getAboutUsInfo()
  },
  methods:{
  	getAboutUsInfo(){
  		var that=this;
    	that.$axios(that.$host+'/index.php/Home/Homeapi/err_goods_content').then((res)=>{
    		console.log(res)
    		that.content=res.data.data.err_goods_content;
//  		that.mycontent=res.data.data.mycontent;
    		
    			
    	})
  	}
  }
}
</script>

<style scoped>
.about-content {
    border-top:.2rem solid rgb(243,243,243);
  padding: 0.3rem;
  line-height: 0.5rem;
  font-size: 0.26rem;
  background:#fff;
  text-align: left;
}
</style>
