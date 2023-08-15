<script setup lang="ts">
import { TimeLinePost } from '../posts';

defineProps<{ post: TimeLinePost }>();
</script>

<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="label">Post Title</div>
        <input
          type="text"
          class="input"
        />
      </div>
    </div>
  </div>
</template>
