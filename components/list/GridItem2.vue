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
                        <small>
                            <i class="fa fa-tag"></i>
                            {{ item.type?.name_th }}</small
                        >
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
                                class="btn btn-info btn-sm btn-icon ms-2 mb-2"
                                ref="tooltipButton"
                            >
                                <i class="fa fa-info-circle text-white"></i>
                            </button>
                        </div>
                        <div class="table-responsive">
                            <table
                                class="table table-bordered custom-table"
                                v-if="item.service_category_id != 2"
                            >
                                <thead>
                                    <tr class="text-center">
                                        <th class="text-muted">
                                            บุคลากรภายในคณะ
                                        </th>
                                        <th class="text-muted">
                                            ภายในมหาวิทยาลัย
                                        </th>
                                        <th class="text-muted">
                                            สถาบันการศึกษาอื่น
                                        </th>
                                        <th class="text-muted">
                                            หน่วยงานราชการ/รัฐวิสาหกิจ
                                        </th>
                                        <th class="text-muted">เอกชน</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center">
                                        <td class="text-muted">
                                            {{
                                                item.price1 != null
                                                    ? item.price1 != 0
                                                        ? item.price1.toLocaleString(
                                                              "en-US"
                                                          )
                                                        : "ฟรี"
                                                    : "-"
                                            }}
                                        </td>
                                        <td class="text-muted">
                                            {{
                                                item.price2 != null
                                                    ? item.price2 != 0
                                                        ? item.price2.toLocaleString(
                                                              "en-US"
                                                          )
                                                        : "ฟรี"
                                                    : "-"
                                            }}
                                        </td>
                                        <td class="text-muted">
                                            {{
                                                item.price3 != null
                                                    ? item.price3 != 0
                                                        ? item.price3.toLocaleString(
                                                              "en-US"
                                                          )
                                                        : "ฟรี"
                                                    : "-"
                                            }}
                                        </td>
                                        <td class="text-muted">
                                            {{
                                                item.price4 != null
                                                    ? item.price4 != 0
                                                        ? item.price4.toLocaleString(
                                                              "en-US"
                                                          )
                                                        : "ฟรี"
                                                    : "-"
                                            }}
                                        </td>
                                        <td class="text-muted">
                                            {{
                                                item.price5 != null
                                                    ? item.price5 != 0
                                                        ? item.price5.toLocaleString(
                                                              "en-US"
                                                          )
                                                        : "ฟรี"
                                                    : "-"
                                            }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table
                                class="table table-bordered custom-table"
                                v-else
                            >
                                <thead>
                                    <tr class="text-center">
                                        <th class="text-muted">รายการ</th>
                                        <th class="text-muted">
                                            บุคลากรภายในคณะ
                                        </th>
                                        <th class="text-muted">
                                            ภายในมหาวิทยาลัย
                                        </th>
                                        <th class="text-muted">
                                            สถาบันการศึกษาอื่น
                                        </th>
                                        <th class="text-muted">
                                            หน่วยงานราชการ/รัฐวิสาหกิจ
                                        </th>
                                        <th class="text-muted">เอกชน</th>
                                        <th class="text-muted">หน่วย</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        class="text-center"
                                        v-for="(itt, idx) in item.test_types"
                                        :key="idx"
                                    >
                                        <td>
                                            {{ itt.name_th }}
                                        </td>
                                        <td class="text-muted">
                                            {{
                                                itt.price1 != null
                                                    ? itt.price1 != 0
                                                        ? itt.price1.toLocaleString(
                                                              "en-US"
                                                          )
                                                        : "ฟรี"
                                                    : "-"
                                            }}
                                        </td>
                                        <td class="text-muted">
                                            {{
                                                itt.price2 != null
                                                    ? itt.price2 != 0
                                                        ? itt.price2.toLocaleString(
                                                              "en-US"
                                                          )
                                                        : "ฟรี"
                                                    : "-"
                                            }}
                                        </td>
                                        <td class="text-muted">
                                            {{
                                                itt.price3 != null
                                                    ? itt.price3 != 0
                                                        ? itt.price3.toLocaleString(
                                                              "en-US"
                                                          )
                                                        : "ฟรี"
                                                    : "-"
                                            }}
                                        </td>
                                        <td class="text-muted">
                                            {{
                                                itt.price4 != null
                                                    ? item.price4 != 0
                                                        ? itt.price4.toLocaleString(
                                                              "en-US"
                                                          )
                                                        : "ฟรี"
                                                    : "-"
                                            }}
                                        </td>
                                        <td class="text-muted">
                                            {{
                                                itt.price5 != null
                                                    ? itt.price5 != 0
                                                        ? itt.price5.toLocaleString(
                                                              "en-US"
                                                          )
                                                        : "ฟรี"
                                                    : "-"
                                            }}
                                        </td>
                                        <td class="text-center">
                                            {{ itt.unit_th }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="text-end" >
                                <h5 class="text-danger mb-1"   v-if="item.service_category_id != 2">
                                    THB

                                    {{
                                        item.price5 == 0
                                            ? "ฟรี"
                                            : item.price5 == null
                                            ? "-"
                                            : item.price1 == item.price5
                                            ? item.price5.toLocaleString(
                                                  "en-US"
                                              ) + ""
                                            : item.price1.toLocaleString(
                                                  "en-US"
                                              ) +
                                              "-" +
                                              item.price5.toLocaleString(
                                                  "en-US"
                                              ) +
                                              ""
                                    }}
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
                            <i class="fa fa-home text-main"></i>
                            {{ item.department?.name_th }}
                        </div>

                        <div>
                            <i class="fa fa-phone text-main"></i>
                            {{
                                item.phone && item.phone != "null"
                                    ? item.phone
                                    : "-"
                            }}
                        </div>
                        <div>
                            <i class="fa fa-envelope text-main"></i>
                            {{
                                item.email && item.email != "null"
                                    ? item.email
                                    : "-"
                            }}
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
        item: {
            type: Object,
            default: () => ({
                price1: null,
                price2: null,
                price3: null,
                price4: null,
                price5: null,
                type: { name_th: "" },
                link: "",
                id: "",
                serve_file: "",
                title: "",
                department: { name_th: "" },
                phone: "",
                email: "",
            }),
        },
        masonry: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
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
                        ${props.item.breif_detail_th}
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

.custom-table {
    width: 100%;
    border-collapse: collapse; /* ทำให้เส้นขอบติดกัน */
}

.custom-table th,
.custom-table td {
    border: 1px solid #ddd; /* กำหนดเส้นขอบ */
    padding: 8px; /* เพิ่มช่องว่างภายในเซลล์ */
}

.custom-table th {
    background-color: #f2f2f2; /* เพิ่มสีพื้นหลังให้กับ header */
    text-align: center;
}
</style>
