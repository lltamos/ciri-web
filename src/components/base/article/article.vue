<template>
  <div class="article-warp">
    <div class="pro-article clearfix">
      <h4>
        <i class="left-line"></i><span>{{text}}</span>
      </h4>
      <div v-if="this.content!=null" :class="article" ref="articleRef">
        <p class="title" v-show="secondShow">【担保方式】</p>
        {{this.content}}
      </div>
      <div class="second" :class="article" v-show="secondShow">
        <p class="title" v-show="secondShow">【担保说明】</p>
        {{this.content2}}
      </div>

      <div class="read-more" @click="readMore" v-show="moreShow">
        <span v-text="moreText">阅读全文</span>
        <i :class="iconMore"></i>
      </div>
    </div>
  </div>


</template>

<script>
    export default {
        components: {},
        data() {
            return {
              moreText : '阅读全文',
              iconMore :'icon-more',
              article : 'article active',
              moreShow : true
            }
        },
      props: {
        text: {
          type: String,
          default: '商家列表'
        },
        secondShow :{
          type: Boolean,
          default: false
        },
        content: String,
        content2: String
      },
        watch: {},
        methods: {
          readMore () {
            if(this.moreText == '阅读全文'){
              this.moreText = '收起'
              this.iconMore = 'pack-up'
              this.article = 'article'
            }else {
              this.moreText = '阅读全文';
              this.iconMore = 'icon-more'
              this.article = 'article active'
            }
          },
        },
      filters: {},
        computed: {},
        created() {
        },
        mounted() {
          var heightCss = window.getComputedStyle(this.$refs.articleRef).height;

          let num = (heightCss.replace("px",""));

          let flag = parseInt((num));
          console.log(flag);
          if(flag<300){
            this.moreShow = false;
          }else {
            this.moreShow = true;
          }
        },
        destroyed() {
        }
    }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/reset.scss';
  @import '~@/assets/scss/mixin.scss';

  .article-warp {
    text-align: left;

  h4 {
    text-align: left;
    overflow: hidden;
    line-height: 1;
    height: 16px;
    padding: 12px 10px 12px 15px;
    color: #333;
    font-size: 16px;
    font-weight: normal;
  @include onepx('bottom');

  .left-line {
    position: absolute;
    display: block;
    width: 3px;
    height: 15px;
    background-color: #528de8;
    left: 0;
    top: 12px;
  }

  }
  .pro-article {
    padding-bottom: 17px;

  .article {
    margin-top: 10px;
    padding: 0 10px;
    font-size: 13px;
    line-height: 22px;
    color: #666;
    text-indent: 2em;

  &.active {
    /*height:330px;*/
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 15;
    -webkit-box-orient: vertical;
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
  }

</style>
