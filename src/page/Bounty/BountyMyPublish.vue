<template>
  <a-card style="display: flex; justify-content: center;">
    <a-space direction="horizontal">
      <a-button type="primary" @click="$router.push('/bounty/publish')">
        所有发布的悬赏
      </a-button>
      <a-button type="primary" @click="$router.push('/bounty/publish')">
        未支付的悬赏
      </a-button>
      <a-button type="primary" @click="$router.push('/bounty/publish')">
        已完成的悬赏
      </a-button>
    </a-space>
  </a-card>
  <a-list
      :data-source="data"
      class="full-height-list"
      item-layout="horizontal"
  >
    <template #renderItem="{ item }">
      <a-list-item style="height: 100px">
        <a-list-item-meta>
          <template #description>
            {{ item.description }}{{ item.key }}
          </template>

          <template #title>
            <a href="https://www.antdv.com/">{{ item.title }}</a>
          </template>
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random"/>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts" setup>
interface DataItem {
  key: number;
  title: string;
  description?: string;
}

import {ref} from 'vue';

interface DataItem {
  key: number;
  title: string;
  description?: string;
  reward: number;
  status: 'unpaid' | 'paid' | 'completed';
  publishDate: string;
  tags?: string[];
}

const data = ref<DataItem[]>([
  {
    key: 1,
    title: '需要一个简单的网站页面设计',
    description: '为一个小型企业设计一个简洁美观的网站首页，需要包含产品展示和联系方式',
    reward: 500,
    status: 'unpaid',
    publishDate: '2023-05-20',
    tags: ['设计', 'UI/UX', '网页开发']
  },
  {
    key: 2,
    title: '移动应用程序Bug修复',
    description: '修复我们Android应用中的崩溃问题，主要出现在用户登录后进入个人中心页面时',
    reward: 800,
    status: 'paid',
    publishDate: '2023-05-18',
    tags: ['Bug修复', 'Android', 'Java']
  },
  {
    key: 3,
    title: '微信小程序开发',
    description: '开发一个简单的微信小程序，功能包括用户登录、商品浏览和购物车',
    reward: 2000,
    status: 'completed',
    publishDate: '2023-05-10',
    tags: ['微信小程序', '前端开发', 'JavaScript']
  },
  {
    key: 4,
    title: '数据库优化咨询',
    description: '需要一位有经验的数据库工程师帮助优化我们的MySQL数据库查询性能',
    reward: 1500,
    status: 'unpaid',
    publishDate: '2023-05-22',
    tags: ['数据库', 'MySQL', '性能优化']
  },
  {
    key: 5,
    title: 'Vue组件库开发',
    description: '为我们的项目开发一套自定义Vue组件，包括表单、模态框和数据表格等通用组件',
    reward: 3000,
    status: 'paid',
    publishDate: '2023-05-15',
    tags: ['Vue', '前端开发', '组件库']
  },
  {
    key: 6,
    title: 'Python数据分析脚本',
    description: '编写Python脚本处理和分析CSV格式的销售数据，并生成可视化报表',
    reward: 1200,
    status: 'completed',
    publishDate: '2023-05-08',
    tags: ['Python', '数据分析', '数据可视化']
  },
  {
    key: 7,
    title: 'API接口文档编写',
    description: '为我们的RESTful API编写详细的接口文档，包括请求参数、响应格式和示例代码',
    reward: 600,
    status: 'unpaid',
    publishDate: '2023-05-23',
    tags: ['API', '文档', '技术写作']
  }
]);

</script>
<style scoped>

</style>