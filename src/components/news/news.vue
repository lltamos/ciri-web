<!-- news -->

<template>
  <div class="news bg-blank">
    <header class="gradient">资讯</header>
    <div class="main">
      <ul class="tab">
        <li>
          <router-link to="/news/home">首页推荐</router-link>
        </li>
        <li>
          <router-link to="/news/news-project">项目情报</router-link>
        </li>
        <li>
          <router-link to="/news/go-out">走出去情报</router-link>
        </li>
        <li>
          <router-link to="/news/CIRI-News">CIRI动态</router-link>
        </li>
      </ul>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/base/tab-bar/tab-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'

  export default {
    components: {
      TabBar,
      CrossLine
    },
    data () {
      return {
      }
    },
    props: {},
    watch: {},
    methods: {
      search () {
        this.$router.push({ path: "/search" });
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

<style type="text/scss" lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  header{
    height:44px;
    line-height: 44px;
    color:#fefefe;
    font-size: 18px;
    text-align: center;
    position: relative;
    .icon_search{
      display: block;
      height:22px;
      width:22px;
      @include bg-image('./img/search');
      background-size: 22px auto;
      position: absolute;
      right:10px;
      top:11px;

    }
  }
  .gradient{
    width: 100%;
    height: 44px;
    @include bg-image("../mine/img/header-bg");
    background-repeat: no-repeat;
    background-size: 100% 44px;
  }
  .tab{
    width: 100%;
    height: 37px;
    text-align: center;
    display: flex;
    flex-direction: row;
    margin-bottom: 2px;
    li{
      flex: 1;
      line-height: 35px;
      a {
        display: block;
        font-size: 14px;
        color: #333;
        &.router-link-active {
          color: #3f83e6;
          border-bottom: 4px solid #3f83e6;
        }
      }
    }
  }


</style>
