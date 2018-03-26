<template>
  <div class="project">
    <div class="img">
      <img src="../../img/p_1.jpg" alt="" width="100%">
    </div>
    <div class="main-news">
      <router-link to="/news-detail"><h2>中国首条海外氧化铝生产线竣工 魏桥印尼投资建设</h2></router-link>
      <div class="summary">5月21日上午，印度尼西亚西加里曼丹省可达邦县肯达望甘镇宏发韦力氧化铝厂，在这...

      </div>
      <div class="view">
        <i></i>
        <span>336</span>
      </div>
      <div class="time">
        2018年1月11日

      </div>
    </div>
  </div>

</template>

<script>

  export default {
    components: {
    },
    data () {
      return {
      }
    },
    props: {},
    watch: {},
    methods: {

    },
    filters: {},
    computed: {},
    created () {
    },
    mounted () {},
    destroyed () {}
  }
</script>

<style lang="scss" scoped>
  .project{
    padding: 10px 10px 10px 146px;
    position: relative;
    height:92px;
    text-align: left;
    .img{
      width: 126px;
      height:82px;
      position: absolute;
      top:10px;
      left: 10px;
    }
    .main-news{
      h2{
        font-size: 13px;
        color:#333;
        line-height: 15px;
        height:30px;
        overflow: hidden;
      }
      .summary{
        font-size: 11px;
        color:#666;
        height:28px;
        line-height: 14px;
        margin: 3px 0 ;
      }

    }
  }

</style>
