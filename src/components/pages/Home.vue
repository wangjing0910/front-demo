<template>
  <div>
    <div class="head">
      <p>{{ title }}</p>
      <span>Additional description if needed</span>
    </div>
    <a-row style="padding-bottom: 70px;">
      <a-col class="main-card">
        <CardHeader :card-title="titleConfig[0]" />
        <div class="mainContent">
          <PersonInfo v-model="parameter" />
        </div>
        <CardHeader :card-title="titleConfig[1]" />
        <div class="mainContent">
          <Passport v-model="parameter.passport" />
        </div>
        <CardHeader :card-title="titleConfig[2]" />
        <div class="mainContent">
          <Visa
            v-model="parameter.visa"
            :passport-item-info-list="parameter.passport"
          />
        </div>
        <CardHeader :card-title="titleConfig[3]" />
        <div class="mainContent">
          <FamilyInfo v-model="parameter.family" />
        </div>
        <CardHeader :card-title="titleConfig[4]" />
        <div class="mainContent">
          <ContactPerson v-model="parameter.emergency" />
        </div>
        <CardHeader :card-title="titleConfig[5]" />
        <div class="mainContent">
          <PreviousJobInfo v-model="parameter.career" />
        </div>
        <CardHeader :card-title="titleConfig[6]" />
        <div class="mainContent">
          <LearningExperience v-model="parameter.education" />
        </div>
        <CardHeader :card-title="titleConfig[7]" />
        <div class="mainContent">
          <CertificateInfo v-model="parameter.qualification" />
        </div>
      </a-col>
      <a-col class="anchor-layout">
        <Anchor :card-title="titleConfig" />
      </a-col>
    </a-row>
    <a-row class="submitContent">
      <a-button
        id="submitForm"
        class="btn-submit"
        type="primary"
        @click="submit"
      >
        {{ querensub }}
      </a-button>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { postHome } from '@/service/home/ApiImpl';
