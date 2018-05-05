<template>
  <div class="station">
    <ul class="tab clearfix">
      <li :class="{active:tabActive==1}" @click="showInbox">收件箱 <em>14</em></li>
      <li :class="{active:tabActive==2}" @click="showOutbox">发件箱 <em></em></li>
    </ul>
    <div v-if="msgs!=null&&msgs.length!=0" class="inbox" v-show="seeInbox">

      <Inbox v-for='(msg,index) in this.msgs' :content='msg' :key='index'
             :typeIcon="{'icon-agree':msg.accessmode==3,'icon-refuse':msg.accessmode==4,
             'icon-already-see-no-deal':msg.accessmode==2,'icon-no-see-no-deal':msg.accessmode==1}"
             :btnColor="{'color-agree':msg.accessmode==3,'color-refuse':msg.accessmode==4,
             'color-deal':msg.accessmode==2,'color-deal':msg.accessmode==1}"
             :btnTitle='parseAccessMode(msg.accessmode)'
             :btnShow='msg.isApprove == 1 ? true : false' @showDetail="showDetail" :agreeBtn="msg.accessmode!=3 && msg.accessmode!=4"></Inbox>
      <button @click="loadMore()" :disabled="this.disabled" class="more">
        <span v-text="moreText">{{this.moreText}}</span><i v-show="isIcon"></i>
      </button>
    </div>
    <div class="outbox" v-show="!seeInbox">
      <outbox v-for='(msg,index) in this.msgs' :content='msg' :key='index'
             :typeIcon="{'icon-agree':msg.accessmode==3,'icon-refuse':msg.accessmode==4,
             'icon-already-see-no-deal':msg.accessmode==2,'icon-no-see-no-deal':msg.accessmode==1}"
             :btnColor="{'color-agree':msg.accessmode==3,'color-refuse':msg.accessmode==4,
             'color-deal':msg.accessmode==2,'color-deal':msg.accessmode==1}"
             :btnTitle='parseAccessMode(msg.accessmode)'
             :btnShow='msg.isApprove == 1 ? true : false' @showDetail="showDetail" :agreeBtn="msg.accessmode!=3 && msg.accessmode!=4"></outbox>
      <button @click="loadMore()" :disabled="this.disabled" class="more">
        <span v-text="moreText">{{this.moreText}}</span><i v-show="isIcon"></i>
      </button>
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
        pageId: 1,
        moreText: '查看更多',
        disabled: false,
        isIcon: true,
      }
    },
    props: {},
    watch: {},
    methods: {
      parseAccessMode(tag) {
        if (tag == 1 || tag == 2) {
          return '待处理';
        } else if (tag == 3) {
          return '已同意';
        } else if (tag == 4) {
          return '已拒绝';
        }
      },
      showDetail(){
        // window.location.reload();
      },

      showInbox() {
        this.msgs = null;
        this.tabActive = 1;
        this.seeInbox = true;
        this.url = '/ah/s0/i/insidemsg';
        this.pageId = 1;
        this.loadMore();
      },
      showOutbox() {
        this.msgs = null;
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
          pageId: this.pageId,
          rowCount: 10
        }).then(res => {
          if (res.code == 200) {
            this.notloading = false;
            if (this.pageId == 1 || this.msgs == null) {
              this.msgs = res.data.msgs
            } else {
              this.msgs = this.msgs.concat(res.data.msgs);
            }
            this.pageId = this.pageId + 1;
            if (res.data.msgs.length == 0 || res.data.msgs.length < 10) {
              this.moreText = '没有更多了';
              this.disabled = 'disabled';
              this.isIcon = false;
            }
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
    padding: 0 10px 80px;

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

        &.active {
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
    .more {
      font-size: 12px;
      color: #3f80e9;
      text-align: center;
      background: #fff;
      display: table;
      margin: 20px auto 0;

      i {
        display: inline-block;
        width: 12px;
        height: 12px;
        @include bg-image("../../news/img/more");
        background-size: 12px auto;
        margin-left: 6px;
      }
    }

  }


</style>
