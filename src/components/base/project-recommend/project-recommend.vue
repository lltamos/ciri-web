<template>
  <div class="project-loading" v-if="notloading">
    <div class="loading-wrap">
      <i class="icon-loading"></i>
      <p>加载中...</p>
    </div>
  </div>

  <div class="project-recommend" v-else>
    <div class="pro-card" v-for="(project) in this.projects" :key="project.projId" @click="routerLand(project.projId)">
      <div class="co-investing">
        {{project.status}}
      </div>
      <div class="img">
        <img class="item-pic" v-lazy="project.url" alt="" src="">
        <div class="title">
          <div class="icon-quality fl" v-if="project.cornerTag == 0">精品</div>
          <div class="icon-quality fl" v-else>{{project.cornerTagName}}</div>
          <h2 class="fl">{{project.name.length>15 ? project.name.substr(0,15)+'...' : project.name}}</h2>
        </div>
      </div>
      <div class="thumbs-up fr " v-bind:class="{active:project.likesStatus}"
           v-tap.prevent="{ methods : thumbSwitch ,project:project}">
        <i class="icon-dianzan"></i>
        <!--<span class="count-warp">看好</span>-->
        <span class="count">{{project.likes}}</span>
      </div>
      <div class="main-news">
        <div class="tip">
          <div v-for="tag in project.tags" :key="tag" class="f1">
            <div class="fl yellow">{{tag}}</div>
          </div>
          <div class="video fl"></div>
        </div>
        <ul class="proj-info">
          <li>
            <em><i class="large">{{project.fund}}</i>万美金</em>
            <span>项目总投资</span>
            <div class="fg-line"></div>
          </li>
          <li>
            <em><i class="large">{{parseFloat(project.irr)}}%</i></em>
            <span>预期收益率</span>
            <div class="fg-line"></div>
          </li>
          <li>
            <em><i class="large">{{parseFloat(project.financingProgress)}}%</i></em>
            <span>融资进度</span>
          </li>
        </ul>
        <div class="tip-news">
          <i class="loc"></i>
          <span class="country">{{project.countryName}}</span>
          <i class="indu"></i>
          <span class="industry">{{project.industryName}}</span>
          <i class="mold"></i>
          <span class="genre">{{project.constructionTypeName}}</span>
          <i class="view"></i>
          <span class="count">{{project.visit}}</span>
        </div>
      </div>
    </div>
    <button @click="loadMore" :disabled="this.disabled" class="more">
      <span v-text="moreText">{{this.moreText}}</span><i v-show="isIcon"></i>
    </button>
  </div>
