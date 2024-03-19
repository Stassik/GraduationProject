<template>
    <header class="header">
        <div class="header__container">
            <LogoBoxComp></LogoBoxComp>
            <nav class="header__nav">
                <NavListComp></NavListComp>
            </nav>
            <a href="tel:79999999999" class="header__contact">+7 (999) 999-99-99</a>
        </div>
    </header>
</template>
<script>
import LogoBoxComp from './subComponents/LogoBoxComp.vue';
import NavListComp from './subComponents/NavListComp.vue';

export default {
    name: 'HeaderComp',
    components: {
        LogoBoxComp,
        NavListComp
    }
}
</script>
<style>
    .header {
        position: absolute;
        min-height: 100px;
        display: flex;
        justify-content: center;
        width: 100%;
        z-index: 10000;
        backdrop-filter: blur(7.6px);
        background: linear-gradient(180.00deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 119.92%);
    }


    .header__container{
        width: 100%;
        max-width: 960px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        gap: 69px;
        justify-content: space-between;
    }

    .header__nav {
        width: 100%;
        max-width: 100%;
        font-size: 16px;
        font-weight: 400;
    }


    .header__contact {
        min-width: 161px;
    }

    .header__nav ul {
        gap: 51px;
        justify-content: flex-end;
    }

   

    .header__nav .btn-border {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    .header__nav .btn-border rect {
        fill: transparent;
        width: 100%;
        height: 100%;
        stroke-dasharray: 500;

    }

    .header__mobile {
        display: none;
    }

    .header__mobile-text {
        display: none;
    }

    @media(max-width: 999px) {
        .header {
            min-height: 66px;
        }

        .header__container,
        .footer__container {
            max-width: 641px;
        }

        .header__contact {
            display: none;
        }

        .header__nav {
            display: none;
        }

        .mobile__nav-box .header__nav {
            display: flex;
            gap: 25px;
        }

        .mobile__nav-box .header__contact {
            display: block;
            margin: 10px;
        }

        .header__mobile {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .burger__icon {
            width: 35px;
            height: 36px;
            stroke: #fff;
        }

        .close__icon {
            width: 17px;
            height: 16px;
            stroke: #fff;
        }

        .mobile__burger {
            position: relative;
            z-index: 100;
            display: flex;
        }

        .mobile__burger:hover {
            cursor: pointer;
        }

        .mobile__nav-box {
            display: block;
            position: absolute;
            opacity: 0;
            padding: 83px 20px 49px;
            right: 0;
            top: 0;
            z-index: 10;
            width: 288px;
            height: 360px;
            backdrop-filter: blur(7.6px);
            -webkit-backdrop-filter: blur(7.6px);
            background: linear-gradient(180.00deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 178.022%);
            transition: opacity .4s ease-in-out;
            -webkit-transition: opacity .4s ease-in-out;
        }
    }

    @media(max-width: 640px) {

        .header {
            min-height: 40px;
        }

        .header__mobile-text {
            display: inline-block;
            font-size: 16px;
            font-weight: 400;
        }
    }
</style>