<template>
  <div>
    <div class="title">
      Search Table
    </div>
    <div>
      <a-table
        :row-key="record => record.id"
        :row-selection="rowSelection"
        :columns="columns"
        :data-source="tableData"
        :pagination="pagination"
      >
        <template #action>
          <span>
            <a>Config</a>
            <a-divider type="vertical" />
            <a>Subscription Alert</a>
          </span>
        </template>
        <template #buildOptionText="props">
          <span>{{ props.value }}条/页</span>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ref } from 'vue';
@Options({})
export default class Body extends Vue {
  pageSizeOptions = ref<string[]>(['10', '20', '30', '40', '50']);
  pagination = {
    "show-total": (total:any, range:any) => `${range[0]}-${range[1]} of ${total} items`,
    "page-size": 20,
    "page-size-options": this.pageSizeOptions,
    "show-size-changer": true
  };
  columns = [
    {
      title: '社員CD',
      dataIndex: 'cd'
    },
    {
      title: '氏名（日本）',
      dataIndex: 'jpname'
    },
    {
      title: 'フリガナ',
      dataIndex: 'frigana'
    },
    {
      title: '氏名（中国語）',
      dataIndex: 'chname'
    },
    {
      title: '氏名（英語）',
      dataIndex: 'enname'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      slots: { customRender: 'action' }
    }
  ];
  tableData = [
    {
      id: 1,
      cd: 10000001,
      jpname: 'Vel cras auctor at tortor ',
      frigana: 'Vel cras auctor at tortor ',
      chname: 'Vel cras auctor at tortor ',
      enname: 'Vel cras auctor at tortor '
    }
  ];
  rowSelection() {
    return {};
  }
  created() {
    for (let index = 0; index < 599; index++) {
       this.tableData.push({
          id: index + 2,
          cd: 10000000 + index + 2,
          jpname: 'Vel cras auctor at tortor ',
          frigana: 'Vel cras auctor at tortor ',
          chname: 'Vel cras auctor at tortor ',
          enname: 'Vel cras auctor at tortor '
       });
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
  padding-bottom: 10px;
}
</style>
