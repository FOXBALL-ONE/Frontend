<template>
  <div class="order-detail">
    <a-card class="detail-card">
      <template #title>
        <div class="card-title">
          <span>订单详情</span>
          <a-tag :color="getStatusColor(orderInfo.status)">{{ orderInfo.statusText }}</a-tag>
        </div>
      </template>

      <!-- 订单基本信息 -->
      <a-descriptions bordered title="订单信息">
        <a-descriptions-item label="订单编号">{{ orderInfo.orderNo }}</a-descriptions-item>
        <a-descriptions-item label="创建时间">{{ orderInfo.createTime }}</a-descriptions-item>
        <a-descriptions-item label="支付时间">{{ orderInfo.payTime }}</a-descriptions-item>
        <a-descriptions-item label="支付方式">{{ orderInfo.payMethod }}</a-descriptions-item>
        <a-descriptions-item label="订单金额">
          <span class="price">¥{{ orderInfo.totalAmount }}</span>
        </a-descriptions-item>
        <a-descriptions-item label="实付金额">
          <span class="price">¥{{ orderInfo.actualAmount }}</span>
        </a-descriptions-item>
      </a-descriptions>

      <!-- 商品信息 -->
      <a-descriptions bordered class="mt-20" title="商品信息">
        <a-descriptions-item :span="3" label="商品图片">
          <a-image
              :preview="false"
              :src="orderInfo.goods.image"
              :width="200"
          />
        </a-descriptions-item>
        <a-descriptions-item label="商品名称">{{ orderInfo.goods.title }}</a-descriptions-item>
        <a-descriptions-item label="商品价格">
          <span class="price">¥{{ orderInfo.goods.price }}</span>
        </a-descriptions-item>
        <a-descriptions-item label="商品成色">
          <a-tag :color="getConditionColor(orderInfo.goods.condition)">
            {{ orderInfo.goods.condition }}
          </a-tag>
        </a-descriptions-item>
      </a-descriptions>

      <!-- 买家信息 -->
      <a-descriptions bordered class="mt-20" title="买家信息">
        <a-descriptions-item label="买家昵称">{{ orderInfo.buyer.name }}</a-descriptions-item>
        <a-descriptions-item label="联系电话">{{ orderInfo.buyer.phone }}</a-descriptions-item>
        <a-descriptions-item label="收货地址">{{ orderInfo.buyer.address }}</a-descriptions-item>
        <a-descriptions-item label="买家留言">{{ orderInfo.buyer.message || '无' }}</a-descriptions-item>
      </a-descriptions>

      <!-- 底部操作按钮 -->
      <div class="action-buttons">
        <a-space>
          <a-button v-if="orderInfo.status !== 'completed'" type="primary" @click="handleContact">
            联系买家
          </a-button>
          <a-button @click="handleBack">返回列表</a-button>
        </a-space>
      </div>
    </a-card>

    <!-- 聊天窗口 -->
    <a-modal
        v-model:visible="chatVisible"
        :destroyOnClose="true"
        :footer="null"
        title="联系买家"
        width="400px"
        @cancel="handleChatClose"
    >
      <div class="chat-container">
        <div ref="messageContainer" class="chat-messages">
          <div v-for="(msg, index) in messages" :key="index"
               :class="['message', msg.isSeller ? 'message-right' : 'message-left']">
            <a-avatar :size="32" :src="msg.avatar"/>
            <div class="message-content">
              {{ msg.content }}
              <div class="message-time">{{ msg.time }}</div>
            </div>
          </div>
        </div>
        <div class="chat-input">
          <a-input-search
              v-model:value="messageInput"
              enter-button="发送"
              placeholder="请输入消息"
              @search="handleSendMessage"
              @keyup.enter="handleSendMessage(messageInput)"
          >
            <template #prefix>
              <smile-outlined/>
            </template>
          </a-input-search>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import {nextTick, ref} from 'vue';
import {message} from 'ant-design-vue';
import {useRouter} from 'vue-router';
import {SmileOutlined} from '@ant-design/icons-vue';

const router = useRouter();

// 聊天相关的状态
const chatVisible = ref(false);
const messageInput = ref('');
const messageContainer = ref<HTMLElement | null>(null);

interface ChatMessage {
  content: string;
  time: string;
  isSeller: boolean;
  avatar: string;
}

