<template>
  <div id="basic-layout">
    <a-layout>
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://codefather.cn" target="_blank">
          编程导航 by 程序员鱼皮
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import GlobalHeader from '@/components/GlobalHeader.vue'
</script>

<style scoped>
#basic-layout .header {
  background: #fff;
  padding-inline: 20px;
  margin-bottom: 16px;
  color: unset;
}

#basic-layout .content {
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  color: unset;
}

#basic-layout .footer {
  background: #efefef;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}
</style>
