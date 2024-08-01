<template>
    <HomeBanner />
    <HomeCategory />
    <HomeNews />
</template>

<script setup>
import { onMounted } from "vue";
import LayoutCustom from "~/layouts/LayoutCustom.vue";

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
