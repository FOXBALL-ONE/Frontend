<template>
  <a-card class="card-container">
    <div class="content-wrapper">
      <a-space direction="vertical">
        <a-avatar :size="{ xs: 50, sm: 50, md: 40, lg: 100, xl: 200, xxl: 200 }">
          <template #icon>
            <AntDesignOutlined/>
          </template>
        </a-avatar>
      </a-space>
      <div class="meta-info" style="word-wrap: break-word; word-break: break-all">
        <a-card-meta
            description="悬赏人信息：测试用户xxx"
            title="悬赏人信息：测试用户xxx"
        />
      </div>
    </div>
    <h1>
      {{ bounty.title }}
    </h1>
    <h2 style="word-wrap: break-word; word-break: break-all">
      {{ bounty.description }}
    </h2>
    <div class="images-container">
      <a-image
          v-for="(url, index) in bounty.imagesUrl"
          :key="index"
          :src="url"
          :width="200"
          class="bounty-image"
      />
    </div>
    <div class="action-buttons">
      <a-button type="primary" @click="openChatModal">
        点击聊聊情况
      </a-button>
      <a-button type="primary" @click="message.info('已经成功接单，请尽快完成任务')">
        我要接单
      </a-button>
    </div>

    <!-- 聊天模态框 -->
    <a-modal
        v-model:visible="chatVisible"
        :footer="null"
        title="与悬赏发布者聊天"
        width="700px"
    >
      <div class="chat-container">
        <div ref="chatMessagesRef" class="chat-messages">
          <div v-for="(msg, index) in chatMessages" :key="index"
               :class="['message', msg.sender === 'me' ? 'message-mine' : 'message-other']">
            <a-avatar :size="40" class="avatar">
              {{ msg.sender === 'me' ? '我' : '对方' }}
            </a-avatar>
            <div class="message-content">
              <div class="message-text">{{ msg.content }}</div>
              <div class="message-time">{{ msg.time }}</div>
            </div>
          </div>
        </div>
        <div class="chat-input-area">
          <a-input
              v-model:value="messageInput"
              :autoSize="{ minRows: 2, maxRows: 6 }"
              class="chat-input"
              placeholder="请输入消息..."
              @pressEnter.prevent="sendMessage"
          />
          <a-button :disabled="!messageInput.trim()" type="primary" @click="sendMessage">
            发送
          </a-button>
        </div>
      </div>
    </a-modal>
  </a-card>
</template>

<script lang="ts" setup>
import {AntDesignOutlined} from '@ant-design/icons-vue';
import {nextTick, ref} from 'vue';
import {message} from "ant-design-vue";

interface Bounty {
  title: string;
  description: string;
  bountyId: string;
  imagesUrl: string[];
}

interface ChatMessage {
  content: string;
  sender: 'me' | 'other';
  time: string;
}

const bounty = ref<Bounty>({
  title: '修复前端登录页面响应式布局问题',
  description: '在移动设备上登录页面显示异常，需要优化CSS使其在不同尺寸的设备上都能正常显示',
  bountyId: '123',
  imagesUrl: ['https://xsgames.co/randomusers/avatar.php?g=pixel&key=1', 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1', 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png']
});

// 聊天相关数据
const chatVisible = ref(false);
const messageInput = ref('');
const chatMessages = ref<ChatMessage[]>([
  {
    content: '您好，我对您发布的悬赏任务很感兴趣',
    sender: 'me',
    time: '10:30'
  },
  {
    content: '好的，您有什么问题想了解的？',
    sender: 'other',
    time: '10:31'
  },
]);
const chatMessagesRef = ref<HTMLDivElement | null>(null);

// 打开聊天模态框
const openChatModal = () => {
  chatVisible.value = true;
  // 确保聊天记录滚动到底部
  nextTick(() => {
    scrollToBottom();
  });
};

// 发送消息
const sendMessage = () => {
  if (!messageInput.value.trim()) return;

  // 添加新消息
  chatMessages.value.push({
    content: messageInput.value,
    sender: 'me',
    time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
  });

  // 清空输入框
  messageInput.value = '';

  // 模拟对方回复
  setTimeout(() => {
    chatMessages.value.push({
      content: '我已经收到您的消息，稍后会详细回复',
      sender: 'other',
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    });
    scrollToBottom();
  }, 1000);

  // 滚动到底部
  nextTick(() => {
    scrollToBottom();
  });
};

// 滚动到聊天区域底部
const scrollToBottom = () => {
  if (chatMessagesRef.value) {
    chatMessagesRef.value.scrollTop = chatMessagesRef.value.scrollHeight;
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.content-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.meta-info {
  flex: 1;
}

.images-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}

.bounty-image {
  margin-bottom: 10px;
}

.action-buttons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

/* 聊天样式 */
.chat-container {
  display: flex;
  flex-direction: column;
  height: 500px;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 15px;
}

.message {
  display: flex;
  align-items: flex-start;
  max-width: 80%;
}

.message-mine {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.avatar {
  flex-shrink: 0;
  margin: 0 10px;
  background: #1890ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.message-content {
  padding: 10px 15px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.message-mine .message-content {
  background: #1890ff;
  color: white;
}

.message-time {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

.message-mine .message-time {
  color: #d9d9d9;
  text-align: right;
}

.chat-input-area {
  display: flex;
  gap: 10px;
  padding: 10px 0;
}

.chat-input {
  flex: 1;
  resize: none;
  border-radius: 8px;
}
</style>