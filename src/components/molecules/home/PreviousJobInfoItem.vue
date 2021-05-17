<template>
  <div>
    <a-row class="title">
      {{ titleLabel }} {{ index + 1 }}
    </a-row>
    <a-row>
      <a-form-item
        class="subTitle"
        :label="companyNameLabel"
      >
        <a-input
          v-model:value="modelValue.pre_company_name"
          class="subCommonInput"
          :placeholder="companyNameLabel"
        />
      </a-form-item>
      <a-form-item
        class="subTitle"
        :label="entryDateLabel"
      >
        <a-date-picker
          v-model:value="formatEntryDate"
          class="subCommonInput"
          :placeholder="datePlaceholder"
          :format="dateShowFormat"
          size="large"
        />
      </a-form-item>
      <a-form-item
        class="subTitle"
        :label="resignationDateLabel"
      >
        <a-date-picker
          v-model:value="formatResignationDate"
          class="subCommonInput"
          :placeholder="datePlaceholder"
          :format="dateShowFormat"
          size="large"
        />
      </a-form-item>
    </a-row>
    <a-row>
      <a-form-item
        class="subTwoTitle"
        :label="topPositionLabel"
      >
        <a-input
          v-model:value="modelValue.pre_company_position"
          class="subCommonInput"
          :placeholder="topPositionLabel"
        />
      </a-form-item>
      <a-form-item
        class="subTwoTitle"
        :label="reasonForLeavingLabel"
      >
        <a-input
          v-model:value="modelValue.pre_company_leave_reason"
          class="subReason"
          :placeholder="reasonForLeavingLabel"
        />
      </a-form-item>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import moment, { Moment } from 'moment';
import { PreviousJobItemInfo } from '@/interfaces/home/IPreviousJobItemInfo';
@Options({
  props: {
    modelValue: {},
    index: 0
  }
})
export default class PreviousJobInfoItem extends Vue {
  titleLabel = '前职';
  companyNameLabel = '公司名称';
  entryDateLabel = '入职年月';
  resignationDateLabel = '离职年月';
  topPositionLabel = '最高职位';
  reasonForLeavingLabel = '离职原因';
  // 控件显示日期format
  dateShowFormat = 'MM/DD/YYYY';
  // 保存日期format
  dateSaveFormat = 'YYYY/MM/DD';
  datePlaceholder = 'MM/DD/YYYY';
  modelValue?: PreviousJobItemInfo;
  index?: number

  get formatEntryDate() {
    const getDate = this.modelValue ? this.modelValue['pre_company_entry_day'] : '';
    return getDate ? moment(getDate, this.dateSaveFormat) : null;
  }
  set formatEntryDate(value: Moment| null) {
    const dateStr = value === null ? '' : value.format(this.dateSaveFormat);
    if (this.modelValue) {
      this.modelValue['pre_company_entry_day'] = dateStr;
    }
  }
  get formatResignationDate() {
    const validDate = this.modelValue ? this.modelValue['pre_company_withdrawal'] : '';
    return validDate ? moment(validDate, this.dateSaveFormat) : null;
  }
  set formatResignationDate(value: Moment| null) {
    const dateStr = value === null ? '' : value.format(this.dateSaveFormat);
    if (this.modelValue) {
      this.modelValue['pre_company_withdrawal'] = dateStr;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style lang="scss" scoped>
.title {
  width: 100%;
  font-weight: 550;
  font-size: 16px;
  line-height: 16px;
}
.subTitle {
  line-height: 22px;
  margin-top: 20px;
  margin-right: 16px;
  margin-bottom: 10px;
  font-weight: 400;
}
.subTwoTitle {
  line-height: 22px;
  margin-right: 16px;
  margin-bottom: 16px;
  font-weight: 400;
}
.subCommonInput {
  width: 288px;
  border-radius: 2px;
  height: 40px;
}
.subReason {
  width: 592px;
  border-radius: 2px;
  height: 40px;
}
</style>
