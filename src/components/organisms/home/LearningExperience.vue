<template>
  <a-form
    ref="learningInfo"
    layout="vertical"
    :model="modelValue"
    :rules="rules"
  >
    <a-row>
      <a-form-item
        class="subTitle"
        :label="finalDegreeLabel"
        name="final_degree"
      >
        <a-select
          v-model:value="modelValue.final_degree"
          class="subName"
        >
          <a-select-option
            v-for="item in finalDegreeList"
            :key="item.id"
          >
            {{ item.value }}
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-row>
    <a-row>
      <a-row class="title title2">
        {{ highSchoolLabel }}
      </a-row>
      <a-row class="title title3">
        <span class="ant-form-item-required">
          {{ highSchoolAreaLabel }}
        </span>
      </a-row>
      <a-form-item
        class="subTitle"
        name="high_school_province"
      >
        <a-select
          v-model:value="modelValue.high_school_province"
          :placeholder="sheng"
          class="subName"
        >
          <a-select-option
            v-for="item in addressDataList"
            :key="item.id"
          >
            {{ item.value }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        class="subTitle"
        name="high_school_city"
      >
        <a-select
          v-model:value="modelValue.high_school_city"
          class="subName"
          :placeholder="shi"
        >
          <a-select-option
            v-for="item in addressDataList"
            :key="item.id"
          >
            {{ item.value }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        class="subTitle"
        name="high_school_county"
      >
        <a-select
          v-model:value="modelValue.high_school_county"
          class="subName"
          :placeholder="xian"
        >
          <a-select-option
            v-for="item in addressDataList"
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
        :label="highSchoolNameLabel"
        name="high_school_name"
      >
        <a-input
          v-model:value="modelValue.high_school_name"
          class="subSchoolName"
          :placeholder="placeholderText"
        />
      </a-form-item>
    </a-row>
    <a-row class="title2">
      {{ universityLabel }}
    </a-row>
    <a-row>
      <a-form-item
        class="subTitle"
        :label="universityNameLabel"
        name="bachelor_university_name"
      >
        <a-input
          v-model:value="modelValue.bachelor_university_name"
          class="subName"
          :placeholder="placeholderText"
        />
      </a-form-item>
      <a-form-item
        class="subTitle"
        :label="collegeLabel"
        name="bachelor_institute_name"
      >
        <a-input
          v-model:value="modelValue.bachelor_institute_name"
          class="subName"
          :placeholder="placeholderText"
        />
      </a-form-item>
      <a-form-item
        class="subTitle"
        :label="professionLabel"
        name="bachelor_subject_name"
      >
        <a-input
          v-model:value="modelValue.bachelor_subject_name"
          class="subName"
          :placeholder="placeholderText"
        />
      </a-form-item>
    </a-row>
    <a-row class="title2">
      {{ masterLabel }}
    </a-row>
    <a-row>
      <a-form-item
        class="subTitle"
        :label="universityNameLabel"
        name="masterName"
      >
        <a-input
          v-model:value="modelValue.master_university_name"
          class="subName"
          :placeholder="placeholderText"
        />
      </a-form-item>
      <a-form-item
        class="subTitle"
        :label="collegeLabel"
        name="masterCollege"
      >
        <a-input
          v-model:value="modelValue.master_institute_name"
          class="subName"
          :placeholder="placeholderText"
        />
      </a-form-item>
      <a-form-item
        class="subTitle"
        :label="professionLabel"
        name="masterProfession"
      >
        <a-input
          v-model:value="modelValue.master_subject_name"
          class="subName"
          :placeholder="placeholderText"
        />
      </a-form-item>
    </a-row>
    <a-row class="title2">
      {{ doctorLabel }}
    </a-row>
    <a-row>
      <a-form-item
        class="subTitle"
        :label="universityNameLabel"
        name="doctorSchoolName"
      >
        <a-input
          v-model:value="modelValue.doctor_university_name"
          class="subName"
          :placeholder="placeholderText"
        />
      </a-form-item>
      <a-form-item
        class="subTitle"
        :label="collegeLabel"
        name="doctorCollege"
      >
        <a-input
          v-model:value="modelValue.doctor_institute_name"
          class="subName"
          :placeholder="placeholderText"
        />
      </a-form-item>
      <a-form-item
        class="subTitle"
        :label="professionLabel"
        name="doctorProfession"
      >
        <a-input
          v-model:value="modelValue.doctor_subject_name"
          class="subName"
          :placeholder="placeholderText"
        />
      </a-form-item>
    </a-row>
  </a-form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import { LearningInfo } from '@/interfaces/ILearningInfo';
@Options({
  props: {
    modelValue: {}
  }
})
export default class LearningExperience extends Vue {
  finalDegreeLabel = '最终学历';
  highSchoolLabel = '高中信息';
  highSchoolAreaLabel = '高中所在地';
  highSchoolNameLabel = '高中全称';
  universityLabel = '大学信息';
  universityNameLabel = '大学名称';
  collegeLabel = '学院';
  professionLabel = '专业';
  masterLabel = '硕士信息';
  doctorLabel = '博士信息';
  placeholderText = 'Placeholder text';
  sheng = '省';
  shi = '市';
  xian = '区/县';
  modelValue = {
    'high_school_province': 0,
    'high_school_city': 0
  };
  finalDegreeList = [
    { id: 1, value: '高中' },
    { id: 2, value: '大学' },
    { id: 3, value: '硕士' },
    { id: 4, value: '博士' }
  ];
  addressDataList = [
    { id: 1, value: '浙江' },
    { id: 2, value: '上海' }
  ];
  rules = {
    'final_degree': [{ required: true, message: '请选择', trigger: 'change', type: 'number' }],
    'high_school_province': [{ required: true, message: '请输入', trigger: 'change', type: 'number' }],
    'high_school_city': [{ required: true, message: '请选择', trigger: 'change', type: 'number' }],
    'high_school_county': [{ required: true, message: '请选择', trigger: 'change', type: 'number' }],
    'high_school_name': [{ required: true, message: '请输入', trigger: 'blur' }],
    'bachelor_university_name': [{ required: true, message: '请输入', trigger: 'blur' }],
    'bachelor_institute_name': [{ required: true, message: '请输入', trigger: 'blur' }],
    'bachelor_subject_name': [{ required: true, message: '请输入', trigger: 'blur' }],
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title {
  width: 100%;
}
.subTitle {
  line-height: 22px;
  margin-right: 16px;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 14px;
}
.subName {
  width: 288px;
  border-radius: 2px;
  height: 40px;
}
.title2 {
  font-size: 16px;
  font-weight: 550;
  line-height: 16px;
  margin-top: 8px;
  margin-bottom: 20px;
}
.title3 {
  margin-bottom: 10px !important;
}
.subSchoolName {
  width: 896px;
  border-radius: 2px;
  height: 40px;
}
</style>
