<template>
    <div class="content articles-box">
        <h2 class="articles__title">{{ title }}</h2>
        <ul class="articles__list">
            <ArticleItemComp v-for="item in data.subpages" :key="item.id" :post="item" :parent="data.url">
            </ArticleItemComp>
        </ul>
        <router-link :to="`${data.url}`" class="main__btn main__btn_dark btn btn-load">
            <svg class="btn-border">
                <linearGradient id="linear-gradient-dark" x1="20%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="rgba(0, 0, 0, 0.03)" />
                    <stop offset="100%" stop-color="rgba(0, 0, 0, 1)" />
                </linearGradient>
                <rect stroke-width="1.5" stroke="url(#linear-gradient-dark)" rx="10px" ry="10px" x="0" y="0"
                    width="100%" />
            </svg>

            <span>Еще статьи</span>
        </router-link>
    </div>
</template>
<script>
import ArticleItemComp from './subComponents/ArticleItemComp.vue';
export default {
    name: 'ArticlesBoxComp',
    components: {
        ArticleItemComp
    },
    props: {
        title: String,
        data: Object
    }
}
</script>