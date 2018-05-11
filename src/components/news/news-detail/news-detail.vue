<template>
  <div class="news-detail">
    <div class="header-bar">
      <i class="icon-back" @click="back"></i>
      <h1>资讯详情</h1>
    </div>
    <div class="main">
      <h2>{{this.content.title}}</h2>
      <div class="title-box">
        <div class="fl">
          <span class="column">项目情报</span> | <span class="time">2018年1月1日</span>
          <span class="author">CIRI</span>
        </div>

        <div class="view fr">
          <i class="icon-view"></i><span class="count">{{this.content.clickCount}}</span>
        </div>
      </div>
      <div class="section" v-html="this.content.content"></div>
    </div>
  </div>
</template>

<script>
  import HeaderBar from "@/components/base/header-bar/header-bar";
  import BottomImg from "@/components/base/bottomImg/bottomImg";
  import CrossLine from "@/components/base/cross-line/cross-line";
  import tool from "../../../api/tool";

  export default {
    name: "news-deail",
    components: {
      HeaderBar,
      BottomImg,
      CrossLine
    },
    data() {
      return {
        content: ""
      };
    },
    methods: {
      back() {
        window.history.back()
      },
      //页面滚动时
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let searchWarp = document.getElementById('search-warp');
        this.searchBarFixed = scrollTop > 350;
        let opcaity = (scrollTop / 350 > 1) ? 1 : scrollTop / 350;
        if (searchWarp != null) {
          searchWarp.style.background = 'rgba(82,141,232,' + opcaity + ')';
        }
      },
    },
    props: {},
    created() {
      //页面滚动时
      window.addEventListener('scroll', this.handleScroll);
      this.axios
        .get(tool.domind() + "/gateway/app/news/article/" + this.$route.query.id)
        .then(res => {
          if (res.data.code === 200) {
            this.content = res.data.data;
          }
        });
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);

    },
    mounted() {
    }
  };
</script>

<style type="text/scss" lang="scss">
  @import "~@/assets/scss/mixin.scss";
  @import "~@/assets/scss/reset.scss";

  .news-detail {

    .header-bar {
      height: 44px;
      line-height: 44px;
      color: #fff;
      font-size: 14px;
      text-align: center;
      position: relative;
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
      );

      /* 标准的语法 */
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
        @include bg-image("../img/back");
        background-size: 22px auto;
      }

    }
    .main {
      padding-top: 7px;
      text-align: left;

      h2 {
        font-size: 15px;
        color: #333;
        line-height: 20px;
        overflow: hidden;
        padding:0 10px;
        border-left:2px solid #3f83e6 ;
      }

      .title-box {
        font-size: 10px;
        color: #666;
        height: 10px;
        padding: 10px 10px 15px;
        margin-bottom: 10px;
        @include onepx("bottom");

        .column {
          color: #3f83e6;
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
        font-size: 16px;
        p{
          font-size: 14px;
          color: #333;
          line-height: 18px;
          margin: 10px 0;
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
