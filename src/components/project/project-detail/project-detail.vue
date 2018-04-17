<template>
  <div class="project-detail">
    <projectHeader></projectHeader>
    <div class="project-intro">
      <h4>
        <i class="left-line"></i><span>项目简介</span>
      </h4>
      <p class="document-txt">
        建设地点位于俄罗斯克拉斯诺达尔洲，索契冬奥会举办地，
        投资建设528MW风力发电项目，建设地点位于俄罗斯克拉斯诺达尔洲，索契冬奥会举办地，投资建设528MW风力发电项目
      </p>
      <div class="progress-model">
        <svgIcon></svgIcon>
      </div>
      <div class="thumbs-up">
        <i class="icon-dianzan"></i>
        <span class="count-warp">看好</span>
        <span class="count">(2)</span>
      </div>
      <CrossLine></CrossLine>
      <!--关注项目动态-->
      <div class="pro-focus">
        <!-- swiper -->
        <swiper :options="swiperOption" class="slider">
          <swiper-slide>
            <div class="img">
              <img src="../../index/img/javi.png" alt=""/>
            </div>
            <span>132......450</span>
          </swiper-slide>
          <swiper-slide>
            <div class="img">
              <img src="../../index/img/javi.png" alt=""/>
            </div>
            <span>132......450</span>
          </swiper-slide>
          <swiper-slide>
            <div class="img">
              <img src="../../news/img/p_1.jpg" alt=""/>
            </div>
            <span>132......450</span>
          </swiper-slide>
          <swiper-slide>
            <div class="img">
              <img src="../../index/img/javi.png" alt=""/>
            </div>
            <span>132......450</span>
          </swiper-slide>
          <swiper-slide>
            <div class="img">
              <img src="../../index/img/javi.png" alt=""/>
            </div>
            <span>132......450</span>
          </swiper-slide>
          <swiper-slide>
            <div class="img">
              <img src="../../news/img/p_1.jpg" alt=""/>
            </div>
            <span>132......450</span>
          </swiper-slide>
        </swiper>
        <div class="title-focus clearfix">
          <p class="intro fl">关注项目动态后，您将通过站内信和电子邮件获取该项目的最新动态信息，实时跟进项目进展！</p>
          <div class="state-focus fr">
            <i class="icon-focus"></i>
            <span>20人已关注</span>
          </div>
        </div>
      </div>
      <CrossLine></CrossLine>
    </div>

    <!--项目tab-->
    <div class="tab-warp">
      <ul class="project-tab">
        <router-link tag="li" to="/project/project-detail/project-evaluation">项目评估</router-link>
        <router-link tag="li" to="/project/project-detail/project-progress">项目进展</router-link>
        <router-link tag="li" to="/project/project-detail/project-answering">项目答疑</router-link>
        <router-link tag="li" to="/project/project-detail/investment-intent">投资意向</router-link>
      </ul>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>


    <!--项目推荐-->
    <div class="project-rec">
      <h4>
        <i class="left-line"></i><span>项目推荐</span>
        <router-link to="" class="detail-warp">
          <span class="to-detail">查看更多</span>
          <i class="more"></i>
        </router-link>
      </h4>
      <ul class="recommdnd-warp clearfix">
        <li class="recommdnd-card">
         <div class="img">
           <img src="../../news/img/p_1.jpg" alt="">
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
            <img src="../../news/img/p_1.jpg" alt="">
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
            <img src="../../news/img/p_1.jpg" alt="">
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
            <img src="../../news/img/p_1.jpg" alt="">
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

    </div>
    <!--客户经理-->
    <project-manager></project-manager>
    <project-bottom></project-bottom>
  </div>
</template>

<script>
  import projectHeader from '@/components/base/project-header/project-header'
  import projectBottom from '@/components/base/project-bottom/project-bottom'
  import projectManager from '@/components/base/project-manager/project-manager'
  import svgIcon from '@/components/base/svg-icon/svg-icon'
  import CrossLine from '@/components/base/cross-line/cross-line'
  export default {
    components: {
      projectHeader,
      projectBottom,
      projectManager,
      svgIcon,
      CrossLine
    },
    data() {
      return {
        // 关注项目动态左右滑动
        swiperOption: {
          slidesPerView: 4.5,
          spaceBetween: 25,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/mixin.scss";
  @import "~@/assets/scss/reset.scss";
  .project-detail{
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
      .detail-warp{
        position: absolute;
        right:0;
        top:0;
        height:40px;
        line-height: 1;
        .to-detail{
          display: inline-block;
          font-size: 13px;
          color:#528de8;

        }
        .more {
          display: inline-block;
          width: 10px;
          height: 40px;
          background-repeat: no-repeat;
          background-size: 10px auto;
          background-position: center;
          @include bg-image("../img/to-detail");
          vertical-align: middle;
        }
      }
    }
    .project-intro{
      text-align: left;
      .document-txt{
        padding: 10px;
        font-size:13px;
        color:#333;
        line-height: 20px;
      }
      .thumbs-up{
        display: table;
        margin:-5px auto 25px;
        background: #4285f4;
        color:#fefeff;
        font-size: 11px;
        height:23px;
        padding:5px 10px;
        line-height: 1;
        border-radius: 2px;
        .icon-dianzan{
          display: inline-block;
          width: 9px;
          height: 23px;
          margin-right: 5px;
          background-repeat: no-repeat;
          background-size: 9px auto;
          background-position: center;
          @include bg-image("../img/icon-dianzan");
          vertical-align: bottom;
        }
        .count-warp{
          display: inline-block;
          height: 23px;
          line-height: 23px;
        }
        .count{
          font-size: 7px;
          margin-left: 5px;
        }
      }
      .pro-focus{
        padding: 0 10px;
        .slider{
          border-bottom: 1px dashed #dedede;
          padding: 15px 0 10px;
          margin-bottom: 10px;
          .img{
            width: 45px;
            height:45px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0px auto 7px;
            img{
              width: 100%;
              height:100%;
            }
          }
          span{
            font-size: 12px;
            color:#333;
            display: block;
            text-align: center;
          }
        }
        .title-focus{
          font-size: 12px;
          color:#333;
          text-align: center;
          margin-bottom: 10px;
          .intro{
            line-height: 18px;
            width: 74%;
            @include right-bar(-20px,33px);
            margin-right: 0;
            &:after{
              top:2px;
              margin: 0 10px;
            }
          }
          .state-focus{
            width: 22%;
            i{
              display: block;
              width: 15px;
              height: 15px;
              margin:0 auto 5px;
              background-repeat: no-repeat;
              background-size: 15px auto;
              background-position: center;
              @include bg-image("../img/focus");
            }
            span{
              display: block;

            }
          }
        }
      }

    }
    .tab-warp{
      @include onepx('bottom');
      .project-tab{
        height: 45px;
        text-align: center;
        margin: auto;
        display: table;
        li{
          float: left;
          line-height: 45px;
          font-size: 15px;
          color:#333;
          margin-right: 18px;
          &:last-child{
            margin-right: 0;
          }
        }
        li.router-link-active{
          border-bottom: 2px solid #333;
        }
      }
    }
    .project-rec{
      background: #f5f5f5;
      h4{
        background: #fff;
        &:after{
          border-top: none;
        }
      }
      .recommdnd-warp{
        text-align: left;
        .recommdnd-card{
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
                @include bg-image("../../base/img/industry");
              }
              .view{
                @include bg-image("../../base/img/view");
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
  }

</style>
