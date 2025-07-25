<template>
  <a-card style="display: flex; justify-content: center;">
    请输入旧密码和新密码进行修改
    <a-space direction="vertical" size="middle" style="width: 100% ; display: flex; justify-content: center;">
      <div>
        旧密码
        <a-input-password v-model:value="oldPassword" placeholder="input password"/>
      </div>
      <div>
        新密码
        <a-input-password v-model:value="newPassword1" placeholder="input password">
          <template #iconRender="v">
            <EyeTwoTone v-if="v"></EyeTwoTone>
            <EyeInvisibleOutlined v-else></EyeInvisibleOutlined>
          </template>
        </a-input-password>
      </div>
      <div>
        确认密码
        <a-input-password v-model:value="newPassword2" placeholder="input password">
          <template #iconRender="v">
            <EyeTwoTone v-if="v"></EyeTwoTone>
            <EyeInvisibleOutlined v-else></EyeInvisibleOutlined>
          </template>
        </a-input-password>
      </div>

      <a-button style="background: cyan" @click=handleSubmit>提交更改</a-button>
    </a-space>
  </a-card>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons-vue';
import {message} from "ant-design-vue";

const oldPassword = ref<string>('');
const newPassword1 = ref<string>('');
const newPassword2 = ref<string>('');

const handleSubmit = () => {
  if (oldPassword.value.length > 0 && newPassword1.value.length > 0 && newPassword2.value.length > 0) {
    if (newPassword1.value !== newPassword2.value) {
      message.error('两次输入的新密码不一致，请重新输入');
      return;
    }
    message.success('密码修改成功');
    message.info(oldPassword.value);
    message.info(newPassword1.value);
    return;
  }

};

</script>
<style scoped>

</style>