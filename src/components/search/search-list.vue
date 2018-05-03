<template>
<div class="search-list">
  <ul>
    <li>全部（2）</li>
    <li>绿地投资（1）</li>
    <li>项目出售（1）</li>
  </ul>
</div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {}
        },
        props: {},
        watch: {},
        methods: {},
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
  .search-list{
    ul{
      display: flex;
      flex-direction: row;
      li{
        flex:1;
        text-align: center;
      }
    }
  }

</style>
