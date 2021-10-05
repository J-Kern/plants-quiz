<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'TheHeader',
  data() {
    return {
      view: {
        atTopOfPage: true
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(){
      if(window.pageYOffset>0){
        if(this.view.atTopOfPage) this.view.atTopOfPage = false
      }else{
        if(!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    }
  },
  setup: () => {
    const { t } = useI18n();
    
    return { t };
  },
});
</script>
<template>
  <div id='the-header' :class="{ 'shadow-2xl rounded-b-3xl': !view.atTopOfPage, 'glass-morphism rounded-b': view.atTopOfPage }" class='sticky top-0'>
    <div class='flex align-center justify-between py-1 px-2'>
      <h3 class='px-3 rounded-xl bg-gray-200'>{{t('home')}}</h3>
    </div>
    <div class='flex flex-wrap align-center justify-between py-1 px-2 min-w-80'>
      <h3 class='px-3 rounded-xl bg-gray-200'>Hello World!</h3>
      <h3 class='px-3 rounded-xl bg-gray-200'>Hello World!</h3>
    </div>
  </div>
</template>

<style scoped>
label {
  margin: 0 0.5em;
  font-weight: bold;
}

a {
  @apply text-cyan-400 hover:text-cyan-500 transition-all ease-out duration-100;
}

code {
  @apply text-xs font-mono bg-yellow-200 text-yellow-700 rounded px-0.5 py-0.5;
}

h3 {
  @apply dark:bg-gray-700 transition-all;
}

#the-header {
  @apply w-full flex align-center justify-between bg-gradient-to-r from-green-500 to-green-900 p-8 m-0 !dark:text-white text-black transition-all;
}

</style>
