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
      <div class="member-item-warp">
        <div class="current-state">您现在是：</div>
        <div class="member-item project">
          <div class="member-detail" v-if="false">
            <div class="img">
              <img src="../img/logo-project.png" alt="" width="100%" height="100%">
            </div>
            <div class="clearfix">
              <div class="info fl">
                <p class="info-level">项目库会员</p>
              </div>
              <div class="handel fr">
                <div class="member-btn">购买</div>
              </div>
            </div>
            <div class="function-warp clearfix">
              <div class="func-name fl">基础功能：</div>
              <div class="func-detail fl">项目收藏、项目约谈、项目答疑、项目在线路演</div>
            </div>
          </div>
          <!--如果开通了项目库会员显示下面这个member-detail-->
          <div class="member-detail">
            <div class="img">
              <img src="../img/project-active.png" alt="" width="100%" height="100%">
            </div>
            <div class="clearfix">
              <div class="info fl">
                <p class="info-level">项目库会员</p>
              </div>
            </div>
            <div class="kaitong">已开通</div>
            <div class="handel-right fr">
              <p class="count">0</p>
              <p class="count-word">剩余天数</p>
              <div class="renewals-btn">续费</div>
            </div>
          </div>

          <div class="bottom">
            <span>进入会员权益</span>
            <i class="see-rights"></i>
          </div>
        </div>
      </div>

      <!--源合网会员-->
      <div class="member-item-warp">
        <div class="current-state">您现在是：</div>
        <!--todo:判断这里显示您现在是，还是可购买-->
        <div v-if="false" class="current-state">可购买：</div>

        <div class="member-item yuanhe">
          <div class="member-detail">
            <div class="img">
              <img src="../img/logo-yuanhe.png" alt="" width="100%" height="100%">
            </div>
            <div class="clearfix">
              <div class="info fl">
                <p class="info-level">源合网员</p>
              </div>
              <div class="handel fr">
                <div class="member-btn">购买</div>
              </div>
            </div>
            <div class="share">享有项目库会员服务</div>
            <div class="function-warp clearfix">
              <div class="func-name fl">升级功能：</div>
              <div class="func-detail fl">项目收藏、项目约谈、项目答疑、项目在线路演</div>
            </div>
          </div>

          <!--如果开通了源合网会员显示下面这个member-detail-->
          <div class="member-detail" v-if="false">
            <div class="img">
              <img src="../img/yuanhe-active.png" alt="" width="100%" height="100%">
            </div>
            <div class="clearfix">
              <div class="info fl">
                <p class="info-level">项目库会员</p>
              </div>
            </div>
            <div class="kaitong">已开通</div>
            <div class="handel-right fr">
              <p class="count">0</p>
              <p class="count-word">剩余天数</p>
              <div class="renewals-btn">续费</div>
            </div>
          </div>

          <div class="bottom">
            <span>进入会员权益</span>
            <i class="see-rights"></i>
          </div>
        </div>
      </div>

      <!--VIP会员-->
      <div class="member-item-warp">
        <div class="current-state">您现在是：</div>
        <!--todo:判断这里显示您现在是，还是可购买-->
        <div v-if="false" class="current-state">可购买：</div>
        <div class="member-item vip">
          <div class="member-detail">
            <div class="img">
              <img src="../img/logo-vip.png" alt="" width="100%" height="100%">
            </div>
            <div class="clearfix">
              <div class="info fl">
                <p class="info-level">VIP会员</p>
              </div>
              <div class="handel fr">
                <div class="member-btn">购买</div>
              </div>
            </div>
            <div class="share">享有源合网会员服务</div>
            <div class="function-warp clearfix">
              <div class="func-name fl">升级功能：</div>
              <div class="func-detail fl">项目收藏、项目约谈、项目答疑、项目在线路演</div>
            </div>
          </div>

          <!--如果开通了VIP会员显示下面这个member-detail-->
          <div class="member-detail"  v-if="false">
            <div class="img">
              <img src="../img/vip-active.png" alt="" width="100%" height="100%">
            </div>
            <div class="clearfix">
              <div class="info fl">
                <p class="info-level">项目库会员</p>
              </div>
            </div>
            <div class="kaitong">已开通</div>
            <div class="handel-right fr">
              <p class="count">0</p>
              <p class="count-word">剩余天数</p>
              <div class="renewals-btn">续费</div>
            </div>
          </div>

          <div class="bottom">
            <span>进入会员权益</span>
            <i class="see-rights"></i>
          </div>
        </div>
      </div>

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
    },
    created() {
      this.isLogin = sessionStorage.getItem("islogin");

    },
    mounted() {
        /*
        购买跳转路由： this.$router.push({path: "/mine/member-center/open-member"});

        * */

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
      .member-item-warp{
        margin-top: 25px;
        &:first-child{
          margin-top: 20px;
        }
        .current-state{
          text-align: left;
          font-size: 15px;
          margin-bottom: 15px;
          color: #333;
        }
        .member-item{
          width: 100%;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          position: relative;
          .member-detail{
            padding-left: 80px;
            position: relative;
            .img{
              width: 50px;
              height: 50px;
              position: absolute;
              top: 20px;
              left: 15px;
            }
            .info{
              text-align: left;
              padding-top: 25px;
              color: #fff;
              .info-level{
                font-size: 18px;
                line-height: 18px;
              }
            }
            .handel{
              padding: 22px 10px 0px 0px;
              text-align: right;
              .member-btn{
                width: 69px;
                height: 25px;
                line-height: 25px;
                color: #fff;
                font-size: 13px;
                border: 1px solid #fff;
                border-radius: 3px;
                text-align: center;
              }
            }
            .share{
              text-align: left;
              color: #fff;
            }
            .kaitong{
              text-align: left;
              color: #fff;
              height: 41px;
              padding-top: 6px;
            }
            .handel-right{
              width: 80px;
              height: 75px;
              position: absolute;
              top: 8px;
              right: 10px;
              text-align: right;
              .count{
                font-size: 20px;
                color: #fff;
                line-height: 20px;
              }
              .count-word{
                font-size: 12px;
                color: #fff;
                margin-top: 6px;
              }
              .renewals-btn{
                width: 69px;
                height: 25px;
                line-height: 25px;
                color: #fff;
                font-size: 13px;
                border: 1px solid #fff;
                border-radius: 3px;
                text-align: center;
                margin-top: 5px;
                position: relative;
                left: 8px;
              }
            }
            .function-warp{
              text-align: left;
              font-size: 11px;
              color: #fff;
              margin: 5px 0 8px 0;
              .func-name{
                width: 60px;

              }
              .func-detail{
                width: 180px;

              }

            }
          }
          .bottom{
            height: 38px;
            line-height: 38px;
            @include onepx('top');
            position: relative;
            padding: 0px 10px;
            font-size: 15px;
            text-align: left;
            span{
              color: #fff;
            }
            .see-rights{
              width: 20px;
              height: 20px;
              display: inline-block;
              position: absolute;
              right: 5px;
              top: 9px;
              background-repeat: no-repeat;
              background-size: auto 100%;
              @include bg-image("../img/look-more");
            }

          }
        }

      }

      .project{
        @include bg-image("../img/bg-project");

      }
      .yuanhe{
        @include bg-image("../img/bg-yuanhe");

      }
      .vip{
        @include bg-image("../img/bg-vip");
      }

    }
  }
</style>
