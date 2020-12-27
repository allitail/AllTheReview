<template>
  <div id="app">
    

    <aHeader></aHeader>
    <aFooter></aFooter>
  </div>
</template>

<script>


import aHeader from './components/aHeader.vue'
import aFooter from './components/aFooter.vue'

export default {
  name: 'App',
  components: {
    
    aHeader,
    aFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
