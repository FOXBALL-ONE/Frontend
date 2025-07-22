<template>
  <a-card>
    <a-row justify="center" style="text-align: center;">

      <a-date-picker v-model:value="value1"/>
    </a-row>

    <a-row justify="center" style="text-align: center;">
      <a-col span={12}>
        <a-input v-model:value="labId" placeholder="请输入实验室ID"/>
      </a-col>
    </a-row>

    <a-row justify="center" style="text-align: center;">
      <a-col span={12}>
        <a-input v-model:value="startTime" placeholder="请输入开始时间"/>
      </a-col>
    </a-row>

    <a-row justify="center" style="text-align: center;">
      <a-col span={12}>
        <a-input v-model:value="endTime" placeholder="请输入结束时间"/>
      </a-col>
    </a-row>

    <a-row justify="center" style="text-align: center;">
      <a-col span={12}>
        <a-input v-model:value="reason" placeholder="请输入原因"/>
      </a-col>
    </a-row>

    <br>
    <a-row justify="center" style="text-align: center;">
      <a-col span={12}>
        <a-button type="primary" @click="handleClick">提交申请</a-button>
      </a-col>
    </a-row>
  </a-card>
</template>
<script lang="ts" setup>
import type {Dayjs} from "dayjs";
import {ref} from "vue";
import router from "@/router";

const value1 = ref<Dayjs>();
const startTime = ref<string>();
const endTime = ref<string>();
const labId = ref<string>();
const reason = ref<string>();

function getToken() {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    router.push("/login");
    return "";
  }
}

const handleClick = () => {
  const params = new URLSearchParams({
    date: value1.value?.format('YYYY-MM-DD-00-00') || "",
    labId: labId.value || "",
    startTime: startTime.value || "",
    endTime: endTime.value || "",
    reason: reason.value || "",
  })

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "satoken": getToken(),
    },
    redirect: 'follow' as RequestRedirect,
  };

  fetch(`http://127.0.0.1:8080/LaboratoryStatus/add?${params.toString()}`, requestOptions,)
      .then(response => response.json())
      .then(result => {
        if (result.code == 200) {
          alert("添加成功");
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
<style scoped>

</style>