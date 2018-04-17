<template>
<div class="project-land">
  <projectHeader></projectHeader>
  <div class="project-intro">
    <h4>
      <i class="left-line"></i><span>项目简介</span>
      <router-link to="/project/project-detail" class="detail-warp">
        <span class="to-detail">项目详情</span>
        <i class="more"></i>
      </router-link>

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
  </div>
  <CrossLine></CrossLine>
  <!--项目详情-->
  <div class="project-detail">
    <div class="title-warp">
      <div class="border-line"></div>
      <div class="title">项目详情</div>
    </div>
    <div class="img">
      <img src="../img/detail-summary.png" alt=""/>
    </div>
    <router-link to="/project/project-detail"><div class="view-detail btn">查看项目详情</div></router-link>

  </div>
  <CrossLine></CrossLine>
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
    }
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/mixin.scss";
  @import "~@/assets/scss/reset.scss";
  .project-land{
    .project-intro{
      text-align: left;
      h4{
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
        span{

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

    }
    .project-detail{
      padding: 15px 10px;
      .title-warp{
        position: relative;
        .border-line{
          margin-top: 7px;
          @include onepx();
        }
        .title{
          font-size: 15px;
          line-height: 1;
          position: absolute;
          left:50%;
          top:-7px;
          margin-left: -40px;
          width:60px;
          padding: 0 10px;
          background-color: #fff;
        }
      }
      .img{
        width: 100%;
        height:252px;
        margin-top: 30px;
        margin-bottom: 25px;
        img{
          height:100%;
          width: 100%;
        }
      }
      .view-detail{
        width:150px;
        height:30px;
        font-size: 13px;
        color:#fefeff;
        margin: auto;
        display: table;
        margin-bottom: 15px;
      }
    }
  }

</style>
