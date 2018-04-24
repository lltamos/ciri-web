<template>
  <div class="project-answering">
    <div class="answering-warp">

      <div class="ask-warp ask-bt">
        <div class="ask-describe"></div>
        <textarea name="" cols="30" rows="10" placeholder="相关问题的答复会展示在项目答疑区哟"></textarea>
        <p class="hint">问题答复后，将第一时间邮件或短信通知您</p>
        <div class="file-warp">
          <FileDelete></FileDelete>
          <FileDelete></FileDelete>
          <FileDelete></FileDelete>
        </div>
        <div class="pop-bottom clearfix">
          <div class="fl">
            <i class="icon-uploading"></i>
            <span class="upload-file">上传文件</span>
            <input type="file" class="fill-input">
          </div>
          <div class="fr btn-warp">
            <input type="checkbox">匿名
            <div class="small-btn">提交</div>
          </div>
        </div>
      </div>
      <CrossLine></CrossLine>
      <!--<div class="small-btn" @click="askQuestion">我要提问</div>-->
      <div class="question">
        <ul class="tab clearfix">
          <li :class="{active:tabActive==1}" @click="allShow">全部 <em>{{questionCount}}</em></li>
          <li :class="{active:tabActive==2}" @click="mineShow">我的问题 <em>{{myQuestionCount}}</em></li>
        </ul>
        <div class="all-warp" v-show="questionShow"   >
          <div class="question-warp"  >
            <div class="question-list" v-for="(question,index) in questions" :key="index" >
              <div class="head-portrait">
                <!--<img src="../../../news/img/p_1.jpg" alt="">-->
                <img  :src="question.headUrl"  alt="">
              </div>
              <div class="main-news">
                <!--{{pro.name.length>15 ? pro.name.substr(0,15)+'...' : pro.name }}-->
                <div class="user-name">{{(question.userid == null ? "匿名": question.userid).length >15 ?question.userid.substr(0,15)+'...' : (question.userid == null ? "匿名": question.userid)}}</div>
                <div class="delete" @click="deleteAsk(question.id)">{{question.oneselfInfo == true?"删除" :""}}</div>
                <div class="ques-title">{{question.message}}</div>
                <div class="file-warp">
                  <div class="file" v-for="(fileMeta,index) in question.fileMetas" :key="index">
                    <i class="icon-type icon-pdf"></i>
                    <span class="file-title">{{fileMeta.fileName.length >15 ? fileMeta.fileName.substr(0,15)+'...'+fileMeta.fileName.replace(/.+\./, "") :fileMeta.fileName}}</span>
                    <div class="view" @click="lookFile(fileMeta.url)">查看</div>
                  </div>
                </div>
                <div class="qs-bottom clearfix">
                  <div class="time fl">{{question.updateTime|time}}</div>
                  <div class="fr dz-hf" @click="likesChat(question)">
                    <span class="dz-count">{{question.likes}}</span>
                    <template v-if="question.likeStatus==true">
                      <i class="icon-dz active" ></i>
                    </template>
                    <template v-if="question.likeStatus==false">
                      <i class="icon-dz" ></i>
                    </template>
                    <span class="reply" @click="askQuestion">回复<em>({{question.total>999?"999+":question.total}})</em></span>
                  </div>
                </div>
                <!--回答信息-->
                <div class="questioner-visible" v-for="(ask,index) in question.projectChatList" :key="index">
                  <!--回复的信息-->
                  <div class="marked-warp">
                    <div class="marked-words">
                      <div class="user-warp clearfix">
                        <div class="head-portrait">
                          <!--<img src="../../../news/img/p_1.jpg" alt="">-->
                          <img :src="ask.headUrl" alt="">
                        </div>
                        <div class="fl">
                          <div class="user-name">{{(ask.userid == null ? "匿名": ask.userid).length >15 ?ask.userid.substr(0,15)+'...' : (ask.userid == null ? "匿名": ask.userid)}}<em>{{ask.isVisible==0?"":"(仅提问者可见)"}}</em></div>
                          <div class="delete" @click="deleteAsk(ask.id)">{{ask.oneselfInfo == true?"删除" :""}}</div>
                          <div class="time">{{ask.updateTime|time}}</div>
                          <!--回复点赞数量-->
                          <!--<div class="fr dz-hf">-->
                            <!--<span class="dz-count">{{ask.likes}}</span>-->
                            <!--<template v-if="ask.likeStatus==true">-->
                              <!--<i class="icon-dz active" ></i>-->
                            <!--</template>-->
                            <!--<template v-if="ask.likeStatus==false">-->
                              <!--<i class="icon-dz" ></i>-->
                            <!--</template>-->
                          <!--</div>-->
                        </div>
                      </div>
                      <div class="ques-title">{{ask.message}}</div>
                    </div>
                  </div>
                  <!--设置回答文件信息-->
                  <div class="file-warp">
                    <div class="file" v-for="(askFileMeta,index) in ask.fileMetas" :key="index">
                      <i class="icon-type icon-pdf"></i>
                      <span class="file-title">{{askFileMeta.fileName.length >15 ? askFileMeta.fileName.substr(0,15)+'...'+askFileMeta.fileName.replace(/.+\./, "") :askFileMeta.fileName}}</span>
                      <div class="view" @click="lookFile(askFileMeta.url)">查看</div>
                    </div>
                  </div>
                </div>
                <!--判断当回复的总数大于显示的数量时显示查看更多-->
                <div class="read-more" v-if="question.total > question.projectChatList.length" @click="moreAsk(question,$event)" pageId="1">
                  <span>查看更多</span>
                  <i class="icon-more"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="read-more" @click="allQuestion" v-show="moreShow">
            <span v-text="moreQuestion">查看更多</span>
            <i :class="iconMore"></i>
          </div>
        </div>
        <div class="mine-warp" v-show="!questionShow">
          <div class="question-list" v-for="(myQuestion,aindex) in myQuestions" :key="aindex" >
            <div class="head-portrait">
              <!--<img src="../../../news/img/p_1.jpg" alt="">-->
              <img :src="myQuestion.headUrl" alt="">
            </div>
            <div class="main-news">
              <!--{{pro.name.length>15 ? pro.name.substr(0,15)+'...' : pro.name }}-->
              <div class="user-name">{{(myQuestion.userid == null ? "匿名": myQuestion.userid).length >15 ?myQuestion.userid.substr(0,15)+'...' : (myQuestion.userid == null ? "匿名": myQuestion.userid)}}</div>
              <div class="delete" @click="deleteAsk(myQuestion.id)">{{myQuestion.oneselfInfo == true?"删除" :""}}</div>
              <div class="ques-title">{{myQuestion.message}}</div>
              <div class="file-warp">
                <div class="file" v-for="(fileMeta,zzindex) in myQuestion.fileMetas"  :key="zzindex" >
                  <i class="icon-type icon-pdf"></i>
                  <span class="file-title">{{fileMeta.fileName.length >15 ? fileMeta.fileName.substr(0,15)+'...'+fileMeta.fileName.replace(/.+\./, "") :fileMeta.fileName}}</span>
                  <div class="view" @click="lookFile(fileMeta.url)">查看</div>
                </div>
              </div>
              <div class="qs-bottom clearfix">
                <div class="time fl">{{myQuestion.updateTime|time}}</div>
                <div class="fr dz-hf" @click="likesChat(myQuestion)">
                  <span class="dz-count">{{myQuestion.likes}}</span>
                  <template v-if="myQuestion.likeStatus==true">
                    <i class="icon-dz active" ></i>
                  </template>
                  <template v-if="myQuestion.likeStatus==false">
                    <i class="icon-dz" ></i>
                  </template>
                  <span class="reply" @click="askQuestion">回复<em>({{myQuestion.total>999?"999+":myQuestion.total}})</em></span>
                </div>
              </div>
              <!--回答信息-->
              <div class="questioner-visible" v-for="(ask,aaindex) in myQuestion.projectChatList" :key="aaindex" >
                <!--回复的信息-->
                <div class="marked-warp">
                  <div class="marked-words">
                    <div class="user-warp clearfix">
                      <div class="head-portrait">
                        <!--<img src="../../../news/img/p_1.jpg" alt="">-->
                        <img :src="ask.headUrl" alt="">
                      </div>
                      <div class="fl">
                        <div class="user-name">{{(ask.userid == null ? "匿名": ask.userid).length >15 ?ask.userid.substr(0,15)+'...' : (ask.userid == null ? "匿名": ask.userid)}}<em>{{ask.isVisible==0?"":"(仅提问者可见)"}}</em></div>
                        <div class="delete" @click="deleteAsk(ask.id)">{{ask.oneselfInfo == true?"删除" :""}}</div>
                        <div class="time">{{ask.updateTime|time}}</div>
                        <!--回复点赞数量-->
                      </div>
                    </div>
                    <div class="ques-title">{{ask.message}}</div>
                  </div>
                </div>
                <!--设置回答文件信息-->
                <div class="file-warp">
                  <div class="file" v-for="(askFileMeta,ccindex) in ask.fileMetas" :key="ccindex">
                    <i class="icon-type icon-pdf"></i>
                    <span class="file-title">{{askFileMeta.fileName.length >15 ? askFileMeta.fileName.substr(0,15)+'...'+askFileMeta.fileName.replace(/.+\./, "") :askFileMeta.fileName}}</span>
                    <div class="view" @click="lookFile(askFileMeta.url)">查看</div>
                  </div>
                </div>
              </div>
              <!--判断当回复的总数大于显示的数量时显示查看更多-->
              <div class="read-more" v-if="myQuestion.total > myQuestion.projectChatList.length" @click="moreAsk(myQuestion,$event)" pageId="1">
                <span>查看更多</span>
                <i class="icon-more"></i>
              </div>
            </div>
          </div>
          <!--点击加载更多我的问题-->
          <div class="read-more" @click="myQuestion" v-show="moreShow">
            <span v-text="moreMyQuestion">查看更多</span>
            <i :class="iconMyMore"></i>
          </div>
        </div>
      </div>
      <div class="ask-pop pop-bg" v-show="askPop">
        <div class="pop-up ask-warp">
          <div class="checkbox-warp">
            <input type="checkbox">仅提问者可见
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder="写回复"></textarea>
          <div class="file-warp">
            <FileDelete></FileDelete>
            <FileDelete></FileDelete>
            <FileDelete></FileDelete>
          </div>
          <div class="pop-bottom clearfix">
            <div class="fl">
              <i class="icon-uploading"></i>
              <span class="upload-file">上传文件</span>
              <input type="file" class="fill-input">
            </div>
            <div class="fr btn-warp">
              <input type="checkbox">匿名
              <div class="small-btn" @click="submitQuestion">提交</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CrossLine></CrossLine>
    <!--权限弹框-->
    <Authority :authorityShow="authorityShow" @authorityHide="authorityHide" @upgrade="upgrade"></Authority>
  </div>
