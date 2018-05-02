<template>
  <div class="project-file">
    <div class="authority" v-if="!memberLevel">
      <!--权限弹框-->
      <authrityPageSmall :authorityShow="authorityShow" @authorityHide="authorityHide"
                         @upgrade="upgrade"></authrityPageSmall>
    </div>
    <div class="file-warp">
      <div class="file" v-for="(item,index) in projectFileList" :key="index"
           v-if="projectFileList != null && projectFileList.length !=0">
        <div class="title">
          <i class="icon-type" :class='"icon-"+item.originalName.replace(/.+\./, "")'></i>
          <span class="file-title">{{item.originalName}}</span>
        </div>
        <dl class="intro">
          <dt>文件说明：</dt>
          <dd v-if="item.summary">{{item.summary.valueCn}}</dd>
          <dd v-else>暂无</dd>
        </dl>
        <div v-if="memberLevel" class="applyFile btn bg-blue" @click="showFileDetail">申请查看</div>
        <div v-if="!memberLevel" class="upAfter">升级后可查看</div>
        <!--<div class="agreed btn"><i class="icon-agreed"></i>已同意</div>
             <div class="applyFile btn bg-gray">已申请</div>
        -->
      </div>
      <div v-if="projectFileList == null || projectFileList.length ==0">
        <img src="../../img/timer-none.png" alt="">
      </div>
    </div>
    <CrossLine></CrossLine>
  </div>
</template>
<script>
  import CrossLine from '@/components/base/cross-line/cross-line'
  import Authority from '@/components/base/authority/authority'
  import authrityPageSmall from '@/components/base/authrityPageSmall/authrityPageSmall'
  import tool from "../../../../api/tool";
  export default {
    components: {
      CrossLine,
      tool,
      Authority,
      authrityPageSmall
    },
    data() {
      return {
        projectFileList: [],
        authorityShow: true,
        memberLevel: false
      }
    },
    props: {},
    watch: {},
    methods: {
      showFileDetail(){
        tool.MessageBox('是否申请查看？')
      },
      upgrade () {
        this.$router.push({path: "/mine/member-center"});
      },
      authorityHide () {
        this.authorityShow = false;
      },
    },
    filters: {},
    computed: {},
    created() {
      let param = {
//        projectId:window.location.href.split('?')[1].split('=')[1]
        projectId: '496000001'
      };
      let level = sessionStorage.getItem("userLevel");
      if (level === '1') {
        this.memberLevel = false;
      } else {
        this.memberLevel = true;
      }
      this.$api.get("/ah/s0/p/projfiles", param).then(res => {
        if(res.code === 200){
        this.projectFileList = res.fileViews;
      }
    });

    },
    mounted() {
    },
    destroyed() {
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/reset.scss';
  @import '~@/assets/scss/mixin.scss';

  .project-file {
    text-align: left;

  .authority {
    padding: 0 10px 0;
    margin: 15px 0px 5px 0px;
  }

  .file-warp {
    padding: 0 10px 0;

  .file {
    border-bottom: 1px dashed #dedede;
    position: relative;
    padding: 13px 0;

  &
  :last-child {
    border-bottom: none;
  }

  .title {
    padding-left: 17px;
    position: relative;
    margin-bottom: 12px;
    line-height: 14px;

  .icon-type {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 11px;
    height: 13px;
    background-size: 11px 13px;
    vertical-align: middle;

  &
  .icon-pdf {
  @include bg-image("../../img/pdf");
  }

  &
  .icon-jpg {
  @include bg-image("../../img/jpg");
  }

  &
  .icon-ppt {
  @include bg-image("../../img/ppt");
  }

  &
  .icon-xls {
  @include bg-image("../../img/xls");
  }

  }
  .file-title {
    font-size: 14px;
    color: #333;
    line-height: 1;
    display: inline-block;
  }

  }
  .intro {
    position: relative;
    padding-left: 70px;
    font-size: 13px;
    line-height: 1;
    color: #666;

  dt {
    position: absolute;
    top: 0;
    left: 0;
  }

  dd {
    width: 180px;
    overflow: hidden;
    height: 13px;
  }

  }
  .upAfter {
    width: 85px;
    height: 22px;
    line-height: 22px;
    position: absolute;
    right: 0px;
    top: 50%;
    margin-top: -11px;
    font-size: 13px;
  }

  .btn {
    width: 75px;
    height: 22px;
    line-height: 22px;
    position: absolute;
    right: 0px;
    top: 50%;
    margin-top: -11px;
    font-size: 13px;

  }

  .bg-blue {
    background: #528de8;
  }

  .bg-gray {
    background: #bbb;
  }

  .agreed {
    background: #fff;
    font-size: 13px;
    color: #666;
    text-align: left;

  .icon-agreed {
    display: inline-block;
    width: 13px;
    height: 13px;
  @include bg-image("../../img/progress-finished");
    background-size: 13px auto;
    margin-right: 5px;
  }

  }
  }
  }
  }

</style>
