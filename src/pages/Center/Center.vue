<template>
  <div>
    <!--头部-->
    <HeadTop title="个人中心" />
    <!--头像图片-->
    <div class="aui-list-item aui-list-item-middle"
         style="background-image: url('/static/images/mcbg.png');background-size: cover;height: 160px;position: relative;">
      <div class="aui-media-list-item-inner z-center-flex-col">
        <div class="z-center-div1">
          <img src="/static/images/qq-weibo.png" class="aui-img-round">
        </div>
        <p>萱萱</p>
        <p>当前积分 2019</p>
      </div>
    </div>
    <!--各项内容-->
    <ul class="aui-list aui-list-in z-background-image">
      <router-link to="/index">
        <li class="aui-list-item">
          <div class="aui-list-item-label-icon">
            <img class="center_width_img"  src="/static/images/center_jifenduihuan.png">
          </div>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <div class="aui-list-item-title aui-font-size-12">积分兑换</div>
            <div class="aui-list-item-right"></div>
          </div>
        </li>
      </router-link>

      <!--积分提现-->
      <router-link to="/jifentixian">
        <li class="aui-list-item z-background-image">
          <div class="aui-list-item-label-icon">
            <img class="center_width_img"  src="/static/images/center_jifentixian.png">
          </div>

          <div class="aui-list-item-inner aui-list-item-arrow">
            <div class="aui-list-item-title aui-font-size-12">积分提现</div>
            <div class="aui-list-item-right"></div>
          </div>
        </li>
      </router-link>
    </ul>

    <ul class="aui-list aui-list-in z-background-image z-margin-t1">
      <a href="./mytuanyou_frm.html">
        <li class="aui-list-item">
          <div class="aui-list-item-label-icon">
            <img class="center_width_img"  src="/static/images/center_team.png">
          </div>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <div class="aui-list-item-title aui-font-size-12">我的团友</div>
            <div class="aui-list-item-right"></div>
          </div>
        </li>
      </a>
      <!--我的设备-->
      <a href="./myshebei.html">
        <li class="aui-list-item">
          <div class="aui-list-item-label-icon">
            <img class="center_width_img"  src="/static/images/center_shebei.png">
          </div>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <div class="aui-list-item-title aui-font-size-12">我的设备</div>
            <div class="aui-list-item-right"></div>
          </div>
        </li>
      </a>

      <!--我要退货-->
      <a href="./tuihuoshenqing.html">
        <li class="aui-list-item z-background-image">
          <div class="aui-list-item-label-icon">
            <img class="center_width_img"  src="/static/images/center_tuihuo.png">
          </div>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <div class="aui-list-item-title aui-font-size-12">我要退货</div>
            <div class="aui-list-item-right"></div>
          </div>
        </li>
      </a>

    </ul>
  </div>
</template>

<script>
  import HeadTop from '../../components/HeadTop/HeadTop'
  export default {
  name: 'center',
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
