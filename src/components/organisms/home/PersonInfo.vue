<template>
  <a-form
    ref="personInfoForm"
    name="personinfo-validation"
    layout="vertical"
    :model="modelValue"
    :rules="rules"
  >
    <a-row>
      <a-form-item
        class="subTitle"
        :label="phoneLabel"
        name="phone_number"
      >
        <a-input
          v-model:value="modelValue.phone_number"
          class="subName"
          :placeholder="phoneLabelPlaceHolder"
        />
      </a-form-item>
    </a-row>
    <a-row>
      <a-form-item
        class="subTitle"
        :label="sfzLabel"
        name="id_number"
      >
        <a-input
          v-model:value="modelValue.id_number"
          class="subName"
          :placeholder="commonPlaceHolder"
        />
      </a-form-item>
    </a-row>
    <a-row>
      <a-form-item
        class="subTitle"
        :label="housePlaceLabel"
        name="regist_location_province"
      >
        <a-select
          v-model:value="modelValue.regist_location_province"
          :placeholder="sheng" 
          class="select-field-style"
        >
          <a-select-option 
            v-for="item in issuePlaceList" 
            :key="item.id"
          >
            {{ item.value }}
          </a-select-option>
        </a-select>
        <a-select
          v-model:value="modelValue.regist_location_city"
          :placeholder="shi" 
          class="select-field-style"
          style="margin-left: 16px;"
        >
          <a-select-option 
            v-for="item in issuePlaceList" 
            :key="item.id"
          >
            {{ item.value }}
          </a-select-option>
        </a-select>
        <a-select
          v-model:value="modelValue.regist_location_county"
          :placeholder="xian" 
          class="select-field-style"
          style="margin-left: 16px;"
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
    <a-row>
      <a-form-item
        class="subTitle"
        :label="houseTypeLabel"
        name="registration_type"
      >
        <a-select
          v-model:value="modelValue.registration_type"
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
  </a-form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    modelValue: {}
  }
})
export default class HelloWorld extends Vue {
  phoneLabel = '电话号码';
  phoneLabelPlaceHolder = '+86';
  commonPlaceHolder = 'Placeholder text';
  housePlaceLabel = '户籍所在地';
  houseTypeLabel = '户口类型';
  sfzLabel = '身份证号码';
  sheng = '省';
  shi = '市';
  xian = '区/县';
  modelValue = {};
  rules = {
    'phone_number': [{ required: true, message: '请输入正确的电话号码', trigger: 'blur' }],
    'id_number': [{ required: true, message: '请输入正确的身份证号码', trigger: 'blur' }],
    'registration_type': [{ required: true, message: '请选择正确的户口类型', trigger: 'change', type: 'number' }],
    'regist_location_province': [{ required: true, message: '请选择户籍所在地', trigger: 'change', type: 'number' }]
  };

  issuePlaceList = [
    { id: 1, value: '浙江' },
    { id: 2, value: '上海' }
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.input-num-field-style {
  width: 136px;
  height: 40px;
  border-radius: 2px;
}
.select-field-style {
  width: 288px;
  height: 40px;
  border-radius: 2px;
}
.subTitle {
  line-height: 22px;
  margin-right: 16px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 14px;
}
.subName {
  width: 288px;
  border-radius: 2px;
  height: 40px;
}
</style>
