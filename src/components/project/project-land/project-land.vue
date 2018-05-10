<template>
  <div class="project-land">
    <projectHeader :visit="visit"
                   :projName="projName"
                   :cornerTag="cornerTag"
                   :projType="projType"
                   :tag="tag"
                   :status="status"
                   :tags="tags"
                   :setProjVideo="setProjVideo"
                   :projPhoto="projPhoto"
                   :projAddress="projAddress"
                   :projMaturity="projMaturity" text="看好项目 上源合网"></projectHeader>
    <div class="project-intro">
      <h4>
        <div class="border"></div>
        <div class="title-intro">项目简介</div>
        <!--<div @click="gotoDetail" class="detail-warp">
          <span class="to-detail">项目详情</span>
          <i class="more" ></i>
        </div>-->

      </h4>
      <p class="document-txt">{{projAbstract}}</p>
      <div class="progress-model">
        <svgIcon :irr="irr"
                 :amount="amount"
                 :projDevelopers="projDevelopers"
                 :potentialInvestorSize="potentialInvestorSize"
                 :financingProgress="financingProgress"></svgIcon>
      </div>
      <div v-bind:class="[isLikes ? 'thumbs-down' : 'thumbs-up', '']" @click="giveLikes">
        <i class="icon-dianzan"></i>
        <span class="count-warp">看好</span>
        <span class="count">({{likes}})</span>
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
      <div @click="gotoDetail" class="view-detail btn">查看项目详情</div>

    </div>
    <CrossLine></CrossLine>
    <!--客户经理-->
    <project-manager></project-manager>
    <project-bottom :collects="collects"
                    :shares="shares"
                    :collected="collected"
                    :projId="projId"></project-bottom>
  </div>
</template>

