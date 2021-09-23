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
</template>
