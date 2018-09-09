<template>
    <div class="nutritionistguidance_index">
        <div class="guidanceimg">
            <img src="../assets/images/publicity.jpg" alt="">
        </div>
        <div class="content">
            <div class="title">
                <h2>改变生活，从“营养”开始！</h2>
                <p>用您的专业服务更多有需要的人</p>
            </div>
            <div class="role">
                <h3>认证营养师有什么好处？</h3>
                <div class="rolery">
                    <p>12211eddddsfc</p>
                </div>
            </div>
        </div>
        <div class="nowcertification">
            <router-link to='nutritionistrules'>立即认证</router-link>
        </div>
    </div>
</template>
<style scoped>
    .nutritionistguidance_index{
        position: relative;
        margin-top: -.4rem;
    }
    .nutritionistguidance_index .content .title h2{
        font-family: PingFang-SC-Regular;
        font-size: 0.4rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #000000;
        margin-bottom: .2rem;
    }
     .nutritionistguidance_index .content .title p{
         font-family: PingFang-SC-Regular;
        font-size: 0.28rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #000000;
     }
    .guidanceimg{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -999;
    }
    .guidanceimg img{
        width: 100%;
    }
    .nowcertification{
        height: 0.98rem;
        line-height: .98rem;
        background-color: #5acfec;
        position: fixed;
        bottom: 0;
        width: 100%;
        left: 0;
        z-index: 999;
    }
    .nowcertification a{
       font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #ffffff;
    }
    .nutritionistguidance_index .content .role{
        text-align: left;
        margin: .9rem 0 0 0;
        padding:0.31rem;
    }
    .nutritionistguidance_index .content .role h3{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #000000;
    }
    .nutritionistguidance_index .content .role p{
        font-family: PingFang-SC-Regular;
        font-size: 0.26rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #000000;
        text-decoration: none;
    }
</style>
