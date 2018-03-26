<template>
  <div>
    <header-bar style="background:#3ba8f5" text="资讯详情" @back="back"></header-bar>
    <cross-line></cross-line>
    <div style="height: 20px ;width: auto;color: #f5f5f5"></div>
    <section style="margin: 28px">
      <h3 style="margin-top: 14px ;">2016年我国对外投资分析</h3>
      <div style="text-align: left">
        项目情报  2018年1月1日 CIRI  <img style="height: 17px;width: 24px" src="logo.png">400
      </div>
    </section>

    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import BottomImg from '@/components/base/bottomImg/bottomImg'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import tool from "../../api/tool";

  export default {
    name:'article',
    components: {
      HeaderBar,
      BottomImg,
      CrossLine
    },
    data(){
      return {
        content:"",
        clickCount:"",
        time:"",
        author:"",
        cid:"",
        article:this.article
      }
    },
    props:['article'],
    created() {
      this.axios.get(tool.get()+'gateway/app/news/article'+56).then(res=>{

      })
    },
  }
</script>

<style type="text/scss" scope lang="scss">

</style>
