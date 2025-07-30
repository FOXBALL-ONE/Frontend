<template>
  <a-card :body-style="{ padding: 0 }" :bordered="false">
    <div style="width: 100%;">
      <a-carousel arrows autoplay style="width: 100%;">
        <div class="carousel-item"><h3>1</h3></div>
        <div class="carousel-item"><h3>2</h3></div>
        <div class="carousel-item"><h3>3</h3></div>
        <div class="carousel-item"><h3>4</h3></div>
      </a-carousel>
    </div>
    <br>
    <br>

    <a-space
        style="display: flex; justify-content: center; width: calc(100% - 60px); margin-top: 16px; margin-left: 40px; margin-right: 40px;">
      <a-descriptions title="二手物品信息">
        <a-descriptions-item label="物品名称">二手笔记本电脑</a-descriptions-item>
        <a-descriptions-item label="价格">¥2800</a-descriptions-item>
        <a-descriptions-item label="使用年限">2年</a-descriptions-item>
        <a-descriptions-item label="品牌型号">联想ThinkPad X1 Carbon</a-descriptions-item>
        <a-descriptions-item label="卖家">张先生</a-descriptions-item>
        <a-descriptions-item label="联系电话">138****5678</a-descriptions-item>
        <a-descriptions-item label="物品描述">
          i7处理器，16G内存，512G固态硬盘，成色9新，无维修史，原装充电器
        </a-descriptions-item>
      </a-descriptions>
      <div style="display: flex; justify-content: center; gap: 16px; margin-top: 16px;">
        <
        <a-button size="large" type="primary" @click="showChatModal">
          <template #icon>
            <message-outlined/>
          </template>
          聊一聊
        </a-button>
        <a-button danger size="large" type="primary">
          <template #icon>
            <shopping-cart-outlined/>
          </template>
          购买
        </a-button>
      </div>
      <a-modal v-model:visible="isChatModalVisible" :footer="null" title="与卖家聊天" width="400px">
        <div class="chat-container">
          <div class="chat-message seller">
            <div class="chat-avatar">卖家</div>
            <div class="chat-content">您好，请问对这台笔记本电脑有什么问题想了解的吗？</div>
          </div>
          <div class="chat-message buyer">
            <div class="chat-avatar">我</div>
            <div class="chat-content">你好，想问一下电池续航时间大概多久？</div>

          </div>
          <div class="chat-message seller">
            <div class="chat-avatar">卖家</div>
            <div class="chat-content">正常使用大约可以续航8小时左右，重度使用约5-6小时。</div>
          </div>
        </div>
        <div class="chat-input-area">
          <a-input v-model:value="chatMessage" placeholder="请输入消息"/>
          <a-button type="primary" @click="sendMessage">发送</a-button>
        </div>
      </a-modal>
    </a-space>
  </a-card>
</template>
<style scoped>
.carousel-item {
  height: 300px;
  line-height: 300px;
  text-align: center;
  background: #364d79;
  color: #fff;
  overflow: hidden;
}

:deep(.ant-carousel .slick-slide) {
  text-align: center;
  overflow: hidden;
}

:deep(.ant-carousel .slick-slider) {
  width: 100%;
}

.chat-container {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.chat-message {
  display: flex;
  margin-bottom: 10px;
  align-items: flex-start;
}

.chat-avatar {
  width: 40px;
  height: 40px;
  background-color: #e1e1e1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
}

.chat-content {
  padding: 10px;
  border-radius: 8px;
  max-width: 70%;
  word-break: break-word;
}

.seller .chat-content {
  background-color: #f0f0f0;
  margin-left: 10px;
}

.buyer {
  flex-direction: row-reverse;
}

.buyer .chat-content {
  background-color: #1890ff;
  color: white;
  margin-right: 10px;
}

.chat-input-area {
  display: flex;
  gap: 10px;
}

.chat-input-area .ant-input {
  flex-grow: 1;
}
</style>
<script lang="ts" setup>
import {ref} from 'vue';
import {MessageOutlined, ShoppingCartOutlined} from '@ant-design/icons-vue';

const isChatModalVisible = ref(false);
const chatMessage = ref('');

const showChatModal = () => {
  isChatModalVisible.value = true;
};

const sendMessage = () => {
  if (chatMessage.value.trim()) {
    // 实际项目中，这里应该将消息发送到后端
    // 在这里我们只是清空输入框，实际消息处理可根据需求添加
    chatMessage.value = '';
  }
};
</script>