import Anchor from '@/components/organisms/home/Anchor.vue';
import PersonInfo from '@/components/organisms/home/PersonInfo.vue';
import Passport from '@/components/organisms/home/Passport.vue';
import FamilyInfo from '@/components/organisms/home/FamilyInfo.vue';
import ContactPerson from '@/components/organisms/home/ContactPerson.vue';
import PreviousJobInfo from '@/components/organisms/home/PreviousJobInfo.vue';
import Visa from '@/components/organisms/home/Visa.vue';
import LearningExperience from '@/components/organisms/home/LearningExperience.vue';
import CertificateInfo from '@/components/organisms/home/CertificateInfo.vue';
import CardHeader from '@/components/molecules/home/CardHeader.vue';
import { message } from 'ant-design-vue'; // 弹出吐司
@Options({
  components: {
    Anchor,
    CardHeader,
    PersonInfo,
    FamilyInfo,
    ContactPerson,
    PreviousJobInfo,
    LearningExperience,
    CertificateInfo,
    Passport,
    Visa
  }
})
export default class Home extends Vue {
  titleConfig = [
    {
      title: '个人信息',
      anchorId: 'personInfo',
      icon: 'M0 1.995C0 0.893 0.893 0 1.995 0H16.005C17.107 0 18 0.893 18 1.995V16.005C18 16.5341 17.7898 17.0415 '+
        '17.4157 17.4157C17.0415 17.7898 16.5341 18 16.005 18H1.995C1.46589 18 0.958457 17.7898 0.584322 '+
        '17.4157C0.210187 17.0415 0 16.5341 0 16.005V1.995ZM3.357 15H14.847C14.2026 14.0734 13.3435 13.3166 12.3431 '+
        '12.7942C11.3427 12.2717 10.2306 11.9993 9.102 12C7.97338 11.9993 6.86134 12.2717 5.86091 12.7942C4.86048 '+
        '13.3166 4.00137 14.0734 3.357 15ZM9 10C9.45963 10 9.91475 9.90947 10.3394 9.73358C10.764 9.55769 11.1499 '+
        '9.29988 11.4749 8.97487C11.7999 8.64987 12.0577 8.26403 12.2336 7.83939C12.4095 7.41475 12.5 6.95963 12.5 '+
        '6.5C12.5 6.04037 12.4095 5.58525 12.2336 5.16061C12.0577 4.73597 11.7999 4.35013 11.4749 4.02513C11.1499 '+
        '3.70012 10.764 3.44231 10.3394 3.26642C9.91475 3.09053 9.45963 3 9 3C8.07174 3 7.1815 3.36875 6.52513 '+
        '4.02513C5.86875 4.6815 5.5 5.57174 5.5 6.5C5.5 7.42826 5.86875 8.3185 6.52513 8.97487C7.1815 9.63125 8.07174 '+
        '10 9 10Z',
      iconWidth: '18',
      iconHeight: '18',
      iconViewBox: '0 0 18 18'
    },
    {
      title: '护照信息',
      anchorId: 'passport',
      icon: 'M4.35 3H19.65C20.3956 3 21 3.60442 21 4.35V19.65C21 20.3956 20.3956 21 19.65 21H4.35C3.60442 21 3 ' +
            '20.3956 3 19.65V4.35C3 3.60442 3.60442 3 4.35 3ZM6.27283 7.09101C6.27283 6.63914 6.63914 6.27283 ' +
            '7.09101 6.27283H10.3637C10.8156 6.27283 11.1819 6.63914 11.1819 7.09101V10.3637C11.1819 10.8156 ' +
            '10.8156 11.1819 10.3637 11.1819H7.09101C6.63914 11.1819 6.27283 10.8156 6.27283 ' +
            '10.3637V7.09101ZM12.8184 7.09101C12.8184 6.63914 13.1847 6.27283 13.6365 ' +
            '6.27283H16.9093C17.3611 6.27283 17.7275 6.63914 17.7275 7.09101C17.7275 ' +
            '7.54288 17.3611 7.90919 16.9093 7.90919H13.6365C13.1847 7.90919 12.8184 7.54288 ' +
            '12.8184 7.09101ZM13.6365 9.54553C13.1847 9.54553 12.8184 9.91184 12.8184 10.3637C12.8184 ' +
            '10.8156 13.1847 11.1819 13.6365 11.1819H16.9093C17.3611 11.1819 17.7275 10.8156 17.7275 ' +
            '10.3637C17.7275 9.91184 17.3611 9.54553 16.9093 9.54553H13.6365ZM6.27283 13.6365C6.27283 ' +
            '13.1847 6.63914 12.8184 7.09101 12.8184H16.9092C17.3611 12.8184 17.7274 13.1847 17.7274 13.6365C17.7274 ' +
            '14.0884 17.3611 14.4547 16.9092 14.4547H7.09101C6.63914 14.4547 6.27283 14.0884 6.27283 13.6365ZM7.09101 ' +
            '16.0911C6.63914 16.0911 6.27283 16.4574 6.27283 16.9092C6.27283 17.3611 6.63914 17.7274 7.09101 ' +
            '17.7274H16.9092C17.3611 17.7274 17.7274 17.3611 17.7274 16.9092C17.7274 16.4574 17.3611 16.0911 16.9092 16.0911H7.09101Z',
      iconWidth: '24',
      iconHeight: '24',
      iconViewBox: '0 0 24 24'
    },
    {
      title: '签证信息',
      anchorId: 'visa',
      icon: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 ' +
            '19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 ' +
            '16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 ' +
            '8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z',
      iconWidth: '24',
      iconHeight: '24',
      iconViewBox: '0 0 24 24'
    },
    {
      title: '家庭信息',
      anchorId: 'familyInfo',
      icon: 'M19 19C19 19.2653 18.8946 19.5196 18.7071 19.7071C18.5196 19.8947 18.2652 20 18 20H4C3.73478 20 '+
        '3.48043 19.8947 3.29289 19.7071C3.10536 19.5196 3 19.2653 3 19V10H0L10.327 0.612042C10.5111 0.44452 '+
        '10.7511 0.351685 11 0.351685C11.2489 0.351685 11.4889 0.44452 11.673 0.612042L22 10H19V19ZM6.5 12C6.5 '+
        '13.1935 6.97411 14.3381 7.81802 15.182C8.66193 16.0259 9.80653 16.5 11 16.5C12.1935 16.5 13.3381 16.0259 '+
        '14.182 15.182C15.0259 14.3381 15.5 13.1935 15.5 12H13.5C13.5 12.6631 13.2366 13.299 12.7678 13.7678C12.2989 '+
        '14.2366 11.663 14.5 11 14.5C10.337 14.5 9.70107 14.2366 9.23223 13.7678C8.76339 13.299 8.5 12.6631 8.5 '+
        '12H6.5Z',
      iconWidth: '22',
      iconHeight: '20',
      iconViewBox: '0 0 22 20'
    },
    {
      title: '紧急联络人',
      anchorId: 'contact',
      icon: 'M17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.316071 18.5587 0 17.7956 0 17V3C0 2.20435 '+
        '0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H17C17.2652 0 17.5196 0.105357 17.7071 '+
        '0.292893C17.8946 0.48043 18 0.734784 18 1V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 '+
        '17.2652 20 17 20ZM16 18V16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 '+
        '17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H16ZM9 8C9.53043 8 10.0391 7.78929 '+
        '10.4142 7.41421C10.7893 7.03914 11 6.53043 11 6C11 5.46957 10.7893 4.96086 10.4142 4.58579C10.0391 4.21071 '+
        '9.53043 4 9 4C8.46957 4 7.96086 4.21071 7.58579 4.58579C7.21071 4.96086 7 5.46957 7 6C7 6.53043 7.21071 '+
        '7.03914 7.58579 7.41421C7.96086 7.78929 8.46957 8 9 8ZM6 12H12C12 11.2044 11.6839 10.4413 11.1213 '+
        '9.87868C10.5587 9.31607 9.79565 9 9 9C8.20435 9 7.44129 9.31607 6.87868 9.87868C6.31607 10.4413 6 '+
        '11.2044 6 12Z',
      iconWidth: '18',
      iconHeight: '20',
      iconViewBox: '0 0 18 20'
    },
    {
      title: '前职信息',
      anchorId: 'previousJob',
      icon: 'M7 12V15H13V12H20V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 '+
        '20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V12H7ZM9 10H11V13H9V10ZM5 '+
        '4V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 '+
        '14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 '+
        '4.48043 20 4.73478 20 5V10H13V8H7V10H0V5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 '+
        '0.734784 4 1 4H5ZM7 2V4H13V2H7Z',
      iconWidth: '20',
      iconHeight: '20',
      iconViewBox: '0 0 20 20'
    },
    {
      title: '教育经历',
      anchorId: 'learningInfo',
      icon: 'M10 19V21.5L7 19.5L4 21.5V19H3.5C2.57174 19 1.6815 18.6313 1.02513 17.9749C0.368749 17.3185 0 16.4283 '+
        '0 15.5V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H17C17.2652 0 17.5196 '+
        '0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V18C18 18.2652 17.8946 18.5196 17.7071 '+
        '18.7071C17.5196 18.8946 17.2652 19 17 19H10ZM4 17V15H10V17H16V14H3.5C3.10218 14 2.72064 14.158 2.43934 '+
        '14.4393C2.15804 14.7206 2 15.1022 2 15.5C2 15.8978 2.15804 16.2794 2.43934 16.5607C2.72064 16.842 3.10218 '+
        '17 3.5 17H4ZM4 3V5H6V3H4ZM4 6V8H6V6H4ZM4 9V11H6V9H4Z',
      iconWidth: '18',
      iconHeight: '22',
      iconViewBox: '0 0 18 22'
    },
    {
      title: '资格证信息',
      anchorId: 'certificateInfo',
      icon: 'M0.783 1.826L9 0L17.217 1.826C17.4391 1.87536 17.6377 1.99897 17.78 2.1764C17.9224 2.35384 18 2.57452 '+
      '18 2.802V12.789C17.9999 13.7767 17.756 14.7492 17.2899 15.62C16.8238 16.4908 16.1499 17.2331 15.328 17.781L9 '+
      '22L2.672 17.781C1.85027 17.2332 1.17646 16.4911 0.710348 15.6205C0.244236 14.7498 0.000236356 13.7776 0 '+
      '12.79V2.802C3.90378e-05 2.57452 0.0776379 2.35384 0.21999 2.1764C0.362341 1.99897 0.560937 1.87536 0.783 '+
      '1.826ZM9 12.5L11.939 14.045L11.378 10.773L13.755 8.455L10.469 7.977L9 5L7.53 7.977L4.245 8.455L6.622 '+
      '10.773L6.062 14.045L9 12.5Z',
      iconWidth: '18',
      iconHeight: '22',
      iconViewBox: '0 0 18 22'
    }
  ];
  parameter = {
    // 个人信息
    'employee_cd': 0,
    'phone_number': '',
    'id_number': '',
    'regist_location_province': null,
    'regist_location_city': null,
    'regist_location_county': null,
    'registration_type': null,
    // 护照信息
    passport: [{
      'passport_no': null,
      'passport_expiry_date': null
    }],
    // 签证信息
    visa: [{
      'passport_no': null
    }],
    // 家庭信息
    family: {
      'marital_status': null,
      'spouse_work': null,
      'in_the_same_city': null,
      'first_child_birthYear': null,
      'second_child_birthYear': null,
      'third_child_birthYear': null,
      'present_address': null,
      'house_status': null,
      'housePeople': []
    },
    // 紧急联络人
    emergency: {
      'emergency_name': null,
      'relationship': null,
      'emergency_tel': null,
      'emergency_addr': null
    },
    // 前职信息
    career: [{
      'pre_company_name': null
    }],
    // 教育经历
    education: {
      'final_degree': null,
      'high_school_province': null,
      'high_school_city': null,
      'high_school_county': null,
      'high_school_name': null,
      'bachelor_university_name': null,
      'bachelor_institute_name': null,
      'bachelor_subject_name': null
    },
    // 资格证信息
    qualification: [{
      'qualification_name': null
    }]
  }
  
