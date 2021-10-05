<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Gallery',
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>
<template>
  <div
    class="
      container
      max-w-3xl
      rounded-2xl
      dark:shadow-3xl
      glass-morphism
      glass-border
      transition-all
    "
    m="x-auto y-8"
    p="8"
    bg="dark:dark-800 light-800"
  >

  </div>
</template>

<style>
a,
.footer-link {
  @apply transition-all ease-out duration-100;
}

.footer-link {
  opacity: 0.8;
}
</style>
