<template>
  <div class="station">
    <ul class="tab clearfix">
      <li :class="{active:tabActive==1}" @click="showInbox">收件箱 <em>14</em></li>
      <li :class="{active:tabActive==2}" @click="showOutbox">发件箱 <em></em></li>
    </ul>
    <div v-if="msgs!=null&&msgs.length!=0" class="inbox" v-show="seeInbox">

      <Inbox v-for='(msg,index) in this.msgs' :content='msg' :key='index' typeIcon="icon-agree" btnColor="color-agree"
             btnTitle="已同意"></Inbox>

      <!--<Inbox typeIcon="icon-refuse" btnColor="color-refuse" btnTitle="已拒绝"></Inbox>-->
      <!--<Inbox typeIcon="icon-already-see-no-deal" btnColor="color-deal" btnTitle="待处理" res=""></Inbox>-->
      <!--<Inbox typeIcon="icon-no-see-no-deal" btnColor="color-deal" btnTitle="待处理"></Inbox>-->
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
    data() {
      return {
        tabActive: 1,
        seeInbox: true,
        isShow: false,
        msgs: null,
        url: '/ah/s0/i/insidemsg',
        pageId: 1

      }
    },
    props: {},
    watch: {},
    methods: {
      showInbox() {
        this.msgs=null;
        this.tabActive = 1;
        this.seeInbox = true;
        this.url = '/ah/s0/i/insidemsg';
        this.pageId = 1;
        this.loadMore();
      },
      showOutbox() {
        this.msgs=null;
        this.url = '/ah/s0/i/sendmsg';
        this.tabActive = 2;
        this.seeInbox = false;
        this.pageId = 1;
        this.loadMore();
      },
      showOutDetail() {
        this.isShow = !this.isShow
      },
      showInDetail() {
        this.isShow = !this.isShow
      },
      loadMore() {
        this.$api.get(this.url, {
          pageId: 1,
          rowCount: 10
        }).then(res => {
          if (res.code == 200) {
            this.msgs = res.data.msgs
            this.pageId++
          }
        });
      },


    },
    filters: {},
    computed: {},
    created() {
      this.loadMore();
    },
    mounted() {

    },
    destroyed() {
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .station {
    padding: 0 10px;

    .tab {
      margin: 15px 0 0px;

      li {
        float: left;
        margin-right: 15px;
        color: #528de8;
        font-size: 10px;
        width: 75px;
        height: 20px;
        line-height: 20px;
        border-radius: 20px;
        border: 1px solid #528de8;
        text-align: center;

        .active {
          background: #528de8;
          color: #fff;
        }

      }
    }
    .inbox {
      text-align: left;
    }

    .outbox {
      text-align: left;
    }

  }


</style>