  title = '個人情報回収用ページ';
  querensub = '确认提交';
  submit() {
    this.parameter['employee_cd'] = + ('0' + this.$route?.query.cd);
    const canshu = this.checkParameter();
    if (canshu.flg) {
      postHome(canshu.data).then();
    }
  }

  // 个人信息检查
  personInfoCheck() {
    if (!this.parameter.employee_cd) {
      message.warn('用户CD不存在');
      return false;
    }
    if (!this.parameter.phone_number) {
      message.warn('请输入个人信息中的电话号码');
      return false;
    }
    if (!this.parameter.id_number) {
      message.warn('请输入个人信息中的用户身份证号');
      return false;
    }
    if (!(this.parameter.regist_location_province && this.parameter.regist_location_city && this.parameter.regist_location_county)) {
      message.warn('请选择个人信息中的户籍所在地');
      return false;
    }
    if (!this.parameter.registration_type) {
      message.warn('请选择个人信息中的户口类型');
      return false;
    }
    return true;
  }

  // 护照信息
  getPassportData() {
    return this.parameter.passport.filter(e => !!e.passport_no);
  }

  // 签证信息
  getVisaData() {
    return this.parameter.visa.filter(e => !!e.passport_no);
  }

  // 家庭信息
  familyCheck() {
    if (!this.parameter.family.marital_status) {
      message.warn('请选择家庭信息中的婚姻情况');
      return false;
    }
    if (!this.parameter.family.marital_status) {
      message.warn('请选择家庭信息中的对方工作类型');
      return false;
    }
    if (!this.parameter.family.marital_status) {
      message.warn('请选择家庭信息中的是否在同一城市');
      return false;
    }
    if (!this.parameter.family.present_address) {
      message.warn('请输入家庭信息中的现住地址');
      return false;
    }
    if (!this.parameter.family.house_status) {
      message.warn('请选择家庭信息中的住房情况');
      return false;
    }
    if (!(this.parameter.family.housePeople && this.parameter.family.housePeople.length > 0)) {
      message.warn('请选择家庭信息中的同住人情况');
      return false;
    }
    return true;
  }

