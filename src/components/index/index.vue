<template>
  <div class="index">
    <header class="gradient">INDUSTRYC2C
      <i class="icon_search"></i>
    </header>
    <!-- 轮播图 -->
    <div class="slider" id="sliderIndex1">
      <mt-swipe :auto="3000">
        <mt-swipe-item><img src="../news/img/slider1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../news/img/slider2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../news/img/slider3.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="today-announce">
      <i class="icon-anno"></i>
      <div class="anno">
        <em>今日公告：</em>
        <div id="box">
          <ul id="con1" ref="con1" :class="{anim:animate==true}">
            <li v-for='item in items'>{{item.name.length>15 ? item.name.substr(0,15)+'...' :item.name }}</li>
          </ul>
        </div>
      </div>
    </div>
    <CrossLine></CrossLine>
    <div class="index-industry">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide style="margin-right: 0">
          <i class="icon-renewable"></i>
          <span>可再生能源</span>
        </swiper-slide>
        <swiper-slide style="margin-right: 0">
          <i class="icon-Infra"></i>
          <span>基础设施</span>
        </swiper-slide>
        <swiper-slide>
          <i class="icon-forestry"></i>
          <span>农林牧渔</span>
        </swiper-slide>
        <swiper-slide>
          <i class="icon-fuelgas"></i>
          <span>供水燃气</span>
        </swiper-slide>
        <swiper-slide>
          <i class="icon-building"></i>
          <span>建筑建材</span>
        </swiper-slide>
        <swiper-slide>
          <i class="icon-Petroleum"></i>
          <span>石油化工</span>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <CrossLine></CrossLine>

    <router-link to="/index/successful-cases">to successful-cases</router-link>
    <router-link to="/index/project-recommend">to project-recommend</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar></tab-bar>
  </div>

</template>

<script>
  import TabBar from '@/components/base/tab-bar/tab-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
    export default {
      components: {
        TabBar,
        CrossLine
      },
      data () {
        return {
          //今日公告
          animate:false,
          items:[
            {name:"伊朗恰巴哈尔10MW光伏电站项目隆重签约！"},
            {name:"伊朗扎布尔500MW风电电站项目融资中！"},
            {name:"伊朗恰巴哈尔10MW光伏电站项目隆重签约！"}
          ],
          //行业分类滑动
          swiperOption: {
            slidesPerView: 3,
            spaceBetween: 0,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          }
        }
      },
      created(){
        //今日公告
        setInterval(this.scroll,2000)
      },
      methods: {
        //今日公告
        scroll() {
          this.animate = true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
          setTimeout(() => {      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
            this.items.push(this.items[0]);  // 将数组的第一个元素添加到数组的
            this.items.shift();               //删除数组的第一个元素
            this.animate = false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
          }, 1000)
        }
      }
    }
</script>
<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/index.scss';

  .index {
    header{
      height:44px;
      line-height: 44px;
      color:#fff;
      font-size: 20px;
      text-align: center;
      position: relative;
      .icon_search{
        display: block;
        height:22px;
        width:22px;
        @include bg-image('../news/img/search');
        background-size: 22px auto;
        position: absolute;
        right:10px;
        top:11px;

      }
    }
    .slider{
      touch-action: none;
      height: 150px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .today-announce{
      text-align: left;
      padding: 0 10px;
      height:30px;
      line-height: 30px;
      i.icon-anno{
        display: inline-block;
        height:30px;
        width:16px;
        @include bg-image('./img/icon-anno');
        background-size: 16px auto;
        background-position: center;
        background-repeat: no-repeat;
        margin-right: 7px;
      }
      .anno{
        display: inline-block;
        font-size: 11px;
        height:30px;
        line-height: 30px;
        padding-left: 65px;
        position: relative;
        em{
          font-style: italic;
          color:#f5435d;
          position: absolute;
          left: 0px;
          top:0;

        }
        #box{
          overflow: hidden;
          display: inline-block;
          color:#010101;
          height: 30px;
        }
        .anim{
          transition: all 0.5s;
          margin-top: -30px;
        }
        #con1{
          li{
            list-style: none;
            line-height: 30px;
            height: 30px;
          }
        }
      }
    }
    .index-industry{
      height:59px;
      padding: 9px 10px;
      i {
        display: block;
        width: 37px;
        height: 37px;
        margin:auto;
        background-size: 37px auto;
        background-repeat: no-repeat;
      }
      .icon-renewable{
        @include bg-image("./img/icon-renewable");
      }
      .icon-Infra{
        @include bg-image("./img/icon-Infra");
      }
      .icon-forestry{
        @include bg-image("./img/icon-forestry");
      }
      .icon-fuelgas{
        @include bg-image("./img/icon-fuelgas");
      }
      .icon-building{
        @include bg-image("./img/icon-building");
      }
      .icon-Petroleum{
        @include bg-image("./img/icon-Petroleum");
      }
      span {
        display: block;
        font-size: 15px;
        height:15px;
        line-height: 15px;
        margin-top: 8px;
      }
    }

  }
</style>
