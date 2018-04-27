<template>
  <div class="project-developer">
    <!--项目开发商-->
    <h4>
      <i class="left-line"></i><span>项目开发商</span>
    </h4>
    <div v-if="this.projectOwnerContact!=null" class="company-msg">
      <table width="100%" border="1" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
          <td>公司名称</td>
          <td>{{projectOwnerContact.corpName.valueCn}}</td>
        </tr>
        <tr>
          <td>公司类型</td>
          <td>{{projectOwnerContact.corpTypeNote}}</td>
        </tr>
        <tr>
          <td>公司地址</td>
          <td>{{projectOwnerContact.corpAddress.valueCn}}</td>
        </tr>
        <tr>
          <td>公司电话</td>
          <td>{{projectOwnerContact.corpTel}}</td>
        </tr>
        <tr>
          <td>公司传真</td>
          <td>{{projectOwnerContact.corpTax}}</td>
        </tr>
        <tr>
          <td>公司网址</td>
          <td>{{projectOwnerContact.website}}</td>
        </tr>
        <tr>
          <td>公司简介</td>
          <td>{{projectOwnerContact.corpSummary.valueCn}}</td>
        </tr>
        <tr>
          <td>项目案例</td>
          <td>{{projectOwnerContact.msgForInvestor.valueCn}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-if="this.projectOwnerContact!=null&&this.projectOwnerContact.contact.length!=0" class="contact-info">
      <div class="contact-title">【联系人信息】</div>
      <table width="100%" border="1" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
          <td>
            <p class="contact-card">姓名</p>
            <p class="contact-card">职位</p>
            <p class="contact-card">电话</p>
            <p class="contact-card">邮箱</p>
          </td>
          <td style="min-width:50px;">
            <p class="contact-card">{{projectOwnerContact.contact[0].name.valueCn}}</p>
            <p class="contact-card">{{projectOwnerContact.contact[0].jobInfo.valueCn}}</p>
            <p class="contact-card">{{projectOwnerContact.contact[0].tel}}</p>
            <p class="contact-card">{{projectOwnerContact.contact[0].email}}</p>
          </td>
          <td>
            <div class="recommend"><a shape="rect" class="btn">在线沟通</a></div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="contact-title">【企业资料】</div>
      <div v-if="this.projectOwnerContact.campaignFile!=null" class="file-warp">
        <div class="file" v-for="file in this.projectOwnerContact.campaignFile" :key="file.name">
          <div class="title">
            <i class="icon-type icon-ppt"></i>
            <span class="file-title">{{file.originalName}}</span>
          </div>
          <dl class="intro">
            <dt>文件说明：</dt>
            <dd>{{file.summary.valueCn}}</dd>
          </dl>
          <!--<div class="applyFile btn bg-blue">申请查看</div>-->
          <div class="agreed btn"><i class="icon-agreed"></i>已同意</div>
        </div>
      </div>
    </div>
    <CrossLine></CrossLine>
    <!--项目代理商-->
    <h4>
      <i class="left-line"></i><span>项目代理</span>
    </h4>
    <div class="company-msg">
      <table width="100%" border="1" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
          <td>公司名称</td>
          <td>Energy Sabz Abrisham Asia</td>
        </tr>
        <tr>
          <td>公司类型</td>
          <td>有限责任公司</td>
        </tr>
        <tr>
          <td>公司地址</td>
          <td>Tehran</td>
        </tr>
        <tr>
          <td>公司电话</td>
          <td>+9****-7</td>
        </tr>
        <tr>
          <td>公司传真</td>
          <td>+9****-6</td>
        </tr>
        <tr>
          <td>公司网址</td>
          <td>合资企业-中方控股</td>
        </tr>
        <tr>
          <td>公司简介</td>
          <td>Energy Sabz Abrisham Asia</td>
        </tr>
        <tr>
          <td>项目案例</td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-if="projectAgentContact!=null&&projectAgentContact.contact!=null&&projectAgentContact.contact.length!=0" class="contact-info">
      <div class="contact-title">【联系人信息】</div>
      <table width="100%" border="1" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
          <td>
            <p class="contact-card">姓名</p>
            <p class="contact-card">职位</p>
            <p class="contact-card">电话</p>
            <p class="contact-card">邮箱</p>
          </td>
          <td v-if="this.projectAgentContact.contact!=null&&this.projectAgentContact.contact.length!=0">
            <p class="contact-card">{{projectAgentContact.contact[0].name.valueCn}}</p>
            <p class="contact-card">{{projectAgentContact.contact[0].jobInfo.valueCn}}</p>
            <p class="contact-card">{{projectAgentContact.contact[0].tel}}</p>
            <p class="contact-card">{{projectAgentContact.contact[0].email}}</p>
          </td>
          <td>
            <div class="recommend"><a shape="rect" class="btn">在线沟通</a></div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="contact-title">【企业资料】</div>
      <div v-if="this.projectAgentContact.campaignFile!=null" class="file-warp">
        <div class="file" v-for="file in this.projectAgentContact.campaignFile" :key="file.name">
          <div class="title">
            <i class="icon-type icon-ppt"></i>
            <span class="file-title">{{file.originalName}}</span>
          </div>
          <dl class="intro">
            <dt>文件说明：</dt>
            <dd>{{file.summary.valueCn}}</dd>
          </dl>
          <!--<div class="applyFile btn bg-blue">申请查看</div>-->
          <div class="agreed btn"><i class="icon-agreed"></i>已同意</div>
        </div>
      </div>
    </div>
    <CrossLine></CrossLine>

  </div>
</template>

<script>
  import CrossLine from '@/components/base/cross-line/cross-line'

  export default {
    components: {
      CrossLine
    },
    data() {
      return {
        projId: null,
        projectOwnerContact: null,
        projectAgentContact: null
      }
    },
    props: {},
    watch: {},
    methods: {},
    filters: {},
    computed: {},
    created() {
      this.projId = this.$route.query.projId
    },
    mounted() {
      this.$api.get('/ah/s3/p/projowner',
        {projectId: this.projId}).then(res => {
        if (res.code == 200) {
          this.projectOwnerContact = res.projectOwnerContact;
          this.projectAgentContact = res.projectAgentContact;
        }
      })
    },
    destroyed() {
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/reset.scss';
  @import '~@/assets/scss/mixin.scss';

  .project-developer {
    text-align: left;

  h4 {
    text-align: left;
    overflow: hidden;
    line-height: 1;
    height: 16px;
    padding: 12px 10px 12px 15px;
    color: #333;
    font-size: 16px;
    font-weight: normal;
  @include onepx('bottom');

  .left-line {
    position: absolute;
    display: block;
    width: 3px;
    height: 15px;
    background-color: #528de8;
    left: 0;
    top: 12px;
  }

  }
  .company-msg {
    padding: 0 10px;

  table {
    border: 1px solid #dedede;
    margin: 10px 0 15px;

  tr {
    height: 28px;
    line-height: 28px;
    font-size: 13px;
    color: #666;

  td:first-child {
    text-align: left;
    padding: 0 15px 0 17px;
    width: 60px;
  }

  td:last-child {
    text-align: left;
    padding-left: 20px;
  }

  }
  }
  }
  .contact-info {
    padding: 0 10px;

  .contact-title {
    font-size: 14px;
    color: #333;
  }

  table {
    border: 1px solid #dedede;
    margin: 10px 0 15px;
    font-size: 13px;
    color: #666;
    text-align: left;

  td {

  p {
    border-bottom: 1px solid #dedede;
    line-height: 25px;
    padding-left: 20px;

  &
  :last-child {
    border-bottom: none;
  }

  }
  &
  :first-child {

  p {
    padding-left: 17px;
    padding-right: 15px;
  }

  }
  .recommend {
    margin: 0 auto;
    display: table;

  a {
    padding: 2px 11px;
    color: #fff;
    font-size: 13px;
    line-height: 22px;
  }

  }
  &
  :last-child {
    width: 95px;
  }

  }

  }
  .file-warp {
    padding-top: 10px;
    padding-bottom: 17px;

  .file {
    border-bottom: 1px dashed #dedede;
    position: relative;
    padding: 13px 0;

  &
  :first-child {
    border-top: 1px dashed #dedede;
  }

  .title {
    padding-left: 17px;
    position: relative;
    margin-bottom: 12px;
    line-height: 14px;

  .icon-type {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 11px;
    height: 13px;
    background-size: 11px 13px;
    vertical-align: middle;

  &
  .icon-pdf {
  @include bg-image("../../img/pdf");
  }

  &
  .icon-jpg {
  @include bg-image("../../img/jpg");
  }

  &
  .icon-ppt {
  @include bg-image("../../img/ppt");
  }

  &
  .icon-xls {
  @include bg-image("../../img/xls");
  }

  }
  .file-title {
    font-size: 14px;
    color: #333;
    line-height: 1;
    display: inline-block;
  }

  }
  .intro {
    position: relative;
    padding-left: 70px;
    font-size: 13px;
    line-height: 1;
    color: #666;

  dt {
    position: absolute;
    top: 0;
    left: 0;
  }

  dd {
    width: 180px;
    overflow: hidden;
    height: 13px;
  }

  }
  .btn {
    width: 75px;
    height: 22px;
    line-height: 22px;
    position: absolute;
    right: 0px;
    top: 50%;
    margin-top: -11px;
    font-size: 13px;

  }

  .bg-blue {
    background: #528de8;
  }

  .bg-gray {
    background: #bbb;
  }

  .agreed {
    background: #fff;
    font-size: 13px;
    color: #666;
    text-align: left;

  .icon-agreed {
    display: inline-block;
    width: 13px;
    height: 13px;
  @include bg-image("../../img/progress-finished");
    background-size: 13px auto;
    margin-right: 5px;
  }

  }
  }
  }
  }

  }

</style>
