<template>
<div class="service-top">
    <img src="../assets/images/down@2x.png" alt="" class="service-icon" onClick="javascript:history.back(-1);">
{{text}}
</div>
</template>

<script>
export default {
    props:['text'],
    data(){
        return{
        }
    },
    mounted(){
        console.log(this.text)
        
    },
    methods:{
        
    }
}
</script>

<style>
.service-top{
width: 100%;
height: 1rem;
background: #fff;
position: fixed;
line-height: 1rem;
text-align:center;
font-size: .3rem;
top: 0;
left: 0;
z-index: 999999;
}
.service-content{
margin-top: 1rem;
}
.service-icon{
position: absolute;
top: 50%;
transform: translateY(-50%) rotate(90deg);
left: .3rem;
}
</style>
