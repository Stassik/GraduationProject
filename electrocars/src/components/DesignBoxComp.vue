<template>
    <div class="design__item">
        <div class="design__container content">
            <h2 class="design__title">{{ title }}</h2>
            <div class="tab">
                <TabsComp></TabsComp>
                <div id="ext-lotus" class="tab-content">
                    <div class="tab__content__block">
                        <div class="photo-container">
                            <img src="../assets/images/main-banner.webp" class="img__tab1 img__tab" alt="lotus Eletre"
                                loading="lazy">
                        </div>
                        <div class="photo-container grouped">
                            <div class="grouped-photo">
                                <img src="../assets/images/main-banner.webp" class="img__tab2 img__tab"
                                    alt="lotus Eletre" loading="lazy">
                            </div>
                            <div class="grouped-box">
                                <div class="grouped-photo">
                                    <img src="../assets/images/main-banner.webp" class="img__tab3 img__tab"
                                        alt="lotus Eletre" loading="lazy">
                                </div>
                                <div class="grouped-photo">
                                    <img src="../assets/images/main-banner.webp" class="img__tab4 img__tab"
                                        alt="lotus Eletre" loading="lazy">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn__container-2 btn__bckg">
                        <a href="/brands/lotus/" class="btn btn-forward main__btn_dark">
                            <svg class="btn-border">
                                <linearGradient id="linear-gradient-auto1" x1="20%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="rgba(0, 0, 0, 0.03)" />
                                    <stop offset="100%" stop-color="rgba(0, 0, 0, 1)" />
                                </linearGradient>
                                <rect stroke-width="1.5" stroke="url(#linear-gradient-auto1)" rx="10px" ry="10px" y="0"
                                    width="100%" />
                            </svg>

                            <div class="btn__inner">
                                <span>Все модели</span>
                                <svg class="btn__icon icon-arrow_forward" style="stroke: black;">
                                    <use xlink:href="../assets/images/sprite.svg#arrow_forward">
                                    </use>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="ext-lotus" class="tab-content">
                    <div class="tab__content__block">
                        <div class="photo-container">
                            <img src="../assets/images/main-banner.webp" class="img__tab1 img__tab" alt="byd yuan"
                                loading="lazy">
                        </div>
                        <div class="photo-container grouped">
                            <div class="grouped-photo">
                                <img src="../assets/images/main-banner.webp" class="img__tab2 img__tab" alt="byd yuan"
                                    loading="lazy">
                            </div>
                            <div class="grouped-box">
                                <div class="grouped-photo">
                                    <img src="../assets/images/main-banner.webp" class="img__tab3 img__tab"
                                        alt="byd yuan" loading="lazy">
                                </div>
                                <div class="grouped-photo">
                                    <img src="../assets/images/main-banner.webp" class="img__tab4 img__tab"
                                        alt="byd yuan" loading="lazy">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn__container-2 btn__bckg">
                        <a href="/brands/byd/" class="btn btn-forward main__btn_dark">
                            <svg class="btn-border">
                                <linearGradient id="linear-gradient-auto2" x1="20%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="rgba(0, 0, 0, 0.03)" />
                                    <stop offset="100%" stop-color="rgba(0, 0, 0, 1)" />
                                </linearGradient>
                                <rect stroke-width="1.5" stroke="url(#linear-gradient-auto2)" rx="10px" ry="10px" y="0"
                                    width="100%" />
                            </svg>

                            <div class="btn__inner">
                                <span>Все модели</span>
                                <svg class="btn__icon icon-arrow_forward" style="stroke: black;">
                                    <use xlink:href="../assets/images/sprite.svg#arrow_forward">
                                    </use>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                <div id="ext-byd" class="tab-content">
                    <div class="tab__content__block">
                        <div class="photo-container">
                            <img src="../assets/images/main-banner.webp" class="img__tab1 img__tab" alt="byd yuan"
                                loading="lazy">
                        </div>
                        <div class="photo-container grouped">
                            <div class="grouped-photo">
                                <img src="../assets/images/main-banner.webp" class="img__tab2 img__tab" alt="byd yuan"
                                    loading="lazy">
                            </div>
                            <div class="grouped-box">
                                <div class="grouped-photo">
                                    <img src="../assets/images/main-banner.webp" class="img__tab3 img__tab"
                                        alt="byd yuan" loading="lazy">
                                </div>
                                <div class="grouped-photo">
                                    <img src="../assets/images/main-banner.webp" class="img__tab4 img__tab"
                                        alt="byd yuan" loading="lazy">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn__container-2 btn__bckg">
                        <a href="/brands/byd/" class="btn btn-forward main__btn_dark">
                            <svg class="btn-border">
                                <linearGradient id="linear-gradient-auto3" x1="20%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="rgba(0, 0, 0, 0.03)" />
                                    <stop offset="100%" stop-color="rgba(0, 0, 0, 1)" />
                                </linearGradient>
                                <rect stroke-width="1.5" stroke="url(#linear-gradient-auto3)" rx="10px" ry="10px" y="0"
                                    width="100%" />
                            </svg>

                            <div class="btn__inner">
                                <span>Все модели</span>
                                <svg class="btn__icon icon-arrow_forward" style="stroke: black;">
                                    <use xlink:href="../assets/images/sprite.svg#arrow_forward">
                                    </use>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="gallery__modal" class="gallery__modal"></div>
            </div>
        </div>
    </div>
</template>
<script>
import TabsComp from './subComponents/TabsComp.vue';
export default {
    name: 'DesignBoxComp',
    components: {
        TabsComp,
    },
    props: {
        title: String,
    },
    mounted() {
        const tab = document.querySelectorAll(".tab");

        const toggleTab = (el) => {
            const tabButtons = el.querySelectorAll('.tab__btn');
            const tabContent = el.querySelectorAll('.tab-content');
            tabButtons[0].classList.add('active');
            tabContent[0].classList.add('active');
            const removeTab = (el) => {
                for (const i of el) {
                    i.classList.remove('active');
                }
            };

            const openTab = (index) => {
                removeTab(tabButtons);
                removeTab(tabContent);
                tabButtons[index].classList.add('active');
                tabContent[index].classList.add('active');
            };

            tabButtons.forEach((el, i) => {
                el.addEventListener('click', () => {
                    openTab(i);
                });
            });
        }

        [...tab].forEach((el) => toggleTab(el));
        const imagesArray = document.querySelectorAll('.gallery__img');
        const galleryModalBoxEl = document.querySelector('#gallery__modal');
        const interiorArray = document.querySelectorAll('.img__tab');

        if (interiorArray) {
            zoomImage(interiorArray);
        }

        if (imagesArray) {
            zoomImage(imagesArray);
        }

        function zoomImage(imagesArray) {
            if (galleryModalBoxEl) {
                imagesArray.forEach(image => {
                    image.addEventListener('click', ({ target }) => {
                        const modalBox = document.createElement('div');
                        modalBox.classList.add('gallery__modal-box');
                        const image = target.cloneNode(true);
                        modalBox.insertAdjacentElement("beforeend", image);
                        galleryModalBoxEl.appendChild(modalBox);
                        galleryModalBoxEl.classList.add('gallery__modal_visible');
                    });
                })

                galleryModalBoxEl.addEventListener('click', () => {
                    if (galleryModalBoxEl.children) {
                        galleryModalBoxEl.classList.remove('gallery__modal_visible');
                        galleryModalBoxEl.innerHTML = '';
                    }

                })
            }
        }
    },
}
</script>
<style></style>