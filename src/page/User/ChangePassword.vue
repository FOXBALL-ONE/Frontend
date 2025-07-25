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

        <a-input-password v-model:value="newPassword" placeholder="input password">
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
const newPassword = ref<string>('');

const handleSubmit = () => {
  if (oldPassword.value.length > 0 && newPassword.value.length > 0) {
    message.success('密码修改成功');
    message.info(oldPassword.value);
    message.info(newPassword.value);
    return;
  }

};

</script>
<style scoped>

</style>