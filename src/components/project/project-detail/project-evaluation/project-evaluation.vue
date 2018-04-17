<template>
    <div class="pro-evaluat">
      <ul class="eval-tab">
        <router-link tag="li" to="/project/project-detail/project-evaluation/project-introduction">项目介绍</router-link>
        <router-link tag="li" to="/project/project-detail/project-evaluation/project-file">项目文件</router-link>
        <router-link tag="li" to="/project/project-detail/project-evaluation/feasibility-analysis">可行性分析</router-link>
        <router-link tag="li" to="/project/project-detail/project-evaluation/project-developer">项目开发商</router-link>
      </ul>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {}
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
  .pro-evaluat{
    .eval-tab{
      margin:8px 10px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      display: flex;
      flex-direction: row;
      li{
        flex: 1;
        font-size: 13px;
        color: #666;
        display: block;
        border-radius: 3px;
        position: relative;
        @include right-bar(-11px,13px);
        margin-right: 22px;
        &:last-child{
          margin-right: 0px;
          border-right: none;

        }
        &:after{
          top:6px;
        }
      }
      li.router-link-active{
        background: #3f83e6;
        color:#fff;
      }
    }
  }

</style>
