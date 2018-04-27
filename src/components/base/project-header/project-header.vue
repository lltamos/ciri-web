<template>
<div class="project-header">
  <div class="header-bar gradient">
    <i class="icon-back" @click="back"></i>
    <h1>看好项目 上源合网</h1>
    <i class="icon_search"></i>
  </div>
  <div class="project">
    <div class="img">
      <div class="icon-state">{{status}}</div> <img v-lazy="projPhoto"  alt="" width="100%" height="100%"> <i class="favorite icon-favorite"></i></div>
    <div class="main-news">
      <div class="title">
        <div class="icon-quality fl">{{cornerTag}}</div>
        <h2 class="fl">{{projName}}</h2></div>
      <div class="tip">
        <div v-if="tags != null" class="f1" v-for="(t, index) in tags" :key="index">
          <div class="fl red">{{t}}</div>
        </div>

        <div v-show="setProjVideo" class="video fl"></div>
      </div>
      <div class="tip-news">
        <i class="loc"></i>
        <span class="country">{{projAddress}}</span>
        <i class="indu"></i>
        <span class="industry">{{projType}}</span>
        <i class="mold"></i>
        <span class="genre">{{tag}}</span>
        <i class="view"></i>
        <span class="count">{{visit}}</span>

      </div>
    </div>
  </div>
  <CrossLine></CrossLine>
  <div class="progress">
    <div class="title">项目成熟度</div>
    <div v-bind:class="[parseInt(projMaturity) == 0 ? 'icon1' : '','icon']">规划</div>
    <div v-bind:class="[projMaturity >= 0 ? 'line1' : 'line','']"></div>
    <div v-bind:class="[projMaturity >= 1 ? 'icon1' : '','icon']">概念</div>
    <div v-bind:class="[projMaturity >= 1 ? 'line1' : 'line','line']"></div>
    <div v-bind:class="[projMaturity >= 2 ? 'icon1' : '','icon']">审批</div>
    <div v-bind:class="[projMaturity >= 2 ? 'line1' : 'line','']"></div>
    <div v-bind:class="[projMaturity >= 3 ? 'icon1' : '','icon']">可研</div>
    <div v-bind:class="[projMaturity >= 3 ? 'line1' : 'line','']"></div>
    <div v-bind:class="[projMaturity >= 4 ? 'icon1' : '','icon']">投融资</div>
    <div v-bind:class="[projMaturity >= 4 ? 'line1' : 'line','']"></div>
    <div v-bind:class="[projMaturity >= 5 ? 'icon1' : '','icon']">建设</div>
    <div v-bind:class="[projMaturity >= 5 ? 'line1' : 'line','']"></div>
    <div v-bind:class="[projMaturity >= 6 ? 'icon1' : '','icon']">运营</div>
    <div v-bind:class="[projMaturity >= 6 ? 'line1' : 'line','']"></div>
    <div v-bind:class="[projMaturity >= 7 ? 'icon1' : '','icon']">出售</div>
  </div>
  <CrossLine></CrossLine>
</div>
</template>

<script>
  import CrossLine from '@/components/base/cross-line/cross-line'
  export default {
    components: {
      CrossLine
    },
    props: {
      visit: String,
      projName: String,
      cornerTag: String,
      projType: String,
      tag: String,
      status: String,
      tags: Array,
      setProjVideo: Boolean,
      projPhoto: String,
      projAddress: String,
      projMaturity: Number
    },
    data() {
      return {
      };
    },
    methods: {
      back() {
        this.$router.replace({
          path: '/project'
        });
      }
    },
    created() {
    },
    mounted() {}
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/mixin.scss";
  @import "~@/assets/scss/reset.scss";
  .project-header{
    .icon1 {
      color: #3f83e6
    }
    .line1{
      height:1px;
      width:9px;
      background: #3f83e6;
      margin: 20px 1px 0;
    }
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
        font-weight: normal;
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
      .icon_search{
        display: block;
        height:22px;
        width:22px;
        @include bg-image('../img/search');
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
    .project {
      padding: 10px 10px 10px 129px;
      position: relative;
      .img {
        width: 110px;
        height: 71px;
        position: absolute;
        top: 10px;
        left: 10px;

        .icon-state {
          position: absolute;
          left: 5px;
          top: 5px;
          font-size: 9px;
          color: #fff;
          background: #27caa0;
          border-radius: 3px;
          padding: 1px 2px;
          text-align: center;
        }
      }
      .main-news {
        height:71px;
        position: relative;
        .title {
          overflow: hidden;

          .icon-quality {
            color: #fff;
            font-size: 10px;
            background: #fdb140;
            padding: 1px 3px;
            text-align: center;
            margin-right: 5px;
            border-radius: 3px;
          }

          h2 {
            font-size: 14px;
            color: #333;
            height: 19px;
            line-height: 19px;
          }

        }
        .tip {
          overflow: hidden;
          font-size: 9px;
          color: #333;
          margin: 5px 0;

          .red {
            height: 14px;
            width: 50px;
            line-height: 14px;
            font-size: 9px;
            margin-right: 5px;
            text-align: center;
            border: 1px solid #ff0000;
          }

          .yellow {
            height: 14px;
            width: 50px;
            line-height: 14px;
            margin-right: 5px;
            text-align: center;
            border: 1px solid #fdb140;

          }

          .video {
            width: 20px;
            height: 20px;
            background-repeat: no-repeat;
            @include bg-image("../img/video");
            background-size: 20px auto;
            background-position: center;
            margin-top: -3px;

          }

        }
        .tip-news{
          height:10px;
          position: absolute;
          bottom: 0;
          left: 0;
          i{
            display: block;
            float:left;
            margin-right: 6px;
            width:10px;
            height:10px;
            background-size: 10px auto;
          }
          .loc{
            @include bg-image("../img/location");
          }
          .indu{
            @include bg-image("../img/industry");
          }
          .mold{
            @include bg-image("../img/mold");
          }
          .view{
            @include bg-image("../img/view");
          }

          span{
            float: left;
            margin-right: 10px;
            font-size: 10px;
            line-height: 1;
            color:#666;
            margin-top: 1px;
          }
        }
      }
    }
    .progress{
      font-size: 12px;
      color:#333;
      height:40px;
      line-height: 1;
      padding: 0 10px;
      div{
        float: left;
        line-height: 40px;
      }
      .title{
        margin-right: 10px;
      }
      .icon.actice{
        color:#3f83e6;

      }
      .line{
        height:1px;
        width:9px;
        background: #dedede;
        margin: 20px 1px 0;
      }
    }
  }

</style>
