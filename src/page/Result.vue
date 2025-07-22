<template>
  <a-result
      status="success"
      sub-title="申请已经提交，请耐心等待审核"
      title="成功提交"
  >
    <template #extra>
      <a-button key="Main" type="primary" @click="handleClick">返回主页</a-button>
    </template>
  </a-result>
</template>


<script lang="ts" setup>

import {useRouter} from "vue-router";

const router = useRouter()
const handleClick = () => {
  router.push("/home/summary")
}

</script>