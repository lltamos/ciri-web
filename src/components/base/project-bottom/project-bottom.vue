<template>
  <div class="project-bottom">
    <ul class="tab-warp">
      <li class="favorite">
        <i class="icon-fav"></i>
        <span>30人已收藏</span>
      </li>
      <li class="share">
        <i class="icon-share"></i>
        <span>12人已分享</span>
      </li>
      <li class="appoint">
        <i class="icon-appoint"></i>
        <span>约谈</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      components: {
      },
    }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/reset.scss';
  @import '~@/assets/scss/mixin.scss';
.project-bottom{
  padding-bottom: 50px;
  ul.tab-warp{
    @include onepx();
    background-color: #fff;
    position: fixed;
    bottom: 0;
    height:50px;
    width: 100%;
    z-index: 99;
    li{
      float: left;
      height:50px;
      padding: 5px 0;
      i {
        display: block;
        width: 20px;
        height: 20px;
        margin:auto;
        background-size: 20px auto;
        background-repeat: no-repeat;
      }
      span {
        display: block;
        font-size: 12px;
        color:#333;
        height:12px;
        line-height: 12px;
        margin-top: 5px;
      }
    }
    li.favorite{
      width:28%;
      border-right: 1px solid #dedede;
      box-sizing: border-box;
      i{
        @include bg-image("../img/bottom-fav");
      }
    }
    li.share{
      width:25.3%;
      i{
        @include bg-image("../img/bottom-share");
      }
    }
    li.appoint{
      background-color: #3f83e6;
      width:46.7%;
      line-height: 50px;
      padding: 0;
      i{
        @include bg-image("../img/bottom-appoint");
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
      }
      span{
        color:#fff;
        display: inline-block;
      }
    }
  }
}
</style>
