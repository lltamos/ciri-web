<template>
  <div class="feasibility-analysis">
    <Article text="项目现场勘查" :content="this.InfraInfo"></Article>
    <BigImg v-if="this.InfraPhoto!=null" :content="this.InfraPhoto"></BigImg>
    <CrossLine></CrossLine>
    <Article text="项目技术与工程方案" :content="this.riskInfo"></Article>
    <CrossLine></CrossLine>
    <Article text="项目行业与市场分析" :content="this.rawMaterialSalesPlan"></Article>
    <CrossLine></CrossLine>
    <div class="finance-info">
      <h4>
        <i class="left-line"></i><span>融资信息</span>
      </h4>
      <table width="100%" border="1" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
          <td>目标融资金额</td>
          <td>{{this.requiredFund}}</td>
        </tr>
        <tr>
          <td>项目自有资金</td>
          <td>{{this.internalFund}}万美元</td>
        </tr>
        <tr>
          <td>项目总投资额</td>
          <td>{{this.totalInvestFund}}</td>
        </tr>
        <tr>
          <td>项目年收益率（IRR）</td>
          <td>{{this.irr}}%</td>
        </tr>
        <tr>
          <td>项目净产值（NPV）</td>
          <td>{{this.npv}}万美元</td>
        </tr>
        <tr>
          <td>净现值说明</td>
          <td>{{this.npvSummary}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <CrossLine></CrossLine>
    <Article text="项目融资分析" :content="this.marketAnalysis"></Article>
    <CrossLine></CrossLine>
    <Article text="项目财务评估" :content="this.competitionAdvantage"></Article>
    <CrossLine></CrossLine>
    <Article text="项目担保方式" :content="guaranteeType(this.guaranteeId)" :content2="this.guaranteeNote"
             :secondShow="true"></Article>
    <CrossLine></CrossLine>
    <Article text="融资规划" :content="this.summary"></Article>
    <BigImg v-if="this.estimatePhoto!=null" :content="this.InfraPhoto"></BigImg>
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
        InfraPhoto: null,
        riskInfo: null,
        rawMaterialSalesPlan: null,
        marketAnalysis: null,
        competitionAdvantage: null,
        estimatePhoto: null,
        requiredFund: null,
        internalFund: null,
        totalInvestFund: null,
        irr: null,
        npv: null,
        npvSummary: null,
        guaranteeId: null,
        guaranteeNote: null,
        summary: null,
        estimatePhoto: null,
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
      },
      guaranteeType(i) {
        switch (i) {
          case 1:
            return '商业银行担保'
          case 2:
            return '主权担保'
          case 3:
            return '其他'
          default:
            return '无'

        }
      }

    },
    filters: {},
    computed: {},
    created() {
      this.projId = this.$route.query.projId
    },
    mounted() {
      this.$api.get('/ah/s3/p/projViabilityAnalysis', {projectId: this.projId}).then(r => {
        this.projContent = r.data;
        this.InfraInfo = this.projContent.InfraInfo.valueCn;
        this.InfraPhoto = this.projContent.InfraPhoto;
        this.riskInfo = this.projContent.riskInfo;
        this.rawMaterialSalesPlan = this.projContent.rawMaterialSalesPlan;
        this.marketAnalysis = this.projContent.marketAnalysis;
        this.competitionAdvantage = this.projContent.competitionAdvantage;
        this.estimatePhoto = this.projContent.estimatePhoto;
        this.requiredFund = this.projContent.fund.requiredFund.amount;
        this.internalFund = this.projContent.fund.internalFund.amount;
        this.totalInvestFund = this.projContent.fund.totalInvestFund.amount;
        this.irr = this.projContent.fund.irr;
        this.npv = this.projContent.fund.npv.amount;
        this.npvSummary = this.projContent.fund.npvSummary.valueCn;
        this.guaranteeId = this.projContent.fund.guaranteeId;
        this.guaranteeNote = this.projContent.fund.guaranteeNote.valueCn;
        this.summary = this.projContent.fund.summary.valueCn;
        this.estimatePhoto = this.projContent.estimatePhoto;
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
