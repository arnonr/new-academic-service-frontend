// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    runtimeConfig: {
        apiSecret: process.env.NUXT_API_SECRET,
        public: {
            apiBase: process.env.NUXT_PUBLIC_API_BASE,
            contact_phone: process.env.NUXT_CONTACT_PHONE,
            contact_email: process.env.NUXT_CONTACT_EMAIL,
        },
    },
    css: [
        "bootstrap/scss/bootstrap.scss",
        "swiper/css/bundle",
        "vue3-carousel/dist/carousel.css",
        "~/assets/scss/main.scss",
        "~/assets/css/custom.css",
    ],
    modules: [
        [
            "@pinia/nuxt",
            {
                autoImports: [
                    "defineStore",
                    ["defineStore", "definePiniaStore"],
                ],
            },
        ],
    ],
    plugins: ["~/plugins/toastify.js"],
    // imports: {
    //     dirs: ["store"],
    // },
    //   plugins: [{ src: "~/plugins/froala-editor.client.js", mode: "client" }],
    app: {
        head: {
            title: "งานบริการวิชาการ มจพ.",
            link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
            script: [
                {
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
                    integrity:
                        "sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2",
                    crossorigin: "anonymous",
                },
            ],
        },
    },
});
