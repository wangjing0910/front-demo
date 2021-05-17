<template>
  <a-form
    ref="certificateInfoForm"
    name="certificate-validation"
    layout="vertical"
  >
    <CertificateInfoItem
      v-for="(item,index) in modelValue"
      :key="index"
      v-model="modelValue[index]"
      :index="index"
    />
    <a-row class="cardBottom">
      <a-button
        id="addCertificateBtn"
        class="addBtn"
        @click="addCertificate"
      >
        + {{ addRow }}
      </a-button>
    </a-row>
  </a-form>
</template>

<script lang="ts">
// import { getTest } from '@/service/example/ApiImpl';
import { Options, Vue } from 'vue-class-component';
import CertificateInfoItem from '@/components/molecules/home/CertificateInfoItem.vue';
import { CertificateItemInfo } from '@/interfaces/home/ICertificateItemInfo';
@Options({
  props: {
    modelValue: {}
  },
  components: {
    CertificateInfoItem
  }
})
export default class CertificateInfo extends Vue {
  private addRow = '行追加';
  private modelValue: Array<CertificateItemInfo> = [];
  addCertificate() {
    this.modelValue.push({
      // 'employee_cd': '0001',
      'qualification_name': '',
      'gain_date': '',
      'qualification_expiry_date': '',
      'qualification_level': ''
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
<style scoped lang="less">
.title {
  height: 16px;
  width: 288px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.32px;
  color: #262626;
}
.cardMain {
  width: 100%;
  height: fit-content;
  left: calc(50% - 104px / 2 - 396px);
  margin-top: 12px;
}
.cardBottom {
  width: 104px;
  height: 40px;
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
