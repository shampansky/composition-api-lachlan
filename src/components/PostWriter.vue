<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { TimeLinePost } from '../posts';
import { marked } from 'marked';

const props = defineProps<{ post: TimeLinePost }>();
const title = ref(props.post.title);
const content = ref(props.post.markdown);
const contentEditable = ref<HTMLDivElement>();

const html = computed(() => marked.parse(content.value));

onMounted(() => {
  if (!contentEditable.value) {
    throw Error('ContentEditalbe DOM node was not found');
  }
  contentEditable.value.innerText = content.value;
});

function handleInput() {
  if (!contentEditable.value) {
    throw Error('ContentEditalbe DOM node was not found');
  }
  content.value = contentEditable.value?.innerText;
}
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

  <div class="columns">
    <div class="column">
      <div
        contenteditable="true"
        ref="contentEditable"
        @input="handleInput"
      />
    </div>
    <div class="column">
      <div v-html="html" />
    </div>
  </div>
</template>
