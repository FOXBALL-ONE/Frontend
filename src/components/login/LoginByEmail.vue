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
              { required: true, message: 'Please input your email address!' },
              // 添加邮箱验证规则
              { type: 'email', message: 'Please input a valid email address!' }
            ]"
        label="email"
        name="email"
    >
      <a-input v-model:value="formState.email">Email</a-input>
    </a-form-item>

    <a-form-item
        :rules="[{ required: true, message: 'Please input your password!' }]"
        label="Password"
        name="password"
    >
      <a-input-password v-model:value="formState.password"/>
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button html-type="submit" type="primary">邮箱登录</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router';
import {reactive} from "vue";
import {useUserStore} from "@/stores/useUserStore.ts";

interface FormState {
  email: string;
  password: string;
}

const userStore = useUserStore();

const formState = reactive<FormState>({
  email: '',
  password: '',
});

const router = useRouter();
const onFinish = () => {

  const params = new URLSearchParams({
    email: formState.email || '',
    password: formState.password || '',
  });

  var myHeaders = new Headers();
  myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.5845.97 Safari/537.36 Core/1.116.520.400 QQBrowser/19.2.6473.400");
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Host", "127.0.0.1:8080");
  myHeaders.append("Connection", "keep-alive");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  };

  fetch(`http://127.0.0.1:8080/auth/loginEmail?${params.toString()}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.code === 200) {
          userStore.setUserName(result.data.username);
          userStore.setUserEmail(result.data.email);
          userStore.setToken(result.data.token);
          userStore.setRole(result.data.role);
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
