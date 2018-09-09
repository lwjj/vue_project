<template>
    <div class="successfully_index">
          <top :text="header"></top>
          <div class="evaluationtext">
            <div class="cent"><p> <img class="wancheng" src="../assets/images/commonality/check.png" alt="">审核结果将在7个工作日内告知</p></div>
          </div>
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
                header:'提交成功'
            }
        }
    }
</script>
<style scoped>
    .successfully_index{
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
        width: 5rem;
        text-align: center;
        color: #000000;
        margin: auto;
        padding: .5rem;
    }
</style>
