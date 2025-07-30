<script lang="ts" setup>
interface DataItem {
  key: number;
  title: string;
  description?: string;
  status?: 'open' | 'in-progress' | 'completed';
}

const data: DataItem[] = [
  {
    key: 1,
    title: '修复前端登录页面响应式布局问题',
    description: '在移动设备上登录页面显示异常，需要优化CSS使其在不同尺寸的设备上都能正常显示',
    status: 'open',
  },
  {
    key: 2,
    title: '开发用户数据分析图表组件',
    description: '基于ECharts实现用户活跃度、增长率等数据的可视化展示，需要支持多种图表类型',
    status: 'in-progress',
  },
  {
    key: 3,
    title: 'API接口性能优化',
    description: '用户列表接口在数据量大时响应缓慢，需要优化查询逻辑并实现合理的缓存策略',
    status: 'completed',
  },
  {
    key: 4,
    title: '实现文件断点续传功能',
    description: '在现有的文件上传模块中添加断点续传功能，提升大文件上传的稳定性和用户体验',
    status: 'open',
  },
  {
    key: 5,
    title: '微信小程序支付集成',
    description: '在小程序端集成微信支付功能，实现商品购买和会员充值等支付场景',
    status: 'open',
  },
  {
    key: 6,
    title: '自动化测试脚本编写',
    description: '使用Jest和Cypress为核心功能模块编写单元测试和端到端测试，提高代码质量',
    status: 'in-progress',
  },
  {
    key: 7,
    title: '安全漏洞修复',
    description: '修复安全扫描中发现的XSS和CSRF漏洞，加强系统安全防护措施',
    status: 'open',
  },
  {
    key: 8,
    title: '多语言国际化实现',
    description: '为平台添加中英文双语支持，需要设计合理的国际化方案并实现语言切换功能',
    status: 'in-progress',
  },
  {
    key: 9,
    title: 'Redis缓存优化',
    description: '优化现有Redis缓存策略，解决缓存穿透和雪崩问题，提高系统稳定性',
    status: 'open',
  },
  {
    key: 10,
    title: '移动端App适配暗黑模式',
    description: '为iOS和Android客户端实现暗黑模式，根据系统设置自动切换主题',
    status: 'completed',
  },
];
</script>

<template>
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
          <template #extra>
            <a-tag :color="item.status === 'open' ? 'blue' : item.status === 'in-progress' ? 'orange' : 'green'">
              {{ item.status === 'open' ? '招募中' : item.status === 'in-progress' ? '进行中' : '已完成' }}
            </a-tag>
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


<style scoped>
.full-height-list {
  height: 100%;
}
</style>
