<!-- news -->

<template>
  <div class="">
    <div>news</div>

    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import axios from 'axios'
  import TabBar from '@/components/base/tab-bar/tab-bar'

  export default {
    components: {
      TabBar,
    },
    data () {
      return {
      }
    },
    props: {},
    watch: {},
    methods: {

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


</style>
