<template>
<div class="home">
  <!-- 轮播图 -->
  <div class="slider" id="slider1">
    <mt-swipe :auto="3000" @change="handleChange">
      <mt-swipe-item v-for="item in swipeImg" :key="item.pic">
        <img :src="item.pic">
      </mt-swipe-item>
    </mt-swipe>
  </div>
  <div class="slider" id="slider2">
    <mt-swipe :auto="3000" @change="handleChange" :show-indicators="false">
      <mt-swipe-item v-for="item in swipeTitle" :key="item.title">
        <p style="z-index: 999;position: absolute;" v-text="item.title"> </p>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</div>
</template>

<script>
    export default {
       component: {

       },
      data () {
         return {
           //轮播图片 文字
           swipeImg: [
             {
               pic: require('../img/slider1.jpg')
             },
             {
               pic: require('../img/slider2.jpg')
             },
             {
               pic: require('../img/slider3.jpg')
             },
             {
               pic: require('../img/slider4.jpg')
             },
             {
               pic: require('../img/slider5.jpg')
             }
           ],
           swipeTitle: [
             {
               title: '中国首条海外氧化铝生产线竣工中国首条海外氧化铝生产线竣工中国首条海外氧化铝生产线竣工中国首条海外氧化铝111'
             },
             {
               title: '中国首条海外氧化铝生产333'
              },
             {
               title: '中国首条海外氧化铝生产4444'
             },
             {
               title: '中国首条海外氧化铝生产555'
             },
             {
               title: '中国首条海外氧化铝生产6666'
             }
           ]
         }
      },
      methods: {
        handleChange(index) {
        }
      }
    }
</script>

<style lang="scss" scoped>
  .home{
    .slider {
      height: 186px;
      font-size: 30px;
      text-align: center;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    #slider1{
      .mint-swipe-indicators{
        right:10px;
      }
    }
    #slider2{
      font-size: 14px;
      color:#fff;
      height:36px;
      line-height: 18px;
      margin-top: -80px;
      padding: 0 10px;
    }
  }

</style>
