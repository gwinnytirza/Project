<template>
  <div id="app">
    <NavBar />
    <router-view />
    <foot />
  </div>
</template>

<script>
import Foot from './components/foot.vue'

export default {

  components : {
    Foot
  
  }
    
}
</script>

<style>

</style>
