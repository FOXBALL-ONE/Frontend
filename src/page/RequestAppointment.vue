<template xmlns="http://www.w3.org/1999/html">
  <div style="text-align: center;"> 注意：开始和结束时间是按照课程的节次来填写的，1代表第一节课，2代表第二节课，以此类推。
  </div>

  <a-card class="custom-card" style="text-align: center;">

    <a-space :size="12" direction="vertical">
      <div style="text-align: left;">
        <a-space>
          请选择预约的日期：
          <a-date-picker v-model:value="orderTime"/>
        </a-space>
        <br>

        <a-space>
          请输入实验室序号：
          <a-input v-model:value="classroomId" placeholder="请输入实验室序号"/>
        </a-space>
        <br>
        <a-space>
          请输入预约的开始时间点：
          <a-input v-model:value="startTime" placeholder="开始时间，请输入数字"/>
        </a-space>
        <br>
        <a-space>
          请输入预约的结束时间点：
          <a-input v-model:value="endTime" placeholder="结束时间，请输入数字"/>
        </a-space>
        <br>
        <a-space>
          请输入预约的原因：
          <a-input v-model:value="AppReson" placeholder="请输入预约的备注"/>
        </a-space>
        <br>
        <a-space>
          请输入预约的备注：
          <a-input v-model:value="AppRemark" placeholder="请输入预约的备注"/>
        </a-space>
      </div>
      <!-- 使用 linear-gradient 设置渐变色背景 -->
      <a-button style="background: linear-gradient(90deg, #ff6b6b, #ffa726); border: none;" type="primary"
                @click="handleClick">提交申请
      </a-button>

    </a-space>
  </a-card>

</template>

<script lang="ts" setup>
import {ref} from 'vue';
import type {Dayjs} from 'dayjs';
import {useRouter} from "vue-router";

let orderTime = ref<Dayjs>();
let classroomId = ref<number>();
let startTime = ref<number>();
let endTime = ref<number>();
let router = useRouter();
let AppRemark = ref<string>();
let AppReson = ref<string>();


const handleClick = () => {
  // 提取 Ref 对象的值，并转换为字符串
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "satoken": getToken(),
    },
    // credentials: 'include',  // 确保携带 cookie
    redirect: 'follow' as RequestRedirect,
    body: JSON.stringify({reason: AppReson.value?.toString() || "默认预约原因"})
  };

  const params = new URLSearchParams({
    remark: AppRemark.value?.toString() || '',
    LabID: classroomId.value?.toString() || '',
    startTime: startTime.value?.toString() || '',
    endTime: endTime.value?.toString() || '',
    date: orderTime.value?.format('YYYY-MM-DD-00-00') || ''
  });

  // 使用 params 拼接 URL
  fetch(`http://127.0.0.1:8080/applicationrecord/add?${params.toString()}`, requestOptions,)
      .then(response => response.json())
      .then(result => {
        if (result.code === 200) {
          if (result.msg === "提交成功，请等待申通通过") {
            router.push("/home/order/result")
          }
        } else {
          console.log('获取数据失败:', result);
          alert(result.msg);
        }
      })
      .catch(error => {
        console.error('请求错误:', error);
      });
}

function getToken() {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    console.error("Token not found in localStorage");
    router.push("/login")
    return "";
  }
}
</script>

<style scoped>


</style>}

<style scoped>
/* 定义自定义卡片样式，设置渐变色背景 */
.custom-card {
  background: linear-gradient(45deg, #e3f2fd, #bbdefb);
  /* 可选：添加圆角 */
  border-radius: 8px;
  /* 可选：移除默认边框 */
  border: none;
}
</style>
