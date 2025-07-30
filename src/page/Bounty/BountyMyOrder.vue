<template>
  <a-card style="display: flex; justify-content: center;">
    <a-space direction="horizontal">
      <a-button type="primary" @click="$router.push('/bounty/publish')">
        所有订单
      </a-button>
      <a-button type="primary" @click="$router.push('/bounty/publish')">
        未支付订单
      </a-button>
      <a-button type="primary" @click="$router.push('/bounty/publish')">
        已支付订单
      </a-button>
    </a-space>
  </a-card>
  <a-card>
    <div style="margin-bottom: 16px; font-size: 16px; font-weight: bold;">
      当前显示: {{ currentStatus === 'all' ? '所有订单' : currentStatus === 'unpaid' ? '未支付订单' : '已支付订单' }}
    </div>

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
  </a-card>
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
  status: '待支付' | '已支付' | '已完成' | '已取消';
  amount: number;
  createTime: string;
}


const data = ref<DataItem[]>([
  {
    key: 1,
    title: '悬赏任务：网站首页设计优化',
    description: '需要对电商网站首页进行UI/UX优化，提高用户转化率',
    status: '待支付',
    amount: 1200,
    createTime: '2023-06-15 10:23:45'
  },
  {
    key: 2,
    title: '悬赏任务：移动应用Bug修复',
    description: '修复Android应用在特定机型上闪退问题，需要7天内完成',
    status: '已支付',
    amount: 800,
    createTime: '2023-06-12 15:30:22'
  },
  {
    key: 3,
    title: '悬赏任务：数据分析报告',
    description: '分析近三个月用户行为数据，提供增长策略建议报告',
    status: '已完成',
    amount: 2500,
    createTime: '2023-05-28 09:15:00'
  },
  {
    key: 4,
    title: '悬赏任务：Logo设计',
    description: '为新创企业设计现代简约风格Logo，需要提供三个设计方案',
    status: '待支付',
    amount: 600,
    createTime: '2023-06-18 14:20:10'
  },
  {
    key: 5,
    title: '悬赏任务：后端接口开发',
    description: '开发用户认证和权限管理相关API接口，需提供完整文档',
    status: '已支付',
    amount: 3000,
    createTime: '2023-06-05 11:40:33'
  },
  {
    key: 6,
    title: '悬赏任务：小程序开发',
    description: '开发一个简易点餐小程序，包含商品展示、购物车和下单功能',
    status: '已支付',
    amount: 4500,
    createTime: '2023-05-20 16:25:45'
  },
  {
    key: 7,
    title: '悬赏任务：内容创作',
    description: '为科技博客撰写10篇原创文章，每篇不少于2000字',
    status: '待支付',
    amount: 1500,
    createTime: '2023-06-19 08:10:20'
  },
  {
    key: 8,
    title: '悬赏任务：数据库优化',
    description: '优化现有MySQL数据库结构和查询性能，解决高并发问题',
    status: '已取消',
    amount: 2800,
    createTime: '2023-05-10 13:50:15'
  },
  {
    key: 9,
    title: '悬赏任务：H5活动页面',
    description: '设计开发端午节促销活动H5页面，需要有抽奖和分享功能',
    status: '已完成',
    amount: 1800,
    createTime: '2023-05-15 09:30:40'
  },
  {
    key: 10,
    title: '悬赏任务：视频剪辑',
    description: '剪辑产品宣传视频，时长3-5分钟，需要提供两个版本',
    status: '已支付',
    amount: 1200,
    createTime: '2023-06-08 17:05:25'
  }
]);

</script>
<style scoped>

</style>