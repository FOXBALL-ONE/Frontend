<template>

  <a-card style="text-align: center;">
    <a-row justify="center" style="text-align: center;">
      <a-col span={12}>
        <a-input v-model:value="labId" placeholder="请输入实验室ID"/>
      </a-col>
    </a-row>
    <a-row justify="center" style="text-align: center;">
      <a-col span={12}>
        <a-input v-model:value="labName" placeholder="请输入实验室名称"/>
      </a-col>
    </a-row>
    <br>
    <a-row justify="center">
      <a-col span={12}>
        <a-input v-model:value="labType" placeholder="请输入实验室类型"/>
      </a-col>
    </a-row>
    <br>
    <a-row justify="center">
      <a-col span={12}>
        <a-input v-model:value="building" placeholder="请输入实验室所属楼栋"/>
      </a-col>
    </a-row>
    <br>
    <a-row justify="center">
      <a-col span={12}>
        <a-input v-model:value="floor" placeholder="请输入实验室所属楼层"/>
      </a-col>
    </a-row>
    <br>
    <a-row justify="center">
      <a-col span={12}>
        <a-input v-model:value="labCapacity" placeholder="请输入实验室容量"/>
      </a-col>
    </a-row>
    <br>
    <a-row justify="center">
      <a-col span={12}>
        <a-input v-model:value="labLeader" placeholder="请输入负责人"/>
      </a-col>
    </a-row>
    <br>
    <a-row justify="center">
      <a-col span={12}>
        <a-input v-model:value="labPhone" placeholder="请输入联系手机号"/>
      </a-col>
    </a-row>
    <br>
    <a-row justify="center">
      <a-col span={12}>
        <a-input v-model:value="email" placeholder="请输入联系邮箱"/>
      </a-col>
    </a-row>
    <br>
    <a-row justify="center">
      <a-col span={12}>
        <a-input v-model:value="labRemark" placeholder="请输入备注"/>
      </a-col>
    </a-row>
    <br>
    <br>
    <a-row justify="center">
      <a-col span={12}>
        <a-button type="primary" @click="handleClick">提交申请</a-button>
      </a-col>
    </a-row>
  </a-card>
</template>

<script lang="ts" setup>

import {ref} from "vue";
import router from "@/router";

const labId = ref<number>();
const labName = ref<string>();
const labType = ref<string>();
const building = ref<string>();
const labCapacity = ref<string>();
const labLeader = ref<string>();
const labPhone = ref<string>();
const email = ref<string>();
const labRemark = ref<string>();
const floor = ref<string>();

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
  const params = new URLSearchParams({
    id: labId.value?.toString() || "",
    name: labName.value || "",
    building: building.value || "",
    floor: floor.value || "",
    type: labType.value || "",
    capacity: labCapacity.value || "",
    leader: labLeader.value || "",
    remark: labRemark.value || "",
    phone: labPhone.value || "",
    email: email.value || ""
  });
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "satoken": getToken(),
    },
    redirect: 'follow' as RequestRedirect,
  };
  fetch(`http://127.0.0.1:8080/lab/update?${params.toString()}`, requestOptions,)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.code == 200) {
          alert("更新成功");
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

