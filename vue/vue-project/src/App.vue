<template>
  <div id="app">
    <NavTop></NavTop> 
    <router-view></router-view>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import NavTop from './components/header.vue'
import NavFooter from './components/footer.vue'
export default {
  name: 'app',
  components:{
    NavTop,
    NavFooter
  },
}
</script>

<style>
</style>
