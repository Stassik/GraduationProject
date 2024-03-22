<template>
    <main class="main-container brands">
        <BannerComp></BannerComp>
    </main>
</template>
<script>
import { mapActions } from 'vuex';
import BannerComp from '@/components/BannerComp.vue';
export default {
    name: 'BrandsPage',
    components: {
        BannerComp
    },
    methods: {
        ...mapActions(['fetchMain']),
    },
    async mounted() {
        this.fetchMain('brands');
        // console.log('111');
        // this.$store.dispatch('fetchMain');
    },
}
</script>
<style></style>