<template>
    <ul class="nav__list">
        <li><router-link to="/brands">Авто</router-link></li>
        <li><router-link to="/about">О компании</router-link></li>
        <li><router-link to="/articles">Статьи</router-link></li>
    </ul>
</template>
<script>
export default {
    name: 'NavListComp',
}
</script>
<style>
     .header__nav ul,
     .footer__nav ul {
        display: flex;
        list-style-type: none;
        justify-content: space-between;
        flex-wrap: wrap;

    }

    .header__nav ul li a,
    .footer__nav ul li a,
    .current_page_item a,
    .current-menu-item a {
        position: relative;
        display: flex;
        align-items: center;
        padding: 10px;
        border: 1px solid transparent;
        border-radius: 10px;
    }

    .nav__list li a:not(.router-link-exact-active.router-link-active):hover .btn-border rect {
        animation: navBtnBorderAnimation 1s ease-out;
    }

    @media(max-width: 999px){
        .header__mobile .header__nav ul {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;

        }

        .footer__nav ul {
            display: flex;
            gap: 20px;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 120%;
        }
    }

    @media(max-width: 640px){
        .footer__nav ul {
            flex-direction: column;
            font-size: 14px;
        }

        .footer__nav ul li a {
            padding: 0;
        }
    }
</style>