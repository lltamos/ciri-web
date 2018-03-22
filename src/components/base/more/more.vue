<!-- 顶部栏 组件 -->

<template>
  <div class="more-bar">
    <router-link :to=to><i class="icon-more"></i></router-link>
    <h1>{{text}}</h1>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        object:this.object,
      }
    },
    props: {
      text: {
        type: String,
        default: '商家列表'
      },
      to: {
        type: String,
        default: 'login'
      }
    },
    watch: {},
    methods: {
      back () {
        this.$emit('back')
      }
    },
    filters: {},
    computed: {},
    created () {},
    mounted () {}
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .more-bar {
    height: 30px;
    background: #fff;
    padding: 9px 10px 0;
    i {
      display: block;
      float:right;
      width: 20px;
      height: 20px;
      background: url('../img/more.png') no-repeat;
      background-size: 20px auto;
    }
    .icon-more {
      background-image: url('../img/more.png');
    }
    h1 {
      display: inline-block;
      text-align: left;
      font-size: 15px;
      color: #333;
      font-weight: normal;
    }
  }
</style>
