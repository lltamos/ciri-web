<template>
  <div class="index">
    <header class="gradient">INDUSTRYC2C
      <i class="icon_search"></i>
    </header>
    <!-- 轮播图 -->
    <div  class="slider" id="sliderIndex1">
      <mt-swipe :auto="3000" v-if="topsbanner!=null">
        <mt-swipe-item  v-for="banner in topsbanner" :key="banner.id">
          <router-link :to="{path:'/news/news-detail/',query: {id: banner.id}}">
            <img @click="toArticle(banner.id)" v-lazy="host+banner.thumbnail" alt=""/>
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="today-announce">
      <i class="icon-anno"></i>
      <div class="anno">
        <em>今日公告：</em>
        <div id="box">
          <ul id="con1" ref="con1" :class="{anim:animate==true}">
            <li v-for='item in lastnotify'>{{item.title.length>15 ? item.title.substr(0,15)+'...' :item.title }}</li>
          </ul>
        </div>
      </div>
    </div>
    <CrossLine></CrossLine>
    <div id="index-industry">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide style="margin-right: 0">
          <div class="slide-warp" @click="changeIndustry(1)">
            <i class="icon-renewable"></i>
            <span>可再生能源</span>
          </div>
        </swiper-slide>
        <swiper-slide style="margin-right: 0">
          <div class="slide-warp" @click="changeIndustry(2)">
            <i class="icon-Infra"></i>
            <span @click="changeIndustry(2)">基础设施</span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-warp" @click="changeIndustry(3)">
            <i class="icon-forestry"></i>
            <span @click="changeIndustry(3)">农林牧渔</span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-warp" @click="changeIndustry(4)">
            <i class="icon-fuelgas"></i>
            <span @click="changeIndustry(4)">供水燃气</span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-warp" @click="changeIndustry(5)">
            <i class="icon-building"></i>
            <span @click="changeIndustry(5)">建筑建材</span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-warp" @click="changeIndustry(6)">
            <i class="icon-Petroleum"></i>
            <span @click="changeIndustry(6)">石油化工</span>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <CrossLine></CrossLine>
    <div class="tab-warp">
      <div class="tab-project">
        <div class="recommend fl tab-box" :class="{active:tabActive==1}" @click="changePanel(1)">项目推荐</div>
        <div class="case fl tab-box" :class="{active:tabActive==2}" @click="changePanel(2)">成功案例</div>
      </div>
      <div class="pro-recommend">
        <ProjectRecommend :tabPanel="this.tabActive"
                          :industryCategory="this.industryCategory"

        ></ProjectRecommend>
      </div>
    </div>
    <CrossLine></CrossLine>
    <div class="feedback">
      <div class="title">
        <i class="icon-feed"></i>
        <span>意见反馈</span>
      </div>
      <div class="heart">
        <div class="hear_txt clearfix">
          <div class="left crowdimg">
          </div>
          <div id="crowdtext">
            <p style="height:18px;line-height: 18px;font-size: 13px;color:#333;">
              您好，您对海外项目有任何问题或者有什么建议都可以留言给我们。我们会及时与您联系！</p>
            <div style="text-align: right;margin-top:20px; ">
              <span
                style="display: inline-block;border-bottom: 1px solid #ccc;width: 80px;margin-right: 8px;margin-bottom: 5px;"></span>
              <span style="color:#333;font-size: 14px">Javi</span>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="heart_comment clearfix">
          <textarea id="fdContent" class="tit_inp" placeholder="请输入问题或建议" v-model="homeContent1"></textarea>
          <input id="fdContact" type="text" placeholder="请输入联系方式" class="in_phone" v-model="homeContact">
          <div id="feedbackAction" class="btn" @click="indexFeedBack">提交</div>
        </div>
      </div>
    </div>
    <CrossLine></CrossLine>
    <div class="contact-way clearfix">
      <div class="fl msg">
        <div class="logo"></div>
        <p>北京中工源合信息科技有限公司</p>
        <p class="mb25">中国领先的海外产业投资综合服务商</p>
        <p>商业合作：136 0131 5595（Mr Zhang）</p>
        <p class="mb16">合作邮箱：support@bjciri.com</p>
      </div>
      <div class="fr qr-warp">
        <div class="qrimg"></div>
        <div class="qr-des">源合网订阅号</div>
      </div>
    </div>
    <tab-bar></tab-bar>
  </div>

