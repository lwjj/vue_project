<template>
    <div class="evaluationsuccess_index">
        <top :text="header"></top>
        <div class="evaluationtext">
            <div class="cent"><p> <img class="wancheng" src="../assets/images/commonality/check.png" alt="">感谢您的评价~</p></div>

        </div>
        <router-link to='/'>
            <div class="btn" catchtap='switchIndex'>回到首页</div>
        </router-link>
    </div>
</template>
<script>
import header from './header'
export default {
    components:{
        top:header
    },
    data(){
        return{
            header:'评价成功'
        }
    }
}
</script>
<style scoped>
    .evaluationsuccess_index{
        padding-top: .2rem;
    }
    .cent{
        text-align: center;
    }
    .wancheng {
        width: 0.62rem;
        height: 0.62rem;
        float: left;
        margin-top: -.08rem;
    }
    .evaluationtext{
        width: 7.5rem;
        height: 2.53rem;
        background-color: #ffffff;
    }
    .evaluationtext p{
        position: relative;
        font-family: PingFang-SC-Regular;
        font-size: 0.3rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        width: 3rem;
        text-align: center;
        color: #000000;
        margin: auto;
        padding: .5rem;
    }
    .btn{
     color: #fff;
     background-color: #5acfec;
    font-size: .32rem;
    width: 89px;
    height: 38px;
    line-height: 38px;
    border-radius: 7px;
    
    margin: 0 auto;
    margin-top: 20px;
}
</style>
