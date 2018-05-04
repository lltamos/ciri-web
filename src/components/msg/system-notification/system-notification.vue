<template>
  <div class="system">
    <div v-if="msgs!=null&&msgs.length!=0" class="inbox" v-show="seeInbox">
      <Inbox v-for='(msg,index) in this.msgs' :content='msg' :key='index' typeIcon="icon-agree" btnColor="color-agree"
             btnTitle="已同意"></Inbox>

      <!--<Inbox typeIcon="icon-refuse" btnColor="color-refuse" btnTitle="已拒绝"></Inbox>-->
      <!--<Inbox typeIcon="icon-already-see-no-deal" btnColor="color-deal" btnTitle="待处理" res=""></Inbox>-->
      <!--<Inbox typeIcon="icon-no-see-no-deal" btnColor="color-deal" btnTitle="待处理"></Inbox>-->
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