  // 紧急联系人
  contactPersonCheck() {
    if (!this.parameter.emergency.emergency_name) {
      message.warn('请输入紧急联系人中的姓名');
      return false;
    }
    if (!this.parameter.emergency.relationship) {
      message.warn('请选择紧急联系人中的与本人关系');
      return false;
    }
    if (!this.parameter.emergency.emergency_tel) {
      message.warn('请输入紧急联系人中的联系电话');
      return false;
    }
    if (!this.parameter.emergency.emergency_addr) {
      message.warn('请输入紧急联系人中的地址');
      return false;
    }
    return true;
  }

  // 前职信息
  getPreviousJobInfoData() {
    return this.parameter.career.filter(e => !!e.pre_company_name);
  }

  // 教育信息
  learningExperienceCheck() {
    if (!this.parameter.education.final_degree) {
      message.warn('请选择教育经历中的最终学历');
      return false;
    }
    if (!(this.parameter.education.high_school_province && this.parameter.education.high_school_city && this.parameter.education.high_school_county)) {
      message.warn('请选择教育经历中的高中所在地');
      return false;
    }
    if (!this.parameter.education.high_school_name) {
      message.warn('请输入教育经历中的高中全程');
      return false;
    }
    if (!(this.parameter.education.bachelor_university_name && this.parameter.education.bachelor_institute_name && this.parameter.education.bachelor_subject_name)) {
      message.warn('请选择教育经历中的大学信息');
      return false;
    }
    return true;
  }

