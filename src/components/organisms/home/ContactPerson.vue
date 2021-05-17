<template>
  <a-form
    ref="contactPersonForm"
    name="contactPerson-validation"
    layout="vertical"
    :model="modelValue"
    :rules="rules"
  >
    <a-row>
      <a-form-item
        class="subTitle"
        :label="nameLabel"
        name="emergency_name"
      >
        <a-input
          v-model:value="modelValue.emergency_name"
          class="subName"
          :placeholder="commonPlaceHolder"
        />
      </a-form-item>
    </a-row>
    <a-row>
      <a-form-item
        class="relationship"
        :label="relationshipLabel"
        name="relationship"
      >
        <a-select
          v-model:value="modelValue.relationship"
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
    <a-row>
      <a-form-item
        class="subTitle"
        :label="phoneLabel"
        name="emergency_tel"
      >
        <a-input
          v-model:value="modelValue.emergency_tel"
          class="subName"
          :placeholder="phoneLabelPlaceHolder"
        />
      </a-form-item>
    </a-row>
    <a-row>
      <a-form-item
        class="subTitle"
        :label="addressLabel"
        name="emergency_addr"
      >
        <a-input
          v-model:value="modelValue.emergency_addr"
          placeholder="Placeholder text" 
          class="subSchoolName"
        />
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
export default class ContactPerson extends Vue {
  nameLabel = '姓名';
  commonPlaceHolder = 'Placeholder text';
  phoneLabel = "联系电话";
  phoneLabelPlaceHolder = '+86';
  addressLabel = '地址';
  relationshipLabel = '与本人关系';
  modelValue = {};
  rules = {
    'emergency_name': [{ required: true, message: '请输入名字', trigger: 'blur' }],
    'emergency_tel': [{ required: true, message: '请输入正确的电话号码', trigger: 'blur' }],
    'relationship': [{ required: true, message: '请选择正确的关系', trigger: 'blur', type: 'number' }],
    'emergency_addr': [{ required: true, message: '请输入正确的地址', trigger: 'blur' }]
  };

  issuePlaceList = [
    { id: 1, value: '父子' },
    { id: 2, value: '母子' }
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.subSchoolName {
  font-size: 14px;
  width: 896px;
  border-radius: 2px;
  height: 40px;
}
.input-num-field-style {
  width: 136px;
  height: 40px;
  margin-top: 10px;
  border-radius: 2px;
}
.select-field-style {
  width: 288px;
  height: 40px;
  margin-top: 10px;
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
