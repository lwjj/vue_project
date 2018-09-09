<template>
    <div class="tan" ref="box" @click="tan($event)">
        <div class="tan-content">
            123123123
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        tan:function(event){
            var el1 = event.currentTarget;
            var el2 = event.target;
            if(el1 == el2){
                this.$refs.box.style.display = 'none';
            }  
        }
    }
}
</script>

<style scoped>
.tan{
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    position: fixed;
    top:0;
    left: 0;
    z-index: 99999999;
}
.tan-content{
    width: 5.4rem;
    padding: .7rem .3rem;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
</style>
