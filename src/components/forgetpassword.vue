<template>
    <div class="forgetpassword_index">
        <top :text="header"></top>
        <div class="forgetpasswordinput">
             <label for="">
                 <input v-model='mobile' type="text" placeholder="请输入手机号码">
             </label>
              <label for="">
                 <input v-model="code" type="text" placeholder="请输入验证码">
                  <button v-if='flag==1' @click='getVerificationCode()'>获取验证码</button>
                  <button style="color:#999;text-align: right;padding-right: 10px;" v-else>{{count}} s</button>
             </label>
              <label for="">
                 <input v-model="password1" type="password" placeholder="请输入新密码">
             </label>
              <label for="">
                 <input v-model="password2" type="password" placeholder="请再次确认密码">
             </label>
        </div>
        <div class="sumbit">
            <a href="javascript:;" @click="sendRegisterInfo">
                完成
            </a>
        </div>
    </div>
</template>
<script>
import header from './header'
import { Toast } from 'we-vue'
import test from '../assets/js/String.js'
export default {
    components:{
        top:header
    },
    data(){
        return{
            header:'重设密码',
            code:'',
            returncode:'',
            mobile:'',
            password1:'',
            password2:'',
            flag:1,
            count:60
        }
    },
    created(){
    	
    },
    methods:{
    	getVerificationCode(){
    		let _this=this;
        	let mobile=_this.mobile.toString();
        	console.log(mobile)
        	_this.$axios({
				method:'POST',
				url:_this.$host+'/Home/Homeapi/get_code',
				params:{
					mobile:mobile,
				    op:'op'					
				}
				}).then((res)=>{
					console.log(res)
					_this.returncode=res.data.return.toString();
					_this.flag=0;
	                   setInterval(function(){
	                   	 _this.count--
	                   },1000)
			})
    	},
    	sendRegisterInfo(){
    		let _this=this;
        	let phone=_this.mobile.toString();
    		let code=_this.code;
    		let returncode=_this.returncode
    		let password=_this.password1;
    		let password2=_this.password2;
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
						message: '请输入新密码!'
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
    		}else{
    			_this.$axios({
    			method:'POST',
    			url:_this.$host+'/Home/Homeapi/resetpwd',
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
						Toast.success('密码修改成功!');
//						sessionStorage.setItem('user_id','')
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
    .forgetpasswordinput button{
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
        top: .5rem;
        z-index: 999;
        outline:none;
    }

  .forgetpasswordinput{
      padding: 0 .32rem;
  }

  .forgetpasswordinput label{
      display: block;
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      position: relative;
      border-bottom: 1px solid #ddd;
  }
  .forgetpasswordinput input{
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
