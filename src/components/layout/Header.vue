<script lang="ts" setup>
import {h, ref} from 'vue';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons-vue';
import type {MenuProps} from 'ant-design-vue';
import router from "@/router";

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
          }
        ]
      }
    ]
  },
  {
    key: 'comminicate',
    icon: () => h(SettingOutlined),
    label: '二手市场',
    title: '二手市场',
    children: [
      {
        label: '总览',
        key: 'Marketplate',
      },
      {
        label: '搜索',
        key: 'MarketSearch',
      },
      {
        label: '发布',
        key: 'MarketPublish',
      },
      {
        label: '我的',
        key: 'MarketMy',
        children: [
          {
            label: '我的订单',
            key: 'MarketMyOrder',
          },
          {
            label: '我的发布',
            key: 'MarketMyPush',
          }
        ]
      }
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
      },

      {
        label: '退出',
        key: 'logout',
      },
    ],
  },
]);

// key 与路由路径的映射
const keyToRoute: Record<string, string> = {
  Home: '/home/front_page',
  bountyMarket: '/home/bounty/market',
  search: '/home/bounty/search',
  publish: '/home/bounty/publish',
  myOrder: '/home/bounty/my/myOrder',
  myPush: '/home/bounty/my/myPublish',
  userCenter: '/home/user/userCenter',
  changePassword: '/home/user/changePassword',
  myPost: '/home/user/bounty',
  myComment: '/home/user/order',
  Marketplate: '/home/second_hand/market',
  MarketSearch: '/home/second_hand/search',
  MarketPublish: '/home/second_hand/publish',
  MarketMy: '/home/second_hand/my',
  MarketMyOrder: '/home/second_hand/my/myorder',
  MarketMyPush: '/home/second_hand/my/mypublish',
  MarketMyComment: '/home/second_hand/my/myComment',

  logout: '/logout',

};

// 菜单点击事件
const onMenuClick: MenuProps['onClick'] = (info) => {
  const route = keyToRoute[info.key as string];
  if (route) {
    router.push(route);
  }
};
</script>
<template>
  <a-layout-header style="background: aliceblue">
    <div class="logo"/>
    <a-menu v-model:selectedKeys="current" :items="items" mode="horizontal"
            @click="onMenuClick"
    />
  </a-layout-header>
</template>

<style scoped>

</style>