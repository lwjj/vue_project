<template>
    <div class="nutritionstrules_index">
         <top :text="header"></top>
         <div class="rzbox">
             <div class="input_rule">
                 <ul>
                    <li>
                        <label for="">真实姓名:</label> <input v-model="name" type="text" v-text="Name">
                        
                    </li>
                     <li>
                        <label for=""><span>*</span>身份证号:</label> <input v-model="icard" type="text" v-text="Cartno">
                     </li>
                     <li>
                        <label for=""><span>*</span>上传身份证:</label>
                     </li>
                 </ul>
             </div>
             <div class="uploadcartimg">
                 <ul>
                     <li style="position: relative;">
                     	<label for="">
                         <!--<img v-if='' src="../assets/images/20180703091921.png" alt="">-->
                         <el-upload
				        	 
							  class="avatar-uploader"
							  action="https://qmsp.juhuiyanfa.com/index.php/Home/Homeapi/updateUseimg"
							  :show-file-list="false"
							  :on-success="handleAvatarSuccess1"
							  :on-progress='handleProgress'
							  name='head_pic'
							  accept=".jpg,.png,"
							  :limit=1
							  :before-upload="beforeAvatarUpload">
							  <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
							  <div  v-else >
								  <i class="el-icon-plus avatar-uploader-icon"></i>
								  <div  class="pic_text">证件正面</div>
							  </div>
						</el-upload>
                         <!--<input @change="getFile1" type="file" name="1" id="" value="1" />-->
                         </label>
                     </li>
                      <li style="position: relative;">
                      	 <label for="">
                         <!--<img v-if='' src="../assets/images/20180703091921.png" alt="">-->
                         <el-upload
				        	 
							  class="avatar-uploader"
							  action="https://qmsp.juhuiyanfa.com/index.php/Home/Homeapi/updateUseimg"
							  :show-file-list="false"
							  :on-success="handleAvatarSuccess2"
							  :on-progress='handleProgress'
							  
							  name='head_pic'
							  accept=".jpg,.png,"
							  :before-upload="beforeAvatarUpload">
							  <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
							  <div  v-else >
								  <i class="el-icon-plus avatar-uploader-icon"></i>
								  <div  class="pic_text">证件正面</div>
							  </div>
						</el-upload>
                         <!--<input @change="getFile1" type="file" name="1" id="" value="1" />-->
                         </label>
                      </li>
                 </ul>
             </div>
             <div class="tipcart">
                 <p><span>*</span>身份证正面照和身份证反面照</p>
                 <p>1.请上传本人身份证正面照和反面照片</p>
                 <p>2.照片为身份证原始图片,请勿用任何软件编辑修改</p>
                 <p>3.必须看清证件信息,且证件信息不能被遮挡,持证人五官清晰可见</p>
                 <p>4.仅支持jpg、png的图片格式。建议图片大小不超过3M</p>
                 <p>5.您提供的照片信息将予以保护,不会用于其他用途</p>
             </div>
             <div class="nutritiontype">
                 <label for=""><span>*</span>营养师类型:</label>
                 <div class="select_type">
                     <ul>
                         <li v-for='(item,index) in typeList'><label for=""><input type="radio" class="radio" :value="item" v-model="type"/>{{item}}</label></li>
            
                     </ul>
                 </div>     
             </div>
             <div class="nutritiontype_jk">
                 <label for=""><span>*</span>营养师级别:</label>
                 <div class="select_type">
                     <ul>
                         <li v-for="(item,index) in levelList"><label for=""><input type="radio" name="" id="" :value="item" v-model="level"/>{{item}}</label></li>
                         
                     </ul>
                 </div>     
             </div>
             <div class="nutritiontype_zc">
                 <label for=""><span>*</span>专<a>长</a>:</label>
                 <div class="select_type">
                      <p class="down" @click="showToggle()">
                        <img src="../assets/images/down@2x.png" alt="">
                    </p>
                     <ul :class="{on:isA==true}">
                         <li v-for="item in zhuanc"><label for=""><input type="checkbox" name="" id="" :value="item" v-model="expertise"/>{{item}}</label></li>
                         
                     </ul>
                 </div>     
             </div>
             <div class="nutritiontype_sc">
                 <label for=""><span>*</span>擅<a>长</a>: <br><b>(最多选择3项)</b></label>
                 <!-- <label for="" class="bt">(最多选择3项)</label> -->
                 <div class="select_type">
                     <p class="down" @click="showToggleB()">
                        <img src="../assets/images/down@2x.png" alt="">
                    </p>
                     <ul :class="{on:isB==true}">
                         <li v-for="item in shanC"><label for=""><input type="checkbox" name="" id="" :value="item" v-model="speciality"/>{{item}}</label></li>
                         

                     </ul>
                 </div>     
             </div>
             <div class="qualification">
                 <label for=""><span>*</span>执业资格证书编号：</label><input v-model="number" type="text" v-text="qualification_num">
             </div>
             <div class="uploadqualification">
                 <p><span>*</span> 执业资格证书:</p>
                  <ul>
                     <li style="position: relative;">
                     	<label for="">
                         <!--<img v-if='' src="../assets/images/20180703091921.png" alt="">-->
                         <el-upload
				        	 
							  class="avatar-uploader"
							  action="https://qmsp.juhuiyanfa.com/index.php/Home/Homeapi/updateUseimg"
							  :show-file-list="false"
							  :on-success="handleAvatarSuccess3"
							  :on-progress='handleProgress'
							  
							  name='head_pic'
							  accept=".jpg,.png,"
							  :before-upload="beforeAvatarUpload">
							  <img v-if="imageUrl3" :src="imageUrl3" class="avatar">
							  <div  v-else >
								  <i class="el-icon-plus avatar-uploader-icon"></i>
								  <div  class="pic_text">证件正面</div>
							  </div>
						</el-upload>
                         <!--<input @change="getFile1" type="file" name="1" id="" value="1" />-->
                         </label>
                     </li>
                      <li style="position: relative;">
                      	<label for="">
                         <!--<img v-if='' src="../assets/images/20180703091921.png" alt="">-->
                         <el-upload
				        	  
							  class="avatar-uploader"
							  action="https://qmsp.juhuiyanfa.com/index.php/Home/Homeapi/updateUseimg"
							  :show-file-list="false"
							  :on-success="handleAvatarSuccess4"
							  :on-progress='handleProgress'
							  
							  name='head_pic'
							  accept=".jpg,.png,"
							  :before-upload="beforeAvatarUpload">
							  <img v-if="imageUrl4" :src="imageUrl4" class="avatar">
							  <div  v-else >
								  <i class="el-icon-plus avatar-uploader-icon"></i>
								  <div  class="pic_text">证件正面</div>
							  </div>
						</el-upload>
                         <!--<input @change="getFile1" type="file" name="1" id="" value="1" />-->
                         </label>
                     </li>
                 </ul>
             </div>
             <div class="qutip">
                <label for=""> <span>*</span>保持证件信息清晰度</label>
             </div>
             <div class="offiec">
                  <label for=""> <span>*</span>发证机关:</label><input v-model="organ" type="text" v-text="officenum">
             </div>
              <div class="offiectime">
                  <label for=""> <span>*</span>发证时间:</label><input v-model="organ_time" type="text" v-text="time">
             </div>
             <div class="provicetp">
                  <label for=""> <span>*</span>现工作地区:</label><input v-model="area" type="text" v-text="provice" placeholder="填写省份">
             </div>
             <div class="address_input">
                  <label for=""> <span>*</span>详细地址:</label><input v-model="adress" type="text" v-text="address" placeholder="填写详细地址">
             </div>
             <div class="xychoose">
                 <label for="">
                 	<img @click='chooseProtocol()' v-if='current=="true"' src="../assets/images/commonality/check.png" alt="">
                 	<img @click='chooseProtocol()' v-else src="../assets/images/commonality/unselected.png" alt="">
                 	
                 	同意并已阅读<router-link to='/protocol'><span>《营养师注册及服务协议》</span></router-link></label>
             </div>
         </div>
          <div class="sumbitrz">
            <a href="javascript:;" @click="sendFormData()">提交</a>
         </div>
    </div>
