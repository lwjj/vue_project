<template>
    <div class="weight">
        <top :text="header"></top>
        <div class="weight-content">
            <div class="weight-content-title">
                减肥期间需要注意什么
            </div>
            少吃油炸食物
　　炸鸡、薯条、或盐稣鸡、日本料理中的天妇罗等，都是外面裹了一层厚厚的油炸面糊，虽然增加了口感，却吸收了过多的油脂。一不小心就吃下了一天所需的油脂量。
        </div>
    </div>
</template>

<script>
import header from './header.vue'
export default {
    components:{
        top:header
    },
    data(){
        return {
            header:'减肥系列'
        }
    }
}
</script>

<style scoped>
.weight-content{
    background: #fff;
    font-size: .26rem;
    border-top: .2rem solid rgb(243, 243, 243);
    padding: .3rem;
    text-align:left;
}
.weight-content-title{
    font-size: .3rem;
    margin-bottom:.2rem;
}
</style>
