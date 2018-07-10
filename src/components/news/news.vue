<!-- news -->

<template>
  <div class="news bg-blank">
    <div class="header">资讯</div>
    <div class="main">
      <!-- 轮播图 -->
      <div class="slider" id="slider1">
        <mt-swipe :auto="4000" @change="handleChange" :prevent="false">
          <mt-swipe-item v-for="item in swipeObj" :key="item.id">
            <router-link   :to="{path:'/news/news-detail/',query: {id: item.id}}" style="background: rgba(51,51,51,.5)">
              <img v-lazy="host+item.iconUrl">

              <div class="bg-slider">
                <p id="slider2">{{item.title}} </p>
              </div>
            </router-link>
          </mt-swipe-item>
        </mt-swipe>
      </div>

      <!--分类导航-->
      <div class="nav">
        <div class="sort-nav clearfix">
          <div class="left-warp fl">
            <p class="nav-title">国际</p>
            <div class="nav-img" @click="toNewsList(1);">
              <img src="./img/international.png"/>
            </div>
          </div>
          <div class="right-warp fr">
            <p class="nav-title">知识</p>
            <div class="nav-img" @click="toNewsList(2);">
              <img src="./img/knowledge.png"/>
            </div>
          </div>
        </div>
        <cross-line></cross-line>

        <div class="sort-nav clearfix">
          <div class="left-warp fl">
            <p class="nav-title">e点新能源</p>
            <div class="nav-img energy-img" @click="toNewsList(3);">
              <img src="./img/energy.png"/>
            </div>
          </div>
          <div class="right-warp fr">
            <p class="nav-title">投融资</p>
            <div class="nav-img invest" @click="toNewsList(4);">
              <img src="./img/invest.png"/>
            </div>

            <p class="nav-title">CIRI动态</p>
            <div class="nav-img" @click="toNewsList(5);">
              <img src="./img/dynamic.png"/>
            </div>
          </div>
        </div>
        <cross-line></cross-line>
      </div>

      <!--资讯列表-->
      <div class="project" v-for="(article,index) in articles" :key="index">
        <router-link :to="{path:'/news/news-detail/',query: {id: article.id}}">
          <div  v-if="(index+1)%5!==0" class="project2">
            <div class="fl img-warp">
              <div class="img">
                <img v-lazy="host+article.iconUrl"/>
              </div>
            </div>
            <div class="fr main-news">
              <h2>{{article.title}}</h2>
              <div class="title-box">
                <div>
                  <i class="news-time"></i>
                  <span class="time-span">{{article.updateTime|time}}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-if="(index+1)%5===0" class="project1">
            <div class="img">
              <img v-lazy="host+article.iconUrl" alt=""/>
            </div>
            <h2>{{article.title}}</h2>
            <div class="title-box">
              <div class="fl">
                <i class="news-time"></i>
                <span class="time-span">{{article.updateTime|time}}</span>
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

    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/base/tab-bar/tab-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import tool from "@/api/tool";
  import moment from 'moment'

  export default {
    components: {
      TabBar,
      CrossLine
    },
    data() {
      return {
        host: tool.oos(),
        swipeObj: [],
        page: 1,
        articles: null,
        moreText: '查看更多',
        isIcon: true,
        weekTotal:0,//投融资总数据
        translate: null
      };
    },
    computed: {
    },
    watch: {
    },
    methods: {
      handleChange(index) {},
      loadMore() {
        if(!this.isIcon){
          return
        }
        let param = tool.buildForm([
          { key: "current", v: this.page },
          { key: "size", v: 10 },
          { key: "articleCid", v: '' }
        ]);
        this.axios
          .post(tool.domind() + "/gateway/app/article/getActicleListInfoByCategory", param)
          .then(res => {
            if (res.data.code === 200) {
              if (this.page === 1 || this.articles == null) {
                this.articles = res.data.data.records;
              } else {
                this.articles = this.articles.concat(res.data.data.records);
              }
              if(this.articles.length < res.data.data.total){
                this.moreText='查看更多'
              }else{
                this.moreText='没有更多了';
                this.isIcon = false;
              }
            }
            this.page = this.page + 1;
          });
      },
      //列表页
      toNewsList(id){
        this.$router.push({path:'/news/news-list',query: {cid: id}});
      },
    },
    mounted() {
      this.axios
        .get(tool.domind() + "/gateway/app/article/getTopTitleList?number="+ '4')
        .then(res => {
          if (res.data.code === 200) {
            this.swipeObj = res.data.data;
          }
        });
      this.loadMore();
    },
    activated() {},
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

  .header{
    height:44px;
    line-height: 44px;
    color:#333333;
    font-size: 20px;
    text-align: center;
    position: relative;
  }
  .main {
    text-align: left;
    .slider {
      touch-action: none;
      height: 186px;
      font-size: 30px;
      text-align: center;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
      #slider2 {
        font-size: 15px;
        color: #fff;
        height: 35px;
        line-height: 35px;
        padding-left: 10px;
        text-align: left;
        width: 260px;
        text-overflow:ellipsis;
        white-space : nowrap;
        overflow : hidden;
        z-index: 11;
      }
    }
    #slider1 {
      position: relative;
      .mint-swipe-indicators {
        right: 10px;
      }
      .bg-slider{
        background: rgba(0,0,0,.7);
        position:absolute;
        bottom: 0;
        left: 0;
        width:100%;
        height:35px;
        z-index: 10;
      }
    }
    #slider3 {
      padding-top: 17px;
      padding-bottom: 13px;
      .swiper-slide{width:110px; margin: 0 10px !important;}
      .invest-finance {
        width: 110px;
        height: 55px;
        padding-top: 20px;
        @include bg-image("./img/slider-bg");
        background-size: 110px auto;
        text-align: center;
        box-shadow: 0px 3px 7px #eee;
        h3 {
          font-size: 14px;
          color: #666;
          height: 35px;
          line-height: 35px;
          overflow: hidden;
        }
        .time {
          font-size: 11px;
          color: #3f83e6;
          height: 20px;
          line-height: 20px;
          overflow: hidden;
        }
      }
    }
    .cross-line {
      width: 100%;
      height: 10px;
      background-color: #f5f5f5;
    }
    .project {
      h2 {
        font-size: 15px;
        color: #333;
        height: 40px;
        line-height: 22px;
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
          @include bg-image("./img/news-time");
          background-size: 12px auto;
          background-repeat: no-repeat;
          background-position: center center;
        }
        .time-span{
          padding-left: 2px;
        }

      }
      .project1 {
        margin-top: 14px;
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
            }
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
        @include bg-image("./img/more");
        background-size: 12px auto;
        margin-left: 6px;
      }
    }
    .blank{
      height:75px;
    }

    .nav{
      color: #333333;
      .nav-title{
        font-size: 15px;
        font-weight: 600;
        width: 100%;
      }
      .sort-nav{
        padding: 20px 0;
        .left-warp{
          width: 45.3%;
          margin-left: 2.7%;
          margin-right: 4%;

        }
        .right-warp{
          width: 45.3%;
          margin-right: 2.7%;
        }
        p{
          padding-bottom: 10px;
        }
        .nav-img{
          width: 100%;

          img{
            width: 100%;
            height: 65px;
          }
        }
        .invest{
          padding-bottom: 10px;
        }
        .energy-img{
          text-align: center;
          width: 100%;
          img{
            width: 78.2%;
            height: 172px;
          }
        }


      }

    }
  }


</style>
