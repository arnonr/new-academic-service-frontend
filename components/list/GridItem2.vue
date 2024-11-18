<template>
    <div class="container py-1">
        <div
            class="card mb-3"
            style="border: 1px solid #eee; border-radius: 1em; padding: 1em"
        >
            <div class="row g-0">
                <!-- รูปภาพ -->
                <div class="col-md-4 text-center">
                    <nuxt-link :to="item.link + item.id">
                        <img
                            :src="item.file"
                            alt="item image"
                            class="img-fluid rounded-4"
                        />
                    </nuxt-link>
                    <div class="text-muted mt-3 text-start">
                        <small> <i class="fa fa-tag"></i> งานอบรม, งานบริการวิชาการ</small>
                    </div> 
                </div>
                <!-- เนื้อหา -->
                <div class="col-md-8">
                    <div class="card-body">
                        <!-- ชื่อโรงแรมและประเภท -->
                        <div
                            class="d-flex align-items-start justify-content-between"
                        >
                            <nuxt-link
                                :to="item.link + item.id"
                                class="text-primary-link"
                            >
                                <h5 class="card-title mb-2">
                                    {{ item.title }}
                                </h5>
                            </nuxt-link>
                            <button
                                class="btn btn-info btn-sm btn-icon ms-2  mb-2"
                                ref="tooltipButton"
                            >
                                <i class="fa fa-info-circle text-white"></i>
                            </button>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <tr class="text-center">
                                    <th class="text-muted">บุคลากรภายในคณะ</th>
                                    <th class="text-muted">ภายในมหาวิทยาลัย</th>
                                    <th class="text-muted">
                                        สถาบันการศึกษาอื่น
                                    </th>
                                    <th class="text-muted">
                                        หน่วยงานราชการ/รัฐวิสาหกิจ
                                    </th>
                                    <th class="text-muted">เอกชน</th>
                                </tr>
                                <tr class="text-center">
                                    <td class="text-muted">200</td>
                                    <td class="text-muted">200</td>
                                    <td class="text-muted">200</td>
                                    <td class="text-muted">200</td>
                                    <td class="text-muted">200</td>
                                </tr>
                            </table>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="text-end">
                                <h5 class="text-danger mb-1">
                                    THB 200-1,000 / ชิ้น
                                </h5>
                            </div>

                            <nuxt-link
                                :to="item.link + item.id"
                                class="btn btn-main-gradient"
                                >ดูข้อมูล
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <hr />
                    <div
                        class="d-flex justify-content-center align-items-center flex-wrap gap-3"
                    >
                        <div>
                            <i class="fa fa-home text-main"></i> คณะวิทยาศาสตร์
                        </div>

                        <div>
                            <i class="fa fa-phone text-main"></i> 02-555-2000
                            ต่อ 2270
                        </div>
                        <div>
                            <i class="fa fa-envelope text-main"></i>
                            contact@technopark.kmutnb.ac.th
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // optional for styling
export default {
    props: {
        item: {},
        masonry: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const tooltipButton = ref(null);

        onMounted(() => {
            // ใช้ Tippy.js เพื่อสร้าง Tooltip
            useNuxtApp().$tippy(tooltipButton.value, {
                theme: "light",
                allowHTML: true,
                content: `<div class="mb-2">
                        <h5 class="text-white mt-2">ข้อมูลเบื้องต้น</h5>
                        <hr />
                        </div>
                        <p class="mb-2  text-white" >
                            หลักสูตร..............................................................................................................................
                        </p>`,
                placement: "bottom", // กำหนดตำแหน่ง (top, bottom, left, right)
                arrow: true, // แสดงลูกศร
                animation: "fade", // ใช้แอนิเมชัน
            });
        });

        return {
            tooltipButton,
        };
    },
};
</script>

<!-- <style scoped>
.blog__item-10 {
    border-radius: 0.5em;
    border: solid 1px #eee;
}

.text-color-primary {
    color: #f60;
}

.blog__grid-item .blog__content-10-top {
    padding: 1em;
    padding-top: 2em;
    min-height: 220px;
}

.blog__content-10-bottom {
    border-top: 0px;
    padding: 1em;
}

.blog__grid-item .blog__title-10 {
    font-size: 18px;
    font-weight: 500;
}

.blog__grid-item .blog__meta-10 span {
    color: var(--tp-text-4);
}

@media only screen and (min-width: 1025px) {
    .w-img-news {
        max-height: 190px;
        min-height: 190px;
    }
    .img-news {
        min-height: 190px !important;
    }
}
</style> -->

<!-- <style scoped>
.item-row {
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid #eaeaea;
    padding: 15px 0;
}

.item-column {
    flex: 1;
    padding: 0 10px;
}

.image-column {
    flex: 0 0 15%;
}

.item-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.details-column {
    flex: 0 0 25%;
}

.price-column {
    flex: 0 0 20%;
}

.department-column {
    flex: 0 0 20%;
}

.contact-column {
    flex: 0 0 20%;
}

.item-title {
    margin-bottom: 10px;
}

.item-description {
    font-size: 14px;
    color: #666;
}

@media (max-width: 768px) {
    .item-row {
        flex-wrap: wrap;
    }
    .item-column {
        flex: 1 1 100%;
        padding: 10px 0;
    }
}
</style> -->

<style scoped>
.card-title {
    font-size: 1.2em;
    font-weight: bold;
}

.badge {
    font-size: 0.8rem;
}

.text-danger {
    color: #d9534f !important;
}

.img-fluid {
    height: 200px;
    object-fit: cover;
}
</style>
