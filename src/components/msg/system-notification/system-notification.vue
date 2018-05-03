<template>
  <div class="system">
    <system-notice :typeIcon="this.icon"></system-notice>
  </div>
</template>

<script>
  import tool from "@/api/tool";
  import SystemNotice from '@/components/base/system-notice/system-notice';
  export default {
    components: {
      tool,
      SystemNotice
    },
    data () {
      return {
        isShow:false,
        icon: "icon-no-see"

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


  }

</style>
