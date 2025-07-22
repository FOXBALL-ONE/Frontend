<template>

  <a-card>
    <a-row justify="center" style="text-align: center;">
      请选择想要取消的维护记录的时间：
      <a-date-picker v-model:value="value1"/>
    </a-row>

    <a-space justify="center" style="text-align: center;">
      请输入想要取消的维护记录的ID：
      <a-input v-model:value="id" placeholder="请输入想要取消的维护ID"/>
    </a-space>

    <a-button type="primary" @click="handleClick">提交申请</a-button>
  </a-card>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import router from "@/router";
import type {Dayjs} from "dayjs";

let id = ref<number>();
const value1 = ref<Dayjs>();

function getToken() {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    console.error("Token not found in localStorage");
    router.push("/login");
    return ""; // 确保返回值为字符串
  }
}

const handleClick = () => {
  console.log(value1.value?.format('YYYY-MM-DD-00-00'));
  const params = new URLSearchParams({
    date: value1.value?.format('YYYY-MM-DD-00-00') || "",
    labId: id.value?.toString() || ""
  })
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "satoken": getToken(),
    },
    redirect: 'follow' as RequestRedirect,
  };

  fetch(`http://127.0.0.1:8080/LaboratoryStatus/cancel?${params.toString()}`, requestOptions,)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.code == 200) {
          alert("删除成功");
          router.push("/home/lab/list");
        } else {
          alert(result.message);
        }
      }).catch(err => {
    console.log(err);
    alert("添加失败");
  })


}


</script>



