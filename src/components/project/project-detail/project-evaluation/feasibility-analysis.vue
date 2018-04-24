<template>
  <div class="feasibility-analysis">
    <Article text="项目现场勘查" :content="this.InfraInfo"></Article>
    <BigImg v-if="this.InfraPhoto!=null" :content="this.InfraPhoto"></BigImg>
    <CrossLine></CrossLine>
    <Article text="项目技术与工程方案"></Article>
    <CrossLine></CrossLine>
    <Article text="项目行业与市场分析"></Article>
    <CrossLine></CrossLine>
    <div class="finance-info">
      <h4>
        <i class="left-line"></i><span>融资信息</span>
      </h4>
      <table width="100%" border="1" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
          <td>目标融资金额</td>
          <td>7200万美元</td>
        </tr>
        <tr>
          <td>项目自有资金</td>
          <td>0万美元</td>
        </tr>
        <tr>
          <td>项目总投资额</td>
          <td>7200万美元</td>
        </tr>
        <tr>
          <td>项目年收益率（IRR）</td>
          <td>32.0%</td>
        </tr>
        <tr>
          <td>项目回报期（NPV）</td>
          <td>0万美元</td>
        </tr>
        <tr>
          <td>净现值说明</td>
          <td>合资企业-中方控股</td>
        </tr>
        </tbody>
      </table>
    </div>
    <CrossLine></CrossLine>
    <Article text="项目融资分析"></Article>
    <CrossLine></CrossLine>
  </div>
</template>

<script>
  import CrossLine from '@/components/base/cross-line/cross-line'
  import Article from '@/components/base/article/article'
  import BigImg from '@/components/base/big-img/big-img'
  import tool from "../../../../api/tool";

  export default {
    components: {
      CrossLine,
      Article,
      BigImg
    },
    data() {
      return {
        projId: null,
        projContent: null,
        InfraInfo: null,
        InfraPhoto: null
      }
    },
    props: {},
    watch: {},
    methods: {
      content(str) {
        if (!tool.isBank(str)) {
          return str
        } else {
          return null
        }
      }
    },
    filters: {},
    computed: {},
    created() {
      this.projId = this.$route.query.projId
    },
    mounted() {
      this.$api.get('/ah/s3/p/projViabilityAnalysis', {projectId: 364000101}).then(r => {
        this.projContent = r.data;
        this.InfraInfo = this.projContent.InfraInfo.valueCn;
        this.InfraPhoto = this.projContent.InfraPhoto;
        console.log(this.InfraPhoto)
      });
    },
    destroyed() {
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/reset.scss';
  @import '~@/assets/scss/mixin.scss';

  .feasibility-analysis {

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
  .finance-info {
    padding: 10px 10px 17px;

  table {
    border: 1px solid #dedede;

  tr {
    height: 28px;
    line-height: 28px;
    font-size: 13px;
    color: #666;

  td:first-child {
    text-align: left;
    padding: 0 10px 0 17px;
    width: 130px;
  }

  td:last-child {
    text-align: left;
    padding-left: 20px;
  }

  }
  }

  }
  }

</style>
