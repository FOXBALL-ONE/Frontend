<template>
  <div class="search-container">
    <a-space class="search-wrapper" direction="vertical">
      <a-input-search
          v-model:value="value"
          :bordered="true"
          :maxlength="10"
          class="search-input"
          enter-button
          placeholder="请输入搜索关键词"
          @search="onSearch"
      />
    </a-space>
    <div v-if="isSearched" class="search-results">
      <a-list :data-source="displayResults" bordered>
        <template #header>
          <div class="result-header">
            <span>搜索结果</span>
            <span>共找到 {{ displayResults.length }} 条记录</span>
          </div>
        </template>
        <template #renderItem="{ item }">
          <a-list-item>
            <a-card :title="item.title" class="result-card">
              <template #cover>
                <img :alt="item.title" :src="item.image" class="card-image"/>
              </template>
              <template #extra>
                <a-button type="primary" @click="viewDetails(item.id)">查看详情</a-button>
              </template>
              <a-descriptions :column="1">
                <a-descriptions-item label="价格">
                  <span class="price">¥{{ item.price }}</span>
                </a-descriptions-item>
                <a-descriptions-item label="成色">
                  <a-tag :color="getConditionColor(item.condition)">
                    {{ item.condition }}
                  </a-tag>
                </a-descriptions-item>
                <a-descriptions-item label="描述">
                  {{ item.description }}
                </a-descriptions-item>
                <a-descriptions-item label="发布时间">
                  {{ item.publishTime }}
                </a-descriptions-item>
              </a-descriptions>
            </a-card>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {message} from "ant-design-vue";

interface SearchItem {
  id: number;
  title: string;
  price: number;
  condition: string;
  description: string;
  image: string;
  publishTime: string;
}

const value = ref<string>('');
const isSearched = ref(false);

// 原始数据
const originalData = [
  {
    id: 1,
    title: '二手 MacBook Pro 2019',
    price: 6999,
    condition: '9成新',
    description: '使用一年，无明显磨损，电池健康度95%，带原装充电器',
    image: 'https://picsum.photos/300/200',
    publishTime: '2024-01-15'
  },
  {
    id: 2,
    title: '二手 iPhone 12 128GB',
    price: 3499,
    condition: '8成新',
    description: '无划痕，无进水，全功能正常，已更换原装电池',
    image: 'https://picsum.photos/300/200',
    publishTime: '2024-01-14'
  },
  {
    id: 3,
    title: '索尼 WH-1000XM4 耳机',
    price: 1299,
    condition: '95%新',
    description: '购买半年，音质完美，降噪效果极佳，附赠原装包装及配件',
    image: 'https://picsum.photos/300/200',
    publishTime: '2024-01-13'
  },
  {
    id: 4,
    title: '二手 iPad Pro 11寸 2021款',
    price: 4599,
    condition: '95%新',
    description: 'M1芯片，256GB存储，附Apple Pencil 2代和键盘保护套',
    image: 'https://picsum.photos/300/200',
    publishTime: '2024-01-12'
  }
];

// 使用计算属性过滤数据
const displayResults = ref<SearchItem[]>(originalData);

const getConditionColor = (condition: string) => {
  if (condition.includes('9') || condition.includes('95%')) return 'green';
  if (condition.includes('8')) return 'blue';
  return 'orange';
};

const viewDetails = (id: number) => {
  message.info(`查看商品ID: ${id} 的详情`);
};

const onSearch = (searchValue: string) => {
  if (value.value.trim()) {
    const filteredResults = originalData.filter(item =>
        item.title.toLowerCase().includes(value.value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.value.toLowerCase())
    );
    displayResults.value = filteredResults;
    message.success(`找到 ${filteredResults.length} 条相关结果`);
    isSearched.value = true;
  } else {
    displayResults.value = [...originalData];
    isSearched.value = true;
    message.warning('请输入搜索内容');
  }
};
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
}

.search-wrapper {
  width: 100%;
  max-width: 800px;
}

.search-input {
  width: 100%;
}

.search-results {
  width: 100%;
  max-width: 800px;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}

.result-card {
  width: 100%;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.price {
  color: #f5222d;
  font-size: 18px;
  font-weight: bold;
}

:deep(.ant-card-head) {
  background-color: #fafafa;
}

:deep(.ant-list-item) {
  padding: 16px;
}

:deep(.ant-card-body) {
  padding: 16px;
}

:deep(.ant-descriptions-item-label) {
  font-weight: bold;
}
</style>