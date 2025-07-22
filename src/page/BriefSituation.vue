<template>
  <a-row>
    <a-col :span="12">
      <a-statistic :title="order_total" :value="order_amount" style="margin-right: 50px"/>
    </a-col>
    <a-col :span="12">
      <a-statistic :title="order_checking" :value="order_passing_amount"/>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const order_total = "预约总数"
let order_amount = ref(0)
let order_passing_amount = ref(0)
const order_checking = "正在等待审核的预约";

const router = useRouter();

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

let myHeaders = new Headers();
myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.5845.97 Safari/537.36 Core/1.116.520.400 QQBrowser/19.2.6473.400");
myHeaders.append("Accept", "*/*");
myHeaders.append("Host", "127.0.0.1:8080");
myHeaders.append("Connection", "keep-alive");
myHeaders.append("satoken", getToken());

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow' as RequestRedirect,
};


fetch(`http://127.0.0.1:8080/applicationrecord/getAllNumber`, requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.code === 200) {
        order_amount.value = result.data;
        console.log(order_amount);
      } else {
        console.log(result);
        alert("获取出错，请稍后再试");
      }
    })
    .catch(error => {
      console.error('请求错误:', error);
    });

fetch(`http://127.0.0.1:8080/applicationrecord/getIngNumber`, requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.code === 200) {
        order_passing_amount.value = result.data;
        console.log(order_passing_amount)
      } else {
        console.log(result);
        alert("获取出错，请稍后再试");
      }
    })
    .catch(error => {
      console.error('请求错误:', error);
    });

</script>


