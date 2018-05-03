<template>
  <div class="inbox-page clearfix">
    <i class="icon-type fl" :class="typeIcon"></i>
    <div class="message mar">
      <div class="top-message" @click="showDetail">
        <p>
          <span class="title" v-html="this.content.title"></span><span
          class="time">{{time(this.content.createTime)}}</span>
        </p>
        <div class="msg-btn" :class="btnColor" v-text="btnTitle">已同意</div>
      </div>
      <div class="bottom-message" v-show="isShow">
        <p v-html="this.content.content">
        </p>
        <div class="deal-btn-wrap">
          <div class="deal-btn deal-btn-refuse">拒绝</div>
          <div class="deal-btn deal-btn-agree">同意</div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import tool from '@/api/tool'

  export default {
    components: {},
    data() {
      return {
        isShow: false,

      }
    },
    props: {
      typeIcon: {
        type: String
      },
      btnColor: {
        type: String
      },
      btnTitle: {
        type: String
      },
      content: {
        type: Object
      }

    },
    watch: {},
    methods: {
      showDetail() {
        this.isShow = !this.isShow;
      },
      time(time) {
        return tool.time(time);
      }
    },
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

  .inbox-page {
    border-bottom: 1px solid #dedede;
    padding: 20px 0px 20px 10px;
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
  @include bg-image("../../msg/img/noSee");
  }

  .icon-no-see-no-deal {
  @include bg-image("../../msg/img/noSeeNoDeal");
  }

  .icon-already-see-no-deal {
  @include bg-image("../../msg/img/alSeeNoDeal");
  }

  .icon-already-see {
  @include bg-image("../../msg/img/alreadySee");
  }

  .icon-refuse {
  @include bg-image("../../msg/img/refuse");
  }

  .icon-agree {
  @include bg-image("../../msg/img/agree");
  }

  .mar {
    margin-left: 20px;
  }

  .message {

  a {
    color: #528de8;
    text-decoration: underline;
    margin: 0 3px;

  &
  :hover,

  &
  :visited,

  &
  :link,

  &
  :active {
    color: #528de8;
  }

  }
  .top-message {
    font-size: 14px;
    cursor: pointer;
    color: black;
    position: relative;

  p {
    position: relative;

  .title {
    line-height: 20px;
  }

  .time {
    line-height: 20px;
    color: #666;
  }

  }
  .msg-btn {
    width: 60px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 3px;
    background-color: #edf3fd;
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 22px;
  }

  .color-agree {
    color: #ff0000;
  }

  .color-refuse {
    color: #999;
  }

  .color-deal {
    color: #528de8;
  }

  }
  .bottom-message {
    margin-top: 5px;
    color: #666;
    font-size: 12px;

  p {
    line-height: 20px;
  }

  .deal-btn-wrap {
    display: flex;
    justify-content: center;
    margin: 15px 0px 0px -20px;

  .deal-btn {
    height: 25px;
    line-height: 25px;
    width: 75px;
    color: #fff;
    font-size: 13px;
    border-radius: 3px;
    text-align: center;
  }

  .deal-btn-refuse {
    background-color: #eee;
    color: #333;

  }

  .deal-btn-agree {
    background-color: #528de8;
    margin-left: 25px;
  }

  }
  }
  }
  }

</style>
