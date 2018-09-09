<template>
    <div class="set">
        <top :text="header"></top>
        <div class="Yxx-ul">
            <ul>
                <li class="clearfix Yxx-li1" style="padding: .1rem .3rem;">
                    <div class="fl">
                        头像
                    </div>
                    <div class="fr Yxx-img" style="position: relative;right: 30px;">
                         <!--<img :src="url+list.head_pic" alt="" v-if="list.head_pic">--> 
                        <!-- <img src="" alt="" v-else> -->
                        <!--<img src="" alt="">
                        <input type="file" id="file2" class="file" ref="avatarInput">-->
                        <el-upload
			        	  ref="foreignPersonUploadItem"
						  class="avatar-uploader"
						  action="https://qmsp.juhuiyanfa.com/index.php/Home/Homeapi/updateUseimg"
						  :show-file-list="false"
						  :on-success="handleAvatarSuccess"
						  :on-progress='handleProgress'
						  accept=".jpg,.png,"						  
						  name='head_pic'>
						  <img style="width:.8rem;height: .8rem;" :src="head_pic" class="avatar">
						  <!--<i v-else class="">
						  	<img style="width:.8rem;height: .8rem;" :src="pic=='null'?'../assets/images/me/order_skip.png':pic"/>
						  </i>-->
						</el-upload>
                    </div>
                     <img style="width: 10px;" src="../assets/images/me/order_skip.png" alt="" class="Yxx-icon"> 
                </li>
                <li @click="dialogVisible = true" class="clearfix">
                    <div class="fl">昵称</div>
                    <div class="fr">{{uname}}</div>
                     <img style="width: 10px;" src="../assets/images/me/order_skip.png" alt="" class="Yxx-icon"> 
                    
                    <!-- <img src="../assets/images/left.png" alt="" class="Yxx-icon"> -->
                </li>
                <li @click="dialogVisible2=true" class="clearfix">
                    <div class="fl">手机号</div>
                    <div class="fr">{{phone}}</div>
                     <img style="width: 10px;" src="../assets/images/me/order_skip.png" alt="" class="Yxx-icon"> 
                    
                    <!-- <img src="../assets/images/left.png" alt="" class="Yxx-icon"> -->
                </li>
            </ul>

        </div>
        <div class="set-tui" @click="loginOut()">
            退出当前账户
        </div>
        <div>
        	
			<!--<form action="https://qmsp.juhuiyanfa.com/index.php/Home/Homeapi/updateUseimg" method="post" enctype="multipart/form-data">
				<input type="file" name="head_pic" id="head_pic" value="" />
				<input type="submit" value="提交"/>
			</form>-->
        </div>
        <!--弹出框-->
        <el-dialog
		  title="修改昵称"
		  :visible.sync="dialogVisible"
		  width="80%"
		  >
		  <el-input v-model="updateName" placeholder="请输入昵称"></el-input>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="updateUname()">确 定</el-button>
		  </span>
		</el-dialog>
		<el-dialog
		  title="修改电话号码"
		  :visible.sync="dialogVisible2"
		  width="80%"
		  >
		  <el-input v-model="updateNum" placeholder="请输入电话号码"></el-input>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible2 = false">取 消</el-button>
		    <el-button type="primary" @click="updatePhone()">确 定</el-button>
		  </span>
		</el-dialog>
		
    </div>
</template>

