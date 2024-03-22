<template>
    <main class="main-container main">
        <BannerComp></BannerComp>
        <div class="advantage">
            <div class="advantage__img-box">
                <img :src="`${getMainData.image_advantage}`" alt="request" class="advantage__img">
            </div>
            <div class="advantage__container content">
                <div class="advantage__heading">
                    <LogoBoxComp></LogoBoxComp>
                    <div class="advantage__title card_border">
                        <svg class="btn-border">
                            <linearGradient id="linear-gradientCard" x1="30%" y1="00%" x2="70%" y2="00%">
                                <stop offset="0%" stop-color="rgba(255, 255, 255, 0.03)" />
                                <stop offset="100%" stop-color="rgba(255, 255, 255, 1)" />
                            </linearGradient>
                            <rect stroke-width="2" stroke="url(#linear-gradientCard)" rx="20px" ry="20px" x="0" y="0"
                                width="100%" />
                        </svg>
                        <h1>{{ getMainData.h1 }}</h1>
                    </div>
                </div>
                <div class="advantage__list">
                    <AdvantageItemComp v-for="(item, index) in getAdvantage" :key="index" :num="index + 1" :item="item">
                    </AdvantageItemComp>
                </div>
            </div>
        </div>
        <div class="design">
            <DesignBoxComp :title="'Экстерьер'"></DesignBoxComp>
            <DesignBoxComp :title="'Интерьер'"></DesignBoxComp>
        </div>
        <div class="electro">
            <ElectroBoxComp></ElectroBoxComp>
        </div>
        <div class="request request_light">
            <div class="request__img-box">
                <img src="" alt="request" class="request__img">
            </div>
            <div class="request__container">
                <div class="request__left">
                    <LogoBoxComp></LogoBoxComp>
                    <form id="feedback-2" action="#" class="form" method="post">
                        <input type="hidden" name="action" value="custom_feedback_form">
                        <div class="form__box">
                            <h3 class="form__title">Узнать подробнее</h3>
                            <div class="form__item">
                                <label for="name-2">Имя</label>
                                <input type="text" name="name" id="name-2">
                            </div>
                            <div class="form__item">
                                <label for="phone-2">Телефон</label>
                                <input type="text" name="phone" data-phone-pattern id="phone-2">
                            </div>
                            <div class="form__item">
                                <label for="email-2">E-mail</label>
                                <input type="email" name="email" id="email-2">
                            </div>
                        </div>
                        <button type="submit" class="form__btn btn main__btn_dark">
                            <svg class="btn-border">
                                <linearGradient id="linear-gradient2" x1="10%" y1="50%" x2="70%" y2="40%">
                                    <stop offset="0%" stop-color="rgba(0, 0, 0, 0.03)" />
                                    <stop offset="100%" stop-color="rgba(0, 0, 0, 1)" />
                                </linearGradient>
                                <rect stroke-width="1.5" stroke="url(#linear-gradient2)" rx="10px" ry="10px" x="0" y="0"
                                    width="100%" />
                            </svg>

                            Отправить
                        </button>
                        <div class="error-box"></div>
                    </form>
                </div>
                <div class="request__right">
                    <div class="request__descr">
                        <svg class="btn-border">
                            <linearGradient id="linear-gradientLight" x1="40%" y1="50%" x2="100%" y2="50%">
                                <stop offset="0%" stop-color="rgba(255, 255, 255, 0.03)" />
                                <stop offset="100%" stop-color="rgba(255, 255, 255, 1)" />
                            </linearGradient>
                            <rect stroke-width="2" stroke="url(#linear-gradientLight)" rx="20px" ry="20px" x="0" y="0"
                                width="100%" />
                        </svg>
                        Подберем комплектацию,<br>расскажем об автомобиле,<br>сформируем уникальное предложение
                    </div>
                    <LogoBoxComp></LogoBoxComp>
                </div>
            </div>
        </div>
        <div class="reviews">
            <ReviewsBoxComp :title="'Отзывы'" :posts="getMainData.subpages"></ReviewsBoxComp>
        </div>
        <div class="articles__list_new main__articles">
            <ArticlesBoxComp :title="'Статьи'" :data="getArticles"></ArticlesBoxComp>
        </div>
    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BannerComp from '@/components/BannerComp.vue';
import LogoBoxComp from '@/components/subComponents/LogoBoxComp.vue';
import AdvantageItemComp from '@/components/AdvantageItemComp.vue';
import DesignBoxComp from '@/components/DesignBoxComp.vue';
import ReviewsBoxComp from '@/components/ReviewsBoxComp.vue';
import ElectroBoxComp from '@/components/ElectroBoxComp.vue';
import ArticlesBoxComp from '@/components/ArticlesBoxComp.vue';
export default {
    name: 'HomePage',
    components: {
        BannerComp,
        LogoBoxComp,
        AdvantageItemComp,
        DesignBoxComp,
        ReviewsBoxComp,
        ArticlesBoxComp,
        ElectroBoxComp
    },
    computed: {
        ...mapGetters(['getMainData', 'getAdvantage', 'getArticles']),
    },
    methods: {
        ...mapActions(['fetchMain', 'fetchArticles']),
    },
    async mounted() {
        this.fetchMain();
        this.fetchArticles();
    },


}
</script>
<style></style>
