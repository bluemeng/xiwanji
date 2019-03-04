<template>
  <footer class="aui-bar aui-bar-tab" id="footer">
    <div class="aui-bar-tab-item" tapmode="" data-item-order="0">
      <a href="javascript:;" class="" @click="goTo('/index')">
        <i class="aui-iconfont aui-icon-home" :class="{'aui-active':'/index' == $route.path}"></i>
        <img src="" alt="">
        <div class="aui-bar-tab-label" :class="{'aui-active':'/index' == $route.path}">首页</div>
      </a>
    </div>
    <div class="aui-bar-tab-item" tapmode="" data-item-order="1">
      <a href="javascript:;" @click="goTo('/saoma')">
        <i class="iconfont icon-saoma iconfont-saoma" :class="{'aui-active':'/saoma' == $route.path}"></i>
        <div class="aui-bar-tab-label" :class="{'aui-active':'/saoma' == $route.path}">扫码</div>
      </a>
    </div>
    <div class="aui-bar-tab-item" tapmode="" data-item-order="3">
      <a href="javascript:;" @click="goTo('/center')">
        <i class="aui-iconfont aui-icon-my" :class="{'aui-active':'/center' == $route.path}"></i>
        <div class="aui-bar-tab-label" :class="{'aui-active':'/center' == $route.path}">我的</div>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footertab',
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
