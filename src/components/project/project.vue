<template>
  <div class="project-list">
    <div class="banner" id="bannerScroll">
      <div class="img">
        <img src="../news/img/p_1.jpg" alt=""/>
      </div>
      <div class="search-warp" id="search-warp">
        <div class="search" :class="scrollSearch">
          <i class="icon-search"></i>
          <input type="text" placeholder="项目 投资人">
        </div>
      </div>
    </div>
    <!--本周推荐-->
    <div class="project-rec">
      <h4>
        <i class="left-line"></i><span>本周推荐</span>
      </h4>
      <ul class="recommdnd-warp clearfix">
        <router-link v-for="(project) in this.weekProjects" class="recommdnd-card" :key="project.projId"
                     :to="{path:'/project/project-land',query: {projId: project.projId}}" >
          <li class="">
            <div class="img">
              <img v-lazy="project.url" alt="">
            </div>
            <div class="main-news">
              <h2>{{project.name}}</h2>
              <div class="tip-news">
                <i class="indu fl"></i>
                <span class="industry fl">{{project.industryName}}</span>
                <span class="count fr">{{project.visit}}</span>
                <i class="view fr"></i>
              </div>
            </div>
          </li>
        </router-link>
      </ul>
      <CrossLine></CrossLine>
    </div>
    <div class="project">
      <h4>
        <i class="left-line"></i><span>全部项目</span>
      </h4>
      <div class="tab-warp">
        <ul class="tab" :class="searchBarFixed == true ? 'isFixed' :''">
          <li v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)">
            <span>{{item}}</span>
            <i></i>
          </li>
        </ul>

        <div class="pop-bg" v-show="popShow" @click="popSwitch"></div>
        <div class="tabCon" v-show="popShow" >
          <div class="content" v-for='(itemCon,index) in tabContents'
               v-show=" index == num" :key="index">
            <form @submit.prevent="submit">
              <ul>
                <li :id="all(index)" @click="allActive($event ,index)" :class="{active:activeSwitch}">全部
                  <input type="checkbox" value="全部"/>
                </li>
                <li v-for='(item,t) in itemCon' @click="liActive($event,item[0] ,index)" :id="t" :name="'li'+index" :key="t">{{item[1]}}
                  <input type="checkbox"/>
                </li>
              </ul>
              <div class="btn-warp clearfix">
                <button class="small-btn reset fl" @click="resetActive(index)">重置</button>
                <button class="small-btn confirm fr" @click="init1">确定</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Loading v-if="notloading"></Loading>
      <div class="main" v-else>
        <router-link v-for="(project) in this.projects" :key="project.projId"
                     :to="{path:'/project/project-land',query: {projId: project.projId}}" >
          <div class="pro-list">
            <div class="img">
              <!--<div class="icon-state">认证中</div>-->
              <img v-lazy="project.url" alt="">
              <i class="favorite icon-favorite"></i>
            </div>
            <div class="main-news">
              <div class="title">
                <div class="icon-quality fl" v-if="project.cornerTagName != null && project.cornerTagName != '无'">{{project.cornerTagName}}</div>
                <h2 class="fl">{{project.name.length>15?project.name.substr(0, 15) + '...' : project.name}}</h2></div>
              <div class="tip">
                <div v-if="project.tags != null" class="f1" v-for="(t, index) in project.tags" :key="index">
                  <div class="fl red">{{t}}</div>
                </div>
                <div v-show="project.projVideoStatus" class="video fl"></div>
              </div>
              <div class="maturity clearfix">
                <p>项目成熟度：<em>{{project.mature}}</em></p>
                <p>意向投资方：<em>{{project.investors}}位</em></p>
              </div>
              <div class="tip-news">
                <i class="loc"></i>
                <span class="country">{{project.countryName}}</span>
                <i class="indu"></i>
                <span class="industry">{{project.industryName}}</span>
                <i class="mold"></i>
                <span class="genre">{{project.constructionTypeName}}</span>
                <i class="view"></i>
                <span class="count">{{project.visit}}</span>
                <span class="thumb-up fr">{{project.likes}}</span>
                <i class="icon-thumbup fr"></i>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <button @click="loadMore()" :disabled="this.disabled" class="more">
        <span v-text="moreText">{{this.moreText}}</span><i v-show="isIcon"></i>
      </button>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/base/tab-bar/tab-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import Nationality from '@/components/base/nationality/nationality'
  import Loading from '@/components/base/loading/loading'
  import tool from "../../api/tool";
  export default {
    components: {
      TabBar,
      CrossLine,
      Nationality,
      Loading
    },
    data () {
      return {
        scrollSearch: 'fixed',
        searchBarFixed : false,
        popShow : false,
        tabs: ["国别", "行业","类型","进度"],
        tabContents:
          [
            [[3,"绿地投资"], [4,"项目出售"], [5,"项目扩建"], [6,"其他"]],
            [[0,"规划阶段"], [1,"概念阶段"], [2,"审批阶段"], [3,"可研阶段"], [4,"投融资阶段"], [5,"建设阶段"], [6,"运营阶段"], [7,"出售阶段"]]
          ],
        num: 5,
        isIcon: true,
        activeSwitch :true,
        liSwitch : false,
        //加载数据
        moreText: '查看更多',
        projects: null,
        weekProjects : null,
        pageId: 1,
        status: [7],
        tag: [101001, 101002],
        disabled: false,
        notloading: true,
        countryList : [],
        indestryList : [],
        CornerTag: 1,
        i: [],
        c: [],
        m: [],
        t: []
      }
    },
    props: {},
    methods: {
      init1(){
        this.pageId = 1
        this.loadMore()
        this.searchBarFixed = false
        this.popShow = false
      },
      loadMore() {
        this.$api.post('/pb/i/fetprojects', {
          pageId: this.pageId,
          pageSize: 5,
          industry: this.i,
          country: this.c,
          mature: this.m,
          constructionTypeId: this.t
        }).then(r => {
          this.notloading = false;
          if (this.pageId == 1 || this.projects == null) {
            this.projects = r.data.list;
          } else {
            this.projects = this.projects.concat(r.data.list);
          }
          this.pageId = this.pageId + 1;
          if (r.data.list.length == 0 || r.data.list.length <5) {
            this.moreText = '没有更多了';
            this.disabled = 'disabled';
            this.isIcon = false;
          }
        });
      },
      // 国家列表
      country (path,type) {
        this.axios
          .get(tool.domind() + "/gateway/app/" + path)
          .then(res => {
            if (res.data.code === 200) {
              let country = res.data.data;
              country.forEach( v=> {
                let temp = new Array()
                temp.push(v.id)
                temp.push(v.name)
                type.push(temp);
              });
            }
          });
        return this.type;
      },

      submit(){
      },
      //页面滚动时
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let searchWarp =document.getElementById('search-warp');
        if (scrollTop > 350) {
          this.searchBarFixed = true
        } else {
          this.searchBarFixed = false
        }

        var opcaity=(scrollTop/350>1)?1:scrollTop/350;
        searchWarp.style.background='rgba(82,141,232,'+opcaity+')';
      },
      tab(index) {
        this.num = index;
        let searchWarp =document.getElementById('search-warp');
        this.searchBarFixed = true
        this.popShow = true;
        searchWarp.style.background='rgba(82,141,232,1)';
      },
      liActive(e , v ,index){
        let element = e.currentTarget;
        if (element.classList.contains('active')) {
          element.classList.remove('active');
          this.removeList(index ,v)
        } else {
          this.addList(index ,v)
          element.classList.add('active')
        }
        this.activeSwitch =false
      },

      popSwitch(){
        this.popShow = false ;
        this.searchBarFixed = false
      },
      allActive(e , index){
        let element = e.currentTarget
        if (element.classList.contains('active')) {
          element.classList.remove('active')
        }else {
          element.classList.add('active')
          this.resetActive(index)
        }

        //
      },
      resetActive(index){
        this.clearList(index)
        let all =document.getElementById('all'+ index);
        all.classList.add('active')
        let lis = document.getElementsByName("li" + index);
        for (var i=0;i<lis.length;i++) {
          if (lis[i].classList.contains('active')) {
            lis[i].classList.remove('active');
          }
        }
        this.liSwitch = false
      },
      all(index){
        return 'all'+index;
      },
      removeList(index ,v){
        switch (index){
          case 0:
            this.delList(this.c ,v);
            break;
          case 1:
            this.delList(this.i ,v);
            break;
          case 2:
            this.delList(this.v ,v);
            break;
          case 3:
            this.delList(this.m ,v);
            break;
        }
      },
      delList (array , v) {
        for (var i = 0; i < array.length ;i++){
          if (array[i] == v)
            return array.splice(i ,1)
        }
      },
      clearList(index){
        switch (index){
          case 0:
            this.c = []
            break;
          case 1:
            this.i = []
            break;
          case 2:
            this.t = []
            break;
          case 3:
            this.m = []
            break;
        }
      },
      addList(index,v){
        switch (index){
          case 0:
            this.c.push(v)
            break;
          case 1:
            this.i.push(v)
            break;
          case 2:
            this.t.push(v)
            break;
          case 3:
            this.m.push(v)
            break;
        }
      }

    },
    filters: {},
    computed: {},
    mounted () {
      // 本周推荐
      this.$api.post('/pb/i/fetprojects', {
        pageId: this.pageId,
        pageSize: 2,
        status: this.status,
        CornerTag: this.CornerTag,
        tag: this.tag,
        industryCategory: this.industryCategory
      }).then(r => {
        this.notloading = false;
        if (this.pageId == 1 || this.projects == null) {
          this.weekProjects = r.data.list;
        } else {
          this.weekProjects = this.projects.concat(r.data.list);
        }
        this.pageId = this.pageId + 1;
      });


    },
      created () {
      //页面滚动时
      window.addEventListener('scroll', this.handleScroll);
      this.loadMore(this.pageId);
      this.country('getAllCountry',this.countryList);
      this.country('getAllIndustry',this.indestryList);
      this.tabContents.unshift(this.countryList,this.indestryList)
    },
    destroyed () {}



  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/reset.scss';
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .project-list{
    padding-bottom: 60px;
    header {
      height: 44px;
      line-height: 44px;
      color: #fff;
      font-size: 20px;
      text-align: center;
      background: #528de8;
      position:fixed;
      top:0;
      z-index:999;
      width: 100%;
    }
    h4{
      text-align: left;
      overflow: hidden;
      line-height: 1;
      height: 16px;
      padding: 12px 10px 12px 15px;
      color: #333;
      font-size: 16px;
      font-weight: normal;
      @include onepx('bottom');
      .left-line{
        position: absolute;
        display: block;
        width: 3px;
        height: 15px;
        background-color: #528de8;
        left: 0;
        top:12px;
      }
    }
    .isFixed{
      position:fixed;
      top:0;
      z-index:999;
      width: 100%;
      box-sizing: border-box;
    }
    .banner{
      width:100%;
      height:150px;
      position: relative;
      .img{
        width: 100%;
        height:100%;
        img{
          width: 100%;
          height:100%;
        }
      }
      .search-warp{
        position:fixed;
        top:0;
        z-index:999;
        left: 0;
        right:0;
        padding: 10px 0;
      }
      .search{
        width:94.7%;
        height:30px;
        border-radius: 30px;
        margin: auto;
        left:0;
        right:0;
        background: #fff;
        text-align: left;
        .icon-search{
          display: inline-block;
          width:15px;
          height:15px;
          background-size: 15px auto;
          background-repeat: no-repeat;
          margin: 0 10px 0 12px;
          @include bg-image('./img/icon-search');
          position: relative;
          top:2px;

        }
        input{
          height:30px;
          width:80%;
          border: none;
          outline: none;

        }
      }
    }
    .project-rec{
      h4{
        background: #fff;
        &:after{
          border-top: none;
        }
      }
      .recommdnd-warp{
        text-align: left;
        padding: 0 10px;
        height:205px;
        overflow: hidden;
        .recommdnd-card{
          border: 1px solid #dedede;
          box-sizing: border-box;
          background: #fff;
          width: 48.7%;
          float: left;
          position: relative;
          margin-bottom: 10px;
          &:nth-of-type(odd){
            margin-right:2.6%;
          }
          .img{
            height:118px;
            width:100%;
            img{
              width:100%;
              height:100%
            }
          }
          .main-news{
            padding: 10px;
            h2 {
              font-size: 13px;
              color: #333;
              height: 32px;
              line-height: 16px;
              overflow: hidden;
              margin-bottom: 10px;
              font-weight: normal;
            }
            .tip-news{
              overflow: hidden;
              i{
                display: block;
                margin-right: 6px;
                width:10px;
                height:10px;
                background-size: 10px auto;
              }
              .indu{
                @include bg-image("../base/img/industry");
              }
              .view{
                @include bg-image("../base/img/view");
              }

              span{
                margin-right: 10px;
                font-size: 10px;
                line-height: 1;
                color:#666;
                margin-top: 1px;
              }
              span.count{
                margin-right: 0;
              }
            }
          }
        }
      }
    }
    .project{
      .tab-warp{
        height:35px;
        .tab{
          display: flex;
          flex-direction: row;
          height:35px;
          line-height: 35px;
          padding: 0 4.5%;
          background: #fff;
          li{
            flex: 1;
            width:16%;
            margin-right: 9%;
            height:25px;
            line-height: 25px;
            margin-top: 5px;
            border-radius: 25px;
            box-shadow: 2px 2px 2px #ccc;
            &:last-child{
              margin-right: 0;
            }
            span{
              font-size: 13px;
              color:#333;

            }
            i{
              display: inline-block;
              width:6px;
              height:6px;
              background-size: 6px auto;
              background-position: center;
              background-repeat: no-repeat;
              vertical-align: middle;
              margin-top: -3px;
              @include bg-image('./img/country-packup');

            }
            &.active{
              i{
                @include bg-image('./img/country-more');
              }
            }
          }
        }
        .tab.isFixed{
          position:fixed;
          background-color:#Fff;
          top:50px;
          z-index:999;
          width: 100%;
          box-sizing: border-box;
        }
        .pop-bg{
          z-index: 998;
          padding: 0;
          touch-action: none;
        }
        .tabCon{
          z-index: 999;
          position: fixed;
          top:85px;
          width: 100%;
          min-height: 150px;
          .content{
            background: #fff;
            text-align: left;
            padding: 10px 10px 16px;
            ul{
              overflow: scroll;
              max-height: 350px;
              li{
                padding: 4px 13px;
                border:1px solid #999;
                font-size: 14px;
                color:#999;
                border-radius: 2px;
                margin-right: 10px;
                margin-bottom: 16px;
                display: inline-block;
                position: relative;
                &.active{
                  background: #528de8;
                  color:#fff;
                  border: 1px solid #333;
                }
                input{
                  position: absolute;
                  top:0;
                  left:0;
                  width: 100%;
                  height:100%;
                  opacity: 0;
                }

              }
            }
            .btn-warp{
              color:#fff;
              font-size: 15px;
              box-sizing: border-box;
              margin: 8px 0 0;
              .reset{
                background: #5c5c5c;
                width: 35.8%;
                height:37px;
                line-height: 37px;
                margin: 0;
                margin-right: 2.8%;
                display:inline-block;
              }
              .confirm{
                width: 61.4%;
                height:37px;
                line-height: 37px;
                margin: 0;
                display:inline-block;
              }
            }

          }
        }
      }
      .main{
        min-height: 300px;
        padding: 0 10px;
        .pro-list {
          padding: 15px 0 15px 96px;
          position: relative;
          height:76px;
          @include onepx('bottom');
          .img {
            width: 87px;
            height: 56px;
            position: absolute;
            top: 15px;
            left: 0;
            img{
              width:100%;
              height:100%;
            }
            .icon-state {
              position: absolute;
              left: 5px;
              top: 5px;
              font-size: 9px;
              color: #fff;
              background: #27caa0;
              border-radius: 3px;
              padding: 1px 2px;
              text-align: center;
            }
          }
          .main-news {
            position: relative;
            height:76px;
            .title {
              overflow: hidden;

              .icon-quality {
                color: #fff;
                font-size: 10px;
                background: #fdb140;
                padding: 1px 3px;
                text-align: center;
                margin-right: 5px;
                border-radius: 3px;
              }

              h2 {
                font-size: 14px;
                color: #333;
                height: 19px;
                line-height: 19px;
              }

            }
            .tip {
              overflow: hidden;
              font-size: 9px;
              color: #333;
              margin: 5px 0;

              .red {
                height: 14px;
                width: 50px;
                line-height: 14px;
                font-size: 9px;
                margin-right: 5px;
                text-align: center;
                border: 1px solid #ff0000;
              }

              .yellow {
                height: 14px;
                width: 50px;
                line-height: 14px;
                margin-right: 5px;
                text-align: center;
                border: 1px solid #fdb140;

              }

              .video {
                width: 20px;
                height: 20px;
                background-repeat: no-repeat;
                @include bg-image("../base/img/video");
                background-size: 20px auto;
                background-position: center;
                margin-top: -3px;

              }

            }
            .maturity{
              text-align: left;
              margin: 5px 0 10px;
              height:14px;
              line-height: 1;
              p{
                float: left;
                font-size: 11px;
                color:#666;
                &:first-child{
                  @include right-bar(-10px,14px);
                  margin-right: 20px;
                  &:after{
                    top:-2px;
                  }
                }
                em{
                  font-size: 12px;
                  color:#528de8;
                }
              }
            }
            .tip-news{
              height:10px;
              position: absolute;
              bottom: 0;
              left: 0;
              i{
                display: block;
                float:left;
                margin-right: 6px;
                width:10px;
                height:10px;
                background-size: 10px auto;
              }
              .loc{
                @include bg-image("../base/img/location");
              }
              .indu{
                @include bg-image("../base/img/industry");
              }
              .mold{
                @include bg-image("../base/img/mold");
              }
              .view{
                @include bg-image("../base/img/view");
              }
              .icon-thumbup{
                @include bg-image("./img/thumbs-up");
                margin-right: 0;
                margin-top: -2px;
                &.active{
                  @include bg-image("./img/thumbs-uped");
                }
              }

              span{
                float: left;
                margin-right: 10px;
                font-size: 10px;
                line-height: 1;
                color:#666;
                margin-top: 1px;
              }
            }
          }
        }
      }
      .more {
        font-size: 12px;
        color: #3f80e9;
        margin-top: 20px;
        text-align: center;
        background: #fff;

        i {
          display: inline-block;
          width: 12px;
          height: 12px;
          @include bg-image("../news/img/more");
          background-size: 12px auto;
          margin-left: 6px;
        }
      }
    }
  }

</style>
