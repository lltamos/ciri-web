<!-- news -->

<template>
  <div class="news">
    <router-link :to="{path:'/news/news-detail/',query: {id: topArticle.id}}">
      <div v-if="topArticle!=null" class="scene" :style="{background:'url('+baseImg+topArticle.thumbnail+')'}">
        <p class="coverage">
          <span class="title">{{topArticle.title}}</span>
          <span class="summary">{{topArticle.summary}}</span>
        </p>
      </div>
    </router-link>
    <tab-bar></tab-bar>
    <div class="main">
      <ul class="tab">
        <li>
          <router-link to="/news/CIRI-News/Activities">最新活动</router-link>
        </li>
        <li>
          <router-link to="/news/CIRI-News/recent-news">最新动态</router-link>
        </li>
        <li>
          <router-link to="/news/CIRI-News/investigation">海外考察</router-link>
        </li>
        <li>
          <router-link to="/news/CIRI-News/cooperation">合作签约</router-link>
        </li>
      </ul>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import TabBar from "@/components/base/tab-bar/tab-bar";
  import CrossLine from "@/components/base/cross-line/cross-line";
  import tool from "@/api/tool";

  export default {
    components: {
      TabBar,
      CrossLine
    },
    data() {
      return {
        host: tool.oos(),
        topArticle: null,
        baseImg: "http://ciri-test.oss-cn-beijing.aliyuncs.com/"
      };
    },
    props: {},
    watch: {},
    methods: {},
    filters: {},
    computed: {},
    mounted() {
      let param = tool.buildForm([
        {key: "page", v: 1},
        {key: "rouCount", v: 1},
        {key: "cid", v: 1004},
        {
          key: "level",
          v: 2002
        }
      ]);
      this.axios
        .post(tool.domind() + "/gateway/app/news/article/getLevelActive", param)
        .then(res => {
          if (res.data.code === 200) {
            this.topArticle = res.data.data[0];
          }
        });
    },

    destroyed() {
    }
  };
</script>

<style type="text/scss" lang="scss" scoped>
  @import "~@/assets/scss/const.scss";
  @import "~@/assets/scss/mixin.scss";

  .gradient {
    background: -webkit-linear-gradient(
        left,
        rgba(56, 185, 253, 1),
        rgba(63, 132, 230, 0.65)
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(
        right,
        rgba(56, 185, 253, 1),
        rgba(63, 132, 230, 0.65)
    ); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(
        right,
        rgba(56, 185, 253, 1),
        rgba(63, 132, 230, 0.65)
    ); /* Firefox 3.6 - 15 */
    background: linear-gradient(
        to right,
        rgba(56, 185, 253, 1),
        rgba(63, 132, 230, 0.65)
    ); /* 标准的语法 */
  }

  .tab {
    @include onepx("bottom");
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
        &.router-link-active {
          color: #3f83e6;
          border-bottom: 2px solid #3f83e6;
        }
      }
    }
  }

  .scene {
    position: relative;
    height: 186px;
    width: 100%;
    .coverage {
      height: 55px;
      width: 100%;
      background: #333 no-repeat;
      opacity: 0.5;
      position: absolute;
      bottom: 0;
      .title {
        color: #fff;
        text-align: left;
        display: block;
        margin-top: 8px;
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
