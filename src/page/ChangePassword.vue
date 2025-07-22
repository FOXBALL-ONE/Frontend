<template xmlns="http://www.w3.org/1999/html">
  <div class="login-container">
    <a-card :bordered="false" class="login-card">
      <a-form
          ref="formRef"
          :model="formState"
          name="custom-validation"
      >
        <a-form-item has-feedback label="Password" name="pass">
          <a-input v-model:value="formState.pass" autocomplete="off" type="password"/>
        </a-form-item>
        <a-form-item has-feedback label="Confirm" name="checkPass">
          <a-input v-model:value="formState.checkPass" autocomplete="off" type="password"/>
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button html-type="submit" type="primary" @click="submit">提交</a-button>
          <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>
<script lang="ts" setup>
import {reactive, ref} from 'vue';
import type {FormInstance} from 'ant-design-vue';

interface FormState {
  pass: string;
  checkPass: string;
}

const formRef = ref<FormInstance>();
const formState = reactive<FormState>({
  pass: '',
  checkPass: '',
});

function resetForm() {
  formState.pass = '';
  formState.checkPass = '';
}

const submit = () => {
  if (formState.checkPass !== '' && formState.checkPass !== '') {
    alert("密码不能为空！");
  }
  if (formState.checkPass !== '' && formState.checkPass !== '') {
    fetch()


  } else {
    alert("两次密码不一致！");
  }

}


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
  width: 700px;
  max-width: 700px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
  box-shadow 0.3s ease;
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