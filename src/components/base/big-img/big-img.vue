<template>
  <div id="big-img">
    <vue-preview :slides="slide1" @close="handleClose" class="structure-warp clearfix"></vue-preview>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        slide1: [
          {
            src: require('../../news/img/p_1.jpg'),
            msrc: require('../../news/img/p_1.jpg'),
            alt: 'picture1',
            title: '项目现场概况',
            w: 600,
            h: 400
          },
          {
            src: require('../../news/img/p_2.jpg'),
            msrc: require('../../news/img/p_2.jpg'),
            alt: 'picture2',
            title: '项目现场勘查',
            w: 600,
            h: 400
          },
          {
            src: require('../../news/img/p_1.jpg'),
            msrc: require('../../news/img/p_1.jpg'),
            alt: 'picture1',
            title: '项目现场概况',
            w: 600,
            h: 400
          },
          {
            src: require('../../news/img/p_2.jpg'),
            msrc: require('../../news/img/p_2.jpg'),
            alt: 'picture2',
            title: '项目现场勘查',
            w: 600,
            h: 400
          }
        ]
      }
    },
    methods: {
      handleClose () {
        console.log('close event')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/reset.scss';
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';
</style>
