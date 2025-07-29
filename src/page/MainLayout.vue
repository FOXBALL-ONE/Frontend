<template>
  <a-layout class="layout page-container">
    <Header/>
    <a-layout-content class="layout-content">
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
  overflow-x: hidden; /* 防止水平滚动条 */
}

.layout-content {
  flex: 1; /* 让内容区域自动填充剩余空间 */
  padding: 0 50px; /* 将内联样式移到这里 */
  overflow-y: auto; /* 内容区域允许垂直滚动 */
  display: flex;
  flex-direction: column;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>