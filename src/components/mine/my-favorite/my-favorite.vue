<template>
  <div class="my-favorite">
    <header-bar text="收藏的项目" @back="back"></header-bar>
    <cross-line style="margin-top: 44px;"></cross-line>
    <div class="main">
      <div class="project">
        <div class="img">
          <div class="icon-state">合投中</div>
          <img src="../img/p_1.jpg" alt="" width="100%" height="100%">
          <i class="favorite icon-favorite"></i>
        </div>
        <div class="main-news">
          <div class="title">
            <div class="icon-quality fl">精品</div>
            <h2 class="fl">巴西卡坦杜瓦60MW风电场...</h2>
          </div>
          <div class="tip">
            <div class="fl red">现场勘查</div>
            <div class="fl yellow">高收益</div>
            <div class="video fl">

            </div>
          </div>
          <div class="tip-news">
            <ul class="proj-info" style="overflow:hidden;">
              <li class="proj-span1">
                <div class="count"><span>350</span>万欧元</div>
                <em>项目总投资</em>
                <div class="line"></div>
              </li>
              <li class="proj-span2">
                <div class="count"><span>17.8</span>%</div>
                <em>预期年收益率</em>
                <div class="line"></div>
              </li>
              <li class="proj-span3" style="background:0 0;">
                <div class="count"><span>3</span>位</div>
                <em>意向投资方</em>
              </li>
            </ul>

          </div>
        </div>
      </div>
      <div class="project">
        <div class="img">
          <img src="../img/p_1.jpg" alt="" width="100%" height="100%">
          <i class="favorite quit-favorite"></i>
        </div>
        <div class="main-news">
          <div class="title">
            <div class="icon-quality fl">精品</div>
            <h2 class="fl">巴西卡坦杜瓦60MW风电场...</h2>
          </div>
          <div class="tip">
            <div class="fl red">现场勘查</div>
            <div class="fl yellow">高收益</div>
            <div class="video fl">

            </div>
          </div>
          <div class="tip-news">
            <ul class="proj-info" style="overflow:hidden;">
              <li class="proj-span1">
                <div class="count"><span>350</span>万欧元</div>
                <em>项目总投资</em>
                <div class="line"></div>
              </li>
              <li class="proj-span2">
                <div class="count"><span>17.8</span>%</div>
                <em>预期年收益率</em>
                <div class="line"></div>
              </li>
              <li class="proj-span3" style="background:0 0;">
                <div class="count"><span>3</span>位</div>
                <em>意向投资方</em>
              </li>
            </ul>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  export default {
    components: {
      HeaderBar,
      CrossLine
    },
    data(){
      return {
      }
    },
    methods: {
      back() {
        this.$router.push({
          path: this.$router.go(-1)
        })
      }

    },
    created () {

    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';
  .main{
    .project{
      padding: 14px 10px 14px 130px;
      position: relative;
      @include onepx("bottom");
      .img{
        width:110px;
        height:71px;
        position: absolute;
        top:14px;
        left: 10px;
        .icon-state{
          position: absolute;
          left:5px;
          top:5px;
          font-size: 9px;
          color:#fff;
          background: #27caa0;
          border-radius: 3px;
          padding: 1px 2px;
          text-align: center;
        }
        .favorite{
          position: absolute;
          right:3px;
          bottom:3px;
          width: 20px;
          height:20px;
          background-repeat: no-repeat;
          @include bg-image("../img/favorite");
          background-size: 20px auto;
          background-position: center;
        }
        .quit-favorite{
          @include bg-image("../img/quit-favorite");
        }
      }
      .main-news{
        height:71px;
        .title{
          overflow: hidden;
          .icon-quality{
            color:#fff;
            font-size: 10px;
            background: #fdb140;
            padding: 1px 3px;
            text-align: center;
            margin-right: 5px;
            border-radius: 3px;
          }
          h2{
            font-size: 14px;
            color:#333;
            height:19px;
            line-height: 19px;
          }
        }
        .tip{
          overflow: hidden;
          font-size: 9px;
          color:#333;
          margin: 5px 0;
          .red{
            height:14px;
            width:50px;
            line-height:14px;
            font-size: 9px;
            margin-right: 5px;
            text-align: center;
            border:1px solid #ff0000;
          }
          .yellow{
            height:14px;
            width:50px;
            line-height:14px;
            margin-right: 5px;
            text-align: center;
            border:1px solid #fdb140;

          }
          .video{
            width: 20px;
            height:20px;
            background-repeat: no-repeat;
            @include bg-image("../img/video");
            background-size: 20px auto;
            background-position: center;
            margin-top: -3px;

          }
        }
        .tip-news{
          .proj-info{
            display: flex;
            flex-direction: row;
            li{
              flex: 1;
              display: block;
              color:#666;
              position: relative;
              .count{
                font-size: 13px;
                height:13px;
                text-align: center;
                span{
                 color:#3f83e6;
                }
              }
              .line{
                position: absolute;
                right:0;
                top:5px;
                border-right: 1px solid #dedede ;
                width:1px;
                height:22px;
              }
              em{
                font-size: 10px;
                font-style: normal;
                height:10px;
              }
            }
          }
        }

      }
    }
  }

</style>
