import { ref, shallowRef } from 'vue';
import SignupForm from '../components/SignupForm.vue';
import SinginForm from '../components/SinginForm.vue';

const show = ref(false);
const component = shallowRef();

export function useModal() {
  return {
    show,
    component,
    showModal: (type: 'signUp' | 'signIn') => {
      show.value = true;
      switch (type) {
        case 'signIn':
          return (component.value = SinginForm);
        case 'signUp':
          return (component.value = SignupForm);
      }
    },
    hideModal: () => (show.value = false),
  };
}