// 模拟订单数据
const orderInfo = ref({
  orderNo: 'DD20240115001',
  status: 'pending',
  statusText: '待付款',
  createTime: '2024-01-15 14:30:00',
  payTime: '-',
  payMethod: '支付宝',
  totalAmount: 3499.00,
  actualAmount: 3499.00,
  goods: {
    title: '二手 iPhone 12 128GB',
    price: 3499.00,
    condition: '8成新',
    image: 'https://picsum.photos/300/200',
  },
  buyer: {
    name: '张三',
    phone: '138****8888',
    address: '浙江省杭州市西湖区xxx街道xxx小区',
    message: '希望可以尽快发货'
  }
});

// 模拟聊天记录
const messages = ref<ChatMessage[]>([
  {
    content: "您好，请问商品还在吗？",
    time: "14:30",
    isSeller: false,
    avatar: "https://picsum.photos/32/32?random=1"
  },
  {
    content: "在的，商品状况很好，您可以放心购买",
    time: "14:31",
    isSeller: true,
    avatar: "https://picsum.photos/32/32?random=2"
  },
  {
    content: "能便宜一点吗？",
    time: "14:32",
    isSeller: false,
    avatar: "https://picsum.photos/32/32?random=1"
  }
]);

const getStatusColor = (status: string) => {
  const colorMap: Record<string, string> = {
    pending: 'orange',
    paid: 'blue',
    shipping: 'purple',
    completed: 'green',
    cancelled: 'red'
  };
  return colorMap[status] || 'default';
};

const getConditionColor = (condition: string) => {
  if (condition.includes('9') || condition.includes('95%')) return 'green';
  if (condition.includes('8')) return 'blue';
  return 'orange';
};

const handleContact = () => {
  chatVisible.value = true;
  nextTick(() => {
    if (messageContainer.value) {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
    }
  });
};

const handleChatClose = () => {
  chatVisible.value = false;
  messageInput.value = '';
};

const handleSendMessage = (value: string) => {
  if (!value.trim()) {
    message.warning('请输入消息内容');
    return;
  }

  const newMessage: ChatMessage = {
    content: value,
    time: new Date().toLocaleTimeString('zh-CN', {hour: '2-digit', minute: '2-digit'}),
    isSeller: true,
    avatar: "https://picsum.photos/32/32?random=2"
  };

  messages.value.push(newMessage);
  messageInput.value = '';

  // 模拟买家自动回复
  setTimeout(() => {
    const autoReply: ChatMessage = {
      content: "好的，我考虑一下",
      time: new Date().toLocaleTimeString('zh-CN', {hour: '2-digit', minute: '2-digit'}),
      isSeller: false,
      avatar: "https://picsum.photos/32/32?random=1"
    };
    messages.value.push(autoReply);

    // 滚动到底部
    nextTick(() => {
      if (messageContainer.value) {
        messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
      }
    });
  }, 1000);
};

const handleBack = () => {
  router.back();
};
</script>

<style scoped>
.order-detail {
  padding: 24px;
  background: #f0f2f5;
  min-height: 100vh;
}

.detail-card {
  max-width: 1000px;
  margin: 0 auto;
  background: #ffffff;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.price {
  color: #f5222d;
  font-weight: bold;
  font-size: 16px;
}

.mt-20 {
  margin-top: 20px;
}

.action-buttons {
  margin-top: 24px;
  display: flex;
  justify-content: center;
}

/* 聊天窗口样式 */
.chat-container {
  height: 400px;
  display: flex;
  flex-direction: column;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  background: #f5f5f5;
  margin-bottom: 16px;
  border-radius: 4px;
}

.message {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 8px;
}

.message-left {
  flex-direction: row;
}

.message-right {
  flex-direction: row-reverse;
}

.message-content {
  max-width: 70%;
  padding: 8px 12px;
  border-radius: 8px;
  background: white;
  position: relative;
  word-break: break-all;
}

.message-right .message-content {
  background: #1890ff;
  color: white;
}

.message-time {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

.message-right .message-time {
  color: #e6f7ff;
}

.chat-input {
  padding: 16px 0 0;
}

:deep(.ant-descriptions-title) {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
}

:deep(.ant-descriptions-item-label) {
  font-weight: 500;
}

:deep(.ant-modal-body) {
  padding: 12px;
}
</style>