<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo"/>
    <a-menu
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        :inline-collapsed="state.collapsed"
        :items="items"
        mode="inline"
        theme="dark"
        @click="handleMenuClick"
    ></a-menu>
  </a-layout-sider>
</template>
<script lang="ts" setup>
import {h, reactive, ref, watch} from 'vue';
import {DesktopOutlined, PieChartOutlined, UserOutlined,} from '@ant-design/icons-vue';
import {useRouter} from 'vue-router';

const router = useRouter();
const collapsed = ref<boolean>(false);
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});

function getRoleIsAdmin(): Boolean {
  let role = localStorage.getItem("role");

  if (role != "admin") {

    return true;
  } else {
    return false;
  }

}

const items = reactive([
  {
    key: '1',
    icon: () => h(PieChartOutlined),
    label: '预约简略信息',
    title: '预约简略信息',
    route: '/home/summary',
  },
  {
    key: '2',
    icon: () => h(DesktopOutlined),
    label: '预约管理',
    title: '预约管理',
    children: [{
      key: 'classroom',
      label: '教室空闲预览',
      title: '教室空闲预览',
      route: '/home/order/ClassroomIdle',
    }, {
      key: 'order1',
      label: '申请预约',
      title: '申请预约',
      route: '/home/order/RequestAppointment',
    },
      {
        key: 'order2',
        label: '预约记录',
        title: '预约记录',
        route: '/home/order/AppointmentRecord',
      },
      {
        key: 'order3',
        label: '预约审核',
        title: '预约审核',
        disabled: getRoleIsAdmin(),
        route: '/home/order/AppointmentCheck',
      }
    ],
  },
  {
    key: '4',
    icon: () => h(DesktopOutlined),
    label: '实验室管理',
    title: '实验室管理',
    disabled: getRoleIsAdmin(),
    children: [{
      key: 'labadd',
      label: '实验室列表',
      title: '实验室列表',
      route: '/home/lab/list',
    }, {
      key: 'lab2',
      label: '新增实验室',
      title: '新增实验室',
      route: '/home/lab/add',
    }, {
      key: 'lab3',
      label: '更新实验室信息',
      title: '更新实验室信息',
      route: '/home/lab/update',
    }, {
      key: 'login',
      label: '维护管理',
      title: '维护管理',
      children: [{
        key: 'login1',
        label: '维护记录',
        title: '维护记录',
        route: '/home/lab/maintain/list',
      }, {
        key: 'login2',
        label: '新增维护记录',
        title: '新增维护记录',
        route: '/home/lab/maintain/add',
      }, {
        key: 'login3',
        label: '删除维护记录',
        title: '删除维护记录',
        route: '/home/lab/maintain/dele',
      }]
    }]
  },
  {
    key: '3',
    icon: () => h(UserOutlined),
    label: '个人中心',
    title: '个人中心',
    children: [{
      key: 'user1',
      label: '个人信息',
      title: '个人信息',
      route: '/home/user/person',
    },
      {
        key: 'user2',
        label: '修改密码',
        title: '修改密码',
        route: '/home/user/changepassword',
      },
    ],
  },
]);

const handleMenuClick = ({key}: { key: string }) => {
  // 递归查找匹配的菜单项
  const findItemByKey = (items: MenuItem[]): MenuItem | null => {
    for (const item of items) {
      if (item.key === key) return item;
      if (item.children) {
        const found = findItemByKey(item.children);
        if (found) return found;
      }
    }
    return null;
  };


  const targetItem = findItemByKey(items);
  if (targetItem?.route) {
    router.push(targetItem.route);
    console.log(`正在跳转到路由: ${targetItem.route}`);
  }
};

watch(
    () => state.openKeys,
    (_val, oldVal) => {
      state.preOpenKeys = oldVal;
    },
);
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};

</script>