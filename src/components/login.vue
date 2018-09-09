<template>
    <div class="login_index" style="height: 100%;background: #fff;">
        <top :text="header"></top>
        <div class="loginlogo">
            <img src="../assets/images/logo.png" alt="">
        </div>
        <div class="logininput">
             <label for="">
                 <input type="text" placeholder="请输入手机号码" v-model='mobile'>
             </label>
              <label for="">
                 <input type="password" placeholder="请输入密码" v-model='psw'>
             </label>
        </div>
        <div class="forget">
            <router-link  to='/forgetpassword'>忘记密码</router-link>
            
        </div>
        <div class="sumbit">
            <a href="javascript:;" @click='loginIn()'>
                登录
            </a>
        </div>
        <div class="forget" style="text-align: center;">
            <router-link style='color:#f4a110;font-size: .3rem;' to='/register'>注册</router-link>
            
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
            header:'登录',
            mobile:'',
            psw:''
        }
    },
    created(){
    	
    },
    methods:{
    	loginIn(){
    		let _this=this;
    		let mobile=_this.mobile;	
    		let psw=_this.psw;
    		if(!test.isMobileNumber(mobile)){
    			Toast.text({
					duration: 1000,
					message: '请输入手机号码!'
				})
    		}else if(!psw){
    			Toast.text({
					duration: 1000,
					message: '请输入密码!'
				})
    		}else{
    			_this.$axios({
	    			method:'POST',
	    			url:_this.$host+'/Home/Homeapi/login',
	    			  
	    			params:{
	    				mobile:mobile,
	    				password:psw
	    			}
	    		}).then((res)=>{
	    			console.log(res)
	    			if(res.data.status==1){
	    				sessionStorage.setItem('user_id', res.data.user_id);
	    				sessionStorage.setItem('phone', mobile);
	    				
	    				Toast.success('登录成功!');
	    				_this.$router.push({path:'/'})
	    			}else{
	    				Toast.fail('登录失败!');
	    			}
	    		})
    		}
    		
    	}
    }
}
</script>
<style scoped>
   body,html{
        background: #fff !important;
    }
  .loginlogo{
    padding-top: 1.1rem;
    margin-bottom: 1rem;
  }
  .loginlogo img{
      width: 56%;
  }
  .logininput{
      padding: 0 .32rem;
  }

  .logininput label{
      display: block;
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      border-bottom: 1px solid #ddd;
  }
  .logininput input{
      width: 100%;
      font-size: .3rem;
  }
  .sumbit{
      text-align: center;
      margin: .6rem auto .26rem;
  }
  .sumbit a{
      display: block;
      margin: auto;
      width: 5rem;
      height: .68rem;
      line-height: .68rem;
      font-size: .3rem;
      color: #fff;
      background-color: #42cff2;
      border-radius: .1rem;
      text-decoration: none;
  }
  .forget{
        text-align: right;
	    margin: .26rem auto 0;	
	    padding: 0 .32rem;
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
