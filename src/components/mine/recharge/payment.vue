<template>
  <div class="payment">
    <div class="header-bar">
      <i class="icon-back" @click="back"></i>
      <h1>源合币支付</h1>
    </div>
    <div class="need">
      需支付：
      <span class="right-money">￥299</span>
    </div>
    <div class="pay-way">
      <h4>
        <i class="left-line"></i><span>选择支付方式</span>
      </h4>
    </div>

    <div class="wexin-pay">
      <div class="img">
        <img src="../img/weixin.png" alt="">
      </div>
      <div class="content clearfix">
        <div class="wexin-word fl">微信支付</div>
        <!--radio的选中状态在这个div上添加active属性-->
        <div class="item fr">
          <i class="icon-radio">
            <input type="radio" name=""/>
          </i>
        </div>
      </div>
    </div>
    <!--todo:如果支付失败，这边显示重新支付-->
    <div class="btn" @click="">确认支付</div>

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

    },
    created() {

    },
    mounted() {

    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';
  .payment{
    .header-bar {
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      text-align: center;
      position: relative;
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
    .need{
      height: 35px;
      line-height: 35px;
      text-align: right;
      font-size: 13px;
      color: #666;
      background-color: #f5f5f5;
      .right-money{
        color: #528de8;
        padding-right: 10px;
      }
    }
    .pay-way{
      padding: 8px 0;
      width: 100%;
      @include onepx('bottom');
    }
    h4{
      text-align: left;
      overflow: hidden;
      line-height: 1;
      height: 16px;
      padding: 12px 10px 12px 15px;
      color: #333;
      font-size: 16px;
      font-weight: normal;
      position: relative;
      .left-line{
        position: absolute;
        display: block;
        width: 4px;
        height: 15px;
        background-color: #528de8;
        left: 0;
        top:12px;
      }

    }
    .wexin-pay{
      padding: 22.5px 0;
      text-align: left;
      width: 100%;
      @include onepx('bottom');
      position: relative;
      .img{
        width: 30px;
        height: 30px;
        position: absolute;
        left: 10px;
        img{
          width: 100%;
          height: 100%;

        }
      }
      .content{
        padding-left: 50px;
        height: 30px;
        line-height: 30px;
        .wexin-word{

        }
        .item {
          &.active {
            .icon-radio {
              @include bg-image("../img/selected");
              margin-right: 10px;
            }

          }
          i {
            position: relative;
            display: inline-block;
            width: 20px;
            height: 20px;
            background-repeat: no-repeat;
            background-size: 20px auto;
            background-position: center;
            vertical-align: middle;
            input[type="radio"]{
              position: absolute;
              left: 0;
              opacity: 0;
            }

          }
          .icon-radio {
            @include bg-image("../img/no-select");
            margin-right: 10px;

          }

          span {
            height: 45px;
            line-height: 45px;
            display: inline-block;
            font-size: 15px;
          }
        }
      }
    }
    .btn{
      margin: 20px auto;
      width: 355px;
      background-color: #ccc;
      color: #fff;
      &.active{
        background-color: #528de8;
      }
    }
  }

</style>
