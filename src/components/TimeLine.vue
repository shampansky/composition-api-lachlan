<script setup lang="ts">
import TimeLineItem from './TimeLineItem.vue';
import { usePosts } from '../stores/posts';
import { periods } from '../constants';

const postsStore = usePosts();

await postsStore.fetchPosts();
</script>

<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a
        v-for="period of periods"
        :key="period"
        :class="{ 'is-active': period === postsStore.selectedPeriod }"
        @click="postsStore.setSelectedPeriod(period)"
      >
        {{ period }}
      </a>
    </span>

    <TimeLineItem
      v-for="post of postsStore.filterdPosts"
      :key="post.id"
      :post="post"
    />
  </nav>
</template>
