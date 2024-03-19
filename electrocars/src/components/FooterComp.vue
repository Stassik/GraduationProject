<template>
    <footer class="footer container-dark">
    <div class="footer__container content">
        <div class="footer__heading">
            <LogoBoxComp></LogoBoxComp>
            <nav class="footer__nav">
                <NavListComp></NavListComp>
            </nav>    
        </div>
        <div class="footer__content">
            <div class="footer__descr">
                <a href="/privacy" class="footer__link">Политика конфиденциальности</a>
                <p class="footer__text">Вся представленная на сайте информация, касающаяся автомобилей, носит информационный характер и не является публичной офертой, определяемой положением ст.437 (2) ГК РФ. Для получения подробной информации просьба обращаться по телефону <a href="tel:79990009900" class="footer__contact-link">+7 (999) 000-99-00</a>. Опубликованная на данном сайте информация может быть изменена в любое время без предварительного уведомления.</p>
                <p>Данный веб-сайт использует cookie-файлы с целью повышения удобства и эффективности работы пользователя
                </p>
            </div>
            <div class="footer__contact">
                <a href="tel:79999999999" class="contact__link">+7 (999) 999-99-99</a>
                <a href="mailto:adress@gmail.com" class="contact__link">adress@gmail.com</a>
                <div class="contact__social-box">
                    <a href="#" class="contact__link">
                        <svg class="contact__social-icon">
                            <use xlink:href="../assets/images/sprite.svg#telegram"></use>
                        </svg>
                    </a>
                    <a href="#" class="contact__link">
                        <svg class="contact__social-icon">
                            <use xlink:href="../assets/images/sprite.svg#whatsapp"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer__copyright">&#169; 2024 Ecomobil. Все права защищены</div>
    </div>
</footer>
</template>
<script>
import LogoBoxComp from './subComponents/LogoBoxComp.vue';
import NavListComp from './subComponents/NavListComp.vue';
export default {
    name: 'FooterComp',
    components: {
        LogoBoxComp,
        NavListComp
    }
}
</script>
<style>
    .footer {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 50px 0;
        backdrop-filter: blur(7.6px);
        background: linear-gradient(180.00deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 119.92%);
    }

    .footer__container {
        width: 100%;
        /* margin-bottom: 0; */
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
        gap: 20px;
    }

    .footer__heading {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .footer__nav {
        max-width: 381px;
        width: 100%;
    }


    .footer__content {
        display: flex;
        justify-content: space-between;
    }

    .footer__descr {
        width: 100%;
        max-width: 560px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .footer__contact {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 20px;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
    }

    .footer__copyright {
        width: 100%;
        margin-bottom: 0;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .footer__link {
        text-decoration: underline;
    }

    .contact__social-box {
        display: flex;
        gap: 15px;
    }

    .contact__social-icon {
        width: 24px;
        height: 24px;
        fill: #fff;
        transition: fill .3s ease-in-out;

    }

    .contact__social-icon:hover {
        cursor: pointer;
        fill: #D9FF3F;
    }

    @media(max-width: 999px) {
        .footer {
            min-height: 66px;
            padding: 40px 0;
        }

        .footer__container {
            gap: 20px;
            position: relative;
        }

        .footer__heading {
            margin-bottom: 10px;
            max-width: 397px;
            flex-direction: column;
            align-items: flex-start;
            gap: 21px;
        }

        .footer__nav {
            max-width: 100%;
            display: flex;
            align-items: center;
            margin-left: -10px;
        }

        .footer__descr {
            max-width: 397px;
            gap: 10px;
        }

        .footer__contact {
            position: absolute;
            right: 16px;
            top: 0;
        }
    }

    @media(max-width: 640px) {
        .footer__descr {
            max-width: 100%;
            gap: 15px;
        }

        .footer__heading {
            margin-bottom: 61px;
        }

        .footer__contact {
            font-size: 12px;
            gap: 10px;
            top: 35px;
        }

        .footer__nav {
            margin-left: 0;
        }

        
    }
</style>