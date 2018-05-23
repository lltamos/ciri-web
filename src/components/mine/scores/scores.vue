<template>
  <div class="scores">
    <div class="header-bar">
      <i class="icon-back" @click="back"></i>
      <h1>我的积分</h1>
    </div>
    <div class="service" @click="toScoresDetail">明细</div>
    <div class="tab-warp">
      <div class="tab-scores">
        <div class="income tab-box" :class="{active:tabActive==1}" @click="changePanel(1)">积分收入</div>
        <div class="out tab-box" :class="{active:tabActive==2}" @click="changePanel(2)">积分支出</div>
      </div>
    </div>

    <div class="income-warp" :class="{active:tabActive==1}">
      <div>
        <div class="scores-item clearfix" >
          <div class="detail fl">
            <div>签到</div>
            <div class="time">2018-05-22 16:49</div>
          </div>
          <div class="count fr">+2</div>
        </div>
        <div class="scores-item clearfix">
          <div class="detail fl">
            <div>签到</div>
            <div class="time">2018-05-22 16:49</div>
          </div>
          <div class="count fr">+2</div>
        </div>
      </div>

      <!--积分收入无数据显示-->
      <div class="no-info"  v-if="false">
        <img class="no-img" src="../img/no-scores-in.png" alt="">
      </div>

    </div>


    <div class="out-warp" :class="{active:tabActive==2}">
      <div class="no-info">
        <img class="no-img" src="../img/no-scores-out.png" alt="">
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
        tabActive:1
      }
    },
    methods: {
      back() {
        window.history.back()
      },
      toScoresDetail(){
        this.$router.push({ path: "/mine/scores/scores-detail" });
      },
      changePanel(tab){
        this.tabActive = tab;
      }

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
  .scores{
    .no-info{
      width: 200px;
      height: 170px;
      margin: 30% auto;
      .no-img{
        width: 100%;
        height: 100%;
      }
    }
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
      top: 14px;
      z-index: 11;
      font-size: 15px;
      height: 15px;
      line-height: 15px;
      color: #528de8;
    }
    .tab-warp {
      @include onepx('bottom');

      .tab-scores {
        height: 40px;
        line-height: 40px;
        font-size: 17px;
        display: flex;
        flex-direction: row;
        .tab-box {
          color: #333;
          flex: 1;
          &.active {
            color: #528de8;
            @include bottom-bar();
            &:before{
              right:40%;
              margin-right: -14px;
              height:3px;
              background:#528de8;
              width: 68px;
            }
          }
        }
        .income {
          @include right-bar();
          margin-right: 0;
          &:after{
            right:0;
          }
        }

        .out {
          margin-left: 0px;

        }

      }
    }
    .income-warp{
      display: none;
      &.active{
        display: block;
      }
      .scores-item{
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
    .out-warp{
      display: none;
      &.active{
        display: block;
      }
    }
  }

</style>
