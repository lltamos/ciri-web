<template>
  <div class="mine">
    <header>我的</header>
    <router-link class="login" to="/login">立即登录</router-link>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
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

<style  scoped>

</style>
