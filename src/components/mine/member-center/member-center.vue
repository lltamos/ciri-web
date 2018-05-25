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
    <div class="main">
      <!--项目库会员-->
      <member level="project" @toMemInduc="toMemInduc('project')"></member>
      <!--源合网会员-->
      <member level="yuanhe" @toMemInduc="toMemInduc('yuanhe')"></member>

      <!--VIP会员-->
      <member level="vip" @toMemInduc="toMemInduc('vip')"></member>
    </div>
  </div>

</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import Member from '@/components/base/member/member'
  import tool from "@/api/tool";

  export default {
    components: {
      HeaderBar,
      CrossLine,
      tool,
      Member
    },
    data() {
      return {
        servicePop: false,
        isLogin:false,
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
      toMemInduc(mem){
        this.$router.push({path:'/mine/member-center/member-induction',query:{memLevel:mem}});
      }
    },
    created() {
      this.isLogin = sessionStorage.getItem("islogin");

    },
    mounted() {
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';

  .member-center {
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

    .main{
      padding: 0 12px;
    }
  }
</style>
