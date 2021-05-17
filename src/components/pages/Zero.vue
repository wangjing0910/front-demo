<template>
  <div>
    <div class="head">
      <p>{{ title }}</p>
      <span>Additional description if needed</span>
    </div>
    <div style="padding: 16px 16px 45px;">
      <Header />
    </div>
    <div style="width: 100%; height: 23px; background-color: #f0f2f5;"></div>
    <div style="padding: 16px;">
      <Body />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/organisms/zero/Header.vue';
import Body from '@/components/organisms/zero/Body.vue';
@Options({
  components: {
    Header,
    Body
  }
})
export default class Zero extends Vue {
  title = '0号画面';
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
  > p {
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
  > span {
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
}
</style>
