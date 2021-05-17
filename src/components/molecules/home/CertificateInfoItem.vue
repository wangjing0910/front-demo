<template>
  <a-row>
    <a-row class="title">
      {{ titleLabel }}{{ index + 1 }}
    </a-row>
    <a-row>
      <a-form-item
        :name="`certificateName_${(modelValue.certificateNo)}`"
        class="subTitle"
        :label="certificateNameLabel"
      >
        <a-input
          v-model:value="modelValue.qualification_name"
          class="subName"
          :placeholder="placeholderText"
        />
      </a-form-item>
      <a-form-item
        :name="`grade_${(modelValue.certificateNo)}`"
        class="subTitle"
        :label="certificateGradeLabel"
      >
        <a-input
          v-model:value="modelValue.qualification_level"
          class="subGrade"
          :placeholder="gradePlaceholder"
        />
      </a-form-item>
      <a-form-item
        :name="`getDate_${(modelValue.certificateNo)}`"
        class="subTitle"
        :label="certificateGetDateLabel"
      >
        <a-date-picker
          v-model:value="formatGetDate"
          class="subDate"
          :placeholder="datePlaceholder"
          :format="dateShowFormat"
          size="large"
        />
      </a-form-item>
      <a-form-item
        :name="`validDate_${(modelValue.certificateNo)}`"
        class="subTitle"
        :label="certificateValidDateLabel"
      >
        <a-date-picker
          v-model:value="formatValidDate"
          class="subDate"
          :placeholder="datePlaceholder"
          :format="dateShowFormat"
          size="large"
        />
      </a-form-item>
    </a-row>
  </a-row>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import moment, { Moment } from 'moment';
import { CertificateItemInfo } from '@/interfaces/home/ICertificateItemInfo';
@Options({
  props: {
    modelValue: {},
    index: 0
  }
})
export default class CertificateInfoItem extends Vue {
  titleLabel = '资格证';
  certificateNameLabel = '资格证名称';
  placeholderText = 'Placeholder text';
  certificateGradeLabel = '资格证等级';
  certificateGetDateLabel = '资格证取得年月';
  certificateValidDateLabel = '资格证有效期限';
  // 控件显示日期format
  dateShowFormat = 'MM/DD/YYYY';
  // 保存日期format
  dateSaveFormat = 'YYYY/MM/DD';
  datePlaceholder = 'MM/DD/YYYY';
  gradePlaceholder = '中级';
  modelValue?: CertificateItemInfo;
  index?: number;

  get formatGetDate() {
    const date = this.modelValue? this.modelValue['gain_date'] : '';
    return date ? moment(date, this.dateSaveFormat) : null;
  }
  set formatGetDate(value: Moment| null) {
    const dateStr = value === null ? '' : value.format(this.dateSaveFormat);
    if(this.modelValue) {
      this.modelValue['gain_date'] = dateStr;
    }
  }
  get formatValidDate() {
    const date = this.modelValue? this.modelValue['qualification_expiry_date'] : '';
    return date? moment(date, this.dateSaveFormat) : null;
  }
  set formatValidDate(value: Moment | null) {
    const dateStr = value === null ? '' : value.format(this.dateSaveFormat);
    if(this.modelValue) {
      this.modelValue['qualification_expiry_date'] = dateStr;
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
  margin-bottom: 14px;
  font-weight: 400;
}
.subName {
  width: 288px;
  border-radius: 2px;
  height: 40px;
}
.subGrade {
  width: 112px;
  border-radius: 2px;
  height: 40px;
}
.subDate {
  width: 223px;
  border-radius: 2px;
}
</style>
