<template>
<div id="search">
  <div class="header-warp">
    <div class="header-bar gradient">
      <i class="icon-back" @click="back"></i>
      <h1>资讯详情</h1>
    </div>
  </div>
  <div class="search-warp" id="search-warp">
    <div class="search-box">
      <i class="icon-search" @click="searchKey"></i>
      <input type="text" placeholder="项目 投资人">
    </div>
  </div>
  <div class="main">
    <div class="hot-search" v-show="keyword">
      <div>热门搜索</div>
    </div>
    <SearchList v-show="!keyword"></SearchList>
  </div>
</div>
</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import SearchList from '@/components/search/search-list'

  export default {
    components: {
      HeaderBar,
      SearchList
    },
    data() {
        return {
          keyword : true,
        }
    },
    props: {},
    watch: {},
    methods: {
      back() {
        window.history.back()
      },
      searchKey () {
        this.keyword = false;
      }
    },
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
    @import '~@/assets/scss/const.scss';
  #search{
    .header-warp{
      height:44px;
      .header-bar {
        height: 44px;
        line-height: 44px;
        color: #fff;
        font-size: 14px;
        text-align: center;
        position: relative;
        h1 {
          color: #fff;
          font-size: 20px;
        }
        .icon-back {
          display: block;
          float: left;
          width: 22px;
          height: 22px;
          margin: 11px auto;
          @include bg-image("../news/img/back");
          background-size: 22px auto;
        }
      }
    }
    .search-warp{
      position:fixed;
      top:0;
      z-index:999;
      left: 0;
      right:0;
      padding: 6px 0;
      margin: 0 30px;
    }
    .search-box{
      width:90%;
      height:30px;
      border-radius: 30px;
      border:1px solid #dedede;
      margin: auto;
      left:0;
      right:0;
      background: #fff;
      text-align: left;
      .icon-search{
        display: inline-block;
        width:15px;
        height:15px;
        background-size: 15px auto;
        background-repeat: no-repeat;
        margin: 0 10px 0 12px;
        @include bg-image('../project/img/icon-search');
        position: relative;
        top:2px;

      }
      input{
        height:30px;
        width:80%;
        border: none;
        outline: none;

      }
    }
    .main{
      text-align: left;
    }
  }

</style>
