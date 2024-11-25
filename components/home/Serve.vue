<template>
    <section class="portfolio__area pt-40 pb-40 bg-grey">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 mb-20">
                    <h3>งานบริการวิชาการแนะนำ</h3>
                </div>
            </div>
            <div class="row g-2 justify-content-center">
                <swiper
                    :slides-per-view="4"
                    space-between="30"
                    :pagination="false"
                    :modules="modules"
                    :loop="true"
                    class="mySwiper"
                    :breakpoints="{
                        '0': {
                            slidesPerView: 1,
                        },
                        '768': {
                            slidesPerView: 2,
                        },
                        '992': {
                            slidesPerView: 4,
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
                >
                    <swiper-slide v-for="(it, index) in items" :key="index">
                        <ListGridItem
                            :item="{
                                link: '/service/serve/',
                                id: it.id,
                                title: it.title,
                                file: it.serve_file,
                                type: it.type,
                                department: it.department,
                                price1: it.price1,
                                price2: it.price2,
                                price3: it.price3,
                                price4: it.price4,
                                price5: it.price5,
                                unit_th: it.unit_th,
                                phone: it.phone,
                                email: it.email,
                                breif_detail_th: it.breif_detail_th,
                            }"
                        />
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
            </div>
        </div>
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
// import GridItem from "~/components/list/GridItem.vue";

export default {
    components: { Swiper, SwiperSlide },
    async setup() {
        const runtimeConfig = useRuntimeConfig();

        const items = ref([]);

        const search = ref({
            is_publish: 1,
        });

        const { data: res } = await useAsyncData("serve", async () => {
            let data = await $fetch(`${runtimeConfig.public.apiBase}/serve`, {
                params: {
                    ...search.value,
                    perPage: 8,
                    currentPage: 1,
                    orderBy: "id",
                    order: "desc",
                    lang: useCookie("lang").value,
                },
            });

            if (data) {
                return { data: data.data };
            } else {
                return { data: [] };
            }
        });

        if (res.value != null) {
            items.value = res.value.data;
        } else {
            items.value = [];
        }

        return {
            items,
            modules: [EffectFade, Mousewheel, Navigation, Pagination, Autoplay],
        };
    },
};
</script>

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

.slider__nav-arrow-12 button.slider-button-12-next {
    margin-right: -3em;
    margin-top: 5em;
    background-color: aquamarine;
}

.slider__nav-arrow-12 button.slider-button-12-prev {
    margin-left: -3em;
    margin-top: 5em;
    background-color: aquamarine;
}
</style>
