<template>
  
  <CommonBanner />
    <!--  -->
    <section class="postbox__area pt-40 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="postbox__wrapper" v-if="item">
                        <!-- Content -->
                        <div class="postbox__main">
                            <div class="row">
                                <div
                                    class="col-sm-12 col-md-12 col-12"
                                    style="border-left: 0.7em solid #f60"
                                >
                                    <h3>{{ item.title }}</h3>
                                    <h3 style="color: #f60">
                                        <span>งานบริการวิชาการ</span>
                                        <br />
                                        <span
                                            >มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</span
                                        >
                                    </h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="postbox__main-wrapper">
                                        <div
                                            class="postbox__details-content-wrapper mt-40"
                                        >
                                            <div
                                                v-html="
                                                    item.detail == null
                                                        ? ''
                                                        : item.detail
                                                "
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { useRuntimeConfig } from "#app";
dayjs.extend(buddhistEra);

const item = ref(null);

const config = useRuntimeConfig();
const { apiBase } = config.public;

const { data: res } = await useAsyncData("contact", async () => {
    try {
        let data = await $fetch(`${apiBase}/contact/1`, {
            params: {},
        });
        return data;
    } catch (err) {
        console.error("Error fetching data:", err);
        throw err;
    }
});

if (res.value) {
    item.value = res.value.data;
} else {
    console.error("Error:", error.value);
}

useHead({
    title: item.value.title,
});
</script>

<style scoped>
.breadcrumb__title {
    font-size: 50px;
}
</style>
