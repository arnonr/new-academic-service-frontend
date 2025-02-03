// plugins/tippy.js
import { createApp } from 'vue';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            tippy,
        },
    };
});