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
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random"/>
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
    title: 'Ant Design Title 1',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team1',
  },
  {
    key: 2,
    title: 'Ant Design Title 2',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    key: 3,
    title: 'Ant Design Title 3',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
];

</script>
<style scoped>

</style>