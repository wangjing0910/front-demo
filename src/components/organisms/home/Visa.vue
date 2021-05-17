<template>
  <a-form
    ref="visaForm"
    name="visa-validation"
    layout="vertical"
    :rules="rules"
  >
    <VisaItem
      v-for="(item,index) in modelValue"
      :key="index"
      v-model="modelValue[index]"
      :index="index"
      :passport-item-info-list="passportItemInfoList"
    />
    <a-row class="cardBottom">
      <a-button
        class="addBtn"
        @click="addVisaItem"
      >
        + {{ addRow }}
      </a-button>
    </a-row>
  </a-form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import VisaItem from '@/components/molecules/home/VisaItem.vue';
import { VisaItemInfo } from '@/interfaces/home/IVisaItemInfo';
import { PassportItemInfo } from '@/interfaces/home/IPassportItemInfo';
@Options({
  components: {
    VisaItem
  },
  props: {
    modelValue: Array<VisaItemInfo>(),
    passportItemInfoList: Array<PassportItemInfo>()
  }
})
export default class Visa extends Vue {
  private addRow = '行追加';
  private modelValue: Array<VisaItemInfo> = [];
  addVisaItem() {
    this.modelValue.push({
      // 'employee_cd': '001',
      'passport_no': '',
      'visa_country': '',
      'visa_expiry_date': null,
      'num_entries': 1,
      'num_time': 3
    });
  }
  rules = {
    'passport_no': [{ required: true, message: '请选择', trigger: 'change', validator: async ()=> Promise.resolve() }]
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
