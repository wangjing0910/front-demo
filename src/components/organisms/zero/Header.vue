<template>
  <div>
    <a-collapse
      v-model:activeKey="activeKey"
      :style="collapseStyle"
    >
      <a-collapse-panel
        key="1"
        :header="head1"
        :style="customStyle"
      >
        <div>
          <HeaderFitter
            v-for="(item,index) in headerFitterList"
            :key="index"
            :form-state="item"
          />
        </div>
        <template #extra>
          <div>
            <span>{{ head2 }}</span>
            <select
              style="border: 1px solid #d9d9d9;
                      border-radius: 2px;
                      margin: -3px 7px;"
              @click.stop="clickSelect"
            >
              <option
                disabled
                selected
                value
              >
                fitter
              </option>
              <option value="shanghai">
                Zone one
              </option>
              <option value="beijing">
                Zone two
              </option>
            </select>
          </div>
        </template>
      </a-collapse-panel>
      <a-collapse-panel
        key="2"
        :header="head3"
        :disabled="false"
        :style="customStyle"
      >
        <div style="display: inline-flex;">
          <div style="width: 50px; margin: auto;">
            {{ text1 }}
          </div>
          <div>
            <HeaderTransfer />
          </div>
        </div>
      </a-collapse-panel>
    </a-collapse>
    <div class="mybutton">
      <a-button
        type="primary"
        style="width: 82px;"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.80636 5.07391H9.16515C9.02569 5.07391 8.89307 5.14091 8.81104 5.25575L6.66183 8.23622L5.68839 6.88544C5.60636 6.77196 5.47511 6.7036 5.33429 6.7036H4.69307C4.60421 6.7036 4.55225 6.80477 4.60421 6.87723L6.30772 9.23973C6.34797 9.2959 6.40102 9.34167 6.46248 9.37324C6.52394 9.40482 6.59204 9.42129 6.66114 9.42129C6.73024 9.42129 6.79834 9.40482 6.8598 9.37324C6.92127 9.34167 6.97432 9.2959 7.01456 9.23973L9.89386 5.24755C9.94718 5.17509 9.89522 5.07391 9.80636 5.07391Z"
            fill="white"
          />
          <path
            d="M7.24976 1.12317C3.86733 1.12317 1.12476 3.86575 1.12476 7.24817C1.12476 10.6306 3.86733 13.3732 7.24976 13.3732C10.6322 13.3732 13.3748 10.6306 13.3748 7.24817C13.3748 3.86575 10.6322 1.12317 7.24976 1.12317ZM7.24976 12.3341C4.44155 12.3341 2.16382 10.0564 2.16382 7.24817C2.16382 4.43997 4.44155 2.16223 7.24976 2.16223C10.058 2.16223 12.3357 4.43997 12.3357 7.24817C12.3357 10.0564 10.058 12.3341 7.24976 12.3341Z"
            fill="white"
          />
        </svg>
        {{ text2 }}
      </a-button>
      <a-button style="margin-left: 10px; width: 96px;">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7673 2.26982L11.8861 2.95889C10.6845 1.42295 8.81575 0.437012 6.71732 0.437012C3.09388 0.437012 0.161065 3.3667 0.156378 6.9917C0.15169 10.6198 3.09075 13.562 6.71732 13.562C9.55013 13.562 11.9642 11.7651 12.8829 9.24795C12.9064 9.18233 12.872 9.10889 12.8064 9.08701L11.9204 8.78232C11.8896 8.77174 11.8557 8.77366 11.8263 8.78767C11.7968 8.80169 11.7739 8.82669 11.7626 8.85733C11.7345 8.93545 11.7033 9.01357 11.6704 9.09014C11.4001 9.73076 11.0126 10.3058 10.5189 10.7995C10.0291 11.2902 9.44923 11.6817 8.81106 11.9526C8.15013 12.2323 7.44544 12.3745 6.72044 12.3745C5.99388 12.3745 5.29075 12.2323 4.62981 11.9526C3.99103 11.6829 3.41094 11.2912 2.922 10.7995C2.43091 10.3098 2.03979 9.72923 1.77044 9.09014C1.49075 8.42764 1.34857 7.72451 1.34857 6.99795C1.34857 6.27139 1.49075 5.56826 1.77044 4.90576C2.04075 4.26514 2.42825 3.69014 2.922 3.19639C3.41575 2.70264 3.99075 2.31514 4.62981 2.04326C5.29075 1.76357 5.99544 1.62139 6.72044 1.62139C7.447 1.62139 8.15013 1.76357 8.81106 2.04326C9.44985 2.31302 10.0299 2.7047 10.5189 3.19639C10.6736 3.35107 10.8189 3.51514 10.9533 3.68701L10.0126 4.42139C9.99402 4.43578 9.97985 4.45514 9.97175 4.47723C9.96365 4.49933 9.96195 4.52326 9.96685 4.54627C9.97174 4.56928 9.98304 4.59045 9.99943 4.60733C10.0158 4.62421 10.0366 4.63613 10.0595 4.6417L12.8033 5.31357C12.8814 5.33232 12.9579 5.27295 12.9579 5.19326L12.9704 2.3667C12.9689 2.26357 12.8486 2.20576 12.7673 2.26982Z"
            fill="black"
            fill-opacity="0.85"
          />
        </svg>
        {{ text3 }}
      </a-button>
      <a-button style="margin-left: 10px; width: 82px;">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5206 3.58428L9.97993 1.04365C9.86274 0.926465 9.71899 0.840527 9.56274 0.793652V0.751465H0.812744C0.536182 0.751465 0.312744 0.974902 0.312744 1.25146V12.7515C0.312744 13.028 0.536182 13.2515 0.812744 13.2515H12.3127C12.5893 13.2515 12.8127 13.028 12.8127 12.7515V4.29053C12.8127 4.0249 12.7081 3.77178 12.5206 3.58428ZM4.56274 1.87646H8.56274V3.50146H4.56274V1.87646ZM11.6877 12.1265H1.43774V1.87646H3.56274V4.00146C3.56274 4.27803 3.78618 4.50146 4.06274 4.50146H9.06274C9.33931 4.50146 9.56274 4.27803 9.56274 4.00146V2.21709L11.6877 4.34209V12.1265ZM6.56274 5.90771C5.32056 5.90771 4.31274 6.91553 4.31274 8.15771C4.31274 9.3999 5.32056 10.4077 6.56274 10.4077C7.80493 10.4077 8.81274 9.3999 8.81274 8.15771C8.81274 6.91553 7.80493 5.90771 6.56274 5.90771ZM6.56274 9.40771C5.87212 9.40771 5.31274 8.84834 5.31274 8.15771C5.31274 7.46709 5.87212 6.90771 6.56274 6.90771C7.25337 6.90771 7.81274 7.46709 7.81274 8.15771C7.81274 8.84834 7.25337 9.40771 6.56274 9.40771Z"
            fill="black"
            fill-opacity="0.85"
          />
        </svg>
        {{ text4 }}
      </a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderFitter from '@/components/molecules/zero/HeaderFitter.vue';
