<template>
    <div class="about">
        <top :text="header"></top>
        <div class="about-content">
             <h3 style="text-align: center;padding-bottom: 10px;">{{title}}</h3>
             <div v-html="detailData"></div>
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
      header: "问题详情",
      detailData:'',
      title:''
    }
  },
  created(){
  	this.getProblemDetails()
  },
  methods:{
  	getProblemDetails(){
  		let that=this;
  		let id=that.$route.query.id;
  		console.log(id)
    	that.$axios({
    		method:'POST',
    		url:that.$host+'/index.php/Home/Homeapi/problemtwo',
    		params:{
    			id:id
    		}
    	}).then((res)=>{
    		console.log(res)
    		that.detailData=res.data.data;
    		that.title=res.data.data.title;
    		
    		let temp = document.createElement('div')
    			temp.innerHTML = res.data.data.content;
    			console.log(temp.innerHTML)
    			that.detailData = temp.innerText
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
