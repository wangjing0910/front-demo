<template>
  <a-form
    ref="previousJobInfoForm"
    name="previousJob-validation"
    layout="vertical"
  >
    <PreviousJobInfoItem
      v-for="(item,index) in modelValue"
      :key="index"
      v-model="modelValue[index]"
      :index="index"
    />
    <a-row class="cardBottom">
      <a-button
        id="addCertificateBtn"
        class="addBtn"
        @click="addPreviousJobInfo"
      >
        + {{ addRow }}
      </a-button>
    </a-row>
  </a-form>
</template>

<script lang="ts">
// import { getTest } from '@/service/example/ApiImpl';
import { Options, Vue } from 'vue-class-component';
import PreviousJobInfoItem from '@/components/molecules/home/PreviousJobInfoItem.vue';
import { PreviousJobItemInfo } from '@/interfaces/home/IPreviousJobItemInfo';
@Options({
  props: {
    modelValue: {}
  },
  components: {
    PreviousJobInfoItem
  }
})
export default class PreviousJobInfo extends Vue {
  private addRow = '行追加';
  private modelValue: Array<PreviousJobItemInfo> = [];
  addPreviousJobInfo() {
    this.modelValue.push({
      // 'employee_cd': '0001',
      'pre_company_name': '',
      'pre_company_entry_day': '',
      'pre_company_withdrawal': '',
      'pre_company_position': '',
      'pre_company_leave_reason': ''
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title {
  height: 16px;
  width: 288px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.32px;
  color: #262626;
}
.cardMain {
  width: 100%;
  height: fit-content;
  left: calc(50% - 104px / 2 - 396px);
  margin-top: 12px;
}
.cardBottom {
  width: 104px;
  height: 40px;
  left: calc(50% - 104px / 2 - 396px);
  margin-top: 18px;
  border-radius: 2px;
}
.addBtn {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  border: 1px solid #d9d9d9;
}
</style>
