<template>
    <header class="header">
        <div class="header__container">
            <LogoBoxComp></LogoBoxComp>
            <nav class="header__nav">
                <NavListComp></NavListComp>
            </nav>
            <a href="tel:79999999999" class="header__contact">+7 (999) 999-99-99</a>
            <div class="header__mobile">
                <span class="header__mobile-text">Меню</span>
                <div class="mobile__burger">
                    <svg class="burger__icon">
                        <use xlink:href="../assets/images/sprite.svg#burger"></use>
                    </svg>
                </div>
                <div class="mobile__nav-box">
                    <nav class="header__nav">
                        <NavListComp></NavListComp>
                    </nav>
                    <a href="tel:79999999999" class="header__contact">+7 (999) 999-99-99</a>
                </div>
            </div>
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
<style></style>