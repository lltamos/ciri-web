<template>
  <div class="investment-edit">
    <header class="clearfix">{{this.$route.query.title}}
      <i class="icon-back" @click="back"></i>
      <span class="submit" @click="back">提交</span>
    </header>
    <div class="remind">
      （请依据模板完善内容）
    </div>
    <div class="content">
      <textarea v-model="word" @mouseleave="fill()"></textarea>
    </div>


  </div>
</template>

<script>
  import HeaderBar from "@/components/base/header-bar/header-bar";
  import BottomImg from "@/components/base/bottomImg/bottomImg";
  import CrossLine from "@/components/base/cross-line/cross-line";
  import tool from "../../../../../api/tool"

  export default {
    name: "investment-edit",
    components: {
      HeaderBar,
      BottomImg,
      CrossLine
    },
    data() {
      return {
        word: '',
        key: ''
      };
    },
    methods: {
      back() {
        window.history.back()
      },
      fill(){
        sessionStorage.setItem(this.key, this.word);
      }
    },
    props: {

    },
    created() {
      this.key = this.$route.query.key;
      this.word = sessionStorage.getItem(this.key);
    },
    mounted() {

    }
  };
</script>

<style type="text/scss" lang="scss" scoped>
  @import "~@/assets/scss/mixin.scss";
  @import "~@/assets/scss/reset.scss";
  .investment-edit{
    text-align: left;
    header {
      height: 44px;
      line-height: 44px;
      font-size: 20px;
      color: #333;
      text-align: center;
      position: relative;
      border-bottom: 1px solid #dedede;
      .icon-back {
        display: block;
        float: left;
        width: 22px;
        height: 22px;
        margin: 11px auto;
        @include bg-image("../../../img/icon-back");
        background-size: 22px auto;
      }
      .submit{
        font-size: 16px;
        color: #528de8;
        float: right;
        margin-right: 10px;
      }

    }
    .remind{
      padding: 0px 5px;
      height:30px;
      overflow: hidden;
      line-height: 30px;
      background: #f5f5f5;
      margin: 15px 10px 15px;
      color: #528de8;
      font-size: 10px;
      border-radius: 2px;
    }
    .content{
      margin: 0 10px;
      textarea{
        width: 91%;
        height: 500px;
        border: 1px solid #dedede;
        border-radius: 3px;
        padding: 15px;
      }
    }

  }

</style>
