<template xmlns="http://www.w3.org/1999/html">
  <div class="login-container">
    <a-card :bordered="false" class="login-card">
      <a-list :data-source="data" item-layout="horizontal">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta>
              <template #title>
                {{ item.title }}
                <br/>
                {{ item.description }}
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </a-card>
  </div>
</template>
<script lang="ts" setup>
interface DataItem {
  title: string;
  description?: string;
}


const data: DataItem[] = [
  {
    title: '用户名',
    description: localStorage.getItem("userName") || '未登录',
  },
  {
    title: '邮箱',
    description: localStorage.getItem("userEmail") || '未登录',
  },
  {
    title: '身份',
    description: localStorage.getItem("role") || '未登录',
  },
];
</script>

<style scoped>
/* 渐变背景动画 */
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg,
  #f5f7fa 0%,
  #c3cfe2 100%);
  animation: gradient-shift 15s ease infinite;
  background-size: 200% 200%;
}

/* 卡片悬浮动画 */
.login-card {
  width: 100%;
  max-width: 440px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
  box-shadow 0.3s ease;
}

.login-card:hover {
  transform: translateY(-10px) rotateZ(1deg);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15),
  0 0 0 2px rgba(24, 144, 255, 0.1);
}

/* 背景流动动画 */
@keyframes gradient-shift {
  0% {
    background-position: 0 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}
</style>