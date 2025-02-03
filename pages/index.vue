<template>
    <HomeBanner />
    <HomeServe />
    <HomeType />
    <HomeAbout />
    <HomeCategory />
    <HomeFaq />
    <!-- <HomeNews /> -->
</template>

<script setup>
import { onMounted } from "vue";

definePageMeta({
    layout: "layout-home",
});

useHead({
    title: "งานบริการวิชาการ มจพ.",
    meta: [
        {
            name: "งานบริการวิชาการ มจพ.",
            content: "งานบริการวิชาการ มจพ.",
        },
    ],
});

onMounted(() => {});
if (process.client) {
    if (localStorage.getItem("login")) {
        useToast("เข้าสู่ระบบเสร็จสิ้น", "success");
        localStorage.removeItem("login");
    }
}
</script>
