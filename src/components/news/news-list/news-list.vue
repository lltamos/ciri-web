<template>
  <div class="news-list">
    <div class="header-bar">
      <i class="icon-back" @click="back"></i>
      <h1>{{handleTitle()}}</h1>
    </div>

    <div class="news-main">
      <div v-if="articles!==null" class="project" v-for="(article,index) in articles" :key="article.id">
        <router-link :to="{path:'/news/news-detail/',query: {id: article.id}}">
          <div  v-if="(index+1)%5!==0" class="project2">
            <div class="fl img-warp">
              <div class="img">
                <img v-lazy="host+article.thumbnail"/>
              </div>
            </div>
            <div class="fr main-news">
              <h2>{{article.title}}</h2>
              <div class="title-box">
                <div>
                  <i class="news-time"></i>
                  <span class="time">{{article.updateTime|time}}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-if="(index+1)%5===0" class="project1">
            <div class="img">
              <img v-lazy="host+article.thumbnail"/>
            </div>
            <h2>{{article.title}}</h2>
            <div class="title-box">
              <div>
                <i class="news-time"></i>
                <span class="time">{{article.updateTime|time}}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="more">
        <span @click='loadMore' v-text="moreText">查看更多</span><i v-show="isIcon"></i>
      </div>
      <div class="blank"></div>

    </div>

  </div>

</template>

<script>
  import tool from "../../../api/tool";
  import moment from 'moment'

  export default {
    data() {
      return {
        articles: null,
        host: tool.oos(),
        page: 1,
        topArticle: null,
        isMore: false,
        moreText:'查看更多',
        isIcon: true,
        title: ''

      };
    },
    methods: {
      back() {
        window.history.back()
      },
      loadMore() {
        if(!this.isIcon){
          return
        }
        let param = tool.buildForm([
          { key: "page", v: this.page },
          { key: "rouCount", v: 10 },
          { key: "cid", v: this.$route.query.cid},
        ]);
        this.axios
          .post(tool.domind() + "/gateway/app/news/article/getLevelActive", param)
          .then(res => {
            if (res.data.code === 200) {
              if (this.page === 1 || this.articles == null) {
                this.articles = res.data.data;
              } else {
                this.articles = this.articles.concat(res.data.data);
              }
              if(this.articles.length != res.data.total){
                this.moreText='查看更多'
              }else{
                this.moreText='没有更多了'
                this.isIcon = false;
              }
            }
            this.page = this.page + 1;
          });
      },
      handleTitle(){
        //渲染title
        if(this.$route.query.cid == '1009'){
          return '国际';

        }else if(this.$route.query.cid == '1008'){
          return '知识';

        }else if(this.$route.query.cid == ''){
          return 'e点新能源';

        }else if(this.$route.query.cid == '1007'){
          return '投融资';

        }else if(this.$route.query.cid == '1004'){
          return 'CIRI动态';

        }
      }
    },
    mounted() {
      this.loadMore();
    },
    created(){},
    updated() {},
    filters: {
      time(time) {
        return moment(time).format("YYYY-MM-DD");
      }
    }
  };
</script>

<style type="text/scss" lang="scss" scoped>
  @import "~@/assets/scss/mixin.scss";
  @import "~@/assets/scss/reset.scss";
  @import "~@/assets/scss/const.scss";

  .header-bar {
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    text-align: center;
    position: relative;
    @include onepx('bottom');
    h1 {
      font-size: 20px;
    }
    .icon-back {
      display: block;
      position: absolute;
      left: 0;
      width: 22px;
      height: 22px;
      margin: 11px auto;
      @include bg-image("../../base/header-bar/icon-arrow_lift");
      background-size: 22px auto;
    }

  }

  .news-main {
    text-align: left;
    h2 {
      font-size: 15px;
      color: #333;
      height: 40px;
      line-height: 20px;
      overflow: hidden;
      margin: 10px;
    }
    .title-box {
      font-size: 11px;
      color: #666;
      height: 10px;
      padding: 5px 10px 15px;
      .column {
        color: #3f83e6;
      }
      .news-time{
        display: inline-block;
        width: 12px;
        height: 12px;
        @include bg-image("../img/news-time");
        background-size: 12px auto;
        background-repeat: no-repeat;
        background-position: center center;
      }
    }
    .project1 {
      h2{
        height: auto;
      }
      .title-box{
        padding: 0px 10px 20px;
      }
      .img {
        width: 100%;
        height: 186px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .title-box {
        @include onepx("bottom");
      }
    }
    .project2 {
      overflow: hidden;
      clear: both;
      @include onepx("bottom");
      h2 {
        padding: 0;
        margin: 12px 0 12px;
      }
      .main-news {
        width: 62.6%;
        margin-right: 2.7%;
      }
      .title-box {
        padding-left: 0;
        padding-right: 0;
      }
      .img-warp {
        width: 29.3%;
        margin-right: 2.7%;
        margin-left: 2.7%;
        .img {
          width: 100%;
          height: 71px;
          border-radius: 3px;
          margin: 14px 0;
          img {
            width: 100%;
            height: 100%;
            border-radius: 3px;
          }
        }
      }
    }
    .more {
      font-size: 12px;
      color: #3f80e9;
      margin-top: 20px;
      text-align: center;
      i {
        display: inline-block;
        width: 12px;
        height: 12px;
        @include bg-image("../img/more");
        background-size: 12px auto;
        margin-left: 6px;
      }
    }
    .blank{
      height:25px;
    }
  }


</style>
