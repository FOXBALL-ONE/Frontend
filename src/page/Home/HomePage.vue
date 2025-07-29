<template>
  <div class="home-container">
    <div class="full-height">
      <a-carousel autoplay class="custom-carousel">
        <div class="carousel-item">
          <a-image
              :preview="false"
              class="carousel-image"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
        <div class="carousel-item">
          <h3>第二张轮播图</h3>
        </div>
        <div class="carousel-item">
          <h3>第三张轮播图</h3>
        </div>
        <div class="carousel-item">
          <h3>4</h3>
        </div>
      </a-carousel>

      <a-list
          :data-source="data"
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
  flex: 1;
  overflow: hidden;
}

.full-height {
  height: 100%;
  overflow: auto;
}

.custom-carousel {
  flex-shrink: 0;
  height: 600px;
  background: linear-gradient(135deg, #3498db, #1a5276);
  overflow: hidden;
  width: 100%;
}

.carousel-item {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.carousel-image {
  width: 100% !important;
  height: 100% !important;
  object-fit: fill !important;
  display: block !important;
}

</style>