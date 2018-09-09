<template>
    <div class="about">
        <top :text="header"></top>
        <div class="about-content" v-html="agreement">
            
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
      header: "用户协议",
      agreement:''
    }
  },
  created(){
  	this.getAboutUsInfo()
  },
  methods:{
  	getAboutUsInfo(){
  		var that=this;
    	that.$axios(that.$host+'/index.php/Home/Homeapi/mycontent').then((res)=>{
    		console.log(res.data.data.content)
    		that.agreement=res.data.data.agreement;
    		let temp = document.createElement('div')
    		temp.innerHTML = res.data.data.agreement;
    			
    		that.agreement = temp.innerText
    			
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