  // 资格证信息
  getCertificateInfoData() {
    return this.parameter.qualification.filter(e => !!e.qualification_name);
  }
  checkParameter() {
    const flg = false;
    const data = this.parameter;
    if(!this.personInfoCheck() || !this.familyCheck() || !this.contactPersonCheck() || !this.learningExperienceCheck()) {
      return {
        flg: flg,
        data: data
      };
    }
    data.passport = this.getPassportData();
    data.visa = this.getVisaData();
    data.career = this.getPreviousJobInfoData();
    data.qualification = this.getCertificateInfoData();
    return {
      flg: true,
      data: data
    };
  }
}
</script>
<style scoped lang="scss">
.head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 106px;
  background: #161616;
  margin: auto;
}
p {
  padding-top: 24px;
  padding-left: 32px;
  height: 32px;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 32px;
  color: #fff;
  flex: none;
  order: 0;
  flex-grow: 0;
}
span {
  padding-top: 8px;
  padding-left: 32px;
  height: 18px;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #cecece;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.anchor-layout {
  height: 376px;
  position: fixed;
  z-index: 1;
  right: 5%;
  top: 164px;
}
.main-card {
  width: calc(100%);
}
.mainContent {
  text-align: left;
  padding-left: 272px;
  margin-bottom: 48px;
}
.submitContent {
  border-top: 1px solid #efefef;
  height: 74px;
  width: 100%;
  padding-left: 272px;
  padding-top: 15px;
  position: fixed;
  bottom: 0%;
  background-color: white;
}
.btn-submit {
  width: 104px;
  height: 40px;
  border-radius: 2px;
}
/deep/ .ant-select-selector {
  height: 40px !important;
  text-align: left;
}
/deep/ .ant-select-selection-search-input {
  height: 40px !important;
  line-height: 40px !important;
}
/deep/ .ant-select-selection-placeholder {
  height: 40px !important;
  line-height: 40px !important;
}
/deep/ .ant-select-selection-item {
  height: 40px !important;
  line-height: 40px !important;
}
/deep/ .ant-input {
  height: 40px !important;
}
/deep/ .ant-input-number-input-wrap {
  height: 40px !important;
  line-height: 40px !important;
}
</style>
