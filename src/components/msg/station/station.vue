<template>
  <div class="station">
    <ul class="tab clearfix">
      <li :class="{active:tabActive==1}" @click="showInbox">收件箱 <em>14</em></li>
      <li :class="{active:tabActive==2}" @click="showOutbox">发件箱 <em></em></li>
    </ul>
    <div class="inbox" v-show="seeInbox">
      <Inbox :typeIcon="this.icon" :btnColor="this.color"></Inbox>
    </div>

    <div class="outbox" v-show="!seeInbox">
      <outbox></outbox>
    </div>

  </div>
</template>

<script>
  import tool from "@/api/tool";
  import Inbox from '@/components/base/inbox/inbox'
  import Outbox from '@/components/base/outbox/outbox'
  export default {
    components: {
      tool,
      Inbox,
      Outbox
    },
    data () {
      return {
        tabActive : 1,
        seeInbox: true,
        isShow:false,
        icon: "icon-no-see-no-deal",
        color:"color-agree"
      }
    },
    props: {},
    watch: {},
    methods: {
      showInbox(){
        this.tabActive = 1;
        this.seeInbox = true;
      },
      showOutbox(){
        this.tabActive = 2;
        this.seeInbox = false;
      },
      showOutDetail(){
        this.isShow = !this.isShow
      },
      showInDetail(){
        this.isShow = !this.isShow
      },

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
  .station{
    padding: 0 10px;
    .tab{
      margin: 15px 0 0px;
      li{
        float:left;
        margin-right: 15px;
        color:#528de8;
        font-size: 10px;
        width:75px;
        height:20px;
        line-height: 20px;
        border-radius: 20px;
        border: 1px solid #528de8;
        text-align: center;
        &.active{
          background:#528de8 ;
          color:#fff;
        }

      }
    }
    .inbox{
      text-align: left;
    }
    .outbox{
      text-align: left;
    }
  }


</style>
