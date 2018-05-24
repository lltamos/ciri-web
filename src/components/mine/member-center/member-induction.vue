<template>
  <div class="recharge">
    <div class="header-bar">
      <i class="icon-back" @click="back"></i>
      <!--判断这边是哪个会员-->
      <h1>项目库会员介绍</h1>
      <i class="service"></i>
    </div>
    <div class="main">
      <!--判断这边是哪个会员，多少money-->
      <div class="name">项目库会员</div>
      <div class="money">￥298元/年</div>
    </div>
    <!--判断这边是立即开通还是续费-->
    <div class="bottom" @click="openMember">
        立即开通
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

      }
    },
    methods: {
      back() {
        window.history.back()
      },
      openMember(){
        this.$router.push({path:'/mine/member-center/open-member'});
      }

    },
    created() {

    },
    mounted() {

    },
    computed:{


    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';
  .recharge{
    .header-bar {
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      text-align: center;
      position: relative;
      @include onepx('bottom');
      h1 {
        font-size: 20px;
      }

      .icon-back {
        display: block;
        float: left;
        width: 22px;
        height: 22px;
        margin: 11px auto;
        @include bg-image("../../base/header-bar/icon-arrow_lift");
        background-size: 22px auto;
      }

    }
    .service {
      position: absolute;
      right: 10px;
      top: 11px;
      z-index: 11;
      height: 22px;
      width: 22px;
      line-height: 22px;
      @include bg-image("../../base/header-bar/icon-share");
      background-size: 22px auto;
    }
    .main{
      width: 375px;
      height: 833px;
      @include bg-image("../img/intro-project");
      background-size: 375px auto;
      color: #fff;
      &.main-yuanhe{
        height: 1234px;
        @include bg-image("../img/intro-yuanhe");
        background-size: 375px auto;
      }
      &.main-vip{
        height: 2080px;
        @include bg-image("../img/intro-vip");
        background-size: 375px auto;
      }
      .name{
        font-size: 40px;
        width: 210px;
        margin: 0 auto;
        padding: 60px 0 15px 0;
        border-bottom: 1px solid #fff;
      }
      .money{
        font-size: 25px;
        padding-top: 25px;
      }

    }
    .bottom{
      width: 375px;
      height: 49px;
      line-height: 49px;
      @include bg-image("../img/bottom-project");
      background-size: 375px auto;
      font-size: 16px;
      color: #fff;
      &.bottom-yuanhe{
        @include bg-image("../img/bottom-yuanhe");
      }
      &.bottom-vip{
        @include bg-image("../img/bottom-vip");
      }
    }


  }

</style>
