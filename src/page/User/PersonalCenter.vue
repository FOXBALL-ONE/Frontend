<template>
  <a-card>
    <a-space style="display: flex; justify-content: center;">

      <a-avatar :src=User.avatar.toString()
      />

      <br>

    </a-space>
    <a-descriptions title="用户信息">
      <a-descriptions-item label="用户名">{{ User.name }}</a-descriptions-item>
      <a-descriptions-item label="邮箱地址">{{ User.email }}</a-descriptions-item>
      <a-descriptions-item label="身份类型">{{ User.identityType }}</a-descriptions-item>
      <a-descriptions-item label="学院">{{ User.college }}</a-descriptions-item>
      <a-descriptions-item label="年级">{{ User.grade }}</a-descriptions-item>
      <a-descriptions-item label="班级">{{ User.class }}</a-descriptions-item>
      <a-descriptions-item label="专业">{{ User.major }}</a-descriptions-item>

      <a-descriptions-item label="Address">
        {{ User.address }}
      </a-descriptions-item>
    </a-descriptions>
  </a-card>


</template>
<script lang="ts" setup>
import {ref} from "vue";

interface UserProps {
  // 用户信息接口定义
  // 这里可以根据实际需求添加更多字段
  avatar: string;
  name: string;
  email: string;
  identityType: string;
  college: string;
  grade?: string;
  class?: string;
  major?: string;
  address?: string;
}

let User = ref<UserProps>(
    {
      avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
      name: '张三',
      email: '114514@gmail.com',
      identityType: '学生',
      college: '计算机学院',
      grade: '大三',
      class: '计算机科学与技术',
      major: '软件工程',
      address: '浙江省杭州市西湖区文塘路18号',
    }
);
</script>


<style scoped>

</style>