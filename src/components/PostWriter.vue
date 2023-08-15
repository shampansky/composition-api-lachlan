<script setup lang="ts">
import { ref } from 'vue';
import { TimeLinePost } from '../posts';

const props = defineProps<{ post: TimeLinePost }>();
const title = ref(props.post.title);
</script>

<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="label">Post Title</div>
        <input
          type="text"
          class="input"
          v-model="title"
        />
      </div>
    </div>
  </div>
</template>
