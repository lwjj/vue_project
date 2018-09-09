<template>
    <div class="about">
        <top :text="header"></top>
        <div class="about-content">
            
            <div v-html=" mycontent">
        	
             </div>
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
      header: "关于我们",
      content:'',
      mycontent:''
    }
  },
  created(){
  	this.getAboutUsInfo()
  },
  methods:{
  	getAboutUsInfo(){
  		var that=this;
    	that.$axios(that.$host+'/index.php/Home/Homeapi/mycontent').then((res)=>{
    		that.content=res.data.data.content;
    		that.mycontent=res.data.data.mycontent;
    		let temp = document.createElement('div')
    			temp.innerHTML = res.data.data.mycontent;
    			console.log(temp.innerHTML)
    			that.mycontent = temp.innerText
    			
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
