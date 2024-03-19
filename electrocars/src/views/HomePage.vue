<template>
  <main class="main-container home">
    <BannerComp></BannerComp>
  </main>
</template>

<script>

import BannerComp from '@/components/BannerComp.vue';

export default {
  name: 'HomePage',
  components: {
    BannerComp,
  }
}
</script>
