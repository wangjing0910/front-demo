<template>
  <a-form
    ref="passportForm"
    name="passport-validation"
    layout="vertical"
  >
    <PassportItem
      v-for="(item,index) in modelValue"
      :key="index"
      v-model="modelValue[index]"
      :index="index"
    />
    <a-row class="cardBottom">
      <a-button
        class="addBtn"
        @click="addPassportItem"
      >
        + {{ addRow }}
      </a-button>
    </a-row>
  </a-form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PassportItem from '@/components/molecules/home/PassportItem.vue';
import { PassportItemInfo } from '@/interfaces/home/IPassportItemInfo';
@Options({
  components: {
    PassportItem
  },
  props: {
    modelValue: Array<PassportItemInfo>()
  },
  emits: ['update:modelValue']
})
export default class Passport extends Vue {
  private addRow = '行追加'
  private modelValue: Array<PassportItemInfo> = [];
  addPassportItem() {
    this.modelValue.push({
      // 'employee_cd': '001',
      'passport_no': '',
      'passport_expiry_date': '',
      'publish_place': null,
      'publisher': null
    });
  }
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
