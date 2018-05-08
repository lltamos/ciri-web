<!-- news -->

<template>
  <div class="news">
    <header class="gradient">源合资讯
      <i class="icon_search"></i>
    </header>
    <tab-bar></tab-bar>
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
    background: -webkit-linear-gradient(left, rgba(56,185,253,1) ,rgba(63,132,230,0.65)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, rgba(56,185,253,1) ,rgba(63,132,230,0.65)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, rgba(56,185,253,1) ,rgba(63,132,230,0.65)); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, rgba(56,185,253,1) ,rgba(63,132,230,0.65)); /* 标准的语法 */
  }
  .tab{
    width: 100%;
    height: 35px;
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
          border-bottom: 2px solid #3f83e6;
        }
      }
    }
  }


</style>
