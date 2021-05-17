<template>
  <div class="anchor-layout">
    <a-anchor
      :show-ink-in-fixed="false"
      :target-offset="targetOffset"
    >
      <a-anchor-link
        v-for="(item, index) in cardTitle"
        :key="index"
        :href="`#${(item.anchorId)}`"
        :title="item.title"
      />
    </a-anchor>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  props: {
    cardTitle: {}
  }
})
export default class Anchor extends Vue {
  targetOffset = window.innerHeight / 3;
}
</script>
<style lang="less">
.ant-anchor-link-active > .ant-anchor-link-title {
  color: #161616 !important;
}
.ant-anchor-link {
  margin-top: 36px;
  font-weight: 500;
  font-size: 16px;
  padding-left: 18px;
}
</style>
