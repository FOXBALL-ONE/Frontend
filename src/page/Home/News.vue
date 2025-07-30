<script lang="ts" setup>
import {ref} from 'vue';

interface NewsDetail {
  id: number;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readCount: number;
}

// 模拟的单个新闻详情数据
const newsDetail = ref<NewsDetail>({
  id: 1,
  title: '科技创新推动产业发展',
  content: '近日，一系列前沿科技成果在国际科技展览会上亮相，引发广泛关注。专家表示，这些创新技术将为产业升级提供强大动力，促进经济高质量发展。\n\n据了解，此次展览会上展示的量子计算、人工智能、生物医药等领域的最新成果，代表了当前全球科技发展的前沿水平。其中，我国自主研发的新一代人工智能系统获得了与会专家的高度评价。\n\n科技部相关负责人表示，将进一步加大科技创新支持力度，促进产学研深度融合，加速科技成果转化，为经济社会发展注入新动能。',
  image: 'https://picsum.photos/id/180/1200/600',
  author: '张明',
  date: '2023-06-15 14:30',
  category: '科技',
  readCount: 2453
});
</script>

<template>
  <div class="news-detail">
    <div class="news-header">
      <h1 class="news-title">{{ newsDetail.title }}</h1>
      <div class="news-meta">
        <span class="meta-item author">作者: {{ newsDetail.author }}</span>
        <span class="meta-item date">发布时间: {{ newsDetail.date }}</span>
        <span class="meta-item category">分类: {{ newsDetail.category }}</span>
        <span class="meta-item read-count">阅读量: {{ newsDetail.readCount }}</span>
      </div>
    </div>

    <div class="news-featured-image">
      <img :alt="newsDetail.title" :src="newsDetail.image">
    </div>

    <div class="news-content">
      <p v-for="(paragraph, index) in newsDetail.content.split('\n\n')"
         :key="index"
         class="content-paragraph">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.news-detail {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 20px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
}

.news-header {
  margin-bottom: 24px;
}

.news-title {
  font-size: 28px;
  font-weight: 600;
  color: #222;
  margin-bottom: 16px;
  line-height: 1.3;
}

.news-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  color: #666;
  font-size: 14px;
}

.meta-item {
  position: relative;
}

.meta-item:not(:last-child)::after {
  content: "";
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 14px;
  background-color: #ddd;
}

.news-featured-image {
  width: 100%;
  margin-bottom: 24px;
  border-radius: 8px;
  overflow: hidden;
}

.news-featured-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.news-content {
  color: #333;
  line-height: 1.8;
  font-size: 16px;
}

.content-paragraph {
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .news-detail {
    padding: 20px 16px;
  }

  .news-title {
    font-size: 24px;
  }

  .news-meta {
    flex-direction: column;
    gap: 8px;
  }

  .meta-item:not(:last-child)::after {
    display: none;
  }
}
</style>