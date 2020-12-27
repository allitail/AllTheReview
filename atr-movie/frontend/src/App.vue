<template>
  <div id="app">
      <aHeader></aHeader>

      <div class="container">
      <router-view></router-view>
      
    <a-writer></a-writer>
      </div>

    <aFooter></aFooter>
    
  </div>
</template>

<script>
import aHeader from './components/aHeader.vue'
import aFooter from './components/aFooter.vue'
import aWriter from './components/atrBoard/aWrite.vue'

export default {
  name: 'App',
  components: {
      aHeader,
    aFooter,
    aWriter
  }
}
</script>

<style>
html,body{padding:0; margin:0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1{color:#43b984;}
table{width:100%; border-collapse:collapse;}
.wrap{width:100%;}
.container{width:800px; margin:0 auto;}
a{text-decoration:none;}
.btn{padding:10px; background:#34445c; color:#fff;}
</style>
