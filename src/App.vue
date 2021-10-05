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
  <TheHeader id='the-header'/>
  <div class='w-full mx-auto'>
    <router-view v-slot='{ Component, route }'>
      <transition :name="route.meta.transition || 'fade'"
        enter-active-class='transition ease-out duration-500 transform'
        enter-from-class='opacity-0'
        enter-to-class='opacity-100'
        leave-active-class='transition ease-in duration-500 transform'
        leave-from-class='opacity-100'
        leave-to-class='opacity-0'
      >
        <component :is='Component' />
      </transition>
    </router-view>
  </div>
  <TheBackground />
</template>

<style scoped>
#the-header {
  @apply w-full flex justify-between bg-gradient-to-r from-green-500 to-green-900 p-8 m-0 !dark:text-white text-black transition-all;
}
</style>