</template>
<script>
    import header from './header'
    import Qs from 'qs'
    import String from '../assets/js/String.js'
    import { Toast } from 'we-vue'
    
    export default {
        components:{
            top:header
        },
        data(){
            return{
                isA:false,
                isB:false,
                header:'营养师认证',
                Name:'',//真实姓名
                Cartno:'',//身份证号
                qualification_num:'',//执业资格证书编号
                officenum:'',//发证机关
                time:'',//发证时间:
                provice:'',//省
                address:'',//详细地址
                typeList:['公共营养师','临床营养师(医)','临床营养师(技)','临床营养师(专)','注册营养师','注册营养技师'],
                levelList:['五级','四级','三级','二级','一级','注册营养师','注册营养技师'],
                zhuanc:['孕期完美营养摄取','哺乳期完美营养摄取','幼儿完美营养摄取','婴儿营养喂养','儿童发育完美营养摄取','学生青少年生长完美营养摄取','科学减肥','慢性病营养调理','常见疾病营养调理','中老年养生','中医食疗养生','亚健康','妇产科医生','儿科医生'],
                shanC:['防止营养素摄取超标','防止高体重胎儿','防止低体重儿','防止胎儿发育迟缓生长缓慢 预防早产','学生青少年生长完美营养摄取','预防分娩困难产程过长','出生缺陷饮食预防','孕期缺钙营养调理','孕期贫血食疗调理','孕妈妈倦怠体乏调理','孕吐营养调理','妊娠高血压营养调理','妊娠糖尿病营养调理','缺铁性贫血营养调理','胎儿不同发育阶段针对性营养补充','孕期科学增重','孕期不同阶段营养素完美摄取','胎儿不同发育阶段针对性营养补充'],
                type:'公共营养师',
                level:'五级',
                expertise:['孕期完美营养摄取'],
                speciality:['防止营养素摄取超标'],
                name:'',
                icard:'',
                number:'',
                organ:'',
                organ_time:'',
                area:'',
                adress:'',
                icard_img:'',
                icard_img2:'',
                zs_img:'',
                zs_img2:'',
                imageUrl1: '',
                imageUrl2: '',
                imageUrl3: '',
                imageUrl4: '',
                current:'true'
                
                
            }
        },
        mounted(){

        },
        methods:{
            showToggle:function(item){
                this.isA=!this.isA;
        　　} ,
            showToggleB:function(item){
                this.isB=!this.isB;
        　　},
        chooseProtocol(){
    		this.current=this.current=='true'?'false':'true';
    	},
        deleteImg (index) { // 点击删除删除图片
		      this.form.attachment.splice(index, 1)
		      this.$refs.uploadItem.uploadFiles.splice(index, 1)
		},
    	handleAvatarSuccess1(res, file) {
	        this.imageUrl1 = URL.createObjectURL(file.raw);
	        if(res.status==1){
	        	Toast.text({
				  duration: 1000,
				  message: '上传图片成功!'
				})
	        	this.icard_img=res.result;
	        }
	        console.log(res)
      },
      handleProgress(){
      	Toast.loading('上传中...')
      },
      handleAvatarSuccess2(res, file) {
	        this.imageUrl2 = URL.createObjectURL(file.raw);
	        if(res.status==1){
	        	Toast.text({
				  duration: 1000,
				  message: '上传图片成功!'
				})
	        	this.icard_img2=res.result;
	        }
	        console.log(res)
      },
    	handleAvatarSuccess3(res, file) {
	        this.imageUrl3 = URL.createObjectURL(file.raw);
	        if(res.status==1){
	        	Toast.text({
				  duration: 1000,
				  message: '上传图片成功!'
				})
	        	this.zs_img=res.result;
	        }
	        console.log(res)
      }
      ,
    	handleAvatarSuccess4(res, file) {
	        this.imageUrl4 = URL.createObjectURL(file.raw);
	        if(res.status==1){
	        	Toast.text({
				  duration: 1000,
				  message: '上传图片成功!'
				})
	        	this.zs_img2=res.result;
	        }
	        console.log(res)
     },
      beforeAvatarUpload(file) {
//      const isJPG = file.type === 'image/jpeg'||'image/png'||'image/gif'||'image/JPEG'||'image/GIF'||'image/PNG';
//      const isLt3M = file.size / 1024 / 1024 < 3;
//
//      if (!isJPG) {
//        this.$message.error('上传头像图片格式错误!');
//      }
//      if (!isLt2M) {
//        this.$message.error('上传头像图片大小不能超过 3MB!');
//      }
//      return isJPG && isLt3M;
      },
         
		  sendFormData(){
		  	let _this=this;
		  	let user_id=sessionStorage.getItem('user_id')
		  	console.log(user_id)
		  	if(!_this.name){
		  		Toast.text({
				  duration: 1000,
				  message: '请输入姓名!'
				})
		  	}else if(!String.isIdentity(_this.icard)){
		  		Toast.text({
				  duration: 1000,
				  message: '请输入正确的身份证号码!'
				})
		  	}else if(!_this.icard_img){
		  		Toast.text({
				  duration: 1000,
				  message: '请上传您的身份证正面照!'
				})
		  	}else if(!_this.icard_img2){
		  		Toast.text({
				  duration: 1000,
				  message: '请上传您的身份证反面照!'
				})
		  	}else if(!_this.type){
		  		Toast.text({
				  duration: 1000,
				  message: '请勾选营养师认证!'
				})
		  	}else if(!_this.level){
		  		Toast.text({
				  duration: 1000,
				  message: '请勾选营养师级别!'
				})
		  	}else if(!_this.expertise.length>3){
		  		Toast.text({
				  duration: 1000,
				  message: '请勾选营养师专长!'
				})
		  	}else if(!_this.speciality.length>3){
		  		Toast.text({
				  duration: 1000,
				  message: '请勾选营养师擅长!'
				})
		  	}else if(!_this.number){
		  		Toast.text({
				  duration: 1000,
				  message: '请输入您的证书编号!'
				})
		  	}else if(!_this.zs_img){
		  		Toast.text({
				  duration: 1000,
				  message: '请上传您的证书正面照!'
				})
		  	}else if(!_this.zs_img2){
		  		Toast.text({
				  duration: 1000,
				  message: '请上传您的证书反面照!'
				})
		  	}else if(!_this.organ){
		  		Toast.text({
				  duration: 1000,
				  message: '请输入发证机关!'
				})
		  	}else if(!_this.organ_time){
		  		Toast.text({
				  duration: 1000,
				  message: '请输入发证时间!'
				})
		  	}else if(!_this.adress){
		  		Toast.text({
				  duration: 1000,
				  message: '请输入详细地址!'
				})
		  	}else if(!_this.area){
		  		Toast.text({
				  duration: 1000,
				  message: '请输入工作地区!'
				})
		  	}else if(_this.current=='false'){
		  		Toast.text({
				  duration: 1000,
				  message: '请勾选服务协议!'
				})
		  	}else{
		  		let expertise=_this.expertise.join(',');
		  		let speciality=_this.speciality.join(',')
		  		let postData={
		  		user_id:user_id,
		  		type:_this.type,
                level:_this.level,
                expertise:expertise,
                speciality:speciality,
                name:_this.name,
                icard:_this.icard,
                number:_this.number,
                organ:_this.organ,
                organ_time:_this.organ_time,
                area:_this.area,
                adress:_this.adress,
                icard_img:_this.icard_img,
                icard_img2:_this.icard_img2,
                zs_img:_this.zs_img,
                zs_img2:_this.zs_img2,
                
               }
		  		 _this.$axios({
		  		method:'POST',
		  		url:_this.$host+'/index.php/Home/Homeapi/user_zs_list',
		  		data:Qs.stringify(postData)
			  	}).then((res)=>{
			  		console.log(res)
			  		if(res.data==1){
			  			_this.$router.push('/successfully')
			  		}
			  	})
		  	}
		  	
		  	
		  }
        }
    }
