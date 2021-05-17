<template>
  <div>
    <a-row>
      <a-form
        layout="inline"
        :model="formState"
      >
        <a-form-item style="width: 95px;">
          <a-checkbox
            v-model:checked="formState.checked"
            @click="checkClick()"
          >
            {{ formState.name }}
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-select @change="handleSelectChange">
            <a-select-option value="male">
              male
            </a-select-option>
            <a-select-option value="female">
              female
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item v-if="formState.type === 'input'">
          <a-input
            v-model:value="formState.value"
            placeholder="example"
          >
            <template #prefix>
              <LockOutlined style="color: rgba(0, 0, 0, 0.25);" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item v-if="formState.type === 'select'">
          <a-select @change="handleSelectChange">
            <a-select-option value="male">
              male
            </a-select-option>
            <a-select-option value="female">
              female
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-row>
  </div>
</template>

<script lang="ts">
import { HeaderFitterItems } from '@/interfaces/zero/IHeaderFitterItems';
import { Options, Vue } from 'vue-class-component';
@Options({
  props: {
    formState: {}
  }
})
export default class HeaderFitter extends Vue {
  formState: HeaderFitterItems = {
    name: '',
    condition: '',
    checked: true,
    type: '',
    value: ''
  };
  checkClick = () => {
    this.formState.checked = !this.formState.checked;
  }
  handleSelectChange = () => {
    this.formState.checked = !this.formState.checked;
  }
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style lang="scss" scoped>
/deep/ .ant-select.ant-select-single.ant-select-show-arrow {
  width: 210px;
}
/deep/ .ant-input-affix-wrapper {
  width: 210px;
}
</style>
