<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <router-view></router-view>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'app',
  components: {
    HeaderComp,
    FooterComp
  }

}
</script>

<style></style>
