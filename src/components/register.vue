<template>
    <div class="register_index" style="height: 100%;background: #fff;">
        <top :text="header"></top>
        <div class="registerlogo">
            <img src="../assets/images/logo.png" alt="">
        </div>
        <div class="registerinput">
             <label for="">
                 <input type="text" placeholder="请输入手机号码" v-model='mobile'>
             </label>
              <label for="">
                 <input type="text" placeholder="请输入验证码" v-model='code'>
                  <button v-if='flag==1' @click='getVerificationCode()'>{{codeTip}}</button>
                  <button style="color:#999;text-align: right;padding-right: 10px;" v-else>{{count}} s</button>
                  
              </label>
              <label for="">
                 <input type="password" placeholder="请输入密码" v-model='password1'>
             </label>
              <label for="">
                 <input type="password" placeholder="请再次确认密码" v-model='password2'>
             </label>
        </div>
       <div class="xychoose">
                 <label for="">
                 	<img @click='chooseProtocol()' v-if='current=="true"' src="../assets/images/commonality/check.png" alt="">
                 	<img @click='chooseProtocol()' v-else src="../assets/images/commonality/unselected.png" alt="">
                 	
                 	我已阅读并同意
                 	
                 	<router-link to='/protocol'>
                 	    <span>《全民食谱用户服务协议》</span>
                 	</router-link>
                 </label>
             </div>
        <div class="sumbit">
            <a href="javascript:;" @click='sendRegisterInfo()'>
                注册
            </a>
        </div>
    </div>
</template>
<script>
import header from './header'
import { Toast } from 'we-vue'
import { Dialog } from 'we-vue'
import test from '../assets/js/String.js'
export default { 
    components:{
        top:header
    },
    data(){
        return{
            header:'',
            code:'',
            returncode:'',
            mobile:'',
            password1:'',
            password2:'',
            flag:1,
            count:60,
            current:'true',
            codeTip:'获取验证码'
        }
    },
    created(){
    	
    },
    methods:{
    	chooseProtocol(){
    		this.current=this.current=='true'?'false':'true';
    	},
    	
    	getVerificationCode(){
    		let _this=this;
        	let mobile=_this.mobile.toString();
        	console.log(mobile)
        	_this.$axios({
				method:'POST',
				url:_this.$host+'/Home/Homeapi/get_code',
				params:{
					mobile:mobile
				    				
				}
				}).then((res)=>{
					console.log(res)
//					_this.returncode=res.data.return.toString();
					if(res.data.status==-2){
						Toast.text({
						    duration: 1000,
							message: '该用户已存在!'
						})
						_this.$router.push('/login')
					}else if(res.data.status==-1){
						Toast.text({
						    duration: 1000,
							message: '手机号码不能为空!'
						})
					}
					else{
						_this.flag=0;
		                   setInterval(function(){
		                   	 if(_this.count==0){
		                   	 	_this.flag=1;
		                   	 	_this.codeTip='重新获取'
		                   	 }else{
		                   	 	_this.count--
		                   	 }
		                   },1000)
					}
                   
			})
    	},
    	sendRegisterInfo(){
    		let _this=this;
        	let phone=_this.mobile.toString();
    		let code=_this.code;
    		let returncode=_this.returncode
    		let password=_this.password1;
    		let password2=_this.password2;
    		let cur=_this.current;
    		console.log(phone)
    		if(!test.isMobileNumber(phone)){
    			Toast.text({
					duration: 1000,
						message: '请输入正确的手机号!'
					})
    		}else if(!code){
    			Toast.text({
					duration: 1000,
						message: '请输入验证码!'
					})
    		}else if(code!=returncode){
    			Toast.text({
					duration: 1000,
						message: '请输入正确的验证码!'
					})
    		}else if(!password){
    			Toast.text({
					duration: 1000,
						message: '请输入密码!'
					})
    		}else if(!test.isNumberAndLetter(password)){
    			Toast.text({
					duration: 1000,
						message: '请输入6-20位字母和数字组合!'
					})
    		}else if(!password2){
    			Toast.text({
					duration: 1000,
						message: '请输入确认密码!'
					})
    		}else if(password2!=password){
    			Toast.text({
					duration: 1000,
						message: '两次输入密码不一致!'
					})
    		}else if(cur=='false'){
    			Toast.text({
					duration: 1000,
						message: '请勾选服务协议!'
					})
    		}  		
    		else{
    			_this.$axios({
    			method:'POST',
    			url:_this.$host+'/Home/Homeapi/register',
    			params:{
    				phone:phone,
    				code:code,
    				password:password,
    				password2:password2
    				
    			}
    		}).then((res)=>{
    			console.log(res)
    			if(res.data.status==-1){
						Toast.text({
						  duration: 1000,
						  message: '该用户已存在!'
						})
					}else if(res.data.status==1){
						Toast.success('注册成功!');
						_this.$router.push('/login')
					}
    		 })
    		}
    		
    	}
    }
}
</script>
<style scoped>
   body,html{
        background: #fff!important;
    }
     .xychoose{
         text-align: left;
         padding: 0 .32rem;
         margin-top: .22rem;
     }
    .xychoose img{
        width: 0.26rem;
        height: 0.26rem;
        float: left;
        margin: .14rem .1rem .1rem 0;
    }
    .xychoose label{
        font-family: PingFang-SC-Regular;
        font-size: 0.22rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #000000;
    }
    .xychoose label span{
        font-family: PingFang-SC-Regular;
        font-size: 0.22rem;
        font-weight: normal;
        letter-spacing: 0rem;
        color: #41cff2;
    }
    .registerinput button{
        font-family: PingFang-SC-Regular;
        font-size: 0.3rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0rem;
        letter-spacing: -0.02rem;
        color: #41cff2;
        border: none;
        position: absolute;
        right: 0;
        top: .1rem;
        z-index: 999;
        outline:none;
        width: 1.5rem;
	    height: 0.8rem;
	    background: transparent
        
    }
  .registerlogo{
    padding-top: 1.1rem;
    margin-bottom: 1rem;
  }
  .registerlogo img{
      width: 56%;
  }
  .registerinput{
      padding: 0 .32rem;
  }

  .registerinput label{
      display: block;
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      position: relative;
      border-bottom: 1px solid #ddd;
  }
  .registerinput input{
      width: 100%;
      font-size: .3rem;
  }
  .sumbit{
      text-align: center;
      margin: 1rem auto .26rem;
  }
  .sumbit a{
      display: block;
      margin: auto;
      width: 5rem;
      height: .68rem;
      line-height: .68rem;
      font-size: .3rem;
      color: #fff;
      background-color: #d8d8d8;
      border-radius: .1rem;
      text-decoration: none;
  }
  .forget{
      text-align: center;
      margin:.26rem auto 0;
  }
  .forget a{
    text-decoration: none;
	height: 23px;
	font-family: PingFang-SC-Regular;
	font-size: .24rem;
	font-weight: normal;
	font-stretch: normal;
	line-height: 0px;
	color: #8f8f8f;
  }
</style>
