<template>
  <div class="identity">
    <header-bar text="实名认证" @back="back"></header-bar>
    <cross-line style="margin-top: 44px;"></cross-line>
    <div class="main">
      <p class="prompt-warp"><span class="warm-prompt">温馨提示：</span>以下真实姓名和证件信息，一旦通过认证，将无法修改，请认真填写！</p>
      <div class="personal-details">
        <div class="name fl">真实姓名：</div><div class="details-warp fl"><input type="text"/></div>
        <div class="idcard fl">身份证号：</div><div class="details-warp fl"><input type="text"/></div>
      </div>

    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  export default {
    components: {
      HeaderBar,
      CrossLine
    },
    data(){
      return {
        headTitle : ''
      }
    },
    methods: {
      back() {
        this.$router.push({
          path: this.$router.go(-1)
        })
      }

    },
    created () {
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';
  .main{
    text-align: left;
    padding-top:17px;
    .prompt-warp{
      padding: 0 10px 17px;
      @include onepx("bottom");
      font-size: 15px;
      color:#333;
      height:42px;
      line-height: 21px;
      .warm-prompt{
        color:#fdb140;
      }
    }
    .personal-details{
      margin: 0 10px;
      padding: 20px 0;
      @include onepx("bottom");
      .name{
        margin-right: 10px;
      }
      .idcard{
        margin-right: 10px;
      }
      .details-warp{
        width:76%;
        height:30px;
      }

    }
  }
</style>
