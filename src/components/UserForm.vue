<script setup lang="ts">
import { computed, ref } from 'vue';
import FormInput from './FormInput.vue';
import { NewUser } from '../users';
import { validate, length, required } from '../validation';

defineProps<{
  error?: string;
}>();

const emit = defineEmits<{
  (event: 'submit', payload: NewUser): void;
}>();

const username = ref('');
const usernameInput = ref<InstanceType<typeof FormInput> | null>(null);
const usernameStatus = computed(() => {
  return validate(username.value, [required, length({ min: 5, max: 10 })]);
});

const password = ref('');
const passwordInput = ref<InstanceType<typeof FormInput> | null>(null);
const passwordStatus = computed(() => {
  return validate(password.value, [required, length({ min: 10, max: 40 })]);
});

const isInvalid = computed(() => {
  return !usernameStatus.value.valid || !passwordStatus.value.valid;
});

async function handleSubmit() {
  usernameInput.value?.validate();
  passwordInput.value?.validate();
  if (isInvalid.value) return;
  const newUser: NewUser = {
    username: username.value,
    password: password.value,
  };

  try {
    emit('submit', newUser);
  } catch (e) {}
}
</script>

<template>
  <form
    class="form"
    @submit.prevent="handleSubmit"
  >
    <FormInput
      ref="usernameInput"
      name="Username"
      v-model="username"
      :status="usernameStatus"
      type="text"
    />
    <FormInput
      ref="passwordInput"
      name="Password"
      v-model="password"
      :status="passwordStatus"
      type="password"
    />
    <div
      v-if="error"
      class="is-danger help"
    >
      {{ error }}
    </div>
    <button class="button">Submit</button>
  </form>
</template>

<style scoped>
.form {
  background-color: #fff;
  padding: 30px;
  margin-top: 50px;
}
</style>
