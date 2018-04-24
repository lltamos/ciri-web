<template>
  <div class="project-list">
    <!--<header>INDUSTRYC2C</header>-->
    <div class="banner" id="bannerScroll">
      <div class="img">
        <img src="../news/img/p_1.jpg" alt=""/>
      </div>
      <div class="search-warp" id="search-warp">
        <div class="search" :class="scrollSearch">
          <i class="icon-search"></i>
          <input type="text" placeholder="项目 投资人">
        </div>
      </div>
    </div>
    <!--本周推荐-->
    <div class="project-rec">
      <h4>
        <i class="left-line"></i><span>本周推荐</span>
      </h4>
      <ul class="recommdnd-warp clearfix">
        <li class="recommdnd-card">
          <div class="img">
            <img src="../news/img/p_1.jpg" alt="">
          </div>
          <div class="main-news">
            <h2>巴西卡坦杜瓦市 600MW 风电厂项目</h2>
            <div class="tip-news">
              <i class="indu fl"></i>
              <span class="industry fl">新能源</span>
              <span class="count fr">1000</span>
              <i class="view fr"></i>
            </div>
          </div>
        </li>
        <li class="recommdnd-card">
          <div class="img">
            <img src="../news/img/p_1.jpg" alt="">
          </div>
          <div class="main-news">
            <h2>巴西卡坦杜瓦市 600MW 风电厂项目</h2>
            <div class="tip-news">
              <i class="indu fl"></i>
              <span class="industry fl">新能源</span>
              <span class="count fr">1000</span>
              <i class="view fr"></i>
            </div>
          </div>
        </li>
      </ul>
      <CrossLine></CrossLine>
    </div>
    <div class="project">
      <h4>
        <i class="left-line"></i><span>全部项目</span>
      </h4>
      <div class="tab-warp">
        <ul class="tab" :class="searchBarFixed == true ? 'isFixed' :''">
          <Nationality text="国别" @countryShow="countryShow"></Nationality>
          <Nationality text="行业"></Nationality>
          <Nationality text="类型"></Nationality>
          <Nationality text="进度"></Nationality>
        </ul>
        <div class="pop-bg" v-show="popShow">
        </div>
      </div>
      <div class="main">
        <router-link to="/project/project-land">
          <div class="pro-list">
            <div class="img">
              <!--<div class="icon-state">认证中</div>-->
              <img src="../base/img/p_1.jpg" alt="" width="100%" height="100%">
              <i class="favorite icon-favorite"></i>
            </div>
            <div class="main-news">
              <div class="title">
                <div class="icon-quality fl">精品</div>
                <h2 class="fl">伊朗专业垃圾处理厂建设项目</h2></div>
              <div class="tip">
                <div class="f1">
                  <div class="fl red">高收益</div>
                </div>
                <div class="f1">
                  <div class="fl red">建设期短</div>
                </div>
                <div class="video fl"></div>
              </div>
              <div class="maturity clearfix">
                <p>项目成熟度：<em>可研阶段</em></p>
                <p>意向投资方：<em>3位</em></p>
              </div>
              <div class="tip-news">
                <i class="loc"></i>
                <span class="country">伊朗</span>
                <i class="indu"></i>
                <span class="industry">新能源</span>
                <i class="mold"></i>
                <span class="genre">绿地投资</span>
                <i class="view"></i>
                <span class="count">1000</span>
                <span class="thumb-up fr">2</span>
                <i class="icon-thumbup fr"></i>

              </div>
            </div>
          </div>
        </router-link>
        <div class="pro-list">
          <div class="img">
            <!--<div class="icon-state">认证中</div>-->
            <img src="../base/img/p_1.jpg" alt="" width="100%" height="100%">
            <i class="favorite icon-favorite"></i>
          </div>
          <div class="main-news">
            <div class="title">
              <div class="icon-quality fl">精品</div>
              <h2 class="fl">伊朗专业垃圾处理厂建设项目</h2></div>
            <div class="tip">
              <div class="f1">
                <div class="fl red">高收益</div>
              </div>
              <div class="f1">
                <div class="fl red">建设期短</div>
              </div>
              <div class="video fl"></div>
            </div>
            <div class="maturity clearfix">
              <p>项目成熟度：<em>可研阶段</em></p>
              <p>意向投资方：<em>3位</em></p>
            </div>
            <div class="tip-news">
              <i class="loc"></i>
              <span class="country">伊朗</span>
              <i class="indu"></i>
              <span class="industry">新能源</span>
              <i class="mold"></i>
              <span class="genre">绿地投资</span>
              <i class="view"></i>
              <span class="count">1000</span>
              <span class="thumb-up fr">2</span>
              <i class="icon-thumbup fr"></i>

            </div>
          </div>
        </div>
      </div>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/base/tab-bar/tab-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import Nationality from '@/components/base/nationality/nationality'
  import tool from "../../api/tool";
  export default {
    components: {
      TabBar,
      CrossLine,
      Nationality
    },
    data () {
      return {
        scrollSearch: 'fixed',
        searchBarFixed : false,
        popShow : false
      }
    },
    props: {},
    watch: {},
    methods: {
      //页面滚动时
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let searchWarp =document.getElementById('search-warp');
        if (scrollTop > 350) {
          this.searchBarFixed = true
        } else {
          this.searchBarFixed = false
        }

        var opcaity=(scrollTop/350>1)?1:scrollTop/350;
        searchWarp.style.background='rgba(82,141,232,'+opcaity+')';
      },
      countryShow(){
        this.searchBarFixed = true
        this.popShow = true;
      }

    },
    filters: {},
    computed: {},
    created () {
    },
    mounted () {
      //页面滚动时
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {}
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/reset.scss';
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

  .project-list{
    header {
      height: 44px;
      line-height: 44px;
      color: #fff;
      font-size: 20px;
      text-align: center;
      background: #528de8;
      position:fixed;
      top:0;
      z-index:999;
      width: 100%;
    }
    h4{
      text-align: left;
      overflow: hidden;
      line-height: 1;
      height: 16px;
      padding: 12px 10px 12px 15px;
      color: #333;
      font-size: 16px;
      font-weight: normal;
      @include onepx('bottom');
      .left-line{
        position: absolute;
        display: block;
        width: 3px;
        height: 15px;
        background-color: #528de8;
        left: 0;
        top:12px;
      }
    }
    .isFixed{
      position:fixed;
      top:0;
      z-index:999;
      width: 100%;
      box-sizing: border-box;
    }
    .banner{
      width:100%;
      height:150px;
      position: relative;
      .img{
        width: 100%;
        height:100%;
        img{
          width: 100%;
          height:100%;
        }
      }
      .search-warp{
        position:fixed;
        top:0;
        z-index:999;
        left: 0;
        right:0;
        padding: 10px 0;
      }
      .search{
        width:94.7%;
        height:30px;
        border-radius: 30px;
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
          @include bg-image('./img/icon-search');
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
    }
    .project-rec{
      h4{
        background: #fff;
        &:after{
          border-top: none;
        }
      }
      .recommdnd-warp{
        text-align: left;
        padding: 0 10px;
        .recommdnd-card{
          border: 1px solid #dedede;
          box-sizing: border-box;
          background: #fff;
          width: 48.7%;
          float: left;
          position: relative;
          margin-bottom: 10px;
          &:nth-of-type(odd){
            margin-right:2.6%;
          }
          .img{
            height:118px;
            width:100%;
            img{
              width:100%;
              height:100%
            }
          }
          .main-news{
            padding: 10px;
            h2 {
              font-size: 13px;
              color: #333;
              height: 32px;
              line-height: 16px;
              overflow: hidden;
              margin-bottom: 10px;
              font-weight: normal;
            }
            .tip-news{
              overflow: hidden;
              i{
                display: block;
                margin-right: 6px;
                width:10px;
                height:10px;
                background-size: 10px auto;
              }
              .indu{
                @include bg-image("../base/img/industry");
              }
              .view{
                @include bg-image("../base/img/view");
              }

              span{
                margin-right: 10px;
                font-size: 10px;
                line-height: 1;
                color:#666;
                margin-top: 1px;
              }
              span.count{
                margin-right: 0;
              }
            }
          }
        }
      }
    }
    .project{
      .tab-warp{
        height:35px;
        .tab{
          display: flex;
          flex-direction: row;
          height:35px;
          line-height: 35px;
          padding: 0 4.5%;
          background: #fff;
        }
        .tab.isFixed{
          position:fixed;
          background-color:#Fff;
          top:50px;
          z-index:999;
          width: 100%;
          box-sizing: border-box;
        }
        .pop-bg{
          z-index: 998;
          /*display: none;*/
        }
      }
      .main{
        min-height: 1000px;
        padding: 0 10px;
        .pro-list {
          padding: 15px 0 15px 96px;
          position: relative;
          height:76px;
          @include onepx('bottom');
          .img {
            width: 87px;
            height: 56px;
            position: absolute;
            top: 15px;
            left: 0;

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
            position: relative;
            height:76px;
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
                @include bg-image("../base/img/video");
                background-size: 20px auto;
                background-position: center;
                margin-top: -3px;

              }

            }
            .maturity{
              text-align: left;
              margin: 5px 0 10px;
              height:14px;
              line-height: 1;
              p{
                float: left;
                font-size: 11px;
                color:#666;
                &:first-child{
                  @include right-bar(-10px,14px);
                  margin-right: 20px;
                  &:after{
                    top:-2px;
                  }
                }
                em{
                  font-size: 12px;
                  color:#528de8;
                }
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
                @include bg-image("../base/img/location");
              }
              .indu{
                @include bg-image("../base/img/industry");
              }
              .mold{
                @include bg-image("../base/img/mold");
              }
              .view{
                @include bg-image("../base/img/view");
              }
              .icon-thumbup{
                @include bg-image("./img/thumbs-up");
                margin-right: 0;
                margin-top: -2px;
                &.active{
                  @include bg-image("./img/thumbs-uped");
                }
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
      }
    }
  }

</style>
