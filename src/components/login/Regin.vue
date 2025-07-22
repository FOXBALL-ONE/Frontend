<template>
  <a-form
      :label-col="{ span: 8 }"
      :model="formState"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      name="basic"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
  >
    <a-form-item
        :rules="[
              { required: true, message: 'Please input your Username!' }
            ]"
        label="用户名"
        name="Username"
    >
      <a-input v-model:value="formState.username">Username</a-input>
    </a-form-item>

    <a-form-item
        :rules="[
              { required: true, message: 'Please input your email address!' },
              // 添加邮箱验证规则
              { type: 'email', message: 'Please input a valid email address!' }
            ]"
        label="邮箱"
        name="Email"
    >
      <a-input v-model:value="formState.email">Email</a-input>
    </a-form-item>


    <a-form-item
        :rules="[{ required: true, message: 'Please input your password!' }]"
        label="密码"
        name="password"
    >
      <a-input-password v-model:value="formState.password"/>
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button html-type="submit" type="primary">提交注册信息</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import {useRouter} from 'vue-router';
import {reactive} from "vue";
import {useUserStore} from "@/stores/useUserStore.ts";

interface FormState {
  username: string;
  password: string;
  email: string;
}

const userStore = useUserStore();

const formState = reactive<FormState>({
  username: '',
  password: '',
  email: '',
});

const router = useRouter();
const onFinish = (values: any) => {
  // 定义邮箱验证正则表达式
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(formState.username)) {
    alert('请输入有效的邮箱地址');
    return;
  }
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    credentials: 'include', // 确保发送和接收 cookies
    redirect: 'follow' as RequestRedirect,
  };


  fetch(`http://127.0.0.1:8080/auth/login/email?email=${formState.username}&password=${formState.password}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.code === 200) {

          userStore.setUserName(formState.username);
          userStore.setUserEmail(formState.username);
          userStore.setToken(result.data.tokenValue);
          console.log('登录成功:', result);
          router.push('/home/summary');
        } else {
          console.log(result);
          alert("登录失败");
        }
      })
      .catch(error => {
        console.error('请求错误:', error);
      });
};


const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>