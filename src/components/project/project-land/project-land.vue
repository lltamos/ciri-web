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
                 :projAddress="projAddress"></projectHeader>
  <div class="project-intro">
    <h4>
      <i class="left-line"></i><span>项目简介</span>
      <div @click="gotoDetail" class="detail-warp">
        <span class="to-detail">项目详情</span>
        <i class="more" ></i>
      </div>

    </h4>
    <p class="document-txt">{{projAbstract}}</p>
    <div class="progress-model">
      <svgIcon :irr="irr"
               :amount="amount"
               :projDevelopers="projDevelopers"
               :potentialInvestorSize="potentialInvestorSize"
               :financingProgress="financingProgress"></svgIcon>
    </div>
    <div class="thumbs-up" @click="giveLikes">
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

    export default {
      components: {
        projectHeader,
        projectBottom,
        projectManager,
        svgIcon,
        CrossLine

      },
      data () {
        return {
          projId: '',
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
          projAddress: ''
        }
      },
      methods: {
        addVisit () {
          this.$api.post(tool.domind() + '/gateway/pb/s0/l/updateRecord',
            {projId: this.projId, tag: 2}).then(res => {
          })
        },

        gotoDetail () {
          this.$router.replace({ path: this.url })
        },
        giveLikes () {
          if (this.isLikes !== null) {
            alert('不能重复点赞')
            return
          }
          if (tool.getuser() === null) {
            this.$router.replace({ path: '/login' })
          }
          this.$api.post(tool.domind() + '/gateway/pb/s0/l/addLike',
            {userId: tool.getuser(), projId: this.projId, tag: 0}).then(res => {
              console.log(res)
              if (res.code === 200)
                this.likes = this.likes + 1
          })
        },

      },
      created () {
        this.projId = this.$route.query.projId
        this.url = this.url + this.projId

        this.addVisit()

        this.$api.post(tool.domind() + '/gateway/pb/p/getProjectHeadInfo',
          {username: tool.getuser(), projId: this.projId}).then(res => {
          if (res.code === 200) {
            this.projAbstract = res.data.projAbstract
            this.likes = parseInt(res.data.likes)
            this.collects = res.data.collects
            this.shares = res.data.shares
            this.irr = res.data.irr.replace(/.00/g, '')
            this.amount = res.data.amount
            if (res.data.projDevelopers !== '')
              this.projDevelopers = res.data.projDevelopers
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
          }
        });
      }
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
        &:active{
          background: #bbb;
        }
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
