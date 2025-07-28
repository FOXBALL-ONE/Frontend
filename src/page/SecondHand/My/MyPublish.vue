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

const data: DataItem[] = [
  {
    key: 1,
    title: '急招算法工程师',
    description: '寻找熟悉机器学习算法的工程师，协助开发图像识别系统',
  },
  {
    key: 2,
    title: '前端页面重构',
    description: '需要对电商网站首页进行重构，提高用户体验和加载速度',
  },
  {
    key: 3,
    title: '微信小程序开发',
    description: '开发一个社区团购类小程序，要求有良好的用户界面和稳定性',
  },
  {
    key: 4,
    title: '数据库性能优化',
    description: '对现有MySQL数据库进行性能优化，解决高并发查询缓慢问题',
  },
  {
    key: 5,
    title: 'App测试需求',
    description: '需要专业测试人员对Android和iOS应用进行全面功能和兼容性测试',
  },
  {
    key: 6,
    title: '网站安全审计',
    description: '对公司网站进行全面安全审计，发现并修复潜在的安全漏洞',
  },
  {
    key: 7,
    title: '后端API开发',
    description: '使用Node.js开发RESTful API，对接移动端和Web前端应用',
  },
  {
    key: 8,
    title: '桌面应用程序修复',
    description: '修复Windows桌面应用程序的若干bug，优化用户体验',
  },
  {
    key: 9,
    title: '网络爬虫开发',
    description: '开发一个高效稳定的爬虫，采集特定网站的商品价格信息',
  },
  {
    key: 10,
    title: '数据可视化面板',
    description: '使用Echarts开发销售数据可视化面板，支持多种图表展示方式',
  },
  {
    key: 11,
    title: '服务器维护任务',
    description: '需要对Linux服务器进行维护，优化性能并升级安全补丁',
  },
];

</script>
<style scoped>

</style>