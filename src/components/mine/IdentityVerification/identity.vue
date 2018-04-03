<template>
  <div class="identity">
    <header-bar text="实名认证" @back="back"></header-bar>
    <cross-line style="margin-top: 44px;"></cross-line>
    <div class="main">
      <component v-bind:is="currentView">
      </component>
    </div>
  </div>

</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'

  const IdentitySubmit ={
    template :'<div class="identity-success identity-icon">\n' +
    '        <div class="img"></div>\n' +
    '        <p class="title">您已提交实名认证，请耐心等待。</p>\n' +
    '        <div class="btn">返回</div>\n' +
    '      </div>'
  }
  const IdentitySuccess ={
    template :'<div class="identity-success identity-icon">\n' +
    '        <div class="img"></div>\n' +
    '        <p class="title">实名认证审核成功</p>\n' +
    '        <div class="audit-info">\n' +
    '          <p>真实姓名：<span class="name">张明</span></p>\n' +
    '          <p>身份证号：<span class="idcard">452125788402154620</span></p>\n' +
    '          <p>认证时间：<span class="time">2017-09-09</span></p>\n' +
    '        </div>\n' +
    '        <div class="btn">返回</div>\n' +
    '      </div>'
  }
  const IdentityFail ={
    template :'<div class="identity-fail identity-icon">\n' +
    '        <div class="img"></div>\n' +
    '        <p class="title">您未通过实名认证，请你核对信息重新提交</p>\n' +
    '        <div class="btn">返回</div>\n' +
    '      </div>'
  }
  export default {
    components: {
      HeaderBar,
      CrossLine,
      identitySubmit:IdentitySubmit,
      identitySuccess:IdentitySuccess,
      identityFail:IdentityFail,
    },
    data(){
      return {
        headTitle : '',
        //已成功提交页面
        currentView: 'identitySubmit'
        // 实名认证成功页面
        // currentView: 'identitySuccess'
        // 实名认证失败页面
        // currentView: 'identityFail'
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

<style lang="scss">
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';
  .identity{
    .main{
      padding: 0 10px;
      .identity-icon{
        margin: 47px auto 0;
        .img{
          height:40px;
          width: 40px;
          background-size: 40px auto;
          margin: 0 auto 26px;
        }
        .title{
          font-size: 15px;
          color:#333;
          height:15px;
          line-height: 15px;

        }
        .btn{
          margin-top: 75px;
        }
      }
      .identity-fail{
        .img{
          @include bg-image("../img/audit-fail");
        }
      }
      .identity-success{
        .img{
          @include bg-image("../img/audit-success");
        }
        .audit-info{
          margin: 25px auto 60px;
          width: 66.5%;
          min-width: 230px;
          p{
            text-align: left;
            height:14px;
            line-height: 14px;
            font-size: 14px;
            color:#333;
            margin-bottom: 15px;
            span{
              margin-left: 3%;
            }
          }
        }
      }

    }
  }
</style>
