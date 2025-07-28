<template>
  <div class="search-container">
    <a-space class="search-wrapper" direction="vertical">
      <a-input-search
          v-model:value="value"
          :bordered="true"
          :maxlength="10"
          class="search-input"
          enter-button
          placeholder="input search text"
          @search="onSearch"
      />
    </a-space>
    <!--  搜索内容展示-->
    <a-space v-if="isSearched && value" direction="vertical">
      <h1>123123123123123</h1>
    </a-space>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {message} from "ant-design-vue";

const value = ref<string>('');
// 记录搜索操作是否被触发
const isSearched = ref(false);

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
  message.success(value.value);
  isSearched.value = true;
};
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.search-wrapper {
  width: 100%;
  max-width: 500px; /* 可以根据需要调整搜索框的最大宽度 */
  margin: 0 auto;
}

.search-input {
  width: 100%;
}
</style>