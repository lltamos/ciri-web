<template>
  <div class="recharge">
    <div class="header-bar">
      <i class="icon-back" @click="back"></i>
      <h1>{{name}}介绍</h1>
      <i class="service"></i>
    </div>
    <div class="main" :class="bgImg">
      <div class="name">{{name}}</div>
      <div class="money" v-if='this.$route.query.memLevel != "2"'>￥{{money}}元/年</div>
      <div class="money" v-if='this.$route.query.memLevel == "2"' style="padding-top: 20px;">按需定制</div>
    </div>
    <div v-if='this.$route.query.memLevel != "2" && !this.$route.query.showLast' class="bottom" :class="bottomImg" @click="openMember">
      立即开通
    </div>
    <div v-if='this.$route.query.memLevel != "2" && this.$route.query.showLast' class="bottom" :class="bottomImg" @click="openMember">
      立即续费
    </div>
    <div v-if='this.$route.query.memLevel == "2"' class="bottom" :class="bottomImg">
      <a class="vip-link" href="tel:13601315595">立即沟通</a>
    </div>
  </div>

</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import tool from "@/api/tool"
  import { MessageBox } from 'mint-ui'

  export default {
    components: {
      HeaderBar,
      CrossLine,
      tool
    },
    data() {
      return {
        header: '',
        name: '',
        money: 0,
        bgImg: '',
        bottomImg: ''

      }
    },
    methods: {
      back() {
        window.history.back()
      },
      openMember() {
        this.$router.push({path: '/mine/member-center/open-member', query: {memLevel: this.$route.query.memLevel}});
      },
    },
    created() {
      //根据会员等级获取金额信息
      this.$api.post(tool.domind() + "/gateway/pb/p/member/queryMemberStandardByLevel", {level: this.$route.query.memLevel})
        .then(res => {
          if (res.code === 200) {
            this.name = res.data.desc;
            this.money = res.data.amount;
          }
        });

      if (this.$route.query.memLevel == "3") {
        this.bgImg = "main-project";
        this.bottomImg = "bottom-project";

      } else if (this.$route.query.memLevel == "5") {
        this.bgImg = "main-yuanhe";
        this.bottomImg = "bottom-yuanhe";

      } else if (this.$route.query.memLevel == "2") {
        this.bgImg = "main-vip";
        this.bottomImg = "bottom-vip";
      }
    },
    mounted() {

    },
    computed: {}
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';

  .recharge {
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
    .main {
      width: 100%;
      background-size: 100% auto;
      background-repeat: no-repeat;
      color: #fff;
      &.main-project {
        height: 873px;
        @include bg-image("../img/intro-project");
      }
      &.main-yuanhe {
        height: 1274px;
        @include bg-image("../img/intro-yuanhe");
      }
      &.main-vip {
        height: 2120px;
        @include bg-image("../img/intro-vip");
      }
      .name {
        font-size: 40px;
        width: 210px;
        margin: 0 auto;
        padding: 60px 0 15px 0;
        border-bottom: 1px solid #fff;
      }
      .money {
        font-size: 25px;
        padding-top: 25px;
      }

    }
    .bottom {
      width: 100%;
      height: 49px;
      line-height: 49px;
      background-size: 1000% auto;
      font-size: 16px;
      color: #fff;
      position: fixed;
      bottom: 0;
      width: 100%;
      z-index: 199;
      .vip-link{
        color: #fff;
        &.link{
          color: #fff;
        }
        &.hover{
          color: #fff;
        }
        &.active{
          color: #fff;
        }
      }
      &.bottom-project {
        @include bg-image("../img/bottom-project");
      }
      &.bottom-yuanhe {
        @include bg-image("../img/bottom-yuanhe");
      }
      &.bottom-vip {
        @include bg-image("../img/bottom-vip");
      }
    }

  }

</style>
