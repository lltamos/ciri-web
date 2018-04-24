<template>
  <div  id="big-img">
    <vue-preview v-if="this.imgList!=null" :slides="this.imgList" @close="handleClose" class="structure-warp clearfix"></vue-preview>
  </div>
</template>
<script>
  import tool from '../../../api/tool'

  export default {
    data() {
      return {

        slide1: []
      }
    },
    methods: {
      handleClose() {
      }
    },
    props: {
      content: Array
    },
    computed: {

      imgList: {
        get:function () {
          this.imgList = [];
          if (this.content==null){
            return null
          }
          this.content.forEach( v=> {
            let url = v.name;
            let remoteUrl = tool.generatorUrl(url);
            let j = {
              src: remoteUrl,
              msrc: remoteUrl,
              alt: 'picture1',
              title: '',
              w: 600,
              h: 400
            };
            this.slide1.push(j);
          });
          return this.slide1;
        },
        set:function () {}
      }
    },

    created() {
    },
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/reset.scss';
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';
</style>
