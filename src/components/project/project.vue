<template>
  <div>
    <div>project-list</div>
    <router-link to="/project/project-land?projId=364000101">to项目着陆页</router-link>

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

<style scoped>

</style>
