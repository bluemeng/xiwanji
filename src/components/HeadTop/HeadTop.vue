<template>
  <header class="aui-bar aui-bar-nav" id="aui-header">
    <a class="aui-btn aui-pull-left aui-hide" tapmode="" onclick="history.go(-1)">
      <span class="aui-iconfont aui-icon-left"></span>
    </a>
    <div class="aui-title aui-font-size-12">{{title}}</div>
  </header>
</template>

<script>
export default {
  name: 'footertab',
  props:{
    title:String
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    goTo(path){
      this.$router.replace(path);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
