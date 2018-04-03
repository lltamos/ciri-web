<template>
  <div class="my-favorite">
    <header-bar text="收藏的项目" @back="back"></header-bar>
    <cross-line style="margin-top: 44px;"></cross-line>
    <div class="main">

      <div v-if="pros!=null" class="project" v-for="pro in pros" :key="pro.projId">

          <div class="img">
            <div class="icon-state">{{pro.status}}</div>
            <img v-bind:src="pro.url"  alt="" width="100%" height="100%">
            <i @click="favorite($event,pro.projId)" class="favorite icon-favorite"></i>
          </div>
          <div class="main-news">
            <div class="title">
              <div class="icon-quality fl">精品</div>
              <h2 class="fl">{{pro.name}}</h2>
            </div>
            <div class="tip">
              <div v-if="pro.tags!=null" class="f1" v-for="tag in pro.tags">
                <div class="fl red">{{tag}}</div>
              </div>

              <div class="video fl">
              </div>
            </div>

            <div class="tip-news">
              <ul class="proj-info" style="overflow:hidden;">
                <li class="proj-span1">
                  <div class="count"><span>{{pro.fund}}</span>万欧元</div>
                  <em>项目总投资</em>
                  <div class="line"></div>
                </li>
                <li class="proj-span2">
                  <div class="count"><span>{{pro.irr}}</span>%</div>
                  <em>预期年收益率</em>
                  <div class="line"></div>
                </li>
                <li class="proj-span3" style="background:0 0;">
                  <div class="count"><span>{{pro.potentialInvestor}}</span>位</div>
                  <em>意向投资方</em>
                </li>
              </ul>

            </div>
          </div>

      </div>



    </div>
    <div v-show="isMore" class="more">
      <span @click="loadMore">查看更多</span><i></i>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import tool from '@/api/tool'
  export default {
    components: {
      HeaderBar,
      CrossLine
    },
    data () {
      return {
        pageSize: 5,
        pageNum: 1,
        total: null,
        pros: null,
        isMore: false,
        proArray: [],
        proStr: null
      }
    },
    methods: {
      unfavorite(){
        this.proStr = '';
        for (let i = 0; i < this.proArray.length; i++) {
          this.proStr = this.proStr + ',' + this.proArray[i];
        }
        if (this.proStr.length === 0) {
          return;
        }
        this.proStr = this.proStr.substring(1);
        let param = new URLSearchParams();
        param.append('name', tool.getuser());
        param.append('projectIdsStr', this.proStr);
        param.append('typeFlag', 1);
        param.append('operationFlag', false);
        this.axios.post(tool.domind() + '/gateway/user/batchDealWithUserCollect', param)
          .then(res => {
            if (res.data.code === 200) {
              console.log(res.data);
            }
          });

      },
      back() {
        this.unfavorite();
        this.$router.push({
          path: this.$router.go(-1)
        })
      },
      favorite (e, projId) {
        let element = e.currentTarget;
        if (element.classList.contains('quit-favorite')){
          this.proArray.pop(projId);
          console.log(this.proArray);
        } else {
          this.proArray.push(projId);
          console.log(this.proArray);
        }
        element.classList.toggle('quit-favorite');
        element.classList.toggle('icon-favorite');
      },

      loadMore () {
        let param = new URLSearchParams();
        param.append('name', tool.getuser());
        param.append('pageSize', this.pageSize);//todo
        param.append('pageNum', this.pageNum);
        this.axios.post(tool.domind() + '/gateway/user/userCollectProjectInfo', param)
          .then(res => {
            if (res.data.code === 200) {
              if (this.pageNum === 1) {
                this.pros = res.data.data;
              } else {
                this.pros = this.pros.concat(res.data.data);
                this.total = res.data.total;
              }
            }
            this.isMore = this.pros.length != res.data.total;
            this.pageNum = this.pageNum + 1;
          });
      }

    },
    created() {
      this.loadMore();
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';
  .more {
    font-size: 12px;
    color: #3f80e9;
    margin-top: 20px;
    margin-bottom: 65px;
    text-align: center;
    i {
      display: inline-block;
      width: 12px;
      height: 12px;
      @include bg-image("../../news/img/more");
      background-size: 12px auto;
      margin-left: 6px;
    }
  }
  .main{
    .project{
      padding: 14px 10px 14px 130px;
      position: relative;
      @include onepx("bottom");
      .img{
        width:110px;
        height:71px;
        position: absolute;
        top:14px;
        left: 10px;
        .icon-state{
          position: absolute;
          left:5px;
          top:5px;
          font-size: 9px;
          color:#fff;
          background: #27caa0;
          border-radius: 3px;
          padding: 1px 2px;
          text-align: center;
        }
        .favorite{
          position: absolute;
          right:3px;
          bottom:3px;
          width: 20px;
          height:20px;
          background-repeat: no-repeat;
          @include bg-image("../img/favorite");
          background-size: 20px auto;
          background-position: center;
        }
        .quit-favorite{
          @include bg-image("../img/quit-favorite");
        }
      }
      .main-news{
        height:71px;
        .title{
          overflow: hidden;
          .icon-quality{
            color:#fff;
            font-size: 10px;
            background: #fdb140;
            padding: 1px 3px;
            text-align: center;
            margin-right: 5px;
            border-radius: 3px;
          }
          h2{
            font-size: 14px;
            color:#333;
            height:19px;
            line-height: 19px;
          }
        }
        .tip{
          overflow: hidden;
          font-size: 9px;
          color:#333;
          margin: 5px 0;
          .red{
            height:14px;
            width:50px;
            line-height:14px;
            font-size: 9px;
            margin-right: 5px;
            text-align: center;
            border:1px solid #ff0000;
          }
          .yellow{
            height:14px;
            width:50px;
            line-height:14px;
            margin-right: 5px;
            text-align: center;
            border:1px solid #fdb140;

          }
          .video{
            width: 20px;
            height:20px;
            background-repeat: no-repeat;
            @include bg-image("../img/video");
            background-size: 20px auto;
            background-position: center;
            margin-top: -3px;

          }
        }
        .tip-news{
          .proj-info{
            display: flex;
            flex-direction: row;
            li{
              flex: 1;
              display: block;
              color:#666;
              position: relative;
              .count{
                font-size: 13px;
                height:13px;
                text-align: center;
                span{
                 color:#3f83e6;
                }
              }
              .line{
                position: absolute;
                right:0;
                top:5px;
                border-right: 1px solid #dedede ;
                width:1px;
                height:22px;
              }
              em{
                font-size: 10px;
                font-style: normal;
                height:10px;
              }
            }
          }
        }

      }
    }

  }

</style>
