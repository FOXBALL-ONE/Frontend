<template>
  <a-table :columns="columns" :data-source="data1">

  </a-table>
</template>
<script lang="ts" setup>

import {ref} from "vue";
import router from "@/router";

const columns = [
  {
    title: 'ID',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: '实验室号',
    dataIndex: 'labId',
    key: 'labId',
  }, {
    title: '开始时间',
    dataIndex: 'startTime',
    key: 'startTime',
  }, {
    title: '结束时间',
    key: 'endTime',
    dataIndex: 'endTime',
  },
  {
    title: '维修原因',
    key: 'reason',
    dataIndex: 'reason',
  }
];

interface Laboratory {
  id: string;
  date: string;
  labId: string;
  startTime: string;
  endTime: string;
  reason: string;
}

// 显式指定 ref 的类型
const data1 = ref<Laboratory[]>([]);

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

const requestOptions: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    "satoken": getToken(),
  },
  redirect: 'follow' as RequestRedirect,
};

fetch("http://localhost:8080/LaboratoryStatus/all", requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.code === 200) {
        if (result.data) {
          console.log(result.data);
          data1.value.push(
              ...result.data.map(
                  (item: {
                    id: string;
                    date: string;
                    labId: string;
                    startTime: string;
                    endTime: string;
                    reason: string;
                  }) => ({
                    key: `${item.id}`,
                    id: item.id,
                    date: item.date,
                    labId: item.labId,
                    startTime: item.startTime,
                    endTime: item.endTime,
                    reason: item.reason,
                  })
              )
          );

        }
      }
    })


</script>


<style scoped>

</style>