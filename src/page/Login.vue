<template>
  <div class="login-container">
    <a-card :bordered="false" class="login-card">
      <div class="login-header">
        <h2>欢迎登录校园生活综和服务平台</h2>

      </div>
      <component :is="componentName"></component>

      <div>
        <a-button class="gradient-button" @click.prevent="componentName = LoginByUsername">点击切换用户名登录</a-button>
        <a-button class="gradient-button" @click.prevent="componentName = LoginByEmail">点击切换邮箱登录</a-button>
        <a-button class="gradient-button" @click.prevent="componentName = Regin">点击切换注册界面</a-button>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import {shallowRef} from 'vue';
import LoginByEmail from "@/components/login/LoginByEmail.vue";
import LoginByUsername from "@/components/login/LoginByUsername.vue";
import Regin from "@/components/login/Regin.vue";

let componentName = shallowRef(LoginByUsername);
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 修改为更丰富的渐变色背景 */
  background: linear-gradient(
      45deg,
      #ff9a9e 0%,
      #fad0c4 25%,
      #c3cfe2 50%,
      #b5d8eb 75%,
      #a6c0ee 100%
  );
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
  position: relative;
  overflow: hidden;
}

/* 添加背景动画效果 */
.login-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.1) 100%
  );
  filter: blur(10px);
  transform: translateY(0);
  animation: wave 8s ease-in-out infinite alternate;
  z-index: 0;
}

.login-card {
  width: 100%;
  max-width: 600px;
  border-radius: 16px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.25);
  backdrop-filter: blur(8px);
  transform: translateY(0);
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
  box-shadow 0.3s ease;
  background: linear-gradient(45deg, #ffd700, #ff69b4, #87ceeb, #90ee90);
  background-size: 400% 400%;
  animation: card-gradient-shift 10s ease infinite;
  position: relative;
  z-index: 1;
}

/* 其他样式保持不变 */

@keyframes wave {
  0% {
    transform: translateY(-5%) rotate(0deg);
  }
  50% {
    transform: translateY(5%) rotate(2deg);
  }
  100% {
    transform: translateY(-5%) rotate(-2deg);
  }
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 保留其他动画 */
</style>
