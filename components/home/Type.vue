<template>
    <section class="pt-40 pb-40 section-bg-1">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 mb-20 text-center">
                    <h3 class="text-light">หมวดหมู่ยอดนิยม</h3>
                    <hr style="width: 10%" class="mx-auto text-light" />
                </div>
            </div>
            <div class="btn-list mb-4 text-center">
                <button
                    class="btn btn-outline btn-outline-light mt-2"
                    @click="onChangeType"
                >
                    ยานยนต์
                </button>
                <button
                    class="btn btn-outline btn-outline-light ms-2 mt-2"
                    @click="onChangeType"
                >
                    ไฟฟ้า
                </button>
                <button
                    class="btn btn-outline btn-outline-light ms-2 mt-2"
                    @click="onChangeType"
                >
                    เทคโนโลยีสารสนเทศ
                </button>
                <button
                    class="btn btn-outline btn-outline-light ms-2 mt-2"
                    @click="onChangeType"
                >
                    งานเชื่อม
                </button>
                <button
                    class="btn btn-outline btn-outline-light ms-2 mt-2"
                    @click="onChangeType"
                >
                    อิเล็กทรอนิกส์
                </button>
                <button
                    class="btn btn-outline btn-outline-light ms-2 mt-2"
                    @click="onChangeType"
                >
                    ทดสอบวัสดุ
                </button>
                <button
                    class="btn btn-outline btn-outline-light ms-2 mt-2"
                    @click="onChangeType"
                >
                    แมคคาทรอนิกส์
                </button>
                <button
                    class="btn btn-outline btn-outline-light ms-2 mt-2"
                    @click="onChangeType"
                >
                    การบินและอวกาศ
                </button>
            </div>

            <div class="div-btn-news mb-4">
                <div class="col">
                    <div class="text-center">
                        <NuxtLink to="/serve" class="ttext-uppercase text-light"
                            >{{ "งานบริการวิชาการทั้งหมด" }}
                            <i class="fa fa-arrow-right"></i>
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- <div
                class="slider__nav-arrow-12 d-flex flex-column d-none d-md-block"
            >
                <button class="slider-button-12-next">
                    <i class="fa-regular fa-chevron-right"></i>
                </button>
                <button class="slider-button-12-prev">
                    <i class="fa-regular fa-chevron-left"></i>
                </button>
            </div> -->


            <div class="text-end">
                <div class="slider-pagination-12 tp-swiper-fraction"></div>
                <button
                    class="btn btn-icon btn-sm btn-outline btn-outline-light  slider-button-12-prev"
                >
                    <i class="fa fa-arrow-left"></i>
                </button>
                <button
                    class="btn btn-icon btn-sm btn-outline btn-outline-light ms-2 slider-button-12-next"
                >
                    <i class="fa fa-arrow-right"></i>
                </button>
            </div>


            <div><hr class="text-white" /></div>
            <div class="row gx-2 grid">
                <swiper
                    ref="mySwiper4"
                    :slides-per-view="4"
                    space-between="30"
                    :pagination="false"
                    :modules="modules"
                    :loop="true"
                    class="mySwiper4 position-relative"
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
                                link: 'serve/',
                                id: it.id,
                                title: it.title,
                                file: it.serve_file,
                            }"
                        />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<!-- <script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
    EffectFade,
    Mousewheel,
    Navigation,
    Pagination,
    Autoplay,
} from "swiper";
import NewsGridItem from "~/components/list/GridItem.vue";
// const { locale } = useI18n();
const runtimeConfig = useRuntimeConfig();

const modules = [EffectFade, Mousewheel, Navigation, Pagination, Autoplay];

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
</script> -->

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
