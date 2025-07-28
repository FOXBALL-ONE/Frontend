<template>
  <a-card style="display: flex; justify-content: center;">
    <div style="margin: 10px 0"/>
    <a-space direction="vertical">
      标题
      <a-textarea
          v-model:value="title"
          :auto-size="{ minRows: 2, maxRows: 5 }"
          placeholder="请输入标题"
      />
      描述（仅限校内自提）
      <a-textarea
          v-model:value="description"
          :auto-size="{ minRows: 2, maxRows: 50 }"
          placeholder="请输入描述"
      />
      <br>
      价格
      <a-input-number
          v-model:value="budget"
          placeholder="请输入价格"
          style="width: auto"
      />
      <br>
      请选择物品类型
      <a-select v-model:value="bountyType" placeholder="请选择悬赏类型">
        <a-select-option value="type1">学习</a-select-option>
        <a-select-option value="type2">生活</a-select-option>
        <a-select-option value="type3">代理</a-select-option>
      </a-select>
      <br>
      请输入自提地址
      <a-input
          v-model:value="description"
          placeholder="请输入自提地址"
      />
      <br>


      请上传图片
      <a-upload
          v-model:file-list="fileList1"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          class="upload-list-inline"
          list-type="picture"
      >
        <a-button>
          <upload-outlined></upload-outlined>
          upload
        </a-button>
      </a-upload>

      <a-button type="primary" @click="publish">
        点击发布
      </a-button>
    </a-space>
  </a-card>

</template>
<script lang="ts" setup>
import {ref} from 'vue'
import type {UploadProps} from 'ant-design-vue';
import {message} from "ant-design-vue";

import {UploadOutlined} from '@ant-design/icons-vue';

const fileList1 = ref<UploadProps['fileList']>([]);

const title = ref('')
const description = ref('')
const budget = ref<number | null>(null)
const bountyType = ref<string | null>(null)
const difficulty = ref<string | null>(null)
const startTime = ref(null)
const endTime = ref(null)

const publish = () => {
  message.info('发布功能尚未实现，请稍后再试！');
}


</script>
<style scoped>

</style>