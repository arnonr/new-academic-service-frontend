<template>
    <section class="pt-40 pb-40">
        <div class="container">
            <h3 class="fw-semibold mb-2 text-center">คำถามที่พบบ่อย</h3>
            <div class="row justify-content-center">
                <div class="col-xl-12 text-center">
                    <p class="text-muted fs-15 mb-10 fw-normal">
                        เราได้รวบรวมคำถามที่พบบ่อยเพื่อให้คุณได้รับคำตอบอย่างรวดเร็วและง่ายดาย
                    </p>
                </div>
            </div>
            <div class="row text-start">
                <div class="col-xl-12">
                    <div class="row gy-2">
                        <div class="col-xl-6">
                            <div
                                class="accordion accordion-customicon1 accordion-primary accordions-items-seperate"
                                id="accordionFAQ1"
                            >
                                <div
                                    class="accordion-item"
                                    v-for="(it, idx) in items1"
                                    :key="idx"
                                >
                                    <h2
                                        class="accordion-header"
                                        :id="'headingcustomicon1_' + it.id"
                                    >
                                        <button
                                            class="accordion-button"
                                            :class="
                                                idx === 0 ? '' : 'collapsed'
                                            "
                                            type="button"
                                            data-bs-toggle="collapse"
                                            :data-bs-target="
                                                '#collapsecustomicon1_' + it.id
                                            "
                                            :aria-expanded="
                                                idx === 0 ? 'true' : 'false'
                                            "
                                            :aria-controls="
                                                'collapsecustomicon1_' + it.id
                                            "
                                        >
                                            {{ it.q }}
                                        </button>
                                    </h2>
                                    <div
                                        :id="'collapsecustomicon1_' + it.id"
                                        class="accordion-collapse collapse"
                                        :class="idx === 0 ? 'show' : ''"
                                        :aria-labelledby="
                                            'headingcustomicon1_' + it.id
                                        "
                                        data-bs-parent="#accordionFAQ1"
                                    >
                                        <div
                                            class="accordion-body"
                                            v-html="it.a"
                                        ></div>
                                    </div>
                                </div>
                                <!-- <div class="accordion-item">
                                    <h2
                                        class="accordion-header"
                                        id="headingcustomicon1Two"
                                    >
                                        <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsecustomicon1Two"
                                            aria-expanded="false"
                                            aria-controls="collapsecustomicon1Two"
                                        >
                                            การสมัครเข้าเรียนผ่าน Credit Bank
                                            ต้องทำอย่างไร?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapsecustomicon1Two"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="headingcustomicon1Two"
                                        data-bs-parent="#accordionFAQ1"
                                    >
                                        <div class="accordion-body">
                                            <strong
                                                >This is the first item's
                                                accordion body.</strong
                                            >
                                            It is shown by default, until the
                                            collapse plugin adds the appropriate
                                            classes that we use to style each
                                            element. These classes control the
                                            overall appearance, as well as the
                                            showing and hiding via CSS
                                            transitions. You can modify any of
                                            this with custom CSS or overriding
                                            our default variables. It's also
                                            worth noting that just about any
                                            HTML can go within the
                                            <code>.accordion-body</code>, though
                                            the transition does limit overflow.
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div
                                class="accordion accordion-customicon2 accordion-primary accordions-items-seperate"
                                id="accordionFAQ2"
                            >
                                <div
                                    class="accordion-item"
                                    v-for="(it, idx) in items2"
                                    :key="idx"
                                >
                                    <h2
                                        class="accordion-header"
                                        :id="'headingcustomicon1_' + it.id"
                                    >
                                        <button
                                            class="accordion-button"
                                            :class="
                                                idx === 4 ? '' : 'collapsed'
                                            "
                                            type="button"
                                            data-bs-toggle="collapse"
                                            :data-bs-target="
                                                '#collapsecustomicon1_' + it.id
                                            "
                                            :aria-expanded="
                                                idx === 4 ? 'true' : 'false'
                                            "
                                            :aria-controls="
                                                'collapsecustomicon2_' + it.id
                                            "
                                        >
                                            {{ it.q }}
                                        </button>
                                    </h2>
                                    <div
                                        :id="'collapsecustomicon1_' + it.id"
                                        class="accordion-collapse collapse"
                                        :class="idx === 4 ? 'show' : ''"
                                        :aria-labelledby="
                                            'headingcustomicon2_' + it.id
                                        "
                                        data-bs-parent="#accordionFAQ2"
                                    >
                                        <div
                                            class="accordion-body"
                                            v-html="it.a"
                                        ></div>
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
import NewsGridItem from "~/components/list/GridItem.vue";
// const { locale } = useI18n();
const runtimeConfig = useRuntimeConfig();

