<!-- news -->

<template>
  <div class="news">
    <div class="scene">
      <div class="coverage">
        <span class="title">目前国内市场几乎空白。从国外市场来看，英国BBC目前国内市场几乎空白。从国外市场来看，英国BBC</span>
        <div class="title-box">
          <div class="fl">
            <span class="column">项目情报</span> | <span class="time">2018年1月1日</span>
            <span class="author">CIRI</span>
          </div>

          <div class="view fr">
            <i class="icon-view"></i><span class="count">336</span>
          </div>
        </div>
      </div>
    </div>
    <tab-bar></tab-bar>
    <div class="main">
      <ul class="tab">
        <li>
          <router-link to="/news/CIRI-News/Activities"><span class="active">最新活动</span></router-link>
        </li>
        <li>
          <router-link to="/news/CIRI-News/recent-news"><span class="active">最新动态</span></router-link>
        </li>
        <li>
          <router-link to="/news/CIRI-News/investigation"><span class="active">海外考察</span></router-link>
        </li>
        <li>
          <router-link to="/news/CIRI-News/cooperation"><span class="active">合作签约</span></router-link>
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

<style type="text/scss" lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .gradient {
    background: -webkit-linear-gradient(left, rgba(56, 185, 253, 1), rgba(63, 132, 230, 0.65)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, rgba(56, 185, 253, 1), rgba(63, 132, 230, 0.65)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, rgba(56, 185, 253, 1), rgba(63, 132, 230, 0.65)); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, rgba(56, 185, 253, 1), rgba(63, 132, 230, 0.65)); /* 标准的语法 */
  }

  .tab {
    @include onepx('bottom');
    width: 100%;
    height: 35px;
    text-align: center;
    display: flex;
    flex-direction: row;
    li {
      flex: 1;
      line-height: 35px;
      a {
        display: block;
        font-size: 14px;
        color: #333;
        &.router-link-active .active {
          display: inline-block;
          width:70px;
          height:25px;
          line-height: 25px;
          border-radius: 3px;
          background: #3f83e6;
          color:#fff;
        }
      }
    }
  }

  .scene {
    position: relative;
    height: 186px;
    width: 100%;
    background: url('https://pic.36krcnd.com/201803/27015727/6krovf1y678bw4cm!heading') no-repeat;
    .coverage {
      height: 55px;
      width: 100%;
      background: rgba(51,51,51,0.5);
      position: absolute;
      bottom:0;
      .title-box {
        font-size: 10px;
        color: #fff;
        height: 10px;
        padding: 10px 10px 15px;
        .column {
          color: #fff;
        }
        .view {
          i {
            display: block;
            float: left;
            width: 12px;
            height: 12px;
            margin: -2px 5px 0;
            @include bg-image('../img/view_white');
            background-size: 12px auto;
            vertical-align: top;
          }
        }

      }
      .title {
        color: #fff;
        text-align: left;
        font-size: 14px;
        display: block;
        margin-top: 8px;
        font-weight: bold;
        padding: 0 10px;
        height:14px;
        line-height: 14px;
        overflow: hidden;
      }
      .summary {
        color: #fff;
        margin-top: 6px;
        display: block;
        text-align: left;
        margin-bottom: 10px;
      }
    }
  }

</style>
