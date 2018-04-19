<template>
<div class="progress-detail">
  <div class="header-bar gradient">
    <i class="icon-back" @click="back"></i>
    <h1>项目名片</h1>
    <i class="icon_search"></i>
  </div>
  <div class="main">
    <h4>
      <i class="left-line"></i><span>中国投资方来项目地考察</span>
    </h4>

  </div>
</div>
</template>

<script>
    export default {
        components: {},
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

<style lang="scss" scoped>
    @import '~@/assets/scss/reset.scss';
    @import '~@/assets/scss/mixin.scss';
  .progress-detail{
    .header-bar {
      height: 44px;
      line-height: 44px;
      color: #fff;
      font-size: 14px;
      text-align: center;
      position: relative;
      h1 {
        color: #fff;
        font-size: 20px;
        font-weight: normal;
      }
      .icon-back {
        display: block;
        float: left;
        width: 22px;
        height: 22px;
        margin: 11px auto;
        @include bg-image("../../../base/img/back");
        background-size: 22px auto;
      }
      .icon_search{
        display: block;
        height:22px;
        width:22px;
        @include bg-image('../../../base/img/search');
        background-size: 22px auto;
        position: absolute;
        right:10px;
        top:11px;

      }
    }
    .main{
      h4{
        text-align: left;
        overflow: hidden;
        line-height: 1;
        height: 16px;
        padding: 15px 10px 15px 10px;
        color: #333;
        font-size: 16px;
        font-weight: normal;
        @include onepx('bottom');
        .left-line{
          position: absolute;
          display: block;
          width: 3px;
          height: 15px;
          background-color: #528de8;
          left: 0;
          top:15px;
        }
      }
    }
  }


</style>
