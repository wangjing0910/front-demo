<template>
  <div>
    <a-row class="title">
      {{ titleLabel }} {{ index + 1 }}
    </a-row>
    <a-row>
      <a-form-item
        class="subTitle"
        :label="passportNoLabel"
        name="passport_no"
      >
        <a-input
          v-model:value="modelValue.passport_no"
          class="subName"
          :placeholder="commonPlaceHolder"
        />
      </a-form-item>
      <a-form-item
        class="subTitle"
        :label="passportDateLabel"
        name="passport_expiry_date"
      >
        <a-date-picker
          v-model:value="modelValue.passport_expiry_date" 
          format="DD/MM/YYYY"
          placeholder="MM/DD/YYYY"
          class="subName"
        />
      </a-form-item>
    </a-row>
    <a-row>
      <a-form-item
        class="subTwoTitle"
        :label="issuePlaceLabel"
        name="publish_place"
      >
        <a-select
          v-model:value="modelValue.publish_place"
          :placeholder="commonPlaceHolder" 
          class="subName"
        >
          <a-select-option 
            v-for="item in issuePlaceList" 
            :key="item.id"
          >
            {{ item.value }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        class="subTwoTitle"
        :label="issueOrganizationLabel"
        name="publisher"
      >
        <a-select
          v-model:value="modelValue.publisher"
          :placeholder="commonPlaceHolder" 
          class="subName"
        >
          <a-select-option 
            v-for="item in issuePlaceList" 
            :key="item.id"
          >
            {{ item.value }}
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PassportItemInfo } from '@/interfaces/home/IPassportItemInfo';
@Options({
  props: {
    index: 0,
    modelValue: {}
  }
})
export default class PassportItem extends Vue {
  titleLabel = '护照';
  passportNoLabel = '护照号';
  passportDateLabel = '护照有效期';
  dateFormat = 'MM/DD/YYYY';
  issuePlaceLabel = '签发场所';
  issueOrganizationLabel = '签发机关';
  commonPlaceHolder = 'Placeholder text';
  issuePlaceList = [
    { id: 1, value: '浙江' },
    { id: 2, value: '上海' }
  ];
  modelValue?: PassportItemInfo;
  index?: number;
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
.select-field-style {
  width: 288px;
  height: 40px;
  border-radius: 2px;
}
.subTitle {
  line-height: 22px;
  margin-right: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 14px;
}
.subTwoTitle {
  line-height: 22px;
  margin-right: 16px;
  font-weight: 400;
  margin-bottom: 10px;
}
.subName {
  width: 288px;
  border-radius: 2px;
  height: 40px;
}
</style>
