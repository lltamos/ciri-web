<template>
  <div class="manager-warp">
    <div class="manager">
      <div class="title-warp">
        <div class="border-line"></div>
        <div class="title">客户经理</div>
      </div>
      <div class="info clearfix">
        <div class="data fl">
          <p>电话：136 0131 5595（Mr Zhang）</p>
          <p>邮箱：jing.zhang@bjciri.com</p>
          <p>长按识别右侧二维码，添加微信</p>
        </div>
        <div class="qrcode fl">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import CrossLine from '@/components/base/cross-line/cross-line'
  export default {
    components: {
      CrossLine
    },
    data() {
        return {}
    },
    props: {},
    watch: {},
    methods: {},
    filters: {},
    computed: {},
    created() {
    },
    mounted() {
    },
    destroyed() {
    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
  @import '~@/assets/scss/reset.scss';
  @import '~@/assets/scss/mixin.scss';
  .manager-warp{
    .manager{
      color:#333;
      padding: 12px 10px 17px;
      .title-warp{
        position: relative;
        .border-line{
          margin-top: 7px;
          @include onepx();
        }
        .title{
          font-size: 15px;
          line-height: 1;
          position: absolute;
          left:50%;
          top:-7px;
          margin-left: -40px;
          width:60px;
          padding: 0 10px;
          background-color: #fff;
        }
      }
    }
    .info{
      margin-top: 28px;
      .data{
        border: 1px solid #dedede;
        border-radius: 3px;
        padding:7px 10px 2px;
        margin-right: 15px;
        p{
          text-align: left;
          font-size: 12px;
          line-height: 1;
          margin-bottom: 6px;

        }

      }
      .qrcode{
        display: block;
        width: 65px;
        height: 65px;
        background-size: 65px auto;
        @include bg-image('../img/manager');

      }
    }
  }

</style>
