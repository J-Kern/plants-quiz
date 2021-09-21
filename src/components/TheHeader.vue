<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'TheHeader',
  setup: () => {
    const { t } = useI18n();
    
    return { t };
  },
});
</script>
<template lang="pug">
.w-full.bg-gradient-to-r.from-green-500.to-green-900.p-8.m-0
  h1.text-center
    | Hello World!
</template>

<style scoped>
a {
  @apply text-cyan-400 hover:text-cyan-500 transition-all ease-out duration-100;
}
</style>

<style scoped>
label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  @apply text-xs font-mono bg-yellow-200 text-yellow-700 rounded px-0.5 py-0.5;
}
</style>
