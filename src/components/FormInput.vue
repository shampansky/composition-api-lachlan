<script setup lang="ts">
import { ref, watch } from 'vue';
import { Status } from '../validation';

const props = defineProps<{
  name: string;
  modelValue: string;
  status: Status;
}>();

const isFocus = ref(false);
const isPristine = ref(true);

const emit = defineEmits<{
  (event: 'update:model-value', value: string): void;
}>();

function handleFocus() {
  isFocus.value = true;
}

function handleBlur() {
  isFocus.value = false;
  isPristine.value = false;
}

function validate() {
  isPristine.value = false;
}

function handleInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('update:model-value', value);
}

defineExpose({
  validate,
});

watch(
  () => props.modelValue,
  (newVal) => {
    console.log(newVal);
    if (newVal) {
      isPristine.value = false;
    }
  }
);
</script>

<template>
  <div class="field">
    <label
      :for="name"
      class="label"
      >{{ name }}</label
    >
    <div class="control">
      <input
        type="text"
        class="input"
        :id="name"
        :value="modelValue"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />

      <p
        class="is-danger help"
        v-if="!status.valid && !isFocus && !isPristine"
      >
        {{ status.message }}
      </p>
    </div>
  </div>
</template>
