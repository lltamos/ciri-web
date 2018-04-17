<template>
  <div class="successful-cases">
    <div class="pro-card">
      <div class="co-investing">
        合投中
      </div>
      <div class="img">
        <img src="../../base/img/p_1.jpg" alt="">
      </div>
      <div class="main-news">
        <div class="title">
          <div class="icon-quality fl">精品</div>
          <h2 class="fl">伊朗专业垃圾处理厂建设项目</h2>
          <div class="thumbs-up fr">
            <i class="icon-dianzan"></i>
            <span class="count-warp">看好</span>
            <span class="count">(2)</span>
          </div>
        </div>
        <div class="tip">
          <div class="f1">
            <div class="fl red">高收益</div>
          </div>
          <div class="f1">
            <div class="fl red">建设期短</div>
          </div>
          <div class="video fl"></div>
        </div>
        <ul class="proj-info">
          <li>
            <em><i class="large">7200</i>万美金</em>
            <span>项目总投资</span>
            <div class="fg-line"></div>
          </li>
          <li>
            <em><i class="large">32%</i>万美金</em>
            <span>预期收益率</span>
            <div class="fg-line"></div>
          </li>
          <div class="svg-circle fr">
            <div class="row" style="top:-105px">
              <div class="pie_progress pie_progress1" role="progressbar" data-goal="100" data-barsize="10" data-barcolor="#3699ea" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100">
                <div class="pie_progress1 svg_jdft">30%</div>
                <div class="pie_progress2 svg_jdft">融资中</div>
                <div class="pie_progress__svg">
                  <svg version="1.1" preserveAspectRatio="xMinYMin meet" viewBox="0 0 160 160">
                    <ellipse rx="75" ry="75" cx="80" cy="80" stroke="#f2f2f2" fill="none" stroke-width="10"></ellipse>
                    <path fill="none" stroke-width="10" stroke="#3699ea" d="M80,5 A75,75 0 1 1 79.99952876110194,5.000000001480444" style="stroke-dasharray: 471.305px, 471.305px; stroke-dashoffset: 0px;"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </ul>
        <div class="tip-news">
          <i class="loc"></i>
          <span class="country">伊朗</span>
          <i class="indu"></i>
          <span class="industry">新能源</span>
          <i class="mold"></i>
          <span class="genre">绿地投资</span>
          <i class="view"></i>
          <span class="count">1000</span>

        </div>
      </div>

    </div>
    <div class="pro-card">
      <div class="co-investing">
        合投中
      </div>
      <div class="img">
        <img src="../../base/img/p_1.jpg" alt="">
      </div>
      <div class="main-news">
        <div class="title">
          <div class="icon-quality fl">精品</div>
          <h2 class="fl">伊朗专业垃圾处理厂建设项目</h2>
          <div class="thumbs-up fr">
            <i class="icon-dianzan"></i>
            <span class="count-warp">看好</span>
            <span class="count">(2)</span>
          </div>
        </div>
        <div class="tip">
          <div class="f1">
            <div class="fl red">高收益</div>
          </div>
          <div class="f1">
            <div class="fl red">建设期短</div>
          </div>
          <div class="video fl"></div>
        </div>
        <ul class="proj-info">
          <li>
            <em><i class="large">7200</i>万美金</em>
            <span>项目总投资</span>
            <div class="fg-line"></div>
          </li>
          <li>
            <em><i class="large">32%</i>万美金</em>
            <span>预期收益率</span>
            <div class="fg-line"></div>
          </li>
          <div class="svg-circle fr">
            <div class="row" style="top:-105px">
              <div class="pie_progress pie_progress1" role="progressbar" data-goal="100" data-barsize="10" data-barcolor="#3699ea" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100">
                <div class="pie_progress1 svg_jdft">30%</div>
                <div class="pie_progress2 svg_jdft">融资中</div>
                <div class="pie_progress__svg">
                  <svg version="1.1" preserveAspectRatio="xMinYMin meet" viewBox="0 0 160 160">
                    <ellipse rx="75" ry="75" cx="80" cy="80" stroke="#f2f2f2" fill="none" stroke-width="10"></ellipse>
                    <path fill="none" stroke-width="10" stroke="#3699ea" d="M80,5 A75,75 0 1 1 79.99952876110194,5.000000001480444" style="stroke-dasharray: 471.305px, 471.305px; stroke-dashoffset: 0px;"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </ul>
        <div class="tip-news">
          <i class="loc"></i>
          <span class="country">伊朗</span>
          <i class="indu"></i>
          <span class="industry">新能源</span>
          <i class="mold"></i>
          <span class="genre">绿地投资</span>
          <i class="view"></i>
          <span class="count">1000</span>

        </div>
      </div>

    </div>
    <div class="more">
      <span v-text="moreText">查看更多</span><i></i>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        moreText : '查看更多'
      }
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
  .successful-cases{
    padding: 0px 10px 20px;
    .pro-card{
      height:385px;
      width:100%;
      margin-top: 14px;
      border-radius: 3px;
      overflow: hidden;
      box-shadow:0px 7px 15px #ccc;
      -webkit-box-shadow:0px 7px 15px #ccc;
      position: relative;
      .co-investing{
        position:absolute;
        top:0;
        left:10px;
        width: 50px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        background-repeat: no-repeat;
        @include bg-image("../img/co-investing");
        background-size: 50px 32px;
        background-position: center;
        font-size: 12px;
        color:#fff;
      }
      .img{
        height:233px;
        width:100%;
        img{
          width:100%;
          height:100%;
        }

      }
      .main-news {
        height:152px;
        box-sizing: border-box;
        position: relative;
        padding: 15px 10px;
        .title {
          overflow: hidden;
          .icon-quality {
            color: #fff;
            font-size: 10px;
            background: #fdb140;
            padding: 1px 3px;
            text-align: center;
            margin-right: 5px;
            border-radius: 3px;
          }
          h2 {
            font-size: 14px;
            color: #333;
            height: 19px;
            line-height: 19px;
          }
          .thumbs-up{
            border:1px solid #dedede;
            border-radius: 20px;
            color:#999;
            padding: 0 5px;
            font-size: 10px;
            line-height: 1;
            .icon-dianzan{
              display: inline-block;
              width: 9px;
              height: 9px;
              background-repeat: no-repeat;
              background-size: 9px auto;
              background-position: center;
              @include bg-image("../img/thumb-up");
              vertical-align: middle;
            }
            .count-warp{
              display: inline-block;
              height: 20px;
              line-height: 20px;
            }
            .count{
              font-size: 7px;
            }
          }


        }
        .tip {
          overflow: hidden;
          font-size: 9px;
          color: #333;
          margin-top: 11px;

          .red {
            height: 14px;
            width: 50px;
            line-height: 14px;
            font-size: 9px;
            margin-right: 5px;
            text-align: center;
            border: 1px solid #ff0000;
          }

          .yellow {
            height: 14px;
            width: 50px;
            line-height: 14px;
            margin-right: 5px;
            text-align: center;
            border: 1px solid #fdb140;

          }

          .video {
            width: 20px;
            height: 20px;
            background-repeat: no-repeat;
            @include bg-image("../../base/img/video");
            background-size: 20px auto;
            background-position: center;
            margin-top: -3px;

          }

        }
        .tip-news{
          height:10px;
          position: absolute;
          bottom: 15px;
          left: 10px;
          i{
            display: block;
            float:left;
            margin-right: 6px;
            width:10px;
            height:10px;
            background-size: 10px auto;
          }
          .loc{
            @include bg-image("../../base/img/location");
          }
          .indu{
            @include bg-image("../../base/img/industry");
          }
          .mold{
            @include bg-image("../../base/img/mold");
          }
          .view{
            @include bg-image("../../base/img/view");
          }

          span{
            float: left;
            margin-right: 10px;
            font-size: 10px;
            line-height: 1;
            color:#666;
            margin-top: 1px;
          }
        }
        .proj-info{
          text-align: center;
          li{
            float: left;
            font-size: 12px;
            color:#777;
            padding:0 8%;
            position: relative;
            margin: 13px 0;
            @media screen and(min-width: 320px)and(max-width: 374px){
              padding:0 6%;
            }
            .fg-line{
              position: absolute;
              height:25px;
              width:1px;
              background: #dedede;
              top:8px;
              right:0;
            }

            em{
              i{
                color:#3f83e6;
                font-size: 16px;
                font-style: normal;
              }
            }
            span{
              display: block;
              height:12px;
              line-height: 1;
              margin-top: 3px;
            }
          }
          li:first-child{
            padding-left: 0;
          }
          li:last-child{
            padding-right: 0;
          }
          .svg-circle{
            margin-top: -8px;
            margin-right: 2%;
            .pie_progress{
              width:60px;
              text-align: center;
              position: relative;
              .svg_jdft{
                font-size: 10px;
                color:#333;
                width: 100%;
                position: absolute;
                left: 0;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                -o-transform: translateY(-50%);
                transform: translateY(-50%);
              }
              .pie_progress1{
                top: 40%;
              }
              .pie_progress2{
                top: 60%;
              }
            }
          }
        }
      }
    }
    .more {
      font-size: 12px;
      color: #3f80e9;
      margin-top: 20px;
      text-align: center;

      i {
        display: inline-block;
        width: 12px;
        height: 12px;
        @include bg-image("../../news/img/more");
        background-size: 12px auto;
        margin-left: 6px;
      }
    }
  }

</style>
