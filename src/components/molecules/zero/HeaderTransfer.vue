<template>
  <div>
    <a-transfer
      :data-source="mockData"
      :titles="['Source', 'Target']"
      :target-keys="targetKeys"
      :selected-keys="selectedKeys"
      :render="item => item.title"
      :disabled="disabled"
      :list-style="{
        width: '300px',
        height: '370px'
      }"
      @change="handleChange"
      @selectChange="handleSelectChange"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { IHeaderTransferItems } from '@/interfaces/zero/IHeaderTransferItems';

@Options({
  props: {
    formState: {}
  }
})
export default class HeaderTransfer extends Vue {
  selectedKeys= ['1', '4'];
  mockData: IHeaderTransferItems[] = [];
  targetKeys = this.mockData.filter((item:IHeaderTransferItems) => +item.key % 3 > 1).map((item: IHeaderTransferItems) => item.key);
  handleChange(nextTargetKeys: any) { // 未知类型
    this.targetKeys = nextTargetKeys;
  };
  handleSelectChange(sourceSelectedKeys: any, targetSelectedKeys: any) { // 未知类型
    this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];
  };
  mounted() {
    for (let i = 0; i < 20; i++) {
      this.mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1,
      });
    }
  }
}
</script>
