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
      <div class="meta-info" style="word-wrap: break-word; word-break: break-all ">
        <a-card-meta
            description="悬赏人信息：测试用户xxx"
            title="悬赏人信息：测试用户xxx"
        />
      </div>
    </div>
    <h1>
      {{ bounty.title }}
    </h1>
    <h2 style="word-wrap: break-word; word-break: break-all ">
      {{ bounty.description }}
    </h2>
    <a-image
        :src=bounty.imagesUrl[0]
        :width="200"
    />
    <a-image
        :src=bounty.imagesUrl[1]
        :width="200"
    />
    <a-image
        :src=bounty.imagesUrl[2]
        :width="200"
    />
    <br/>
    <br/>
    <br/><br/>
    <a-button type="primary">
      点击聊聊情况
    </a-button>


    <a-button type="primary">
      我要接单
    </a-button>
  </a-card>
</template>

<script lang="ts" setup>
import {AntDesignOutlined} from '@ant-design/icons-vue';
import {ref} from 'vue';

interface Bounty {
  title: string;
  description: string;
  bountyId: string;
  imagesUrl: string[];
}

const bounty = ref<Bounty>({
  title: '修复前端登录页面响应式布局问题',
  description: '在移动设备上登录页面显示异常，需要优化CSS使其在不同尺寸的设备上都能正常显示',
  bountyId: '123',
  imagesUrl: ['https://xsgames.co/randomusers/avatar.php?g=pixel&key=1', 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1', 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png']
});
</script>

<style scoped>
.card-container {
  /* 确保卡片内容正常显示 */
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  /* 使用 flex 布局让头像和介绍卡片水平排列 */
  display: flex;
  align-items: center;
  gap: 20px; /* 设置头像和介绍卡片之间的间距 */
}

.meta-info {
  /* 让介绍卡片自动填充剩余空间 */
  flex: 1;
}
</style>
