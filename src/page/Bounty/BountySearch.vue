<template>
  <div class="search-container">
    <a-card>
      <a-space class="search-wrapper" direction="vertical">
        <a-input-search
            v-model:value="value"
            :bordered="true"
            :maxlength="10"
            class="search-input"
            enter-button
            placeholder="请输入搜索内容"
            @search="onSearch"
        />
      </a-space>
    </a-card>

    <a-card>
      <a-space>
        <!--  搜索内容展示-->
        <a-card v-if="isSearched && value" class="search-results">
          <a-list :data-source="searchResults" :pagination="pagination">
            <template #header>
              <div>搜索结果：共找到 {{ searchResults.length }} 条</div>
            </template>
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                    :description="item.description"
                    :title="item.title"
                >
                  <template #avatar>
                    <a-avatar :src="item.avatar"/>
                  </template>
                </a-list-item-meta>
                <template #extra>
                  <a-tag :color="item.status.color">{{ item.status.text }}</a-tag>
                </template>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-space>

    </a-card>

  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {message} from "ant-design-vue";

const value = ref<string>('');
// 记录搜索操作是否被触发

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
  message.success(value.value);
  isSearched.value = true;
};


const isSearched = ref(false);
const searchResults = ref([
  {
    id: 1,
    title: 'Vue 3 组件开发',
    description: '需要开发一套基于 Vue 3 的组件库，包含常用的 UI 组件和业务组件',
    avatar: 'https://joeschmoe.io/api/v1/random',
    status: {text: '进行中', color: 'green'}
  },
  {
    id: 2,
    title: 'React Native 移动应用',
    description: '构建跨平台移动应用，要求性能优良，界面美观',
    avatar: 'https://joeschmoe.io/api/v1/random',
    status: {text: '已完成', color: 'blue'}
  },
  {
    id: 3,
    title: 'TypeScript 工具库',
    description: '开发一套高性能的 TypeScript 工具库，提供常用的数据处理功能',
    avatar: 'https://joeschmoe.io/api/v1/random',
    status: {text: '招募中', color: 'orange'}
  },
  {
    id: 4,
    title: '后端 API 开发',
    description: '使用 Node.js 和 Express 框架开发 RESTful API',
    avatar: 'https://joeschmoe.io/api/v1/random',
    status: {text: '紧急', color: 'red'}
  },
  {
    id: 5,
    title: '数据可视化项目',
    description: '使用 ECharts 实现复杂的数据可视化需求，包括图表和交互功能',
    avatar: 'https://joeschmoe.io/api/v1/random',
    status: {text: '已关闭', color: 'gray'}
  }
]);

const pagination = ref({
  pageSize: 3,
  showQuickJumper: true,
});
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