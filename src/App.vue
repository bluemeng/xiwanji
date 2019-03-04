<template>
  <div id="app">
    <router-view/>
    <FooterTab />
  </div>
</template>

<script>
import FooterTab from './components/FooterTab/FooterTab'
export default {
  name: 'App',
  components:{
    FooterTab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
