<template>
  <div>
    <a-row class="title">
      {{ titleLabel }} {{ index + 1 }}
    </a-row>
    <a-row>
      <a-form-item
        class="subTitle"
        :label="passportLabel"
        name="passport_no"
      >
        <a-select
          v-model:value="modelValue.passport_no"
          class="subName"
          @change="aa"
        >
          <a-select-option
            v-for="item in passportItemInfoList"
            :key="item.passport_no"
          >
            {{ item.passport_no }}
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-row>
    <a-row>
      <a-form-item
        class="subTwoTitle"
        :label="issueCountryLabel"
        name="visa_country"
      >
        <a-select
          v-model:value="modelValue.visa_country"
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
        :label="issueCountryDateLabel"
        name="visa_expiry_date"
      >
        <a-range-picker
          v-model:value="modelValue.visa_expiry_date"
          format="YYYY-MM-DD"
          :placeholder="placeholder"
          class="subName"
        />
      </a-form-item>
    </a-row>
    <a-row>
      <a-form-item
        class="subTwoTitle"
        :label="arrivalsNumLabel"
        name="num_entries"
      >
        <a-input-number
          v-model:value="modelValue.num_entries"
          :min="1"
          :max="10000"
          class="input-num-field-style"
        />
      </a-form-item>
      <a-form-item
        class="subTwoTitle"
        :label="stayDaysLabel"
        name="num_time"
      >
        <a-input-number
          v-model:value="modelValue.num_time"
          :min="1"
          :max="10000"
          class="input-num-field-style"
        />
      </a-form-item>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PassportItemInfo } from '@/interfaces/home/IPassportItemInfo';
import { VisaItemInfo } from '@/interfaces/home/IVisaItemInfo';
@Options({
  props: {
    modelValue: {},
    index: 0,
    passportItemInfoList: Array<PassportItemInfo>()
  }
})
export default class VisaItem extends Vue {
  passportLabel = "护照选择";
  titleLabel = '签证';
  issueCountryLabel = '签证国家';
  issueCountryDateLabel = '签证有效日期';
  arrivalsNumLabel = '入境次数';
  stayDaysLabel = '停留天数';
  dateFormat = 'MM/DD/YYYY';
  commonPlaceHolder = 'Placeholder text';
  placeholder = ['生效日期', '失效日期'];
  passportItemInfoList ?:Array<PassportItemInfo>;
  modelValue?: VisaItemInfo;
  index?: number;
  aa() {
    if (this.modelValue) {
      console.log(this.modelValue['passport_no']);
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
.input-num-field-style {
  width: 136px;
  height: 40px;
  border-radius: 2px;
}
</style>