</template>
<script>
  import CrossLine from '@/components/base/cross-line/cross-line'
  import FileDelete from '@/components/base/file-delete/file-delete'
  import Authority from '@/components/base/authority/authority'
  import moment from 'moment'
  import tool from "../../../../api/tool";
  export default {
    components: {
      CrossLine,
      FileDelete,
      Authority,
      tool
    },
    data() {
      return {
        askPop : false,
        // 权限弹框
        authorityShow : false,
        questionShow : true,
        tabActive : 1,
        page:1,      //全部问题默认页码数
        myPage:0,    //我的提问默认页码数
        moreQuestion : '查看更多', //所有问题下拉按钮
        moreMyQuestion:'查看更多',//我的提问下拉按钮
        iconMore :'icon-more',
        iconMyMore :'icon-more',
        moreShow : true,
        questionCount:0,
        myQuestionCount:0,
        askPage:1,
        questions:null,  //项目提问信息
        myQuestions:null //我的问题
      }
    },
    props: {},
    watch: {},
    methods: {
      // 提问弹框
      askQuestion (){
        this.askPop = true;
      },
      submitQuestion (){
        this.askPop = false;
      },
      //权限弹框
      authorityHide () {
        this.authorityShow = false;
      },
      upgrade () {
        this.$router.replace({ path: "/mine/member-center" });
      },
      allShow () {
        this.questionShow = true;
        this.tabActive = 1;
      },
      mineShow () {
        this.questionShow = false;
        this.tabActive = 2;
        //初始化我的问题
        if(this.myPage==0){
          this.myPage=this.myPage+1;
          this.myQuestion();
        }
      },
      readMore () {

      },
      likesChat(question){
        // question.id,question.likes,question.likeStatus
        let tag = 0;
        if(question.likeStatus){
          tag= 1;
        }
        //alert(tag)
        this.$api.post('/ah/s0/chat/giveLikes', {userId: tool.getuser(), chatId: question.id, tag: tag}).then(r => {
          console.log(r.data);
          if (r.code == 200) {
            if (!question.likeStatus) {
              question.likes = question.likes + 1;
            } else {
              question.likes = question.likes - 1;
            }
            question.likeStatus=!(question.likeStatus);
          }
        })
      },
      //查看文件
      lookFile(fileUrl){
        tool.toast(fileUrl);
        window.location.href = fileUrl;
      },
      //删除交流信息
      deleteAsk(chatId){
        // let temp=false;
        // tool.MessageBox("确实删除",temp);
        // alert(temp);
        if(!confirm("确定删除吗")){
          return;
        }
        this.$api.post('/ah/s0/chat/delProjectChatByProjChatId',{name:tool.getuser(),chatId:chatId}).then(r => {
          if(r.code==200){
            tool.toast('删除成功');
            //所有项目删除列表中信息
            for (var i = 0; i < this.questions.length; i++) {
              let que = this.questions[i];
              if (que.id == chatId) {
                //注意对比这行代码：删除元素后调整i的值
                this.questions.splice(i--, 1);
                alert(chatId);
                break;
              }
              //删除回复中信息
              if (que.projectChatList.length > 0) {
                for (var j = 0; j < que.projectChatList.length; j++) {
                  let ask = que.projectChatList[j];
                  if (ask.id == chatId) {
                    //注意对比这行代码：删除元素后调整i的值
                    que.projectChatList.splice(j--, 1);
                    alert(chatId);
                  }
                }
              }
            }
            //删除我的问题中的信息
            for (var i = 0; i < this.myQuestions.length; i++) {
              let que = this.myQuestions[i];
              if (que.id == chatId) {
                //注意对比这行代码：删除元素后调整i的值
                this.myQuestions.splice(i--, 1);
                alert(chatId);
                break;
              }
              //删除回复中信息
              if (que.projectChatList.length > 0) {
                for (var j = 0; j < que.projectChatList.length; j++) {
                  let ask = que.projectChatList[j];
                  if (ask.id == chatId) {
                    //注意对比这行代码：删除元素后调整i的值
                    que.projectChatList.splice(j--, 1);
                    alert(chatId);
                  }
                }
              }
            }

          }else {
            tool.toast('删除失败请重试');
          }
        });
      },
      //获取所有的问答信息15201197830
      allQuestion(){
        //数据长度不为空
        if(this.questions != null){
          if(this.moreQuestion == '收起'){
            if(this.questions.length >=5){
              this.questions= this.questions.slice(0,5);
            }else {
              this.questions= this.questions.slice(0,this.questions.length-1);
            }
            this.moreQuestion = '查看更多';
            this.iconMore = 'icon-more'
            this.page=1;
            return;
          }else {
            //已经显示的提问数等于总的提问数时
            if(this.questions.length >= this.questionCount){
              this.moreQuestion='收起'
              this.iconMore = 'pack-up'
              return;
            }
          }
        }
        //发送请求分页查询数据
        this.$api.post('/ah/s0/chat/getProjectQuestions',{pageId: this.page, pageSize: 5,userId:tool.getuser(),proId:364000018}).then(r => {
          //设置总问题数
          this.questionCount=r.total;
          //设置我的提问数
          this.myQuestionCount= r.myTotal;
          console.log(r.data);
          if(r.data != 'null' && r.data.length>0){
            //如追加数据
            if (this.page === 1) {
              this.questions= r.data;
            } else {
              this.questions = this.questions.concat(r.data);
            }
            //设置下拉提示
            if(this.questions.length < r.total){
              this.moreQuestion = '查看更多';
              this.iconMore = 'icon-more'
            }else{
              this.moreQuestion='收起'
              this.iconMore = 'pack-up'
            }
            //增加页码
            this.page =this.page+1;
          }
        });
      },
      //获取我的提问信息
      myQuestion(){
        if(this.myQuestions != null){
          //判读收起
          if(this.moreMyQuestion == '收起'){
            if(this.myQuestions.length >=5){
              this.myQuestions= this.myQuestions.slice(0,5);
            }else {
              this.myQuestions= this.myQuestions.slice(0,this.myQuestions.length);
            }
            this.moreMyQuestion = '查看更多';
            this.iconMyMore = 'icon-more';
            this.myPage=1;
            return;
          }else {
              //已经显示的提问数时等于我的提问数时
             if(this.myQuestions.length >= this.myQuestionCount){
               this.moreMyQuestion='收起'
               this.iconMyMore = 'pack-up'
               return;
             }
          }
        }
        //发送请求分页查询数据
        this.$api.post('/ah/s0/chat/getMyQuestions',{pageId: this.myPage, pageSize: 5,userId:tool.getuser(),proId:364000018}).then(r => {
          console.log(r.data);
          if(r.data != 'null' && r.data.length>0) {
            if (this.myPage === 1) {
              //如追加数据
              this.myQuestions = r.data;
            } else {
              this.myQuestions = this.myQuestions.concat(r.data);
            }
            if(this.moreQuestion == '查看更多'){
              this.moreMyQuestion = '收起'
              this.iconMyMore = 'pack-up'
            }else {
              this.moreMyQuestion = '查看更多';
              this.iconMyMore = 'icon-more'
            }
            //设置下拉提示
            if(this.myQuestions.length < r.total){
              this.moreMyQuestion = '查看更多';
              this.iconMyMore = 'icon-more'
            }else{
              this.moreMyQuestion='收起'
              this.iconMyMore = 'pack-up'
            }
            //增加页码
            this.myPage =this.myPage+1;
          }
        });
      },
      //获取
      moreAsk(quesiton,e){
        var d = e.currentTarget;
        let pageId= parseInt(d.getAttribute("pageId"))+1;
        //获取更多信息
        console.log(pageId  );
        this.$api.post('/ah/s0/chat/getProjectAsk',{pageId: pageId,userId:tool.getuser(),proId:364000018,parentId:quesiton.id}).then(r => {
          if(r.code==200){
            quesiton.total=r.total;
            quesiton.projectChatList=quesiton.projectChatList.concat(r.data);
            console.log(quesiton.projectChatList);
            d.setAttribute("pageId",pageId);
          }
        })
      },
      //提问和回复





    },
    filters: {
      time(time) {
        return moment(time).format("YYYY-MM-DD");
      }
    },
    computed: {},
    created() {
    },
    mounted() {
      //tool.getuser();
      this.allQuestion()
    },
    destroyed() {


    }
  }
