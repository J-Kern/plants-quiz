<script lang="ts">
import { defineComponent } from 'vue';
import TheBackground from './components/TheBackground.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheBackground
  }
});
</script>
<template>
  <TheBackground />
  <router-view />
</template>
