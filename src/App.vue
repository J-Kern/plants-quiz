<script lang="ts">
import { defineComponent } from 'vue';
import TheBackground from './components/TheBackground.vue';
import TheHeader from '/@/components/TheHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheBackground,
    TheHeader
  }
});
</script>
<template>
  <TheBackground />
  <TheHeader />
  <transition
    enter-active-class='transition ease-out duration-1000 transform'
    enter-from-class='opacity-0'
    enter-to-class='opacity-100'
    leave-active-class='transition ease-in duration-1000 transform'
    leave-from-class='opacity-100'
    leave-to-class='opacity-0'
  >
    <router-view />
  </transition>
</template>
