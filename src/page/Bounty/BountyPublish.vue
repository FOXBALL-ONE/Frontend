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
      描述
      <a-textarea
          v-model:value="description"
          :auto-size="{ minRows: 2, maxRows: 50 }"
          placeholder="请输入描述"
      />
      <br>
      预算
      <a-input-number
          v-model:value="budget"
          placeholder="请输入预算"
      />
      <br>
      请选择悬赏类型
      <a-select v-model:value="bountyType" placeholder="请选择悬赏类型">
        <a-select-option value="type1">学习</a-select-option>
        <a-select-option value="type2">生活</a-select-option>
        <a-select-option value="type3">代理</a-select-option>
      </a-select>
      <br>
      请选择悬赏难度
      <a-select v-model:value="difficulty" placeholder="请选择悬赏难度">
        <a-select-option value="easy">简单</a-select-option>
        <a-select-option value="medium">中等</a-select-option>
        <a-select-option value="hard">困难</a-select-option>
      </a-select>
      <br>

      请选择悬赏开始时间
      <a-date-picker v-model:value="startTime" placeholder="请选择悬赏开始时间"/>
      <br>
      请选择悬赏截止日期
      <a-date-picker v-model:value="endTime" placeholder="请选择悬赏截止日期"/>
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
        发布悬赏
      </a-button>
    </a-space>
  </a-card>

</template>
<script lang="ts" setup>
import {ref} from 'vue'
import type {UploadProps} from 'ant-design-vue';
import {message} from "ant-design-vue";

import {UploadOutlined} from '@ant-design/icons-vue';

const fileList1 = ref<UploadProps['fileList']>([
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
]);

const title = ref('')
const description = ref('')
const budget = ref<number | null>(null)
const bountyType = ref<string | null>(null)
const difficulty = ref<string | null>(null)
const startTime = ref(null)
const endTime = ref(null)

const publish = () => {
  message.info('发布悬赏功能尚未实现，请稍后再试！');
}


</script>
<style scoped>

</style>