</script>
<style scoped>
    .nutritionstrules_index{
        overflow: hidden;
        padding-top: .15rem;
    }
    .nutritionstrules_index .rzbox {
        padding: 0 .3rem .8rem;
        background: #fff;
    }
    .nutritionstrules_index .rzbox .input_rule ul li{
        text-align: left;
        height: .89rem;
        line-height: .89rem;
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #000000;
        border-bottom: 1px solid #ddd;
    }
    .nutritionstrules_index .rzbox .input_rule ul li span,
    .nutritionstrules_index .tipcart p span,
    .nutritionstrules_index .nutritiontype label span,
    .nutritionstrules_index .nutritiontype_jk label span,
    .nutritionstrules_index .nutritiontype_zc label span,
    .nutritionstrules_index .nutritiontype_sc label span,
    .nutritionstrules_index .qualification label span,
    .nutritionstrules_index .uploadqualification p span,
     .qutip label span,
     .offiec label span,.offiectime label span,
     .provicetp label span,.address_input label span{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0rem;
        letter-spacing: 0rem;
        color: #ff6976;
    }
   	
    .nutritionstrules_index .rzbox .input_rule ul li:last-child{
        border: none;
    }
    .nutritionstrules_index .uploadcartimg {
        overflow: hidden;
        margin-bottom: .2rem;
    }
    .nutritionstrules_index .uploadcartimg ul li{
        width: 3.26rem;
        height: 2.11rem;
        float: left;
    }
    .nutritionstrules_index .uploadcartimg ul li:last-child{
        margin-left: .38rem;
    }
    .nutritionstrules_index .uploadcartimg ul li img{
        width: 100%;
    }
    .nutritionstrules_index .tipcart p{
        text-align: left;
        font-family: PingFang-SC-Regular;
        font-size: 0.22rem;
        font-weight: normal;
        letter-spacing: 0rem;
        color: #c4c4c4;
    }
    .nutritionstrules_index .nutritiontype{
        text-align: left;
    }
    .nutritionstrules_index .nutritiontype label{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        letter-spacing: 0rem;
        color: #000000;
    }
    .nutritionstrules_index .nutritiontype{
        overflow: hidden;
        margin-top: .42rem;
    }
    .nutritionstrules_index .nutritiontype .select_type{
        overflow: hidden;
        width: 5rem;
        float: right;
        margin-top: .1rem;
    }
    .nutritionstrules_index .nutritiontype ul li img{
        width: 0.25rem;
        height: 0.25rem;
        margin-right: .15rem;
    }
    .nutritionstrules_index .nutritiontype ul li{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        margin-bottom: .23rem;
        float: left;
        color: #000000;
    }
    .nutritionstrules_index .nutritiontype ul li:nth-child(2){
        margin-left: .73rem;
    }
     .nutritionstrules_index .nutritiontype ul li:nth-child(4){
        margin-left: .3rem;
    }
     .nutritionstrules_index .nutritiontype ul li:nth-child(6){
        margin-left: .75rem;
    }
     .nutritionstrules_index .nutritiontype_jk{
         overflow: hidden;
        text-align: left;
    }
    .nutritionstrules_index .nutritiontype_jk label{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        letter-spacing: 0rem;
        color: #000000;
    }
    .nutritionstrules_index .nutritiontype_jk{
        overflow: hidden;
        margin-top: .42rem;
    }
    .nutritionstrules_index .nutritiontype_jk .select_type{
        overflow: hidden;
        width: 5rem;
        float: right;
        margin-top: .1rem;
    }
    .nutritionstrules_index .nutritiontype_jk ul li img{
        width: 0.25rem;
        height: 0.25rem;
        margin-right: .15rem;
    }
    .nutritionstrules_index .nutritiontype_jk ul li{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        margin-bottom: .23rem;
        float: left;
        color: #000000;
        width: 2.45rem;
        vertical-align: middle;
    }
    .nutritionstrules_index .nutritiontype_zc{
        overflow: hidden;
        text-align: left;
    }
    .nutritionstrules_index .nutritiontype_zc label{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        letter-spacing: 0rem;
        color: #000000;
    }
    .nutritionstrules_index .nutritiontype_zc>label a{
        margin-left: .8rem;
    }
    .nutritionstrules_index .nutritiontype_zc{
        overflow: hidden;
        margin-top: .42rem;
    }
    .nutritionstrules_index .nutritiontype_zc .select_type{
        overflow: hidden;
        width: 5rem;
        float: right;
        margin-top: .1rem;
        position: relative;
    }
     .nutritionstrules_index .nutritiontype_zc .select_type ul{
         overflow: hidden;
         height: .35rem;
     }
      .nutritionstrules_index .nutritiontype_zc .select_type ul.on{
          height:auto;
      }
    .nutritionstrules_index .nutritiontype_zc ul li img{
        width: 0.25rem;
        height: 0.25rem;
        margin-right: .15rem;
    }
    .nutritionstrules_index .nutritiontype_zc ul li{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        margin-bottom: .23rem;
        float: left;
        color: #000000;
        width: 4.5rem;
        vertical-align: middle;
    }
     .nutritionstrules_index .nutritiontype_sc{
        overflow: hidden;
        text-align: left;
        position: relative;
    }
    .nutritionstrules_index .nutritiontype_sc label{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        letter-spacing: 0rem;
        color: #000000;
    }
    .nutritionstrules_index .nutritiontype_sc>label a{
        margin-left: .8rem;
    }
    .nutritionstrules_index .nutritiontype_sc{
        overflow: hidden;
        margin-top: .42rem;
        padding-bottom: .56rem;
    }
    .nutritionstrules_index .nutritiontype_sc .select_type{
        overflow: hidden;
        width: 5rem;
        float: right;
        margin-top: -.35rem;
        position: relative;
    }
    .nutritionstrules_index .nutritiontype_sc .select_type ul{
        overflow: hidden;
        height: .35rem;
    }
     .nutritionstrules_index .nutritiontype_sc .select_type ul.on{
          height:auto;
      }
    .nutritionstrules_index .nutritiontype_sc ul li img{
        width: 0.25rem;
        height: 0.25rem;
        margin-right: .15rem;
    }
    .nutritionstrules_index .nutritiontype_sc ul li{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        margin-bottom: .23rem;
        float: left;
        color: #000000;
        width: 4.7rem;
        vertical-align: middle;
    }
     .nutritionstrules_index .nutritiontype_sc label b{
        position: absolute;
        top: .4rem;
        left: 0;
        font-size: 0.22rem;
        color: #b5b5b5;
     }
      .nutritionstrules_index .qualification{
        overflow: hidden;
        border-bottom: 1px solid #ddd;
        text-align: left;
     }
     .nutritionstrules_index .qualification label{
        text-align: left;
        height: .89rem;
        line-height: .89rem;
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #000000;
     }
    .nutritionstrules_index .uploadqualification {
        overflow: hidden;
        margin-top: .36rem;
        margin-bottom: .2rem;
    }
    .nutritionstrules_index .uploadqualification p{
        text-align: left;
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        letter-spacing: 0rem;
        margin-bottom: .38rem;
        color: #000000;
    }
    .nutritionstrules_index .uploadqualification ul li{
        width: 3.26rem;
        height: 2.11rem;
        float: left;
    }
    .nutritionstrules_index .uploadqualification ul li:last-child{
        margin-left: .38rem;
    }
    .nutritionstrules_index .uploadqualification ul li img{
        width: 100%;
    }
    
    .qutip{
        text-align: left;
    }
    .qutip label{
        font-family: PingFang-SC-Regular;
        font-size: 0.22rem;
        font-weight: normal;
        letter-spacing: 0rem;
        color: #c4c4c4;
    }
    .offiec,.offiectime,.provicetp,.address_input{
        text-align: left;
        height: .89rem;
        line-height: .89rem;
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #000000;
        border-bottom: 1px solid #ddd;
    }
    .xychoose{
        text-align: left;
        margin-top: .32rem;
        margin-bottom: .96rem;
    }
    .xychoose img{
        width: 0.22rem;
        height: 0.22rem;
        margin-right: .15rem;
    }
    .xychoose label{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0rem;
        letter-spacing: 0rem;
        color: #000000;
    }
    .xychoose label span{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        letter-spacing: 0rem;
        color: #5acfec;
    }
    .sumbitrz{
        height: 0.81rem;
        line-height: .81rem;
        position: fixed;
        bottom: 0;
        width: 100%;
	    background-color: #5acfec;
    }
     .sumbitrz a{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0rem;
        letter-spacing: 0rem;
        color: #ffffff;
        text-decoration: none;
    }
    .nutritionstrules_index .down{
        position: absolute;
        top: 0;
        right: .5rem;
    }
    .uploadcartimg ul li label input{
    	position: absolute;
    	top:20px;
    	opacity: 0;
    	z-index: 1000;
    	width: 50px;
    	height: 50px;
    	left: 55px;
    }
    .uploadqualification ul li label input{
    	position: absolute;
    	top:20px;
    	opacity: 0;
    	z-index: 1000;
    	width: 50px;
    	height: 50px;
    	left: 55px;
    }
    .avatar-uploader{
    	height: 2rem;
        border: 1px solid #eee;
    }
    .avatar-uploader-icon{
    	padding-top: 60%;
    }
    .pic_text{
    	font-size: 0.24rem;
    	color:#ccc;
    }
</style>
