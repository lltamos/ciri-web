<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="news-main">
    <!--<div class="project1">-->
      <!--<div class="img">-->
        <!--<img src="../img/slider1.jpg" alt="">-->
      <!--</div>-->
      <!--<h2>2016年1-4月我国对外投资分析2016年1-4月我国对外投资分析2016年1-4月我国对外投资分析月我国对外投资分析2016年1-4月我国对外投资分析</h2>-->
      <!--<div class="title-box">-->
        <!--<div class="fl">-->
          <!--<span class="column">项目情报</span> | <span class="time">2018年1月1日</span>-->
          <!--<span class="author">CIRI</span>-->
        <!--</div>-->

        <!--<div class="view fr">-->
          <!--<i class="icon-view"></i><span class="count">336</span>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="project" v-for="(article,index) in articles">
      <div v-show="index%2===0" class="project2">
        <div class="fl main-news">
          <h2>{{article.title}}</h2>
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
        <div class="fr">
          <div class="img">
            <img v-bind:src="host+article.thumbnail"/>
          </div>
        </div>
      </div>
      <div v-show="index%2!==0" class="project1">
        <div class="img">
          <img src="../img/slider1.jpg" alt="">
        </div>
        <h2>2016年1-4月我国对外投资分析2016年1-4月我国对外投资分析2016年1-4月我国对外投资分析月我国对外投资分析2016年1-4月我国对外投资分析</h2>
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
    <div class="more">
      <span>查看更多</span><i></i>
    </div>


  </div>
</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import TabBar from '@/components/base/tab-bar/tab-bar'
  import BottomImg from '@/components/base/bottomImg/bottomImg'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import tool from "../../../api/tool"

  export default {
    data() {
      return {
        articles: this.articles,
        host:tool.oos()
      }
    },
    method:{
      jointStr(str){
        return tool.oos()+src;
      }
    },
    created() {
      let param = tool.buildForm([{key: 'page', v: 1}, {key: 'rouCount', v: 10}, {key: 'cid', v: 1009}]);
      this.axios.post(tool.domind() + '/gateway/app/news/article/getArticles', param).then(res => {
        console.log(res);
        if (res.data.code === 200) {
          this.articles = res.data.data;
        }
      })
    },


  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/reset.scss';

  .news-main {
    text-align: left;

  h2 {
    font-size: 14px;
    color: #333;
    height: 40px;
    line-height: 20px;
    overflow: hidden;
    margin: 10px;;

  }

  .title-box {
    font-size: 10px;
    color: #666;
    height: 10px;
    padding: 10px 10px 15px;

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
  @include bg-image('../img/view');
    background-size: 12px auto;
  }

  }

  }
  .project1 {

  .img {
    width: 100%;
    height: 186px;

  img {
    width: 100%;
    height: 100%;
  }

  }
  .title-box {
  @include onepx('bottom');
  }

  }
  .project2 {
    overflow: hidden;
    clear: both;
    padding: 0 10px;
  @include onepx('bottom');

  h2 {
    padding: 0;
    margin: 12px 0 7px;
  }

  .main-news {
    width: 235px;
    margin-right: 10px;
  }

  .title-box {
    padding-left: 0;
  }

  .img {
    width: 110px;
    height: 71px;
    border-radius: 3px;
    margin: 14px 0;

  img {
    width: 100%;
    height: 100%;
  }

  }
  }
  .more {
    font-size: 12px;
    color: #3f80e9;
    margin-top: 20px;
    margin-bottom: 65px;
    text-align: center;

  i {
    display: inline-block;
    width: 12px;
    height: 12px;
  @include bg-image('../img/more');
    background-size: 12px auto;
    margin-left: 6px;
  }

  }

  }

</style>
