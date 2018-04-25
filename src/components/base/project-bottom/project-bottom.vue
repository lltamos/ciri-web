<template>
  <div class="project-bottom">
    <ul class="tab-warp">
      <li v-bind:class="[collected ? 'favorited' : 'favorite' ,'']" @click="collect">
        <i class="icon-fav"></i>
        <span>{{collects}}人已收藏</span>
      </li>
      <li class="share">
        <i class="icon-share"></i>
        <span>{{shares}}人已分享</span>
      </li>
      <li class="appoint">
        <i class="icon-appoint"></i>
        <span>约谈</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import tool from '@/api/tool'

  export default {
    components: {
      tool
    },
    props: {
      collects: String,
      shares: String,
      collected: Boolean,
      projId: String
    },
    methods: {
      collect () {
        if (tool.getuser() === null) {
          this.$router.replace({path: '/login'})
        }
        this.$api.post('/user/batchDealWithUserCollect',
          {typeFlag: 1, projectIdsStr: this.projId, operationFlag: !this.collected, name: tool.getuser()}).then(res => {
          if (this.collected) {
            if (parseInt(this.collects) > 0) {
              this.collects = parseInt(this.collects) - 1
            }else {
              this.collects = '0'
            }
          }else {
            if (parseInt(this.collects) < 999) {
              this.collects = parseInt(this.collects) + 1
            }else {
              this.collects = '999+'
            }
          }
          this.collected = !this.collected
        })
      }
    }

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
      li.favorited{
        width:28%;
        border-right: 1px solid #dedede;
        box-sizing: border-box;
        i{
          @include bg-image("../img/bottom-faved");
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