</template>
<script>
  import tool from "../../../api/tool";

  export default {
    components: {},
    data() {
      return {
        moreText: '查看更多',
        projects: null,
        pageId: 1,
        status: [7],
        tag: [101001, 101002],
        disabled: false,
        notloading: true,
        isIcon: true
      }
    },
    props: {
      tabPanel: Number,
      industryCategory: Number
    },
    watch: {
      industryCategory(val) {
        this.projects = null;
        this.pageId = 1;
        this.industryCategory = val;
        this.notloading = true;
        this.loadMore();

      },
      tabPanel(val) {
        this.status = val == 1 ? [7] : [16]
        this.tag = val == 1 ? [101001, 101002] : []
        this.projects = null;
        this.pageId = 1;
        this.notloading = true;
        this.loadMore();

      }
    },
    methods: {
      loadMore() {
        this.$api.post('/pb/i/fetprojects', {
          pageId: this.pageId,
          userId: tool.getuser(),
          pageSize: 5,
          industry: [],
          country: [],
          invest: [],
          status: this.status,
          tag: this.tag,
          industryCategory: this.tabPanel==1?this.industryCategory:99
        }).then(r => {
          this.notloading = false;
          if (this.pageId == 1) {
            this.projects = r.data.list;
          } else {
            this.projects = this.projects.concat(r.data.list);
          }
          this.pageId = this.pageId + 1;
          if (r.data.list.length == 0 || r.data.list.length < 5) {
            this.moreText = '没有更多了';
            this.disabled = 'disabled';
            this.isIcon = false;
          }
        });
      },
      routerLand(index) {
        this.$router.push({path: '/project/project-land', query: {projId: index}});
      },
      thumbSwitch(project) {
        let projId = project.project.projId;
        if (tool.getuser() == null) {
          tool.toast("登录状态下才能点赞")
          return
        }
        //不能重复点赞
        if (project.project.likesStatus == true) {
          return;
        }
        project.project.likesStatus = true;
        project.project.likes = project.project.likes + 1;
        this.$api.post('/pb/s0/l/addLike', {projId: projId, userId: tool.getuser(), tag: 0}).then(r => {
          if (r.code == 200) {
          }
        });
      }
    },
    filters: {},
    computed: {},
    created() {

    },
    mounted() {
      this.loadMore();
    },
    destroyed() {
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/assets/scss/reset.scss';
  @import '~@/assets/scss/mixin.scss';

  .project-loading {
    height: 280px;
    position: relative;
    .loading-wrap {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -20px 0px 0px -24px;
      .icon-loading {
        display: inline-block;
        width: 22px;
        height: 22px;
        background-repeat: no-repeat;
        background-size: 22px auto;
        background-position: center;
        background-image: url("../../index/img/icon-loading.gif");
        vertical-align: middle;
      }
      p {
        font-size: 13px;
      }
    }

  }

  .project-recommend {
    padding: 0px 10px 20px;
    .pro-card {
      height: 365px;
      width: 100%;
      margin-top: 14px;
      border-radius: 3px;
      overflow: hidden;
      box-shadow: 0px 7px 15px #ccc;
      -webkit-box-shadow: 0px 7px 15px #ccc;
      position: relative;
      .co-investing {
        position: absolute;
        top: 0;
        left: 10px;
        z-index: 99;
        width: 50px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        background-repeat: no-repeat;
        @include bg-image("../../index/img/co-investing");
        background-size: 50px 32px;
        background-position: center;
        font-size: 12px;
        color: #fff;
      }
      .img {
        height: 233px;
        width: 100%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .title {
          overflow: hidden;
          position: absolute;
          bottom:0;
          left: 0;
          color:#fff;
          background:rgba(51,51,51,.6) ;
          height:40px;
          line-height: 1;
          right:0;
          padding-left: 10px;
          .icon-quality {
            color: #fff;
            font-size: 10px;
            line-height: 10px;
            background: #fdb140;
            padding: 3px 3px 0;
            text-align: center;
            margin-right: 5px;
            border-radius: 3px;
            margin-top: 14px;
          }
          h2 {
            font-size: 14px;
            height: 40px;
            line-height: 40px;
          }
        }

      }
      .thumbs-up {
        border: 1px solid #dedede;
        border-radius: 20px;
        color: #999;
        padding: 0 17px;
        font-size: 10px;
        position: absolute;
        right:10px;
        bottom: 10px;
        z-index: 99;
        height:20px;
        line-height: 22px;
        &.active {
          background: #4285f4;
          color: #fff;
          .icon-dianzan {
            @include bg-image("../../index/img/thumb-uped");
          }
        }
        .icon-dianzan {
          display: inline-block;
          width: 9px;
          height:9px;
          background-repeat: no-repeat;
          background-size: 9px auto;
          background-position: center;
          @include bg-image("../../index/img/thumb-up");
          vertical-align: middle;
        }
        .count-warp {
          display: inline-block;
          height: 20px;
          line-height: 20px;
        }
        .count {
          font-size: 7px;
        }
      }
      .main-news {
        height: 132px;
        box-sizing: border-box;
        position: relative;
        padding: 15px 10px;
        .tip {
          overflow: hidden;
          font-size: 11px;
          color: #666;
          .red {
            height: 14px;
            width: 50px;
            line-height: 14px;
            margin-right: 5px;
            text-align: center;
            border: 1px solid #ff0000;
          }

          .yellow {
            width: 140px;
            font-size: 22px;
            margin-right: 10px;
            text-align: center;
            border: 1px solid #fdb140;
            zoom:0.5;
            -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
          }

          .video {
            width: 20px;
            height: 15px;
            background-repeat: no-repeat;
            @include bg-image("../img/video");
            background-size: 20px 15px;
            background-position: center;
          }

        }
        .tip-news {
          height: 10px;
          position: absolute;
          bottom: 15px;
          left: 10px;
          i {
            display: block;
            float: left;
            margin-right: 6px;
            width: 10px;
            height: 10px;
            background-size: 10px auto;
          }
          .loc {
            @include bg-image("../img/location");
          }
          .indu {
            @include bg-image("../img/industry");
          }
          .mold {
            @include bg-image("../img/mold");
          }
          .view {
            @include bg-image("../img/view");
          }

          span {
            float: left;
            margin-right: 10px;
            font-size: 10px;
            line-height: 1;
            color: #666;
            margin-top: 1px;
          }
        }
        .proj-info {
          text-align: center;
          display: flex;
          flex-direction: row;
          @include onepx('bottom');
          li {
            flex: 1;
            font-size: 12px;
            color: #777;
            position: relative;
            margin: 13px 0;
            .fg-line {
              position: absolute;
              height: 25px;
              width: 1px;
              background: #dedede;
              top: 8px;
              right: 0;
            }

            em {
              i {
                color: #3f83e6;
                font-size: 16px;
                font-style: normal;
              }
            }
            span {
              display: block;
              height: 12px;
              line-height: 1;
              margin-top: 3px;
            }
          }
          .svg-circle {
            margin-top: -8px;
            margin-right: 2%;
            .pie_progress {
              width: 60px;
              text-align: center;
              position: relative;
              .svg_jdft {
                font-size: 10px;
                color: #333;
                width: 100%;
                position: absolute;
                left: 0;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                -o-transform: translateY(-50%);
                transform: translateY(-50%);
              }
              .pie_progress1 {
                top: 40%;
              }
              .pie_progress2 {
                top: 60%;
              }
            }
          }
        }
      }
    }
    .more {
      font-size: 12px;
      color: #3f80e9;
      background: #fff;
      margin-top: 20px;
      text-align: center;

      i {
        display: inline-block;
        width: 12px;
        height: 12px;
        @include bg-image("../../news/img/more");
        background-size: 12px auto;
        margin-left: 6px;
      }
    }
  }

</style>
