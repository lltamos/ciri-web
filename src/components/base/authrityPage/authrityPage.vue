<template>
    <div class="pop-up" v-show="authorityShow">
      <p class="title">此页面仅限 项目库会员 及更高等级会员查看，您当前会员等级为<span>注册会员</span>！</p>
      <div class="btn-warp clearfix">
        <!--  <div class="cancel fl" @click="authorityHide">取消</div>-->
        <!--<div class="upgrade fr" @click="upgrade">升级</div>-->
        <mt-button size="small" type="primary" class="upgrade fr" @click="upgrade">升级</mt-button>
      </div>
    </div>
</template>

<script>
  import { Button } from 'mint-ui';
  export default {
    components: {},
    data() {
      return {
      }
    },
    props: {
      authorityShow: {
        type: Boolean,
        default: false
      }
    },
    watch: {},
    methods: {
      authorityHide () {
        this.$emit('authorityHide')
      },
      upgrade () {
        this.$emit('upgrade')
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
  .pop-up{
    position: relative;
    margin: auto;
    top:0;
    left: 0;
    right:0;
    bottom:0;
    width:86%;
    background: white;
    height:132px;
    .title{
      font-size: 13px;
      color:#333;
      line-height: 20px;
      margin: 23px auto 24px;
      width: 230px;
      text-align: center;
      span{
        color:#fdb140;
      }
    }
    .btn-warp{
      position: relative;
      display: flex;
      flex-direction: row;
      text-align: center;
      height:45px;
      width: 60px;
      line-height: 45px;
      left: 50%;
      margin-left: -30px;
      .cancel,.upgrade{
        flex: 1;
        font-size: 18px;
        color:#333;
      }
      .cancel{
        border-right: 1px solid #dedede;
      }
      .upgrade{
        color: white;
      }
    }
  }


</style>
