<template>
  <a-form
    ref="familyInfoForm"
    name="family-validation"
    layout="vertical"
    :model="modelValue"
    :rules="rules"
  >
    <a-row>
      <a-form-item
        class="subTitle"
        :label="marriageLabel"
        name="marital_status"
      >
        <a-select
          v-model:value="modelValue.marital_status"
          class="subName"
        >
          <a-select-option 
            v-for="item in marriageList" 
            :key="item.id"
          >
            {{ item.value }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        class="subTitle"
        :label="workTypeLabel"
        name="spouse_work"
      >
        <a-select
          v-model:value="modelValue.spouse_work"
          class="subName"
        >
          <a-select-option 
            v-for="item in issueOrganizationList" 
            :key="item.id"
          >
            {{ item.value }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        class="subTitle"
        :label="sameCityLabel"
        name="in_the_same_city"
      >
        <a-select
          v-model:value="modelValue.in_the_same_city"
          class="subName"
        >
          <a-select-option 
            v-for="item in confirmList" 
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
        :label="childNumLabel"
        name="children_number"
      >
        <a-input-number
          v-model:value="modelValue.children_number"
          :min="1"
          :max="10000"
          class="input-num-field-style"
        />
      </a-form-item>
      <a-form-item
        class="subTitle"
        :label="birthYearFirstLabel"
        name="first_child_birthYear"
      >
        <a-date-picker
          v-model="modelValue.first_child_birthYear" 
          format="YYYY"
          placeholder="YYYY"
          class="date-field-style"
        />
      </a-form-item>
      <a-form-item
        class="subTitle"
        :label="birthYearSecondLabel"
        name="second_child_birthYear"
      >
        <a-date-picker
          v-model="modelValue.second_child_birthYear" 
          format="YYYY"
          placeholder="YYYY"
          class="date-field-style"
        />
      </a-form-item>
      <a-form-item
        class="subTitle"
        :label="birthYearThirdLabel"
        name="third_child_birthYear"
      >
        <a-date-picker
          v-model="modelValue.third_child_birthYear" 
          format="YYYY"
          placeholder="YYYY"
          class="date-field-style"
        />
      </a-form-item>
    </a-row>
    <a-row>
      <a-form-item
        class="subTitle"
        :label="careChildLabel"
        name="care_child_method"
      >
        <a-select
          v-model:value="modelValue.care_child_method"
          placeholder="Placeholder text" 
          class="select-field-style"
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
        class="subTitle"
        :label="careChildOtherLabel"
        name="care_child_other_method"
      >
        <a-input
          v-model="modelValue.care_child_other_method"
          placeholder="Placeholder text" 
          class="care-child-other-style"
        />
      </a-form-item>
    </a-row>
    <a-row>
      <a-form-item
        class="subTitle"
        :label="nowAddressLabel"
        name="present_address"
      >
        <a-input
          v-model:value="modelValue.present_address"
          placeholder="Placeholder text" 
          class="care-child-other-style"
        />
      </a-form-item>
      <a-form-item
        class="subTitle"
        :label="houseLabel"
        name="house_status"
      >
        <a-select
          v-model:value="modelValue.house_status"
          placeholder="Placeholder text" 
          class="select-field-style"
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
        :label="housePeopleLabel"
        name="co_habitant_situation"
      >
        <a-checkbox-group
          v-model:value="modelValue.housePeople"
          :options="plainOptions"
        />
        <a-input
          v-model="modelValue.co_habitant_situation"
          placeholder="Placeholder text"
          class="cohabit-other-style"
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
export default class HelloWorld extends Vue {
  marriageLabel = '婚姻情况';
  workTypeLabel = '对方工作类型';
  sameCityLabel = '是否在同一城市';
  childNumLabel = '子女数量';
  birthYearFirstLabel = '一胎出生年份';
  birthYearSecondLabel = '二胎出生年份';
  birthYearThirdLabel = '三胎出生年份';
  careChildLabel = '照看子女方式';
  careChildOtherLabel = '其他方式';
  nowAddressLabel = '现住地址';
  houseLabel = '住房情况';
  housePeopleLabel = '同住人情况（多选）';
  modelValue = {};
  marriageList = [
    { id: 1, value: '已婚' },
    { id: 2, value: '未婚' }
  ];
  confirmList = [
    { id: true, value: '是' },
    { id: false, value: '否' }
  ];
  issuePlaceList = [
    { id: 1, value: '浙江' },
    { id: 2, value: '上海' }
  ];
  issueOrganizationList = [
    { id: 1, value: '浙江' },
    { id: 2, value: '上海' }
  ];
  plainOptions = ['自己', '配偶', '子女', '父母', '同事', '朋友', '其他'];
  rules = {
    'marital_status': [{ required: true, message: '请选择', trigger: 'change', type: 'number' }],
    'spouse_work': [{ required: true, message: '请选择', trigger: 'change', type: 'number' }],
    'in_the_same_city': [{ required: true, message: '请选择', trigger: 'change', type: 'boolean' }],
    'present_address': [{ required: true, message: '请输入正确的地址', trigger: 'blur' }],
    'house_status': [{ required: true, message: '请选择', trigger: 'blur', type: 'number' }],
    'co_habitant_situation': [{ required: true, message: '请选择', trigger: 'blur' }]
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.select-field-style {
  width: 288px;
  height: 40px;
  border-radius: 2px;
}
.date-field-style {
  width: 237px;
  height: 40px;
  border-radius: 2px;
}
.care-child-other-style {
  width: 592px;
  height: 40px;
  border-radius: 2px;
  padding: 8px 12px;
}
.cohabit-other-style {
  width: 420px;
  height: 40px;
  border-radius: 2px;
  padding: 8px 12px;
}
.input-num-field-style {
  width: 136px;
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
