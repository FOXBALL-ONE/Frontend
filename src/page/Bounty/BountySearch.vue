<template>
  <a-space direction="vertical">
    <a-input-search
        v-model:value="value"
        :bordered="true"
        enter-button
        :maxlength="10"
        placeholder="input search text"
        @search="onSearch"
    />
  </a-space>
  <!--  搜索内容展示-->
  <a-space v-if="isSearched && value" direction="vertical">
    <h1>123123123123123</h1>
  </a-space>
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

