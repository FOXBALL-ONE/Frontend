<template>
  <div class="home-container">
    <a-carousel autoplay style="background: blue; height: 600px ">
      <a-image
          preview={false}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          style="width: 50%; height: 20px; "
      />

      <div><h3>4</h3></div>
    </a-carousel>

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
  </div>
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
    title: '欢迎使用本系统',
    description:
        '本系统是一个二手交易平台，旨在为用户提供一个便捷的交易环境',
  },
  {
    key: 2,
    title: '欢迎使用本系统',
    description:
        '本系统是一个二手交易平台，旨在为用户提供一个便捷的交易环境',
  },
  {
    key: 3,
    title: '欢迎使用本系统',
    description:
        '本系统是一个二手交易平台，旨在为用户提供一个便捷的交易环境',
  },
  {
    key: 4,
    title: '欢迎使用本系统',
    description:
        '本系统是一个二手交易平台，旨在为用户提供一个便捷的交易环境',
  },
  {
    key: 4,
    title: '欢迎使用本系统',
    description:
        '本系统是一个二手交易平台，旨在为用户提供一个便捷的交易环境',
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
.home-container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 占满视口高度 */
}

.full-height-list {
  flex: 1; /* 让列表自动填充剩余空间 */
  overflow-y: auto; /* 当内容超出时显示滚动条 */
}
</style>
