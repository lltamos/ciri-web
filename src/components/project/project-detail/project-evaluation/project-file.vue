<template>
<div class="project-file">
  <div class="file-warp">
    <div class="file">
      <div class="title">
        <i class="icon-type icon-pdf"></i>
        <span class="file-title">建设许可证.pdf</span>
      </div>
      <dl class="intro">
        <dt>文件说明：</dt>
        <dd>建设许可建设许可建设许可建设许可建设许可</dd>
      </dl>
      <div class="applyFile btn bg-blue">申请查看</div>
      <!--<div class="agreed btn"><i class="icon-agreed"></i>已同意</div>-->
    </div>
    <div class="file">
      <div class="title">
        <i class="icon-type icon-jpg"></i>
        <span class="file-title">建设许可证.pdf</span>
      </div>
      <dl class="intro">
        <dt>文件说明：</dt>
        <dd>建设许可建设许可建设许可建设许可建设许可</dd>
      </dl>
      <div class="applyFile btn bg-gray">已申请</div>
      <!--<div class="agreed btn bg-gray"><i class="icon-agreed"></i>已同意</div>-->
    </div>
    <div class="file">
      <div class="title">
        <i class="icon-type icon-ppt"></i>
        <span class="file-title">建设许可证.pdf</span>
      </div>
      <dl class="intro">
        <dt>文件说明：</dt>
        <dd>建设许可建设许可建设许可建设许可建设许可</dd>
      </dl>
      <!--<div class="applyFile btn bg-blue">申请查看</div>-->
      <div class="agreed btn"><i class="icon-agreed"></i>已同意</div>
    </div>
    <div class="file">
      <div class="title">
        <i class="icon-type icon-xls"></i>
        <span class="file-title">建设许可证.pdf</span>
      </div>
      <dl class="intro">
        <dt>文件说明：</dt>
        <dd>建设许可建设许可建设许可建设许可建设许可</dd>
      </dl>
      <div class="applyFile btn bg-blue">申请查看</div>
      <div class="agreed btn"><i class="icon-agreed"></i>已同意</div>
    </div>
  </div>
  <CrossLine></CrossLine>
</div>
</template>
<script>
  import CrossLine from '@/components/base/cross-line/cross-line'
  export default {
    components: {
      CrossLine
    },
    data() {
        return {}
    },
    props: {},
    watch: {},
    methods: {},
    filters: {},
    computed: {},
    created() {
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
  .project-file{
    text-align: left;
    .file-warp{
      padding:0 10px 0;
      .file{
        border-bottom: 1px dashed #dedede;
        position: relative;
        padding: 13px 0;
        &:last-child{
          border-bottom: none;
        }
        .title{
          padding-left: 17px;
          position: relative;
          margin-bottom: 12px;
          line-height: 14px;
          .icon-type{
            position: absolute;
            top:0;
            left: 0;
            display: inline-block;
            width:11px;
            height:13px;
            background-size: 11px 13px;
            vertical-align: middle;
            &.icon-pdf{
              @include bg-image("../../img/pdf");
            }
            &.icon-jpg{
              @include bg-image("../../img/jpg");
            }
            &.icon-ppt{
              @include bg-image("../../img/ppt");
            }
            &.icon-xls{
              @include bg-image("../../img/xls");
            }
          }
          .file-title{
            font-size: 14px;
            color: #333;
            line-height: 1;
            display: inline-block;
          }

        }
        .intro{
          position: relative;
          padding-left: 70px;
          font-size: 13px;
          line-height: 1;
          color:#666;
          dt{
            position: absolute;
            top:0;
            left: 0;
          }
          dd{
            width: 180px;
            overflow: hidden;
            height:13px;
          }
        }
        .btn{
          width:75px;
          height:22px;
          line-height:22px;
          position: absolute;
          right:0px;
          top:50%;
          margin-top: -11px;
          font-size: 13px;

        }
        .bg-blue{
          background:#528de8;
        }
        .bg-gray{
          background: #bbb;
        }
        .agreed{
          background: #fff;
          font-size: 13px;
          color:#666;
          text-align: left;
          .icon-agreed{
            display: inline-block;
            width: 13px;
            height:13px;
            @include bg-image("../../img/progress-finished");
            background-size: 13px auto;
            margin-right: 5px;
          }

        }
      }
    }
  }

</style>
