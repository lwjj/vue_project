<template>
  <div id="app">
   
         <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
  height: 100%;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.clearfix::after{
  content:" ";
    display:block;
    clear:both;
}
</style>
