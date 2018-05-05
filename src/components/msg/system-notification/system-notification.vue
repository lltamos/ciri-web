<template>
  <div class="system">
    <div v-if="msgs!=null&&msgs.length!=0" class="inbox" v-show="seeInbox">
      <Inbox v-for='(msg,index) in this.msgs' :content='msg' :key='index'
             :typeIcon="{'icon-agree':msg.accessmode==3,'icon-refuse':msg.accessmode==4,
             'icon-already-see-no-deal':msg.accessmode==2,'icon-no-see-no-deal':msg.accessmode==1}"
             :btnColor="{'color-agree':msg.accessmode==3,'color-refuse':msg.accessmode==4,
             'color-deal':msg.accessmode==2,'color-deal':msg.accessmode==1}"
             :btnTitle='parseAccessMode(msg.accessmode)'
             :btnShow='msg.isApprove == 1 ? true : false' @showDetail="showDetail" :agreeBtn="msg.accessmode!=3 && msg.accessmode!=4"></Inbox>

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
        seeInbox: true,
        isShow: false,
        icon: "icon-no-see",
        msgs: null
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
      showDetail() {
        this.isShow = !this.isShow
      },
      loadMore() {
        this.$api.get('/ah/s0/i/sysmsg', {
          pageId: 1,
          rowCount: 10
        }).then(res => {
          if (res.code == 200) {
            this.msgs = res.data.msgs
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

  .system {
    text-align: left;

  }

</style>
