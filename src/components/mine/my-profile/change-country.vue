<template>
  <div class="change-country">
    <header-bar text="修改国家" @back="back"></header-bar>
    <cross-line style="margin-top: 44px;"></cross-line>
    <div class="main">
      <div class="change">
        <div class="fl" v-text="chooseCountry">请选择国家</div>
        <div class="fr">
          <i :class="showCountry" @click="Country"></i>
        </div>
      </div>
      <div class="country-warp" v-show="show">
        <div class="country" @click="choose($event ,item)" v-for="item in country" :key="item">
          {{item}}
        </div>
      </div>




    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  export default {
    components: {
      HeaderBar,
      CrossLine
    },
    data(){
      return {
        showCountry : 'show-country',
        show : true,
        country : ['中国','日本','韩国'],
        chooseCountry :'请选择国家'
      }
    },
    methods: {
      back() {
        this.$router.push({
          path: this.$router.go(-1)
        })
      },
      Country () {
        this.show = !this.show
        if(this.show){
          this.showCountry= 'show-country';
        }else {
          this.showCountry= 'hide-country';
        }
      },
      choose (e ,item) {
        //获取当前值
        console.log(item);
        this.chooseCountry = item;

      }


    },
    created () {
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';
  .main{
    margin: 0 10px;
    background: #fff;
    text-align: left;
    border:1px solid #dedede;
    border-bottom: none;
    color:#333;
    .change{
      overflow: hidden;
      height:35px;
      line-height: 35px;
      border-bottom:1px solid #dedede;
      font-size: 13px;
      padding: 0 15px;
      i{
        display: block;
        float:right;
        width: 18px;
        height: 35px;
        background-repeat: no-repeat;
        background-size: 18px auto;
        background-position: center;

      }
      .show-country{
        @include bg-image("../img/show-country");
      }
      .hide-country{
        @include bg-image("../img/hide-country");
      }
    }
    .country{
      height:40px;
      line-height: 40px;
      padding:0 15px;
      border-bottom: 1px dashed #dedede;
      font-size: 14px;
    }
  }
</style>
