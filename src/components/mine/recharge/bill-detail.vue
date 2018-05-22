<template>
  <div class="bill-detail">
    <div class="header-bar">
      <i class="icon-back" @click="back"></i>
      <h1>账单明细</h1>
    </div>
    <div class="bill-item clearfix">
      <div class="detail fl">
        <div>充值</div>
        <div class="time">2018-05-22 16:49</div>
      </div>
      <div class="count fr">+588</div>
    </div>

    <div class="bill-item clearfix">
      <div class="detail fl">
        <div>充值</div>
        <div class="time">2018-05-22 16:49</div>
      </div>
      <div class="count fr">+188</div>
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
  .bill-detail{
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
    .bill-item{
      padding: 20px;
      height: 38px;
      text-align: left;
      font-size: 15px;
      color: #333;
      border-bottom: 1px solid #dedede;
      .time{
        font-size: 13px;
        color: #666;
        line-height: 23px;
      }
      .count{
        line-height: 38px;
        color: #528de8;
        font-size: 16px;
      }
    }

  }

</style>