<script>
  import projectHeader from '@/components/base/project-header/project-header'
  import projectBottom from '@/components/base/project-bottom/project-bottom'
  import projectManager from '@/components/base/project-manager/project-manager'
  import svgIcon from '@/components/base/svg-icon/svg-icon'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import tool from '@/api/tool'
  import wxconfig from '@/api/wx'

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
        projId: null,
        projAbstract: null,
        likes: 0,
        collects: null,
        shares: null,
        irr: '0',
        amount: null,
        projDevelopers: 'CIRI',
        potentialInvestor: null,
        potentialInvestorSize: 0,
        financingProgress: null,
        visit: null,
        projName: null,
        cornerTag: null,
        projType: null,
        tag: null,
        status: null,
        tags: null,
        setProjVideo: false,
        projPhoto: '',
        url: '/project/project-detail?projId=',
        isLikes: null,
        collected: false,
        projAddress: '',
        projMaturity: null
      }
    },
    methods: {
      addVisit() {
        this.$api.post('/pb/s0/l/updateRecord',
          {projId: this.projId, tag: 2}).then(res => {
        })
      },

      gotoDetail() {
        this.$router.replace({path: this.url})
      },
      giveLikes() {
        if (this.isLikes !== null) {
          tool.toast('不能重复点赞')
          return
        }
        if (tool.getuser() === null) {
          tool.toast('登录状态下才能点赞')
          return
        }
        this.likes = this.likes + 1
        this.isLikes = true
        this.$api.post('/pb/s0/l/addLike',
          {userId: tool.getuser(), projId: this.projId, tag: 0}).then(res => {
          if (res.code === 200) {
          }
        })
      },

    },
    created() {
      window.scrollTo(0, 0);
      this.projId = parseInt(this.$route.query.projId)
      this.url = this.url + this.projId

      this.addVisit()

      this.$api.post('/pb/p/getProjectHeadInfo',
        {username: tool.getuser(), projId: this.projId}).then(res => {
        if (res.code === 200) {
          this.projAbstract = res.data.projAbstract
          this.likes = parseInt(res.data.likes)
          this.collects = res.data.collects
          this.shares = res.data.shares
          this.irr = res.data.irr.replace(/.00/g, '')
          this.amount = res.data.amount
          let rdp = res.data.projDevelopers
          if (rdp !== null && rdp.length > 0) {
            if (rdp.length > 7)
              this.projDevelopers = rdp.substring(0, 4) + '...' + rdp.substring(rdp.length - 2, rdp.length)
            else
              this.projDevelopers = rdp
          }
          this.potentialInvestor = res.data.potentialInvestor
          this.potentialInvestorSize = res.data.potentialInvestorSize
          this.financingProgress = res.data.financingProgress
          this.visit = res.data.visit
          this.projName = res.data.projName
          this.cornerTag = res.data.cornerTag
          this.projType = res.data.projType
          this.tag = res.data.tag
          this.status = res.data.status
          this.tags = res.data.tags
          this.setProjVideo = res.data.setProjVideo
          this.projPhoto = res.data.projPhoto
          this.isLikes = res.data.isLikes         //todo 是否点赞 控制 点赞图标的样式
          this.collected = res.data.collected //todo  是否收藏 控制收藏图标的样式
          this.projAddress = res.data.projAddress
          this.projMaturity = res.data.projMaturity
        }
      });
    },
    mounted() {

      let url = location.href.split('#')[0];
      this.$api.get('/app/wx/signatrue', {url: url}).then(res => {
        if (res.code == 200) {
          wxconfig.timestamp = res.data.timestamp;
          wxconfig.signature = res.data.signature;
          wxconfig.noncestr = res.data.noncestr;
          console.log(res)
          wx.config(wxconfig);
          wx.ready(function () {
            // 在这里调用 API
            wx.onMenuShareTimeline({
              title: 'test',
              link: test.bjciri.com,
              imgUrl: 'test',
              success: function () {
                // 用户确认分享后执行的回调函数
                alert(1)
              },
              cancel: function () {
                // 用户取消分享后执行的回调函数
                alert(2)
              }
            });
          });

        }


      });
    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
  @import "~@/assets/scss/mixin.scss";
  @import "~@/assets/scss/reset.scss";

  .project-land {
    .project-intro {
      text-align: left;
      h4 {
        overflow: hidden;
        line-height: 1;
        height: 16px;
        padding: 15px 10px 12px 15px;
        color: #333;
        font-size: 16px;
        font-weight: normal;
        position: relative;
        .border {
          margin-top: 7px;
        }
        .title-intro {
          font-size: 15px;
          line-height: 1;
          position: absolute;
          left: 50%;
          top: 12px;
          margin-left: -40px;
          width: 60px;
          padding: 0 10px;
          background-color: #fff;
        }
        .left-line {
          position: absolute;
          display: block;
          width: 3px;
          height: 15px;
          background-color: #528de8;
          left: 0;
          top: 12px;
        }
        span {

        }
        .detail-warp {
          position: absolute;
          right: 0;
          top: 0;
          height: 40px;
          line-height: 1;
          .to-detail {
            display: inline-block;
            font-size: 13px;
            color: #528de8;

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
      .document-txt {
        padding: 10px;
        font-size: 13px;
        color: #333;
        line-height: 20px;
      }
      .thumbs-up {
        display: table;
        margin: -5px auto 25px;
        background: #4285f4;
        color: #fefeff;
        font-size: 11px;
        height: 23px;
        padding: 5px 10px;
        line-height: 1;
        border-radius: 2px;
        .icon-dianzan {
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
        .count-warp {
          display: inline-block;
          height: 23px;
          line-height: 23px;
        }
        .count {
          font-size: 7px;
          margin-left: 5px;
        }
      }

      .thumbs-down {
        display: table;
        margin: -5px auto 25px;
        background: #bbb;
        color: #fefeff;
        font-size: 11px;
        height: 23px;
        padding: 5px 10px;
        line-height: 1;
        border-radius: 2px;
        .icon-dianzan {
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
        .count-warp {
          display: inline-block;
          height: 23px;
          line-height: 23px;
        }
        .count {
          font-size: 7px;
          margin-left: 5px;
        }
      }

    }
    .project-detail {
      padding: 15px 10px;
      .title-warp {
        position: relative;
        .border-line {
          margin-top: 7px;
          @include onepx();
        }
        .title {
          font-size: 15px;
          line-height: 1;
          position: absolute;
          left: 50%;
          top: -7px;
          margin-left: -40px;
          width: 60px;
          padding: 0 10px;
          background-color: #fff;
        }
      }
      .img {
        width: 100%;
        height: 252px;
        margin-top: 30px;
        margin-bottom: 25px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .view-detail {
        width: 150px;
        height: 30px;
        font-size: 13px;
        color: #fefeff;
        margin: auto;
        display: table;
        margin-bottom: 15px;
      }
    }
  }

</style>