</script>
<style lang="scss" scoped>
  @import '~@/assets/scss/reset.scss';
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';
  .project-answering{
    text-align: left;
    .answering-warp{
      .ask-warp{
        width:100%;
        background: #fff;
        padding: 0 15px;
        box-sizing: border-box;
        .checkbox-warp{
          font-size: 11px;
          color:#333;
          margin: 15px 0 10px;
          input{
            margin-right: 6px;
            vertical-align: middle;
          }
        }
        .ask-describe{
          height:40px;
          width:215px;
          @include bg-image('../../img/ask-describe');
          background-size: 215px 40px;
        }
        textarea{
          height:97px;
          width: 100%;
          border:1px solid #dedede;
          border-radius: 3px;
          outline: none;
          padding: 10px;
          font-size: 13px;
          color:#666;
          box-sizing: border-box;

        }
        p.hint{
          margin-top:10px ;
        }
        .pop-bottom{
          height:27px;
          line-height: 27px;
          margin-top: 21px;
          position: relative;
          .icon-uploading{
            height:27px;
            width:15px;
            margin-right: 10px;
            display: inline-block;
            @include bg-image('../../img/upload-file');
            background-size: 15px 17px;
            background-repeat: no-repeat;
            background-position: center;

          }
          .upload-file{
            font-size: 12px;
            color:#528de8;
            display: inline-block;
            height:27px;
            line-height: 27px;
            position: absolute;
            top:0;
            left: 25px;

          }
          .fill-input{
            position: absolute;
            top:0;
            left: 0px;
            height:27px;
            opacity: 0;
            z-index: 111;
            width: 100px;
          }
          .btn-warp{
            font-size: 11px;
            color:#333;
            input{
              margin-right: 6px;
              vertical-align: middle;

            }
            .small-btn{
              height:27px;
              line-height:27px;
              width:52px;
              display: inline-block;
              margin-left: 15px;
              font-size: 15px;

            }
          }

        }

      }
      .ask-bt{
        margin-bottom: 17px;
      }
      .ask-pop{
        padding: 0;
        .pop-up{
          position: fixed;
          bottom: 0;
          background: #fcfcfc;
        }
      }
      .question{
        padding: 0 10px;
        .tab{
          margin:20px 0 5px;
          li{
            float:left;
            margin-right: 15px;
            color:#528de8;
            font-size: 10px;
            width:60px;
            height:20px;
            line-height: 20px;
            border-radius: 20px;
            border: 1px solid #528de8;
            text-align: center;
            &.active{
              background:#528de8 ;
              color:#fff;
            }

          }
        }
        .question-list{
          margin-top: 15px;
          padding-left: 55px;
          position: relative;
          @include onepx('bottom');
          &:last-child{
            &:after{
              border:none;
            }
          }
          .head-portrait{
            height:45px;
            width: 45px;
            border-radius: 50%;
            overflow: hidden;
            position: absolute;
            top:0;
            left: 0;
            img{
              width: 100%;
              height:100%;
            }
          }
          .main-news{
            .user-name{
              font-size: 13px;
              color:#999;
              line-height: 1;
              margin-bottom: 15px;
              em{
                margin-left: 7px;
                color:#528de8;
                font-size: 10px;
              }

            }
            .delete{
              font-size: 12px;
              color:#666;
              line-height: 1;
              position: absolute;
              right:0;
              top:0;
            }
            .ques-title{
              font-size: 14px;
              color:#333;
              line-height: 1;

            }
            .file-warp{
              .file{
                padding: 11px 10px;
                line-height: 13px;
                position: relative;
                padding-left: 28px;
                background: #f5f5f5;
                border-bottom: 1px solid #dedede;
                &:first-child{
                  margin-top: 10px;
                }
                &:last-child{
                  border-bottom:none;
                }
                .icon-type{
                  position: absolute;
                  top:11px;
                  left: 10px;
                  display: inline-block;
                  width:11px;
                  height:13px;
                  background-size: 11px 13px;
                  vertical-align: middle;
                  &.icon-pdf{
                    @include bg-image("../../img/pdf");
                  }
                  &.icon-jpg{
                    @include bg-image("../../img/jpg");
                  }
                  &.icon-ppt{
                    @include bg-image("../../img/ppt");
                  }
                  &.icon-xls{
                    @include bg-image("../../img/xls");
                  }
                }
                .file-title{
                  display: inline-block;
                  line-height: 13px;
                  font-size: 11px;
                  color: #333;
                }
                .view{
                  position: absolute;
                  right:10px;
                  top:11px;
                  color:#528de8;
                  font-size: 11px;
                  line-height: 1;
                }
              }
            }
            .qs-bottom{
              height:12px;
              line-height: 1;
              font-size: 12px;
              color:#528de8;
              padding: 15px 0;
              .time{
                color: #666;
              }
              .dz-hf{
                .icon-dz{
                  display: inline-block;
                  width: 9px;
                  height:12px;
                  @include bg-image('../../img/thumbs-up');
                  background-size: 9px 12px;
                  background-repeat: no-repeat;
                  background-position: center;
                  margin-right: 10px;
                  &.active{
                    @include bg-image('../../img/thumbs-uped')
                  }
                }
                .reply{
                  em{
                    margin-left: 10px;
                  }
                }


              }
            }
            .questioner-visible{
              background: #f5f5f5;
              padding:0 10px 15px;
              margin-bottom: 17px;
              .file{
                background: #fff;
              }
              .marked-words{
                color:#528de8;
                font-size: 14px;
                line-height: 1;
                padding: 15px 0;
                @include onepx-dashed('bottom');
                &:last-child{
                  padding-bottom: 0;
                  &:after{
                    border:none;
                  }
                }
                .user-warp{
                  position: relative;
                  padding-left: 55px;
                  .delete{
                    color: #528de8;
                  }
                  .time{
                    font-size: 12px;
                    color:#666;
                  }

                }
                .ques-title{
                  margin-top: 15px;
                }
              }
            }

          }

        }
        .read-more{
          font-size: 13px;
          color: #3f80e9;
          line-height: 1;
          text-align: center;
          margin-top: 10px;
          padding-right: 10px;
          margin-bottom: 16px;
          i {
            display: inline-block;
            width: 10px;
            height: 10px;
            background-size: 10px auto;
          }
          i.icon-more{
            @include bg-image("../../../news/img/more");
          }
          i.pack-up{
            @include bg-image("../../img/pack-up");
          }
        }
      }
    }

  }

</style>
