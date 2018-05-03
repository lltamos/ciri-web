<template>
  <div class="system">
    <div class="system-page clearfix">
      <i class="icon-type fl icon-no-see"></i>
      <div class="message">
        <div class="top-message" @click="showDetail">
          <span class="title">【系统消息】您的项目已经通过审核!</span><span class="time">【 2018-03-16 09:41:43】</span>
        </div>
        <div class="bottom-message" v-show="isShow">
          <p>项目
            [<router-link to="">伊朗科尔曼10MW太阳能电站项目</router-link>],您提交的项目相关申请已经通过审核!进入[合投中]状态,您可以进入个人中心--我的项目中查看详情。如有任何疑问，欢迎垂询 +86 010-8146-4345(工作时间9:00-18:30)</p>
        </div>
      </div>
    </div>

    <div class="system-page clearfix">
      <i class="point fl point-read"></i>
      <div class="message">
        <div class="top-message">
          <span class="title">【系统消息】您的项目已经通过审核!</span><span class="time">【 2018-03-16 09:41:43】</span>
        </div>
        <div class="bottom-message">
          <p>项目
            [<router-link to="">伊朗科尔曼10MW太阳能电站项目</router-link>],您提交的项目相关申请已经通过审核!进入[合投中]状态,您可以进入个人中心--我的项目中查看详情。如有任何疑问，欢迎垂询 +86 010-8146-4345(工作时间9:00-18:30)</p>
        </div>
      </div>
    </div>

    <div class="system-page clearfix">
      <i class="point fl point-read"></i>
      <div class="message">
        <div class="top-message">
          <span class="title">【系统消息】您的项目已经通过审核!</span><span class="time">【 2018-03-16 09:41:43】</span>
        </div>
        <div class="bottom-message">
          <p>项目
            [<router-link to="">伊朗科尔曼10MW太阳能电站项目</router-link>],您提交的项目相关申请已经通过审核!进入[合投中]状态,您可以进入个人中心--我的项目中查看详情。如有任何疑问，欢迎垂询 +86 010-8146-4345(工作时间9:00-18:30)</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import tool from "@/api/tool";
  export default {
    components: {
      tool
    },
    data () {
      return {
        isShow:false,
      }
    },
    props: {},
    watch: {},
    methods: {
      showDetail(){
        this.isShow = !this.isShow
      }
    },
    filters: {},
    computed: {},
    created () {
    },
    mounted () {},
    destroyed () {}
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';
  .system{
    text-align: left;
    .clearfix{
      content:'';
      display: block;
      clear: both;
    }
    .clearfix{
      zoom: 1;
    }
    .system-page{
      border-bottom: 1px solid #dedede;
      padding: 20px 10px 20px 20px;
      font-size: 13px;
      position: relative;
      .icon-type {
        display: inline-block;
        width: 11px;
        height: 18px;
        vertical-align: middle;
        background-size: 11px 11px;
        background-repeat: no-repeat;
        background-position: 0px 4px;
      }
      .icon-no-see {
        @include bg-image("../img/noSee");
      }
      .icon-no-see-no-deal {
        @include bg-image("../img/noSeeNoDeal");
      }
      .icon-already-see-no-deal {
        @include bg-image("../img/alSeeNoDeal");
      }
      .icon-already-see {
        @include bg-image("../img/alreadySee");
      }
      .icon-already-see {
        @include bg-image("../img/refuse");
      }
      .icon-already-see {
        @include bg-image("../img/agree");
      }


      .message{
        margin-left: 20px;
        .top-message{
          font-size: 14px;
          cursor: pointer;
          .title{
            font-weight: 600;
            line-height: 20px;
          }
          .time{
            line-height: 20px;
            color: #666;
          }

        }
        .bottom-message{
          margin-top: 5px;
          color: #666;
          font-size: 12px;
          p{
            line-height: 20px;
            a{
              color: #528de8;
            }
          }
        }
      }
    }

  }

</style>
