<template>
  <div>
    <!--头部-->
    <header class="aui-bar aui-bar-nav z-bar-nav" id="aui-header">
      <a class="aui-btn aui-pull-left" tapmode="" onclick="history.go(-1)">
        <span class="aui-iconfont aui-icon-left"></span>
      </a>
      <div class="aui-title aui-font-size-12">积分提现</div>
    </header>
    <!--内容区-->
    <div class="aui-list-item aui-list-item-middle"
         style="background-image: url('/static/images/center_bg.png');background-size: cover;height: 150px;position: relative;">
      <div class="aui-card-list-content aui-text-center z-padding-t3">
        <div class="aui-font-size-12 colorWhite">积分金额(元)</div>
        <p class="aui-margin-b-10 z-font-size28  colorWhite">1200</p>
      </div>
    </div>
    <!--积分金额与已提现-->
    <div class="aui-row" style="background: white;padding: 5px 0px;">
      <div class="aui-col-xs-6 aui-border-r aui-text-center">
        <big class="aui-text-warning"><small>1200</small></big>
        <div class="aui-gird-lable aui-font-size-12">积分总额</div>
      </div>
      <div class="aui-col-xs-6 aui-border-r aui-text-center">
        <big class="aui-text-danger"><small> 200</small></big>
        <div class="aui-gird-lable aui-font-size-12">已提现</div>
      </div>
    </div>
    <!--提现账号管理-->
    <ul class="aui-list aui-list-in z-margin-t5 z-background-image">
      <li class="aui-list-item">
        <a href="./tixian_frm.html" class="aui-list-item-arrow">
          <div class="aui-list-item-inner">
            <div class="aui-list-item-title aui-font-size-12">提现账号管理</div>
          </div>
        </a>

      </li>
      <li class="aui-list-item">

        <div class="aui-list-item-inner">
          <a href="./tixianjilu_frm.html" class="aui-list-item-arrow">
            <div class="aui-list-item-title aui-font-size-12">提现记录</div>
          </a>
        </div>

      </li>
      <li class="aui-list-item">

        <div class="aui-list-item-inner">
          <a href="./jifenmingxi_frm.html" class="aui-list-item-arrow">
            <div class="aui-list-item-title aui-font-size-12">积分明细</div>
          </a>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'jifentixian',
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
