<template>
    <header>
        <div class="header__area">
            <!-- Header First -->
            <div
                class="header__top-4 header__padding-4 d-block d-lg-none mt-20 mb-20"
            >
                <div class="container">
                    <div class="row align-items-center">
                        <!-- Logo KMUTNB -->
                        <div class="col-xxl-8 col-xl-8 col-lg-6 col-md-5 col-5">
                            <div class="logo text-start">
                                <NuxtLink to="/">
                                    <img
                                        src="~/assets/img/logo/logo-kmutnb-final.jpg"
                                        class="img-header-logo"
                                        alt=""
                                    />
                                </NuxtLink>

                                <h3
                                    class="d-none d-xl-block d-lg-block text-color-secondary"
                                >
                                    งานบริการวิชาการ
                                </h3>
                                <h5
                                    class="d-none d-xl-block d-lg-block text-color-secondary"
                                >
                                    มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
                                </h5>
                            </div>
                        </div>

                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-7 col-7">
                            <!-- DARK MODE & LANGUAGE -->
                            <div
                                class="header__top-right-4 d-lg-flex justify-content-center pt-1"
                            >
                                <div
                                    class="header__info-wrapper-4 d-flex align-items-center justify-content-center"
                                >
                                    <!-- <span
                                        class="mr-0-5 item-link"
                                        @click="changeSkin()"
                                    >
                                        <img
                                            src="~/assets/img/icon/light-icon.svg"
                                            alt=""
                                            class="cursor-pointer"
                                            v-if="
                                                useSkin().value == 'skin-light'
                                            "
                                        />
                                        <img
                                            src="~/assets/img/icon/dark-icon.svg"
                                            alt=""
                                            class="cursor-pointer"
                                            v-if="
                                                useSkin().value == 'skin-dark'
                                            "
                                        />
                                    </span> -->

                                    <!-- <span class="mr-0-5 fw-bold"> | </span> -->
                                    <!-- <span class="mr-0-5"> -->
                                    <!-- Google translate -->
                                    <!-- <TranslateWidget /> -->
                                    <!-- </span> -->

                                    <!-- <span class="mr-0-5 fw-bold"> | </span>
                                    <span class="mr-0-5">
                                        <button @click="openModal" class="ms-2">
                                            <i class="fas fa-search"></i>
                                        </button>
                                        <SearchModal
                                            :isVisible="isModalVisible"
                                            @close="closeModal"
                                            @search="handleSearch"
                                        />
                                    </span> -->
                                    <HomeSearch />

                                    <!-- hamburgur menu Mobile-->
                                    <div
                                        class="header__hamburger d-lg-none float-end ms-4"
                                    >
                                        <button
                                            @click="handleOpenSidebar"
                                            type="button"
                                            class="hamburger-btn hamburger-btn-primary offcanvas-open-btn"
                                        >
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Header Sticky -->
            <div
                :class="`header__style-4 header__sticky ${
                    isSticky ? 'header-sticky' : ''
                }`"
                id="header-sticky"
            >
                <div class="container">
                    <div class="mega-menu-wrapper p-relative">
                        <div class="row align-items-center">
                            <div class="col-xxl-2 col-xl-2 col-lg-2 col-2">
                                <div class="logo">
                                    <NuxtLink to="/">
                                        <img
                                            src="~/assets/img/logo/logo-kmutnb-final.jpg"
                                            class="w-70-percent"
                                            alt=""
                                        />
                                    </NuxtLink>
                                </div>
                            </div>
                            <div
                                class="col-xxl-8 col-xl-8 col-lg-8 d-none d-lg-block"
                            >
                                <div
                                    class="main-menu main-menu-4 main-menu-ff-space"
                                >
                                    <nav id="sticky-menu">
                                        <!-- menus start -->
                                        <menus />
                                        <!-- menus end -->
                                    </nav>
                                </div>
                            </div>

                            <div
                                class="col-xxl-1 col-xl-1 col-lg-1 text-center d-flex"
                            >
                                <HomeSearch/>
                                
                                <!-- <TranslateWidget /> -->
                            </div>
                            <!-- hamburgur -->
                            <div class="col-xxl-1 col-xl-1 col-lg-1 col-1">
                                <div
                                    class="header__style-4-right d-flex align-items-center justify-content-end"
                                >
                                    <div
                                        class="header__hamburger ml-50 d-lg-none"
                                    >
                                        <button
                                            @click="handleOpenSidebar"
                                            type="button"
                                            class="hamburger-btn hamburger-btn-primary offcanvas-open-btn"
                                        >
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Menu -->
            <div class="header__bottom-4 d-none d-lg-block">
                <div class="container">
                    <div class="mega-menu-wrapper p-relative">
                        <div class="row align-items-center topbar">
                            <div
                                class="col-xxl-2 col-xl-2 col-lg-2 text-center"
                            >
                                <NuxtLink to="/">
                                    <img
                                        src="~/assets/img/logo/logo-kmutnb-final.jpg"
                                        class="w-70-percent"
                                        alt=""
                                    />
                                </NuxtLink>
                            </div>
                            <div
                                class="col-xxl-8 col-xl-8 col-lg-8 text-center"
                            >
                                <div
                                    class="main-menu main-menu-4 main-menu-ff-space"
                                >
                                    <nav>
                                        <menus />
                                    </nav>
                                </div>
                            </div>


                            <!-- <div
                                class="col-xxl-1 col-xl-1 col-lg-1 text-center"
                            >
                                <HomeSearch />
                            </div> -->
                            <div
                                class="col-xxl-2 col-xl-2 col-lg-2 text-center d-flex"
                            >
                                <HomeSearch />
                                <TranslateWidget />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- off canvas full start -->
    <off-canvas-custom ref="off_canvas" />
    <!-- off canvas full end -->
</template>

<script>
import menus from "./MenusCustom.vue";
import OffCanvasCustom from "~~/components/common/off-canvas/OffCanvasCustom.vue";
import TranslateWidget from "~~/components/translate/GoogleTranslateWidget.vue";
import SearchModal from "~~/components/search/SearchModal.vue";
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
// import { useAuthStore } from "~/store/auth"; // import the auth store we just created
// const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
// const { logUserOut } = useAuthStore();

// const router = useRouter();

export default {
    components: { menus, OffCanvasCustom, TranslateWidget },
    data() {
        return {
            isSticky: false,
            authenticated: useCookie("token"), //authenticated.value,
            isModalVisible: false,
        };
    },
    methods: {
        handleSticky() {
            if (window.scrollY > 80) {
                this.isSticky = true;
            } else {
                this.isSticky = false;
            }
        },
        handleOpenSidebar() {
            this.$refs.off_canvas.openOffcanvas();
        },
        changeSkin() {
            if (useSkin().value == "skin-dark") {
                useSkin().value = "skin-light";
            } else {
                useSkin().value = "skin-dark";
            }
        },
        logout() {
            // const router = useRouter();
            // logUserOut();
            // useToast("ออกจากระบบเสร็จสิ้น", "success");
            // router.push("/");
            // this.authenticated = authenticated.value;
        },

        openModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        handleSearch(query) {
            console.log("Search query:", query);
            // Handle the search query here
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleSticky);
    },
};
</script>
<style scoped>
.header__bottom-4 {
    background-color: #f60;
    /* color:black; */
    /* border-top: 4px solid #000;*/
    border-bottom: 1px solid #999; 
    width: 100%;
    line-height: 2.5em;
    padding-top: 0.5em;
    min-height: 5em;
    /* border: none; */
}

.header__padding-4 {
    padding-top: 0px;
    padding-bottom: 0px;
}

.header__info-item {
    margin-right: 10px;
}

.img-header-logo {
    width: 100%;
}

.topbar {
    /* margin-top: 1.5em; */
    /* border: 2px solid #ddd;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 5px;
    background: #f2f2f2; */
}

@media (max-width: 900px) {
    .img-header-logo {
        width: 80%;
        margin-top: 10px;
        margin-bottom: 10px;
    }
}
</style>
