<template>
  <a-card style="display: flex; justify-content: center;">
    <a-space direction="horizontal">
      <a-button type="primary" @click="$router.push('/bounty/publish')">
        所有订单
      </a-button>
      <a-button type="primary" @click="$router.push('/bounty/publish')">
        未支付订单
      </a-button>
      <a-button type="primary" @click="$router.push('/bounty/publish')">
        已支付订单
      </a-button>
    </a-space>
  </a-card>
  <a-card>
    当前页面展示的订单为：所有订单
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
  key: number;          // 订单唯一标识
  title: string;        // 商品标题
  description?: string; // 商品描述（可选属性）
  price: number;        // 商品价格（必填，补充完整）
  status: string;       // 订单状态（必填，补充完整：'unpaid' 未支付 / 'paid' 已支付）
}

const data: DataItem[] = [
  {
    key: 1,
    title: '自行车配件套装',
    description: '包含各种自行车维修工具和零件，适合日常使用',
    price: 159,         // 补充价格
    status: 'paid'      // 补充状态：已支付
  },
  {
    key: 2,
    title: '二手笔记本电脑',
    description: '2021年购买的戴尔XPS，i7处理器，16GB内存，性能良好',
    price: 3299,
    status: 'unpaid'    // 补充状态：未支付
  },
  {
    key: 3,
    title: '复古唱片机',
    description: '八十年代索尼黑胶唱片机，音质完好，外观有轻微磨损',
    price: 799,
    status: 'paid'
  },
  {
    key: 4,
    title: '专业相机三脚架',
    description: '碳纤维材质，轻便耐用，适合户外摄影爱好者',
    price: 599,
    status: 'paid'
  },
  {
    key: 5,
    title: '原装游戏手柄',
    description: 'PS5原装手柄，使用不到半年，无任何损伤，包装完好',
    price: 329,
    status: 'unpaid'
  },
  {
    key: 6,
    title: '儿童自行车',
    description: '适合4-6岁儿童使用，附带辅助轮，车身粉色，状态良好',
    price: 459,
    status: 'paid'
  },
  {
    key: 7,
    title: '办公桌椅组合',
    description: '宜家款式，可升降办公桌和人体工学椅，九成新',
    price: 1299,
    status: 'unpaid'
  },
  {
    key: 8,
    title: '厨房小家电套装',
    description: '包含搅拌机、电饭煲和面包机，全部正常工作，轻微使用痕迹',
    price: 699,
    status: 'paid'
  },
  {
    key: 9,
    title: '智能手表',
    description: 'Apple Watch Series 6，44mm，蓝色铝金属表壳，电池健康90%',
    price: 1899,
    status: 'unpaid'
  },
  {
    key: 10,
    title: '滑雪装备全套',
    description: '包含雪板、靴子和护具，使用一个雪季，适合初学者到中级水平',
    price: 1599,
    status: 'paid'
  },
  {
    key: 11,
    title: '高端耳机',
    description: '索尼WH-1000XM4无线降噪耳机，黑色，附带原装收纳盒和配件',
    price: 1999,
    status: 'unpaid'
  },
];


</script>
<style scoped>

</style>