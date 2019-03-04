<template>
  <div class="z-bg-hui">
    <!--头部-->
    <HeadTop title="扫码" />
    <!--扫码区域-->
    <div class="z-sao-box">
      <p class="z-sao-p" style=""></p>
    </div>

    <div class="z-sao-box">
      <img class="z-sao-img" src="/static/images/icon_saomaanniu.png">
    </div>
    <a href="../center/shebeixinxi.html">
      <div class="z-sao-box">
        <input class="z-sao-inpt" style="" type="text" placeholder="请输入机器码">
      </div>
    </a>
  </div>
</template>

<script>
  import HeadTop from '../../components/HeadTop/HeadTop'
  export default {
    name: 'saoma',
    components:{
      HeadTop
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
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