<script>
import header from './header.vue'
import { Toast } from 'we-vue'
import test from '../assets/js/String.js'
import Qs from 'qs'
export default {
    components:{
        top:header
        
    },
    data(){
        return {
            header:'设置',
            imageUrl: '',
            uname:'userName',
            phone:sessionStorage.getItem('phone'),
            picImg:'',
            pic:'',
            dialogVisible: false,
            dialogVisible2: false,
            updateName:'',
            updateNum:'',
            head_pic:''
        }
    },
    created(){
    	 this.getUserInfo()
    },
    methods:{
    	
    	loginOut(){
    		let _this=this;
    		_this.$axios(_this.$host+'/index.php/Home/Homeapi/loginout').then((res)=>{
    			console.log(res);
    			if(res.data.status==1){
    				sessionStorage.setItem('user_id','');
    				sessionStorage.setItem('phone','');
		      		sessionStorage.setItem('uname','');
    				
    				Toast.text({
					  duration: 1000,
					  message: '退出成功!'
					})
    				_this.$router.push('/my')
    			}
    		})
    	},
    	handleAvatarSuccess(res, file) {
	        this.imageUrl = URL.createObjectURL(file.raw);
	        if(res.status==1){
	        	Toast.text({
				  duration: 1000,
				  message: '更改成功!'
				})
	        	this.picImg=res.result;
	        	this.$axios({
		      		method:'POST',
		      		url:this.$host+'/index.php/Home/Homeapi/updateset',
		      		params:{
		      			user_id:sessionStorage.getItem('user_id'),
		      			op:'pic',
		      			img:this.picImg
		      		}
		      	}).then((res)=>{
		      		console.log(res)
		      		this.pic=res.data.img;
		      		this.getUserInfo();
		      	})
	        }
	        console.log(res)
      },
      handleProgress(){
      	Toast.loading('上传中...')
      },
      
      updateUname(){
      	var _this=this;
      	console.log(_this.updateName)
      	let postData={
      		user_id:sessionStorage.getItem('user_id'),
	      	op:'name',
	      	nickname:_this.updateName
      	}
      	   _this.$axios({
	      		method:'POST',
	      		url:_this.$host+'/index.php/Home/Homeapi/updateset',
		  		data:Qs.stringify(postData)
	      		
      	}).then((res)=>{
      		console.log(res)
      		if(res.data.msg==1){
      			Toast.text({
				  duration: 1000,
				  message: '修改成功!'
				})
      		   _this.uname=_this.updateName;
      		   sessionStorage.setItem('uname',_this.uname);
      		   _this.dialogVisible=false;
      		}else{
      			Toast.text({
				  duration: 1000,
				  message: '修改失败!'
				})
      		}
      	})
      },
      updatePhone(){
      	var _this=this;
      	console.log(_this.updateNum)
      	if(!test.isMobileNumber(_this.updateNum)){
      		Toast.text({
				duration: 1000,
			    message: '手机号码格式不对!'
			})
      	}else{
      		let postData={
      		user_id:sessionStorage.getItem('user_id'),
	      	phone:_this.updateNum
      	}
      	   _this.$axios({
	      		method:'POST',
	      		url:_this.$host+'/index.php/Home/Homeapi/updateset',
		  		data:Qs.stringify(postData)
	      		
      	}).then((res)=>{
      		console.log(res)
      		if(res.data.msg==1){
      			_this.phone=_this.updateNum;
      			Toast.text({
				  duration: 1000,
				  message: '修改成功!'
				})
      			sessionStorage.setItem('user_id','');
    			sessionStorage.setItem('phone','');
      		   _this.dialogVisible=false;
    			
    			_this.$router.push('/login')
      		}else{
      			Toast.text({
				  duration: 1000,
				  message: '修改失败!'
				})
      		}
      		
      	})
      	}
      	
      },
      getUserInfo(){
    		let _this=this;
    		_this.$axios({
		      		method:'POST',
		      		url:_this.$host+'/index.php/Home/Homeapi/myself',
		      		params:{
		      			user_id:sessionStorage.getItem('user_id')
		      		}
		      	}).then((res)=>{
		      		console.log(res)
		      		if(res.data.re.nickname){
		      			_this.uname=res.data.re.nickname;
		      			_this.phone=res.data.re.mobile;
		      			_this.head_pic=res.data.re.head_pic;
		      		}
		      	})
    	}
      
    }
}
</script>

<style scoped>
.set-tui{
    width: 4.45rem;
    height: .78rem;
    line-height: .78rem;
    text-align:center;
    font-size: .3rem;
    margin: 0 auto;
    background: #5acfec;
    margin-top:2rem;
    color: #fff;
}
.Yxx-ul{
    background: #fff;
    border-top: .2rem solid rgb(243, 243, 243)
}
.Yxx-ul li{
    padding: .3rem;
    border-bottom: 1px solid #f7f7f7;
    font-size: .24rem;
    position: relative;
    padding-right:.8rem; 
}
.Yxx-img{
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    background: #f7f7f7;
    position: relative;
    overflow: hidden;

    
}
.Yxx-li1{
    line-height:.8rem
}
.Yxx-icon{
    width: .30rem;
    height: .35rem;
    position: absolute;
    right: .3rem;
    top: 50%;
    transform: translateY(-50%)
}
.file{
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    opacity: 0;
    overflow: hidden;
    top: 0;
    left: 0;
    position: absolute;
}


</style>
