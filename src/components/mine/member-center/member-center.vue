<template>
  <div class="member-center">
    <div class="header-bar">
      <i class="icon-back" @click="back"></i>
      <h1>会员中心</h1>
    </div>
    <div class="service" @click="service">客服</div>
    <!--客服弹框-->
    <div class="service-pop pop-bg" v-show="servicePop">
      <div class="service-warp">
        <p>如有疑问，请添加客服微信</p>
        <p>13601315595</p>
        <div class="know-btn" @click="quitService">我知道了</div>
      </div>
    </div>
    <!--banner区-->
    <div class="meber_user">
      <div class="user-warp">
        <div class="img">
          <img v-lazy="portraitUrl" alt=""/>
        </div>
        <p class="account">{{username}}</p>
      </div>
    </div>
    <cross-line></cross-line>
    <div class="main">
      <div class="title">会员特权</div>
      <ul class="member-classify">
        <li>
          <div class="img fl">
            <i class="icon-vip" v-bind:class="{active:vip}"></i>
          </div>
          <div class="classify fl">
            <span>VIP会员</span>
            <em>一年特权</em>
          </div>
        </li>
        <li>
          <div class="img fl">
            <i class="icon-yuanhe" v-bind:class="{active:yhw}"></i>
          </div>
          <div class="classify fl">
            <span>源合网会员</span>
            <em>一年特权</em>
          </div>
        </li>
        <li>
          <div class="img fl">
            <i class="icon-project" v-bind:class="{active:xmk}"></i>
          </div>
          <div class="classify fl">
            <span>项目库会员</span>
            <em>一年特权</em>
          </div>
        </li>
      </ul>
      <cross-line></cross-line>
      <div class="title">未开通会员特权</div>
      <div class="member-dredge">
        <div class="img fl">
          <i class="icon-vip active"></i>
        </div>
        <div class="member-detail fl">
          <h2>VIP会员</h2>
          <p>成为您专属的海外事业部</p>
          <p>一年特权</p>
        </div>
        <div class="btn-warp fr">
          <div class="member-btn " @click="dredge">开通</div>
        </div>
      </div>
      <div class="member-dredge">
        <div class="img fl">
          <i class="icon-yuanhe active"></i>
        </div>
        <div class="member-detail fl">
          <h2>源合网会员</h2>
          <p>查阅项目信息/实时项目通知/线下活动</p>
          <p>一年特权</p>
        </div>
        <div class="btn-warp fr">
          <div class="member-btn " @click="dredge">开通</div>
        </div>
      </div>
      <div class="member-dredge">
        <div class="img fl">
          <i class="icon-project active"></i>
        </div>
        <div class="member-detail fl">
          <h2>项目库会员</h2>
          <p>查阅项目信息/业主信息等</p>
          <p>一年特权</p>
        </div>
        <div class="btn-warp fr">
          <div class="member-btn " @click="dredge">开通</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import tool from "@/api/tool";

  export default {
    components: {
      HeaderBar,
      CrossLine,
      tool
    },
    data() {
      return {
        servicePop: false,
        portraitUrl: require('../img/user_face.png'),
        username: '请用户登录',
        vip: false,
        yhw: false,
        xmk: false
      }
    },
    methods: {
      back() {
        window.history.back()
      },
      service() {
        this.servicePop = true;
      },
      quitService() {
        this.servicePop = false;
      },
      dredge() {
        this.$router.push({path: "/mine/member-dredge"});
      }

    },
    created() {
      if (tool.islogin() === "true") {
        this.axios
          .get(tool.domind() + "/gateway/user/getUser?name=" + tool.getuser())
          .then(res => {
            if (res.data.code === 200) {
              if (res.data.data.portraitUrl != null && res.data.data.portraitUrl != '') {
                this.portraitUrl = res.data.data.portraitUrl;
              }
              if (res.data.data.name != null && res.data.data.name != '') {
                this.username = res.data.data.name;
              }
              //
              var level = res.data.data.memberLevelId;
              if (level >= 2) {
                this.vip = true;
                if (level >= 3) {
                  this.xmk = true;
                  if (level >= 5) {
                    this.yhw = true;
                  }
                }
              }
            }
          });
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';

  .member-center {
    position: relative;

  .header-bar {
    height: 44px;
    line-height: 44px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    position: relative;
  @include bg-image("../img/member-bg");

  h1 {
    color: #fff;
    font-size: 20px;
  }

  .icon-back {
    display: block;
    float: left;
    width: 22px;
    height: 22px;
    margin: 11px auto;
  @include bg-image("../img/back");
    background-size: 22px auto;
  }

  }
  .service {
    position: absolute;
    right: 10px;
    top: 14px;
    z-index: 11;
    font-size: 15px;
    height: 15px;
    line-height: 15px;
    color: #fff;
  }

  .service-warp {
    background: #fff;
    padding: 20px 0;
    width: 84%;
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 90px;

  p {
    font-size: 14px;
    color: #333;
    height: 14px;
    line-height: 14px;
    margin-bottom: 10px;
  }

  .know-btn {
    display: table;
    margin: 2px auto 0;
    font-size: 14px;
    width: 121px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    color: #3f84e6;
    border: 2px solid #3f84e6;
  }

  }
  .meber_user {
    width: 100%;
    height: 185px;
  @include bg-image("../img/member_user");
    background-size: 100% auto;
    background-position: bottom center;

  .user-warp {
    display: table;
    margin: auto;
    padding-top: 43px;

  .img {
    width: 71px;
    height: 71px;
    border-radius: 50%;
    margin: auto;

  /*img{
    width: 100%;
    height:100%;
  }*/
  img {
    height: 100%;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 50%;
  }

  }
  .account {
    font-size: 16px;
    color: #fff;
    height: 16px;
    line-height: 16px;
    margin-top: 12px;
  }

  }

  }
  .main {
    text-align: left;

  .title {
    height: 45px;
    line-height: 45px;
    color: #333;
    font-size: 16px;
    padding-left: 10px;
  @include onepx("bottom");
  }

  i {
    width: 50px;
    height: 50px;
    display: block;
    background-size: 50px auto;
  }

  .icon-vip {
  @include bg-image("../img/vip-member");
  }

  .icon-vip.active {
  @include bg-image("../img/vip-active");
  }

  .icon-yuanhe {
  @include bg-image("../img/yuanhe-member");
  }

  .icon-yuanhe.active {
  @include bg-image("../img/yuanhe-active");
  }

  .icon-project {
  @include bg-image("../img/project-member");
  }

  .icon-project.active {
  @include bg-image("../img/project-active");
  }

  .member-classify {
    padding: 16px 10px 0;
    overflow: hidden;

  li {
    float: left;
    width: 50%;
    margin-bottom: 16px;

  .img {
    margin-right: 12px;
  }

  .classify {

  span {
    font-size: 14px;
    color: #333;
    display: block;
    height: 14px;
    line-height: 14px;
    margin: 8px 0;
  }

  em {
    font-size: 12px;
    color: #666;
  }

  }
  }
  }
  .member-dredge {
    padding: 20px 10px;
    border-bottom: 1px dashed #dedede;
    overflow: hidden;

  .img {
    margin-right: 12px;
  }

  .member-detail {

  h2 {
    font-size: 16px;
    color: #333;
    height: 16px;
    line-height: 16px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  p {
    font-size: 12px;
    color: #666;
    height: 12px;
    margin-top: 5px;
    line-height: 12px;
  }

  }
  .btn-warp {
    height: 23px;
    padding: 13.5px 0;

  .member-btn {
    width: 50px;
    height: 23px;
    line-height: 23px;
    text-align: center;
    background: #4081e8;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }

  }

  }

  }
  }
</style>
