<template>
  <div>
    <div class="header-bar">
      <i class="icon-back" @click="back"></i>
      <h1>资讯详情</h1>
    </div>
    <cross-line></cross-line>
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
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import HeaderBar from "@/components/base/header-bar/header-bar";
import TabBar from "@/components/base/tab-bar/tab-bar";
import BottomImg from "@/components/base/bottomImg/bottomImg";
import CrossLine from "@/components/base/cross-line/cross-line";
import tool from "../../../api/tool";

export default {
  name: "news-deail",
  components: {
    HeaderBar,
    TabBar,
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
      this.$router.push({
        path: this.$router.go(-1)
      });
    }
  },
  props: {},
  created() {
    this.axios
      .get(tool.domind() + "/gateway/app/news/article/" + this.$route.query.id)
      .then(res => {
        console.log(res);
        if (res.data.code === 200) {
          this.content = res.data.data;
          console.log(res.data.content);
        }
      });
  },
  mounted() {}
};
</script>

<style type="text/scss" scope lang="scss">
@import "~@/assets/scss/mixin.scss";
@import "~@/assets/scss/reset.scss";

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
  ); /* 标准的语法 */
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
  padding: 0 10px;
  text-align: left;
  h2 {
    font-size: 14px;
    color: #333;
    height: 40px;
    line-height: 20px;
    overflow: hidden;
  }
  .title-box {
    font-size: 10px;
    color: #666;
    height: 10px;
    padding: 10px 0 15px;
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
      }
    }
  }
  .img {
    width: 100%;
  }
  .section {
    font-size: 12px;
    color: #333;
    line-height: 15px;
    margin: 10px 0;
  }
}
</style>
