<template>
  <div class="project-loading" v-if="notloading">
    <div class="loading-wrap">
      <i class="icon-loading"></i>
      <p>加载中...</p>
    </div>
  </div>

  <div class="project-recommend" v-else>
    <router-link v-for="(project) in this.projects" :key="project.projId"
                 :to="{path:'/project/project-land',query: {projId: project.projId}}">
      <div class="pro-card">
        <div class="co-investing">
          {{project.status}}
        </div>
        <div class="img">
          <img  class="item-pic" v-lazy="project.url" alt="" src="">
        </div>
        <div class="main-news">
          <div class="title">
            <div class="icon-quality fl">精品</div>
            <h2 class="fl">{{project.name}}</h2>
            <div class="thumbs-up fr">
              <i class="icon-dianzan"></i>
              <span class="count-warp">看好</span>
              <span class="count">({{project.likes}})</span>
            </div>
          </div>
          <div class="tip">
            <div v-for="tag in project.tags" :key="tag" class="f1">
              <div class="fl red">{{tag}}</div>
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
            <div class="svg-circle fr">
              <div class="row" style="top:-105px">
                <div class="pie_progress pie_progress1" role="progressbar" data-goal="100" data-barsize="10"
                     data-barcolor="#3699ea" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100">
                  <div class="pie_progress1 svg_jdft">{{parseFloat(project.financingProgress)}}%</div>
                  <div class="pie_progress2 svg_jdft">融资进度</div>
                  <div class="pie_progress__svg">
                    <svg version="1.1" preserveAspectRatio="xMinYMin meet" viewBox="0 0 160 160">
                      <ellipse rx="75" ry="75" cx="80" cy="80" stroke="#f2f2f2" fill="none"
                               stroke-width="10"></ellipse>
                      <path fill="none" stroke-width="10" stroke="#3699ea"
                            d="M80,5 A75,75 0 1 1 79.99952876110194,5.000000001480444"
                            style="stroke-dasharray: 471.305px, 471.305px; stroke-dashoffset: 0px;"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

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
    </router-link>
    <button @click="loadMore" :disabled="this.disabled" class="more">
      <span v-text="moreText">{{this.moreText}}</span><i></i>
    </button>
  </div>
</template>
<script>
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
        notloading: true
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
          pageSize: 5,
          industry: [],
          country: [],
          invest: [],
          status: this.status,
          tag: this.tag,
          industryCategory: this.industryCategory
        }).then(r => {
          this.notloading = false;
          if (this.pageId == 1) {
            this.projects = r.data.list;
          } else {
            this.projects = this.projects.concat(r.data.list);
          }
          this.pageId = this.pageId + 1;
          console.log(this.projects.length)
          if (r.data.list.length == 0 || r.data.list.length < 5) {
            this.moreText = '没有更多了';
            this.disabled = 'disabled';
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
      height: 385px;
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
        img {
          width: 100%;
          height: 100%;
        }

      }
      .main-news {
        height: 152px;
        box-sizing: border-box;
        position: relative;
        padding: 15px 10px;
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
          .thumbs-up {
            border: 1px solid #dedede;
            border-radius: 20px;
            color: #999;
            padding: 0 5px;
            font-size: 10px;
            line-height: 1;
            .icon-dianzan {
              display: inline-block;
              width: 9px;
              height: 9px;
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

        }
        .tip {
          overflow: hidden;
          font-size: 9px;
          color: #333;
          margin-top: 11px;

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
          li {
            float: left;
            font-size: 12px;
            color: #777;
            padding: 0 8%;
            position: relative;
            margin: 13px 0;
            @media screen and(min-width: 320px) and(max-width: 374px) {
              padding: 0 6%;
            }
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
          li:first-child {
            padding-left: 0;
          }
          li:last-child {
            padding-right: 0;
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
