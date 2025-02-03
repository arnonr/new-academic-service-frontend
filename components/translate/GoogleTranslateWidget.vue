<template>
    <div>
        <!-- <div id="google_translate_element"></div> -->
        <div :id="translateElementId" ref="translateElement"></div>
    </div>
</template>

<script lang="ts">
export default {
    name: "GoogleTranslateWidget",
    props: {
        id: {
            type: String,
            default: "google_translate_element",
        },
    },
    data() {
        return {
            translateElementId: this.id,
        };
    },
    mounted() {
        // Load Google Translate script dynamically only once
        if (!document.getElementById("google-translate-script")) {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.id = "google-translate-script";
            script.src =
                "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            document.head.appendChild(script);
        }

        // Declare googleTranslateElementInit on window object
        (window as any).googleTranslateElementInit = () => {
            new (window as any).google.translate.TranslateElement(
                {
                    pageLanguage: "th",
                    includedLanguages: "en",
                    layout: (window as any).google.translate.TranslateElement
                        .InlineLayout.SIMPLE,
                },
                this.translateElementId
            );
        };

        // Check if script is already loaded and initialize immediately
        if ((window as any).google && (window as any).google.translate) {
            (window as any).googleTranslateElementInit();
        }
    },
    // mounted() {
    //     // Load Google Translate script dynamically
    //     const script = document.createElement("script");
    //     script.type = "text/javascript";
    //     script.id = "google-translate-script";
    //     script.src =
    //         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    //     document.head.appendChild(script);

    //     // Declare googleTranslateElementInit on window object
    //     (window as any).googleTranslateElementInit = () => {
    //         new (window as any).google.translate.TranslateElement(
    //             {
    //                 pageLanguage: "th",
    //                 includedLanguages: "en", // กำหนดภาษาที่ต้องการแสดงใน widget
    //                 layout: (window as any).google.translate.TranslateElement
    //                     .InlineLayout.SIMPLE,
    //             },
    //             "google_translate_element"
    //         );
    //     };
    // },
};
</script>