</template>

<script>
  import TabBar from '@/components/base/tab-bar/tab-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import ProjectRecommend from '@/components/base/project-recommend/project-recommend'
  import {Toast} from 'mint-ui'
  import {MessageBox} from 'mint-ui'
  import tool from "../../api/tool";

  export default {
    components: {
      TabBar,
      CrossLine,
      ProjectRecommend
    },
    data() {
      return {
        category:null,
        host: tool.oos(),
        animate: false,
        lastnotify: [],
        topsbanner: [],
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 0,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        tabActive: 1,
        homeContent1:'',
        homeContact: ''
      }
    },
    computed: {
      industryCategory: function () {
        return this.category;
      }
    },
    mounted() {
      //今日公告
      setInterval(this.scroll, 2000);
      this.$api.post('/pb/i/fethomescene', {lang: 0, rouCount: 5}).then(r => {
        this.lastnotify = r.data.lastnotify;
        this.topsbanner = r.data.topsbanner;
      });
    },
    methods: {
      //今日公告
      scroll() {
        this.animate = true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(() => {      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
          this.animate = false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        }, 1000)
      },
      changeIndustry(category) {
        this.category = category;
      },
      changePanel(tab) {
        this.tabActive = tab;
      },
      indexFeedBack(){
        if(!this.homeContent1){
          Toast({
            message: '请输入问题或建议',
            duration: 5000
          });
          return;
        }
        //验证手机号
        let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!this.homeContact) {
          Toast({
            message: '手机号不能为空',
            duration: 5000
          });
          return;
        } else if (!reg.test(this.homeContact)) {
          Toast({
            message: '手机号错误',
            duration: 5000
          });
          return;
        }
        let param = tool.buildForm([
          { key: "contact", v: this.homeContent1 },
          { key: "content", v: this.homeContact }
        ]);
        this.axios.post(tool.domind()+'/gateway/app/feedback',param).then(res => {
          if (res.data.code === 200) {
            MessageBox({
              message: '提交成功，我们会尽快联系您！',
              showCancelButton: false
            });
            this.homeContent1 = "";
            this.homeContact = "";
          }
        }).catch(err => {
          alert(err);
        })
      }
    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/index.scss';

  .index {

    header {
      height: 44px;
      line-height: 44px;
      color: #fff;
      font-size: 20px;
      text-align: center;
      position: relative;

      .icon_search {
        display: block;
        height: 22px;
        width: 22px;
        @include bg-image('../news/img/search');
        background-size: 22px auto;
        position: absolute;
        right: 10px;
        top: 11px;

      }

    }
    .slider {
      touch-action: none;
      height: 150px;

      img {
        width: 100%;
        height: 100%;
      }

    }
    .today-announce {
      text-align: left;
      padding: 0 10px;
      height: 30px;
      line-height: 30px;

      i.icon-anno {
        display: inline-block;
        height: 30px;
        width: 16px;
        @include bg-image('./img/icon-anno');
        background-size: 16px auto;
        background-position: center;
        background-repeat: no-repeat;
        margin-right: 7px;
      }

      .anno {
        display: inline-block;
        font-size: 11px;
        height: 30px;
        line-height: 30px;
        padding-left: 65px;
        position: relative;

        em {
          font-style: italic;
          color: #f5435d;
          position: absolute;
          left: 0px;
          top: 0;

        }

        #box {
          overflow: hidden;
          display: inline-block;
          color: #010101;
          height: 30px;
        }

        .anim {
          transition: all 0.5s;
          margin-top: -30px;
        }

        #con1 {

          li {
            list-style: none;
            line-height: 30px;
            height: 30px;
          }

        }
      }
    }
    #index-industry {
      height: 59px;
      padding: 9px 10px;

      i {
        display: block;
        width: 37px;
        height: 37px;
        margin: auto;
        background-size: 37px auto;
        background-repeat: no-repeat;
      }

      .icon-renewable {
        @include bg-image("./img/icon-renewable");
      }

      .icon-Infra {
        @include bg-image("./img/icon-Infra");
      }

      .icon-forestry {
        @include bg-image("./img/icon-forestry");
      }

      .icon-fuelgas {
        @include bg-image("./img/icon-fuelgas");
      }

      .icon-building {
        @include bg-image("./img/icon-building");
      }

      .icon-Petroleum {
        @include bg-image("./img/icon-Petroleum");
      }

      span {
        display: block;
        font-size: 15px;
        height: 15px;
        line-height: 15px;
        margin-top: 8px;
      }

    }
    .tab-warp {
      @include onepx('bottom');

      .tab-project {
        height: 40px;
        line-height: 40px;
        margin: auto;
        display: table;
        font-size: 16px;
        .tab-box {
          color: #333;
          &.active {
            color: #3f83e6;
            @include bottom-bar();
          }
        }
        .recommend {
          @include right-bar();
        }

        .case {
          margin-left: 35px;

        }

      }
    }
    .feedback {

      .title {
        position: relative;
        height: 40px;
        line-height: 1;
        padding-left: 10px;
        @include onepx('bottom');

        .icon-feed {
          display: block;
          width: 20px;
          height: 40px;
          @include bg-image('./img/icon-feed');
          background-size: 20px auto;
          background-position: center;
          background-repeat: no-repeat;
        }

        span {
          font-size: 16px;
          color: #333;
          position: absolute;
          top: 12px;
          left: 39px;
        }

      }
      .heart {

        .title_enter {
          position: relative;
          color: #333;
          font-size: 16px;
          line-height: 16px;
          margin-bottom: 24px;
          margin-top: 25px;
          text-align: left;
        }

        .hear_txt {
          padding: 0 10px;
          padding-top: 9px;

          .left {
            padding-right: 3%;
            margin-right: 3%;
            text-align: center;
            border-right: 1px solid #d9d6e8;
            float: left;
            width: 18%;
          }

          .crowdimg {
            display: inline-block;
            width: 55px;
            height: 55px;
            background-size: 55px auto;
            @include bg-image("./img/javi");
            background-repeat: no-repeat;
          }

          #crowdtext {
            float: right;
            width: 75%;
            color: #333;
            font-size: 13px;
          }

          .clear {
            clear: both;
          }

        }
        .heart_comment {
          padding: 0 10px;
          font-size: 13px;
          color: #999;

          .in_phone {
            outline: 0;
            width: 92%;
            height: 36px;
            line-height: 16px;
            border: 1px solid #dedede;
            border-radius: 3px;
            padding: 0 3.4%;
            margin-top: 11px;
            margin-bottom: 13px;
          }

          .tit_inp {
            margin-top: 13px;
            width: 92%;
            background: #fff;
            outline: 0;
            border: 1px solid #dedede;
            border-radius: 3px;
            padding: 3.4%;
            line-height: 16px;
            height: 101px;
            resize: none;
            font-family: "Microsoft Yahei";
          }

          #feedbackAction {
            width: 113px;
            height: 35px;
            line-height: 35px;
            float: right;
            margin-bottom: 17px;
          }

        }
      }
    }
    .contact-way {
      padding: 14px 11px 9px;
      margin-bottom: 50px;

      .msg {
        text-align: left;

        .logo {
          display: inline-block;
          height: 30px;
          width: 162px;
          @include bg-image('./img/ciri-logo');
          background-size: 162px 30px;
          margin-bottom: 8px;
        }

        p {
          font-size: 13px;
          color: #333;
          line-height: 1;
          margin-bottom: 7px;
        }

        .mb25 {
          margin-bottom: 20px;
        }

      }
      .qr-warp {
        margin-top: 14px;

        .qrimg {
          display: inline-block;
          height: 89px;
          width: 89px;
          @include bg-image('./img/icon-qr');
          background-size: 89px auto;
        }

        .qr-des {
          margin-top: 10px;
          font-size: 12px;
          color: #333;
          line-height: 1;
        }

      }

    }

  }
</style>
