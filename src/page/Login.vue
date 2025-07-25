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
  background: linear-gradient(135deg,
  #f5f7fa 0%,
  #c3cfe2 100%);
  animation: gradient-shift 15s ease infinite;
  background-size: 200% 200%;
}

.login-card {
  width: 100%;
  max-width: 600px;
  border-radius: 16px;
  /* 加粗卡片边框，修改边框宽度为 3px */
  border: 3px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
  box-shadow 0.3s ease;
  background: linear-gradient(45deg, #ffd700, #ff69b4, #87ceeb, #90ee90);
  background-size: 400% 400%;
  animation: card-gradient-shift 10s ease infinite;
}

.gradient-button {
  background: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  color: white;
  background-size: 200% 200%;
  animation: button-gradient-shift 3s ease infinite;
  /* 加粗按钮边框，修改边框宽度为 2px */
  border: 2px solid rgba(0, 0, 0, 0.1);
}

@keyframes button-gradient-shift {
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

@keyframes card-gradient-shift {
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
