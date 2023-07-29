<script setup lang="ts">
import { ref } from 'vue';

const periods = ['Today', 'This Week', 'This Month'] as const;
type Period = (typeof periods)[number];

const selectedPeriod = ref<Period>(periods[0]);

function selectPeriod(period: Period) {
  selectedPeriod.value = period;
}
</script>

<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a
        v-for="period of periods"
        :key="period"
        :class="{ 'is-active': period === selectedPeriod }"
        @click="selectPeriod(period)"
      >
        {{ period }}
      </a>
    </span>
  </nav>
</template>
