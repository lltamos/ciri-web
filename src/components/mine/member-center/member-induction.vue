<template>
  <div class="recharge">
    <div class="header-bar">
      <i class="icon-back" @click="back"></i>
      <h1>{{header}}</h1>
      <i class="service"></i>
    </div>
    <div class="main" :class="bgImg">
      <div class="name">{{name}}</div>
      <div class="money">{{money}}</div>
    </div>
    <div class="bottom" :class="bottomImg" @click="openMember">
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
        header:'',
        name:'',
        money:'',
        bgImg:'',
        bottomImg:''

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
      if(this.$route.query.memLevel == "project"){
        this.header = "项目库会员介绍";
        this.name = "项目库会员";
        this.money = "￥298元/年";
        this.bgImg = "main-project";
        this.bottomImg = "bottom-project";

      }else if(this.$route.query.memLevel == "yuanhe"){
        this.header = "源合网会员介绍";
        this.name = "源合网会员";
        this.money = "￥980元/年";
        this.bgImg = "main-yuanhe";
        this.bottomImg = "bottom-yuanhe";

      }else if(this.$route.query.memLevel == "vip"){
        this.header = "VIP会员介绍";
        this.name = "VIP会员";
        this.money = "按需定制";
        this.bgImg = "main-vip";
        this.bottomImg = "bottom-vip";
      }
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
      width: 100%;
      background-size: 100% auto;
      color: #fff;
      &.main-project{
        height: 833px;
        @include bg-image("../img/intro-project");
      }
      &.main-yuanhe{
        height: 1234px;
        @include bg-image("../img/intro-yuanhe");
      }
      &.main-vip{
        height: 2080px;
        @include bg-image("../img/intro-vip");
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
      width: 100%;
      height: 49px;
      line-height: 49px;
      background-size: 1000% auto;
      font-size: 16px;
      color: #fff;
      &.bottom-project{
        @include bg-image("../img/bottom-project");
      }
      &.bottom-yuanhe{
        @include bg-image("../img/bottom-yuanhe");
      }
      &.bottom-vip{
        @include bg-image("../img/bottom-vip");
      }
    }


  }

</style>
