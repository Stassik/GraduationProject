<template>
    <li class="articles__item">
        <router-link :to="`${parent}/${post.url}`">
            <img :src="`${post.image.url}`" alt="Превью статьи" class="articles__item-img">
            <div class="articles__item-descr">
                <h2 class="articles__item-title">{{ post.name }}</h2>
                <div class="articles__item-text">{{ post.annotation }}</div>
            </div>
        </router-link>
    </li>
</template>
<script>
export default {
    name: 'ArticleItemComp',
    props: {
        post: Object,
        parent: String
    }
}
</script>