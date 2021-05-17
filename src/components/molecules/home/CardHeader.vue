<template>
  <a-row
    :id="cardTitle.anchorId"
    class="cardTitle"
  >
    <svg
      :width="cardTitle.iconWidth"
      :height="cardTitle.iconHeight"
      :viewBox="cardTitle.iconViewBox"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="custom-svg"
    >
      <path
        :d="cardTitle.icon"
        fill="#03053D"
      />
    </svg>
    <span class="titleWord">
      {{ cardTitle.title }}
    </span>
  </a-row>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {
  ContactsFilled,
  HomeFilled,
  IdcardFilled,
  PrinterFilled,
  ScheduleFilled,
  SafetyCertificateFilled
} from '@ant-design/icons-vue';
@Options({
  components: {
    ContactsFilled,
    HomeFilled,
    IdcardFilled,
    PrinterFilled,
    ScheduleFilled,
    SafetyCertificateFilled
  },
  props: {
    cardTitle: {},
  }
})
export default class CardHeader extends Vue {
  title = '';
  icon = '';
  cardTitle = {};
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style lang="scss" scoped>
.cardTitle {
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 550;
  line-height: 24px;
  text-align: left;
  background: rgba(224, 224, 224, 0.5);
  color: #161616;
  padding: 16px 0 16px 16px;
  margin-bottom: 32px;
}
.titleWord {
  padding-left: 10px;
}
.custom-svg {
  margin: auto 0;
}
</style>
