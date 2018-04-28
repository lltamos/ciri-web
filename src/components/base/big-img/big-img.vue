<template>
  <div  id="big-img" class="clearfix">
    <div class="img-warp" :class="article">
      <vue-preview v-if="this.imgList!=null" :slides="this.imgList" @close="handleClose" class="structure-warp clearfix"></vue-preview>
    </div>
    <div class="read-more" @click="readMore" v-show="moreShow">
      <span v-text="moreText">展开</span>
      <i :class="iconMore"></i>
    </div>
  </div>
</template>
<script>
  import tool from '../../../api/tool'

  export default {
    data() {
      return {

        slide1: [],
        moreText: '展开',
        iconMore: 'icon-more',
        article: 'article',
        moreShow: true
      }
    },
    methods: {
      readMore() {
        if (this.moreText == '展开') {
          this.moreText = '收起'
          this.iconMore = 'pack-up'
          this.article = 'article active'
        } else {
          this.moreText = '展开';
          this.iconMore = 'icon-more'
          this.article = 'article'
        }
      },
      handleClose() {
      }
    },
    props: {
      content: Array
    },
    computed: {

      imgList: {
        get:function () {
          this.imgList = [];
          if (this.content==null){
            return null
          }
          this.content.forEach( v=> {
            let url = v.name;
            let remoteUrl = tool.generatorUrl(url);
            let j = {
              src: remoteUrl,
              msrc: remoteUrl,
              alt: 'picture1',
              title: '',
              w: 600,
              h: 400
            };
            this.slide1.push(j);
          });
          return this.slide1;
        },
        set:function () {}
      }
    },

    created() {
    },
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/reset.scss';
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';
  #big-img{
    .article{
      max-height:316px;
      overflow: hidden;
      &.active{
        max-height:10000px;
      }
    }
    .read-more {
      font-size: 13px;
      color: #3f80e9;
      line-height: 1;
      text-align: center;
      float: right;
      margin-top: 10px;
      padding-right: 10px;
      padding-bottom: 17px;

      i {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-size: 10px auto;
      }

      i.icon-more {
        @include bg-image("../../news/img/more");
      }

      i.pack-up {
        @include bg-image("../../project/img/pack-up");
      }

    }
  }
</style>
