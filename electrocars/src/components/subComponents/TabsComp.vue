<template>
    <div class="btn__container btn__container-tab">
        <button class="main__btn tab__btn btn active" data-tab="ext-zeekr">
            <svg class="btn-border">
                <linearGradient id="linear-gradient-tab1" x1="30%" y1="40%" x2="70%" y2="0%">
                    <stop offset="0%" stop-color="rgba(0, 0, 0, 0.03)" />
                    <stop offset="100%" stop-color="rgba(0, 0, 0, .5)" />
                </linearGradient>
                <rect stroke-width="2" stroke="url(#linear-gradient-tab1)" rx="10px" ry="10px" x="0" y="0"
                    width="100%" />
            </svg>
            Zeekr 009</button>
        <button type="button" class="main__btn tab__btn btn " data-tab="ext-lotus">
            <svg class="btn-border">
                <linearGradient id="linear-gradient-tab2" x1="30%" y1="40%" x2="70%" y2="0%">
                    <stop offset="0%" stop-color="rgba(0, 0, 0, 0.03)" />
                    <stop offset="100%" stop-color="rgba(0, 0, 0, .5)" />
                </linearGradient>
                <rect stroke-width="2" stroke="url(#linear-gradient-tab2)" rx="10px" ry="10px" x="0" y="0"
                    width="100%" />
            </svg>
            Lotus Eletre</button>
        <button type="button" class="main__btn tab__btn btn " data-tab="ext-byd">
            <svg class="btn-border">
                <linearGradient id="linear-gradient-tab3" x1="30%" y1="40%" x2="70%" y2="0%">
                    <stop offset="0%" stop-color="rgba(0, 0, 0, 0.03)" />
                    <stop offset="100%" stop-color="rgba(0, 0, 0, .5)" />
                </linearGradient>
                <rect stroke-width="2" stroke="url(#linear-gradient-tab3)" rx="10px" ry="10px" x="0" y="0"
                    width="100%" />
            </svg>
            BYD Yuan 2022
        </button>
    </div>
</template>
<script>
export default {
    name: 'TabsComp'
}
</script>
<style></style>