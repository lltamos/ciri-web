<template>
  <div class="file">
    <i class="icon-type icon-pdf"></i>
    <span class="file-title">建设许可证.pdf</span>
    <div class="delete-warp">
      <i class="icon-delete" v-show="deleteShow" @click="Delete"></i>
      <div v-show="!deleteShow" class="btn-warp"><span class="cancel" @click="Cancel">取消</span><span class="confirm">确定</span></div>
    </div>
  </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
              deleteShow : true
            }
        },
        props: {},
        watch: {},
        methods: {
          Delete () {
            this.deleteShow = false ;
          },
          Cancel () {
            this.deleteShow = true ;
          }
        },
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
    .file{
      padding: 11px 10px;
      line-height: 13px;
      position: relative;
      padding-left: 28px;
      background: #f5f5f5;
      border-bottom: 1px solid #dedede;
      &:first-child{
        margin-top: 10px;
      }
      &:last-child{
        border-bottom:none;
      }
      .icon-type{
        position: absolute;
        top:11px;
        left: 10px;
        display: inline-block;
        width:11px;
        height:13px;
        background-size: 11px 13px;
        vertical-align: middle;
        &.icon-pdf{
          @include bg-image("../../project/img/pdf");
        }
        &.icon-jpg{
          @include bg-image("../../project/img/jpg");
        }
        &.icon-ppt{
          @include bg-image("../../project/img/ppt");
        }
        &.icon-xls{
          @include bg-image("../../project/img/xls");
        }
      }
      .file-title{
        display: inline-block;
        line-height: 13px;
        font-size: 11px;
        color: #333;
      }
      .delete-warp{
        position: absolute;
        right:10px;
        top:11px;
        .icon-delete{
          display: block;
          width: 13px;
          height:13px;
          @include bg-image("../../project/img/file-delete");
          background-size: 13px auto;
        }
        .btn-warp{
          font-size: 11px;
          color:#333;
          .cancel{
            margin-right: 20px;
          }
        }
      }
    }

</style>
