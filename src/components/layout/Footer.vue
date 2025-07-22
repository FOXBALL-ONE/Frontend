<template>
  <a-layout-footer style="text-align: center">
    <a>
      <span>{{ mingyan }}</span>
    </a>
  </a-layout-footer>
</template>
<script lang="ts" setup>
import {ref} from "vue";

let mingyan = ref<string>("");
var myHeaders = new Headers();
myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.5845.97 Safari/537.36 Core/1.116.520.400 QQBrowser/19.2.6473.400");
myHeaders.append("Accept", "*/*");
myHeaders.append("Host", "127.0.0.1:8080");
myHeaders.append("Connection", "keep-alive");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow' as RequestRedirect,
};

fetch(`https://v1.hitokoto.cn/`, requestOptions)
    .then(response => response.json())
    .then(result => {
      mingyan.value = result.from_who + ":" + result.hitokoto;
    })
    .catch(error => {
      console.error('请求错误:', error);
    });
</script>


<style scoped>

</style>