<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent, ref } from 'vue';
import { useTheme } from '/@/composables';

export default defineComponent({
  name: 'Gallery',
  setup() {
    const { t, availableLocales, locale } = useI18n();

    const toggleLocales = () => {
      const locales = availableLocales;
      locale.value =
        locales[(locales.indexOf(locale.value) + 1) % locales.length];
    };

    const { toggleDark } = useTheme();

    const show = ref(false);

    setTimeout(() => {
      show.value = true;
    }, 500);

    return { t, show, toggleLocales, toggleDark };
  },
});
</script>
<template>
  <div
    class="
      container
      max-w-3xl
      mx-auto
      my-8
      p-8
      rounded-2xl
      dark:bg-gray-800
      dark:shadow-3xl
      bg-white
      glass-morphism glass-border
      transition-all
    "
  >
    <div class="h-60 my-8">
      <transition
        enter-active-class="transition ease-out duration-300 transform"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-300 transform"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <img
          class="w-52 mx-auto mb-12"
          v-if="show"
          alt="Big Leaf"
          :src="'leaf.svg'"
        />
      </transition>
    </div>
    <footer class="text-center">
      <ul class="flex justify-between w-1/3 mx-auto mb-8">
        <li class="cursor-pointer text-2xl">
          <a
            class="footer-link text-cyan-700 hover:text-cyan-500"
            href="#"
            @click.prevent="toggleLocales"
            :title="t('toggle_language')"
            ><i
              class="iconify"
              :data-icon="'ant-design:translation-outlined'"
            ></i
          ></a>
        </li>
        <li class="cursor-pointer text-2xl">
          <a
            class="text-cyan-700 hover:text-cyan-500"
            href="#"
            @click.prevent="toggleDark"
            :title="t('toggle_theme')"
            ><i class="iconify" :data-icon="'mdi:theme-light-dark'"></i
          ></a>
        </li>
      </ul>
      <span class="text-xs"
        >{{ t('made_by') }} |
        <a
          class="footer-link text-cyan-400 hover:text-cyan-500"
          href="https://github.com/J-Kern"
          rel="noreferrer"
          target="_blank"
          >Joachim Kern</a
        ></span
      >
    </footer>
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
