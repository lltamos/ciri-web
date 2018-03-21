<template>
  <div class="index">
    <p>{{message}}</p>
    <tab-bar></tab-bar>
  </div>

</template>

<script>
  import TabBar from '@/components/base/tab-bar/tab-bar'
    export default {
      components: {
        TabBar
      },
      data () {
        return {
          message: 'Hello Vue!'
        }
      }
    }
</script>
<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .index {
    .slider {
      height: 170px;
      font-size: 30px;
      text-align: center;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .types {
      overflow: hidden;
      padding-bottom: 20px;
      background-color: #fff;
    }
    .nearby {
      margin-bottom: 50px;
      background-color: #fff;
    }
  }
</style>
