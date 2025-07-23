<script lang="ts" setup>
import {h, ref} from 'vue';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons-vue';
import type {MenuProps} from 'ant-design-vue';

const current = ref<string[]>(['mail']);
const items = ref<MenuProps['items']>([
  {
    key: 'Home',
    icon: () => h(MailOutlined),
    label: '首页',
    title: '首页',
  },
  {
    key: 'bounty',
    icon: () => h(AppstoreOutlined),
    label: '悬赏',
    title: '悬赏',
    children: [
      {
        label: '市场',
        title: '市场',
        key: 'bountyMarket',
      },
      {
        label: '搜索',
        title: '搜索',
        key: 'search',
      },
      {
        label: '发布',
        title: '发布',
        key: 'publish',
      },
      {
        label: '我的',
        title: '我的',
        key: 'my',
        children: [
          {
            label: '我的订单',
            title: '我的订单',
            key: 'myOrder',
          },
          {
            label: '我的发布',
            title: '我的发布',
            key: 'myPush',
          },
          {
            label: '我的评论',
            title: '我的评论',
            key: 'myComment',
          }
        ]
      }
    ]
  },
  {
    key: 'comminicate',
    icon: () => h(SettingOutlined),
    label: '交流',
    title: '交流',
    children: [
      {
        label: '板块',
        key: 'plate',
      },
      {
        label: '搜索',
        key: 'plateSearch',
      },
    ],
  },
  {
    key: 'user',
    icon: () => h(SettingOutlined),
    label: '用户',
    title: '用户',
    children: [
      {
        label: '个人中心',
        key: 'userCenter',
      },
      {
        label: '修改密码',
        key: 'changePassword',
      }, {
        label: '我的帖子',
        key: 'myPost',
      },
      {
        label: '我的订单',
        key: 'myComment',
      },

      {
        label: '退出',
        key: 'logout',
      },
    ],
  },
]);
</script>
<template>
  <a-layout-header style="background: aliceblue">
    <div class="logo"/>
    <a-menu v-model:selectedKeys="current" :items="items" mode="horizontal"/>
  </a-layout-header>
</template>

<style scoped>

</style>