import HeaderTransfer from '@/components/molecules/zero/HeaderTransfer.vue';
import { ref } from 'vue';
@Options({
  components: {
    HeaderFitter,
    HeaderTransfer
  }
})
export default class Header extends Vue {
  activeKey = ref([]);
  collapseStyle = 'background-color: #fff;border: none;';
  customStyle = `background: #f7f7f7;
                 border-radius: 4px;
                 margin-bottom: 24px;
                 border: 0;
                 overflow: hidden;`;
  clickSelect = () => {
    ;
  };
  headerFitterList = [
    {
      name: '社員CD',
      condition: '',
      checked: false,
      type: 'input',
      value: ''
    },{
      name: '性別',
      condition: '',
      checked: true,
      type: 'select',
      value: ''
    },{
      name: '所属拠点',
      condition: '',
      checked: false,
      type: 'select',
      value: ''
    }
  ];
  head1 = 'フィルタ';
  head2 = 'フィルタ追加';
  head3 = 'オプション';
  text1 = '項目';
  text2 = '適用';
  text3 = 'クリア';
  text4 = '保存';
}
</script>
<style lang="scss">
/deep/ .ant-collapse-header {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 13px !important;
}
svg {
  margin-right: 5px;
  margin-bottom: -3px;
}
.mybutton {
  float: right;
  svg {
    margin-right: 5px;
    margin-bottom: -3px;
  }
}
</style>
