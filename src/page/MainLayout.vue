<template>
  <a-layout style="min-height: 100vh">

    <SiderMenu/>

    <a-layout>
      <Header/>

      <a-layout-content style="margin: 0 16px">
        <router-view/>
      </a-layout-content>

      <Footer/>

    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import SiderMenu from "@/components/layout/SiderMenu.vue";
import {RouterView} from "vue-router";
import Footer from "@/components/layout/Footer.vue";
import Header from "@/components/layout/Header.vue";
</script>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
