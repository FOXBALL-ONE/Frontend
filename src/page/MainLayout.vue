<template>
  <a-layout class="layout page-container">
    <Header/>
    <a-layout-content style="padding: 0 50px">

      <router-view/>

    </a-layout-content>
    <Footer/>
  </a-layout>
</template>

<script lang="ts" setup>
import Footer from "@/components/layout/Footer.vue";
import Header from "@/components/layout/Header.vue";
</script>

<style scoped>

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 确保容器至少占满视口高度 */
}

a-layout-content {
  flex: 1; /* 让内容区域自动填充剩余空间 */
}

:deep(.slick-slide h3) {
  color: #fff;
}

</style>