<template>
<div class="introduction">
  <h4>
    <i class="left-line"></i><span>项目简介</span>
  </h4>
  <div class="company-msg">
    <table width="100%" border="1" cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td>项目名称</td>
          <td>{{projName}}</td>
        </tr>
        <tr>
          <td align="center">项目类型</td>
          <td>{{constructionType}}</td>
        </tr>
        <tr>
          <td align="center">所属行业</td>
          <td>{{industry}}</td>
        </tr>
        <tr>
          <td align="center">项目位置</td>
          <td>{{projAddress}}</td>
        </tr>
        <tr>
          <td>所在区域</td>
          <td>{{projArea}}</td>
        </tr>
        <tr>
          <td align="center">项目规模</td>
          <td>{{amount}}</td>
        </tr>
        <tr>
          <td align="center">投资方式</td>
          <td>{{investMode}}</td>
        </tr>
        <tr>
          <td align="center">投资收益率</td>
          <td>{{irr}}%</td>
        </tr>
        <tr>
          <td align="center">项目开发商</td>
          <td>{{projDevelopers.length>7?projDevelopers.substring(0,4)+'***'+projDevelopers.substring(projDevelopers.length-2,projDevelopers.length):projDevelopers}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <CrossLine></CrossLine>
  <h4>
    <i class="left-line"></i><span>项目进度</span>
  </h4>
  <div class="intro-progress">
    <table width="100%" cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td>1.项目现场勘查 <i class="progress-finished"></i> </td>
          <td>5.完成项目投资签约<i class="progress-unfinished"></i></td>
        </tr>
        <tr>
          <td>2.项目可研报告 <i class="progress-finished"></i> </td>
          <td>6.完成项目融资流程<i class="progress-unfinished"></i></td>
        </tr>
        <tr>
          <td>3.项目土地批复 <i class="progress-finished"></i> </td>
          <td>7.完成项目承建签约<i class="progress-unfinished"></i></td>
        </tr>
        <tr>
          <td>4.项目各项许可 <i class="progress-finished"></i> </td>
          <td>8.完成项目建设<i class="progress-unfinished"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
  <CrossLine></CrossLine>
  <div class="intro-video">
    <h4>
      <i class="left-line"></i><span>项目视频</span>
    </h4>
    <div class="video-warp">
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide class="slide-1">
          <video @click="video($event)" controls src="http://ciri-video.oss-cn-beijing.aliyuncs.com/output/1de147adf8274f8ba513bccaffe1af6c/PT-IR-202-CW4-XMJS-PUB.mp4"></video>
        </swiper-slide>
        <swiper-slide class="slide-2">
          <video @click="video($event)" src="http://ciri-video.oss-cn-beijing.aliyuncs.com/output/1de147adf8274f8ba513bccaffe1af6c/PT-IR-202-CW4-XMJS-PUB.mp4" controls></video>
        </swiper-slide>
        <swiper-slide class="slide-3">
          <video @click="video($event)" src="http://ciri-video.oss-cn-beijing.aliyuncs.com/output/1de147adf8274f8ba513bccaffe1af6c/PT-IR-202-CW4-XMJS-PUB.mp4" controls></video>
        </swiper-slide>
        <swiper-slide class="slide-4">
          <video @click="video($event)" src="http://ciri-video.oss-cn-beijing.aliyuncs.com/output/1de147adf8274f8ba513bccaffe1af6c/PT-IR-202-CW4-XMJS-PUB.mp4" controls></video>
        </swiper-slide>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1">
          <img src="../../../news/img/p_1.jpg" alt="">
          <div class="title">项目现场勘查</div>
        </swiper-slide>
        <swiper-slide class="slide-2">
          <img src="../../../news/img/p_2.jpg" alt="">
          <div class="title">项目业主访谈</div>
        </swiper-slide>
        <swiper-slide class="slide-3">
          <img src="../../../news/img/p_3.jpg" alt="">
          <div class="title">项目路演解说</div>
        </swiper-slide>
        <swiper-slide class="slide-4">
          <img src="../../../news/img/p_1.jpg" alt="">
          <div class="title">项目现场勘查</div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <CrossLine></CrossLine>
  <Article text="项目详情"></Article>
  <CrossLine></CrossLine>
  <Article text="投资环境"></Article>
  <CrossLine></CrossLine>
</div>
</template>

<script>
  import CrossLine from '@/components/base/cross-line/cross-line'
  import Article from '@/components/base/article/article'
  import tool from '@/api/tool'
    export default {
        components: {
          CrossLine,
          Article
        },
        data() {
            return {
              //项目视频
              swiperOptionTop: {
                spaceBetween: 10,
                loop: true,
                loopedSlides: 5, //looped slides should be the same
              },
              swiperOptionThumbs: {
                spaceBetween: 5,
                // centeredSlides: true,
                slidesPerView: 3,
                touchRatio: 0.2,
                loop: true,
                loopedSlides: 5, //looped slides should be the same
                slideToClickedSlide: true,
              },
              projId: null,
              projName: null,//名字
              amount: null,//总投资
              irr: null,//收益率
              projDevelopers: null,//开发商
              projAddress: null,//项目地点 如伊朗
              projArea: null,//所在区域  内陆
              constructionType: null,//项目类型 （新建）
              investMode: null,//投资方式
              industry: null,//所属行业
            }
        },
        props: {},
        watch: {},
        methods: {
          //项目视频
          video (e) {
            let element = e.currentTarget;
            // element.classList.add('active');
            element.play();
          }
        },
        filters: {},
        computed: {},
        created() {
          this.projId = this.$route.query.projId
          this.$api.post(tool.domind() + '/gateway/ah/s0/getProjectAbstractInfo',
            {projId: this.projId, username: tool.getuser()}).then(res => {
              this.projName = res.data.projName
              this.amount = res.data.amount
              this.irr = res.data.irr.replace(/.00/g, '')
              this.projDevelopers = res.data.projDevelopers
              this.projAddress = res.data.projAddress
              this.projArea = res.data.projArea
              this.constructionType = res.data.constructionType
              this.investMode = res.data.investMode
              this.industry = res.data.industry
          })
        },
      mounted() {
        //项目视频
        this.$nextTick(() => {
          const swiperTop = this.$refs.swiperTop.swiper
          const swiperThumbs = this.$refs.swiperThumbs.swiper
          swiperTop.controller.control = swiperThumbs
          swiperThumbs.controller.control = swiperTop
        })
      },
      destroyed() {
      }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/reset.scss';
    @import '~@/assets/scss/mixin.scss';
  .introduction{
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
    .company-msg{
      padding: 10px;
      margin-bottom: 7px;
      table{
        border:1px solid #dedede;
        tr{
          height:28px;
          line-height: 28px;
          font-size: 13px;
          color: #666;
          td:first-child{
            text-align: center;
            padding: 0 6px 0 5px;
          }
          td:last-child{
            text-align: left;
            padding-left: 20px;
          }
        }
      }
    }
    .intro-progress{
      margin-top: 10px;
      margin-bottom: 12px;
      table{
        tr{
          font-size: 13px;
          color: #666;
          height:24px;
          line-height: 24px;
          td{
            &:first-child{
              text-align: center;
              border-right:1px solid #dedede;
              padding: 0 6px 0 5px;
            }
            &:last-child{
              text-align: left;
              padding-left: 20px;
            }
            i{
              display: inline-block;
              width: 13px;
              height: 13px;
              margin-left: 10px;
              background-repeat: no-repeat;
              background-size: 13px auto;
              background-position: center;
              margin-top: -2px;
              vertical-align: middle;
            }
            i.progress-finished{
              @include bg-image("../../img/progress-finished");
            }
            i.progress-unfinished{
              @include bg-image("../../img/progress-unfinished");
            }
          }
        }
      }
    }
    .intro-video{
      h4{
        &:after{
          border: none;
        }
      }
      .video-warp{
        /*阻止浏览器默认事件*/
        /*touch-action: none;*/
        padding: 10px;
        .swiper-slide {
          background-size: cover;
          background-position: center;
          &.slide-1 {
            background-image:url('../../../news/img/p_1.jpg');
          }
          &.slide-2 {
            background-image:url('../../../news/img/p_2.jpg');
          }
          &.slide-3 {
            background-image:url('../../../news/img/p_3.jpg');
        }
          &.slide-4 {
            background-image:url('../../../news/img/p_1.jpg');
          }
          img{
            width: 100%;
            height:100%;
          }
          video{
            width:100%;
            height:100%;
          }
          video.active{
            opacity: 1;
          }
        }
        .gallery-top {
          height: 189px!important;
          width: 100%;
        }
        .gallery-thumbs {
          height: 90px!important;
          box-sizing: border-box;
          margin-top: 12px;
          img{
            width: 100%;
            height:60px;
          }
          .title{
            font-size: 13px;
            color:#333;
            line-height: 1;
            margin-top: 5px;

          }

        }
        .gallery-thumbs .swiper-slide {
          width: 59.7%;
          height: 100%;
          background-image: none;
        }
        .gallery-thumbs .swiper-slide img{
          border: 3px solid transparent;
          box-sizing: border-box;
        }
        .gallery-thumbs .swiper-slide-active img{
          border: 3px solid #528de8;
        }

      }
    }
    .intro-detail,.investment-environment{
      .article{
        margin-top: 10px;
        padding: 0 10px;
        font-size: 13px;
        line-height: 22px;
        color:#666;
        &.active{
          height:330px;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 15;
          -webkit-box-orient: vertical;
        }
      }
      .read-more{
        font-size: 13px;
        color: #3f80e9;
        margin-top: 5px;
        text-align: center;
        float: right;
        margin-bottom: 17px;
        padding-right: 10px;
        i {
          display: inline-block;
          width: 10px;
          height: 10px;
          background-size: 10px auto;
        }
        i.icon-more{
          @include bg-image("../../../news/img/more");
        }
        i.pack-up{
          @include bg-image("../../img/pack-up");
        }
      }
    }
  }

</style>
