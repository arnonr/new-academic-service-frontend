<template>
    <div :class="'fix ' + useSkin().value">
        <HeaderHomeCustom />
        <main>
            <slot></slot>
        </main>

        <FooterCustom />
        <BackToTop />
    </div>
</template>

<script>
import HeaderHomeCustom from "./headers/HeaderHomeCustom.vue";
import FooterCustom from "./footers/FooterCustom.vue";
import BackToTop from "./footers/component/BackToTop.vue";

export default {
    components: {
        HeaderHomeCustom,
        FooterCustom,
        BackToTop,
    },
};
</script>