const search = ref({
    is_publish: 1,
});

const items1 = ref([
    {
        id: 1,
        q: "บริการวิชาการของ มจพ. คืออะไร?",
        a: "<strong>บริการวิชาการของ มจพ.</strong> คือการให้คำปรึกษา การอบรม การดทสอบตรวจสอบ และการวิจัยทางวิชาการจากผู้เชี่ยวชาญในมหาวิทยาลัย เพื่อสนับสนุนโครงการต่างๆ ในด้านวิทยาศาสตร์ เทคโนโลยี และการบริหารจัดการ",
    },
    {
        id: 2,
        q: "สามารถขอรับคำปรึกษาในด้านใดได้บ้าง?",
        a: "<strong>เรามีบริการวิชาการในหลากหลายสาขา</strong> เช่น วิศวกรรมศาสตร์ เทคโนโลยีอุตสาหกรรม วิทยาศาสตร์ประยุกต์ และการบริหารจัดการ",
    },
    {
        id: 3,
        q: "ขั้นตอนการติดต่อขอรับบริการวิชาการเป็นอย่างไร?",
        a: "<strong>คุณสามารถติดต่อเราผ่านทางเว็บไซต์</strong> กรอกแบบฟอร์มออนไลน์ อีเมล หรือโทรศัพท์ติดต่อทีมงานโดยตรง เพื่อเริ่มต้นขอคำปรึกษาหรือบริการ",
    },
    {
        id: 4,
        q: "ใครบ้างที่สามารถใช้บริการวิชาการได้?",
        a: "<strong>บริการของเราพร้อมสำหรับ</strong> องค์กรภาครัฐ ภาคเอกชน ผู้ประกอบการ SME หน่วยงานท้องถิ่น รวมถึงผู้ที่สนใจทั่วไป",
    },
    {
        id: 5,
        q: "บริการนี้มีค่าใช้จ่ายหรือไม่?",
        a: "<strong>บริการของเรามีค่าใช้จ่าย</strong> ขึ้นอยู่กับประเภทของงานและทรัพยากรที่ใช้ คุณสามารถติดต่อเราเพื่อขอรายละเอียดเพิ่มเติมเกี่ยวกับค่าใช้จ่าย",
    },
]);

const items2 = ref([
    {
        id: 6,
        q: "การจัดหาทีมงานจากมหาวิทยาลัยเป็นไปตามหลักการใด?",
        a: "<strong>ทีมงานจะถูกคัดเลือก</strong> โดยอิงจากความเชี่ยวชาญเฉพาะทางที่ตรงกับความต้องการของโครงการ เพื่อให้แน่ใจว่าโครงการจะได้รับผลลัพธ์ที่มีคุณภาพสูงสุด",
    },
    {
        id: 7,
        q: "เราจะมั่นใจในคุณภาพของบุคลากรและบริการได้อย่างไร?",
        a: "<strong> ทีมงานของเรามีความเชี่ยวชาญและประสบการณ์สูง</strong> มาจากมหาวิทยาลัยชั้นนำ และได้รับการรับรองโดยหน่วยงานต่างๆ เพื่อให้คุณมั่นใจในคุณภาพการให้บริการ",
    },
    {
        id: 8,
        q: "เครื่องมือและเทคโนโลยีที่ใช้ในการบริการวิชาการมีอะไรบ้าง?",
        a: "<strong>เรามีห้องปฏิบัติการที่ทันสมัย</strong> พร้อมด้วยเครื่องมือทางวิทยาศาสตร์และเทคโนโลยีที่ทันสมัยเพื่อสนับสนุนโครงการของคุณ",
    },
    {
        id: 9,
        q: "สามารถกำหนดระยะเวลาของโครงการได้หรือไม่?",
        a: "<strong>แน่นอน</strong> เราสามารถปรับระยะเวลาของโครงการตามความต้องการของคุณ โดยขึ้นอยู่กับลักษณะและความซับซ้อนของงาน",
    },
    {
        id: 10,
        q: "จะติดตามความคืบหน้าของโครงการได้อย่างไร?",
        a: "<strong>เรามีระบบการประสานงานและรายงานความคืบหน้าที่โปร่งใส</strong> เพื่อให้คุณสามารถติดตามความคืบหน้าของโครงการได้ตลอดเวลา และสามารถสื่อสารกับทีมงานได้อย่างต่อเนื่อง",
    },
]);
</script>

<style scoped>
.accordion-button {
    background-color: #efefef;
}
.accordion-button:not(.collapsed) {
    color: #ff6600;
    background-color: rgb(255, 102, 0, 0.1);
    box-shadow: inset 0 -1px 5px rgba(255, 102, 0, 0.2);
    /* box-shadow: inset 0 calc(-1* var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color); */
}
</style>
