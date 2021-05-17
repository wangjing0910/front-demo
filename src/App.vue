<template>
  <div>
    <a-config-provider :locale="locale">
      <div id="app">
        <router-view />
      </div>
    </a-config-provider>
  </div>
</template>
<script lang="ts">
// import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
// import jaJP from "ant-design-vue/lib/locale-provider/ja_JP";
import enUS from 'ant-design-vue/lib/locale-provider/en_US';
export default {
  name: 'App',
  data() {
    return {
      locale: enUS
    };
  }
};
</script>
<style lang="less">
#app {
  font-family: PingFang SC;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: auto;
}
</style>
