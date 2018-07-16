<template>
  <div class="news-detail">
    <div class="header-bar">
      <i class="icon-back" @click="back"></i>
      <h1 v-show="headerFixed">{{content.title != null&&content.title.length >10 ?content.title.substr(0,10):content.title}}</h1>
    </div>
    <div class="main">
      <h2>{{content.title}}</h2>
      <div class="title-box">
        <div class="fl">
          <span class="column">{{content.categoryName}}</span> | <span class="time">{{content.updateTime|time}}</span>
          <span class="author">{{content.publisher}}</span>
        </div>

        <div class="view fr">
          <i class="icon-view"></i><span class="count">{{content.reads}}</span>
        </div>
      </div>
      <div class="section" v-html="contentHtml"></div>
    </div>
  </div>
</template>

<script>
  import HeaderBar from "@/components/base/header-bar/header-bar";
  import CrossLine from "@/components/base/cross-line/cross-line";
  import tool from "../../../api/tool";

  export default {
    name: "news-deail",
    components: {
      HeaderBar,
      CrossLine
    },
    data() {
      return {
        content: "",
        contentHtml: "",
        headerFixed: false
      };
    },
    methods: {
      back() {
        window.history.back()
      },
      //页面滚动时
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.headerFixed = scrollTop >44;
      },
    },
    props: {},
    created() {
      //页面滚动时
      window.addEventListener('scroll', this.handleScroll);
      this.axios
        .get(tool.domind() + "/gateway/app/article/getActicleAllInfo?articleId="+ this.$route.query.id)
        .then(res => {
          if (res.data.code === 200) {
            this.content = res.data.data.articleBasic;
            this.contentHtml = res.data.data.content;

          }
        });
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);

    },
    mounted() {

    },
    filters: {
      time(time) {
        return moment(time).format("YYYY-MM-DD");
      }
    }
  };
</script>

<style type="text/scss" lang="scss">
  @import "~@/assets/scss/mixin.scss";
  @import "~@/assets/scss/reset.scss";

  .news-detail {
    .header-bar {
      @include onepx('bottom');
      background-color: #ffffff;
      position: fixed;
      top:0;
      left: 0;
      right:0;
      z-index: 999;
      height: 44px;
      line-height: 44px;
      color: #fff;
      font-size: 14px;
      text-align: center;
      /* 标准的语法 */
      h1 {
        color: #333333;
        font-size: 18px;
        text-align: center;
      }

      .icon-back {
        position: absolute;
        left: 0;
        width: 22px;
        height: 22px;
        margin: 11px auto;
        @include bg-image("../../base/header-bar/icon-arrow_lift");
        background-size: 22px auto;
      }

    }
    .main {
      padding-top: 7px;
      text-align: left;
      margin-top: 44px;

      h2 {
        font-size: 17px;
        font-weight: 600;
        color: #333;
        line-height: 24px;
        overflow: hidden;
        padding:0 10px;
        border-left:2px solid #3f83e6 ;
      }

      .title-box {
        font-size: 13px;
        color: #999;
        height: 10px;
        padding: 10px 10px 15px;
        margin-bottom: 10px;
        @include onepx("bottom");

        .column {
          color: #528de8;
        }

        .time {
        }

        .view {

          i {
            display: block;
            float: left;
            width: 12px;
            height: 12px;
            margin: 3px 5px;
            @include bg-image("../img/view");
            background-size: 12px auto;
            vertical-align: middle;
          }

          .count {
            display: inline-block;
            height: 18px;
            line-height: 18px;
            margin-top: 1px;
          }

        }
      }
      .img {
        width: 100%;
      }

      .section {
        padding: 0 10px;
        font-size: 14px;
        color: #444;
        line-height: 24px;
        p{
          font-size: 14px;
          color: #444;
          line-height: 24px;
          margin: 10px 0;
          strong{
            font-size: 14px;
            line-height: 24px;
            color: #444;
          }
          img{
            margin-bottom: 10px;
          }
        }

        div{
          font-size: 14px;
          line-height: 18px;
          color: #000;
          font-weight: bold;
        }
        img {
          height: auto;
          margin: auto;
          display: table;

          @media screen and (min-device-width: 414px) and (max-width: 799px) {
            width: 380px;
          }

          @media screen and (min-device-width: 375px) and (max-width: 413px) {
            width: 340px;
          }

          @media screen and (min-width: 320px) and (max-width: 374px) {
            width: 280px;
          }

        }
        .conimg-intro {
          text-align: center;
          font-weight: bold;
          margin-top: 20px;
        }

      }
    }
  }
</style>
