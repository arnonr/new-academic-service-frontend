<template>
    <section v-if="items.length != 0">
            <swiper
                :pagination="true"
                :modules="modules"
                :loop="true"
                :effect="'fade'"
                :spaceBetween="0"
                class="swiper-fullwidth"
                :breakpoints="{
                    '0': {
                        slidesPerView: 1,
                    },
                    '768': {
                        slidesPerView: 1,
                    },
                    '992': {
                        slidesPerView: 1,
                    },
                }"
                :speed="5000"
                :autoplay="{
                    delay: 5000,
                    disableOnInteraction: true,
                }"
                :navigation="{
                    nextEl: '.slider-button-12-next',
                    prevEl: '.slider-button-12-prev',
                }"
                v-if="items.length != 0"
            >
                <swiper-slide v-for="it in items" :key="it.id">
                    <a :href="it.banner_url" style="width: 100%">
                        <img
                            src="/images/banner/banner-mata-common.jpg"
                            :alt="it.title"
                            style="width: 100%"
                        />
                    </a>
                </swiper-slide>

                <div class="slider-pagination-12 tp-swiper-fraction"></div>
                <div
                    class="slider__nav-arrow-12 d-flex flex-column d-none d-md-block"
                >
                    <button class="slider-button-12-next">
                        <i class="fa-regular fa-chevron-right"></i>
                    </button>
                    <button class="slider-button-12-prev">
                        <i class="fa-regular fa-chevron-left"></i>
                    </button>
                </div>
            </swiper>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
    EffectFade,
    Mousewheel,
    Navigation,
    Pagination,
    Autoplay,
} from "swiper";
export default {
    components: { Swiper, SwiperSlide },
    async setup() {
        const runtimeConfig = useRuntimeConfig();
        const renderFraction = (currentClass, totalClass) => {
            return `<span class="${currentClass}"></span>
                <span class="tp-swiper-fraction-divide"></span>
              <span class="${totalClass}"></span>`;
        };

        const items = ref([
            {
                id: 1,
                title: "Banner 1",
                banner_file: `/images/banner/banner-mata-common.jpg`,
                banner_url: "/",
            },
        ]);

        return {
            items,
            renderFraction,
            modules: [EffectFade, Mousewheel, Navigation, Pagination, Autoplay],
        };
    },
};
</script>

<style>
.banner-image {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    object-position: center;
}
</style>
<style scoped>
.slider__height-12 {
    height: auto !important;
}

.slider__bg-12 {
    background: #fff;
}

.slider__nav-arrow-12 button {
    border-radius: 50%;
}
/*  */
.swiper-slide {
    overflow: visible; /* ตรวจสอบให้แน่ใจว่าไม่ถูกตั้งค่าเป็น hidden */
}
</style>
