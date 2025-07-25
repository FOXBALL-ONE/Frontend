<template>
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
              <a :href=item.url>{{ item.title }}</a>
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
  url?: string;
}

const data: DataItem[] = [
  {
    key: 1,
    title: 'Ant Design Title 1',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team1',
    url: 'https://www.baidu.com/',
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
    url: 'https://www.antdv.com/',

  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
    url: 'https://www.antdv.com/',

  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
    url: 'https://www.antdv.com/',

  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
    url: 'https://www.antdv.com/',

  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
    url: 'https://www.antdv.com/',

  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
    url: 'https://www.antdv.com/',

  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
    url: 'https://www.antdv.com/',

  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
    url: 'https://www.antdv.com/',

  },
  {
    key: 4,
    title: 'Ant Design Title 4',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team',
    url: 'https://www.antdv.com/',

  },
];
</script>


<style scoped>

</style>