<template>
    <div class="intent">
      <div class="remind">
        提交投资意向后，项目发起人将与您直接沟通项目详情，并邀请您参加项目投资策划会！
      </div>
      <div class="process">
        <p class="process-title">
          <i class="left-line"></i><span>合投前流程</span>
        </p>
        <div class="point-warp">
          <div class="border-line"></div>
          <div class="point-group">
            <i class="icon-type icon-selected"></i>
            <i class="icon-type icon-selected"></i>
            <i class="icon-type icon-selected"></i>
          </div>
          <div class="point-name color-selected">
            <div>实名认证</div>
            <div>企业认证</div>
            <div>签署协议</div>
          </div>
          <div class="process-remind">
            <p>发布投资意向钱需先完成实名认证、企业认证并签署服务协议</p>
            <p>以上操作请登录源合网(industryc2c.com)在线完成</p>
            <p>任何疑问请咨询客服经理 13601315595 (Mr Zhang)</p>
          </div>
          <div class="participate participate-selected">参与合投</div>
        </div>
      </div>
      <CrossLine></CrossLine>
      <div class="progress">
        <h4>
          <i class="left-line"></i><span>投资进展</span>
        </h4>
        <div class="schedule">
          <div class="count">
            <div>意向投资方<span>7</span>位</div>
            <div>意向投资额<span>7920</span>万美元</div>
          </div>
          <div class="line">
            <div class="bg"></div>
            <div class="now"></div>
          </div>
          <div class="time">
            <div>合投结束时间：<span>2018-10-25</span></div>
            <div>当前进度<span>110%</span></div>
          </div>
        </div>
        <div class="lead">
          <div>领投方<span>1</span>位</div>
          <div class="invest-wrap clearfix">
            <div class="picture fl">
              <img src="../../img/file-delete.png">
            </div>
            <div class="content fl">
              <div class="company-name">河北*******公司</div>
              <div class="count">意向投资额：<span>3000</span>万美元</div>
            </div>
            <div class="detail fr">
              <router-link to="" class="detail-warp">
                <span class="to-detail">详情</span>
                <i class="more"></i>
              </router-link>
            </div>
          </div>

        </div>
        <div class="follow">
          <div>跟投方<span>2</span>位</div>
          <div class="invest-wrap clearfix">
            <div class="picture fl">
              <img src="../../img/file-delete.png">
            </div>
            <div class="content fl">
              <div class="company-name">河北*******公司</div>
              <div class="count">意向投资额：<span>3000</span>万美元</div>
            </div>
            <div class="detail fr">
              <router-link to="" class="detail-warp">
                <span class="to-detail">详情</span>
                <i class="more"></i>
              </router-link>
            </div>
          </div>

          <div class="invest-wrap clearfix">
            <div class="picture fl">
              <img src="../../img/file-delete.png">
            </div>
            <div class="content fl">
              <div class="company-name">河北*******公司</div>
              <div class="count">意向投资额：<span>3000</span>万美元</div>
            </div>
            <div class="detail fr">
              <router-link to="" class="detail-warp">
                <span class="to-detail">详情</span>
                <i class="more"></i>
              </router-link>
            </div>
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

<style lang="scss" scoped>
    @import '~@/assets/scss/reset.scss';
    @import '~@/assets/scss/mixin.scss';
  .intent{
    .left-line{
      position: absolute;
      display: block;
      width: 3px;
      height: 15px;
      background-color: #528de8;
      left: 0;
      top:12px;
    }
    .remind{
      padding: 7px 17px;
      height:30px;
      overflow: hidden;
      line-height: 16px;
      background: #f5f5f5;
      margin: 15px 15px 3px;
      color: #528de8;
      font-size: 10px;
      border-radius: 2px;
    }
    .process{
      .process-title{
        text-align: left;
        overflow: hidden;
        line-height: 1;
        height: 16px;
        padding: 12px 10px 12px 15px;
        color: #333;
        font-size: 16px;
        font-weight: normal;
        position: relative;
      }
      .point-warp{
        position: relative;
        .border-line{
          margin-top: 11px;
          @include onepx();
        }
        .point-group{
          display: flex;
          justify-content: space-around;
          position: relative;
          top: -11px;
          .icon-type{
            display: inline-block;
            width: 18px;
            height: 22px;
            vertical-align: middle;
            background-size: 16px 16px;
            background-repeat: no-repeat;
            background-position: 0px 4px;
          }
          .icon-not-select{
            @include bg-image("../../img/not-select");
          }
          .icon-selected{
            @include bg-image("../../img/selected");
          }

        }
        .point-name{
          display: flex;
          justify-content: space-around;
          font-size: 13px;
          position: relative;
          top: -3px;
        }
        .color-not-select{
          color: #333;
        }
        .color-selected{
          color: #528de8;
        }
        .process-remind{
          padding: 0px 5px;
          overflow: hidden;
          line-height: 19px;
          margin: 15px 15px 3px;
          border-radius: 2px;
          p{
            color: #fa5959;
            font-size: 10px;
          }

        }
        .participate{
          width: 150px;
          height: 30px;
          line-height: 30px;
          font-size: 13px;
          margin: 17px auto;
          border-radius: 30px;
        }
        .participate-no-select{
          background-color: #eee;
          color: #333;
        }
        .participate-selected{
          background-color: #528de8;
          color: #fff;
        }
      }
    }
    .progress{
      h4{
        text-align: left;
        overflow: hidden;
        line-height: 1;
        height: 16px;
        padding: 12px 10px 12px 15px;
        color: #333;
        font-size: 16px;
        font-weight: normal;
        @include onepx('bottom');
      }
      .schedule{
        margin: 17px 15px 15px;
        .count{
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: #333333;
          span{
            font-size: 15px;
            color: #3f83e6;
          }
        }
        .line{
          margin-top: 10px;
          height: 11px;
          display: block;
          margin: 10px auto 0;
          font-size: 1px;
          position: relative;
          .bg{
            background-color: #eaeaea;
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            border-radius: 11px;
          }
          .now{
            background-color: #3f83e6;
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            border-radius: 11px;

          }
        }
        .time{
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: #666;
          span{
            font-size: 15px;
            color: #3f83e6;
          }
        }
      }
      .lead{
        text-align: left;
        margin: 15px 0px 15px 15px;
        font-size: 13px;
        color: #333;
      }
      .invest-wrap{
        padding: 12px 0px;
        .picture{
          width: 46px;
          height: 46px;
          background-color: pink;
          img{
            width: 46px;
            height: 46px;
          }
        }
        .content{
          height: 46px;
          margin-left: 12px;
          line-height: 22px;
          .company-name{
            font-size: 12px;
            color: #333;
          }
          .count{
            font-size: 10px;
            color: #666;
          }

        }
        .detail{
          width: 46px;
          height: 46px;
          position: relative;
          .detail-warp {
            position: absolute;
            right: 0;
            top: 0;
            height: 40px;
            line-height: 1;

            .to-detail {
              display: inline-block;
              font-size: 13px;
              color: #528de8;

            }

            .more {
              display: inline-block;
              width: 10px;
              height: 40px;
              background-repeat: no-repeat;
              background-size: 10px auto;
              background-position: center;
              @include bg-image("../../img/to-detail");
              vertical-align: middle;
            }

          }
        }
      }
      .follow{
        text-align: left;
        margin: 15px 0px 15px 15px;
        font-size: 13px;
        color: #333;
      }
    }
  }
</style>
