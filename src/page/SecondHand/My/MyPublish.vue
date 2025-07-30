<template>
  <a-card style="display: flex; justify-content: center;">
    <a-space direction="horizontal">
      <a-button type="primary" @click="$router.push('/bounty/publish')">
        所有发布的二手物品
      </a-button>
      <a-button type="primary" @click="$router.push('/bounty/publish')">
        未支付的物品订单
      </a-button>
      <a-button type="primary" @click="$router.push('/bounty/publish')">
        已完成的物品订单
      </a-button>
    </a-space>
  </a-card>
  <a-card>
    当前页面展示的二手物品为：所有发布的二手物品
    <a-list
        :data-source="data"
        class="full-height-list"
        item-layout="horizontal"
    >
      <template #renderItem="{ item }">
        <a-list-item style="height: 100px">
          <a-list-item-meta>
            <template #description>
              {{ item.description }}{{ item.key }}
            </template>

            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>

          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </a-card>
</template>
<script lang="ts" setup>
interface DataItem {
  key: number;
  title: string;
  description?: string;
}

const data: DataItem[] = [
  {
    key: 1,
    title: '二手iPhone 13',
    description: '使用9成新，无划痕，配件齐全，原装充电器和耳机',
  },
  {
    key: 2,
    title: '二手MacBook Pro 2021',
    description: '轻度使用，M1芯片，16GB内存，512GB存储，原装包装',
  },
  {
    key: 3,
    title: '索尼PS5游戏机',
    description: '购买半年，成色新，送两个手柄和三款游戏光盘',
  },
  {
    key: 4,
    title: '尼康D850单反相机',
    description: '专业摄影师使用，附送24-70mm镜头，快门数不到5000',
  },
  {
    key: 5,
    title: '小米平衡车',
    description: '孩子玩过几次，几乎全新，电池续航能力良好',
  },
  {
    key: 6,
    title: '大学教材全套',
    description: '计算机专业教材，包含数据结构、操作系统、计算机网络等',
  },
  {
    key: 7,
    title: '宜家书桌',
    description: '使用一年，无明显磨损，可自取，尺寸120x60cm',
  },
  {
    key: 8,
    title: 'Nintendo Switch游戏机',
    description: '国行版本，保修期内，带马里奥赛车和塞尔达传说',
  },
  {
    key: 9,
    title: '小米空气净化器',
    description: '去年购入，滤芯刚更换不久，适合小户型使用',
  },
  {
    key: 10,
    title: 'iPad Pro 2022',
    description: '128GB WiFi版，带原装笔和键盘，保修还有8个月',
  },
  {
    key: 11,
    title: '哑铃健身套装',
    description: '可调节重量，5-40kg，搬家急售，自取优惠',
  },
];

</script>
<style scoped>

</style>