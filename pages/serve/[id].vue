<template>
    <CommonBanner />
    <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12" v-if="item != null">
                    <div class="breadcrumb__content p-relative z-index-1">
                        <div class="postbox__category">
                            <NuxtLink
                                :to="{
                                    path: '/serve',
                                    query: {
                                        service_category_id:
                                            item.service_category_id,
                                    },
                                }"
                                style="padding: 10px"
                            >
                                {{ item.service_category.name_th }}
                            </NuxtLink>
                        </div>
                        <div class="breadcrumb__list">
                            <span class="breadcrumb-item-1">
                                <NuxtLink
                                    :to="{
                                        path: '/',
                                    }"
                                >
                                    หน้าหลัก
                                </NuxtLink>
                            </span>
                            <span class="dvdr breadcrumb-item-1"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>

                            <span class="breadcrumb-item-1">
                                <NuxtLink
                                    :to="{
                                        path: '/serve',
                                    }"
                                >
                                    งานบริการวิชาการ</NuxtLink
                                >
                            </span>

                            <span class="dvdr breadcrumb-item-1"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span> {{ item.title_th }} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--  -->
    <section class="postbox__area pt-40 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="postbox__wrapper" v-if="item">
                        <!-- Image -->
                        <!-- Content -->
                        <div class="postbox__main">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="postbox__main-wrapper">
                                        <div
                                            class="postbox__details-content-wrapper"
                                        >
                                            <h3>{{ item.title_th }}</h3>
                                            <hr />
                                        </div>

                                        <div
                                            class="postbox__meta-wrapper d-flex align-items-center flex-wrap"
                                        >
                                            <div class="postbox__meta-item">
                                                <div
                                                    class="postbox__meta-content"
                                                >
                                                    <span
                                                        class="postbox__meta-type"
                                                    >
                                                        <i
                                                            class="fa-regular fa-home"
                                                        ></i>
                                                        {{
                                                            item.department
                                                                .name_th
                                                        }}
                                                    </span>
                                                </div>
                                            </div>

                                            <div class="postbox__meta-item">
                                                <div
                                                    class="postbox__meta-content"
                                                >
                                                    <span
                                                        class="postbox__meta-type"
                                                    >
                                                        <i
                                                            class="fa-regular fa-tag"
                                                        ></i>
                                                        {{
                                                            item.type
                                                                ? item.type
                                                                      .name_th
                                                                : ""
                                                        }}
                                                    </span>
                                                </div>
                                            </div>

                                            <div class="postbox__meta-item">
                                                <div
                                                    class="postbox__meta-content"
                                                >
                                                    <span
                                                        class="postbox__meta-type"
                                                    >
                                                        <i
                                                            class="fa-regular fa-list"
                                                        ></i>
                                                        {{
                                                            item.service_category
                                                                ? item
                                                                      .service_category
                                                                      .name_th
                                                                : ""
                                                        }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Detail -->
                                        <div
                                            class="mt-10 pl-10 pt-15 pb-10 bg-grey"
                                        >
                                            <h4 class="section-bg-primary">
                                                <i
                                                    class="fas fa-info-circle"
                                                ></i>
                                                <span class="ml-10">
                                                    รายละเอียด
                                                </span>
                                            </h4>
                                        </div>

                                        <div
                                            class="postbox__details-content-wrapper p-2"
                                        >
                                            <div
                                                v-html="
                                                    item.detail_th == null
                                                        ? ''
                                                        : item.detail_th
                                                "
                                            ></div>
                                        </div>
                                        <!-- End Detail -->
                                        <!-- Start Rate -->
                                        <div
                                            class="mt-10 pl-10 pt-15 pb-10 bg-grey"
                                        >
                                            <h4 class="section-bg-primary">
                                                <i
                                                    class="fas fa-dollar-sign"
                                                ></i>
                                                <span class="ml-10"
                                                    >อัตราค่าใช้บริการ/อบรม
                                                </span>
                                            </h4>
                                        </div>

                                        <div
                                            class="postbox__details-content-wrapper p-2"
                                        >
                                            <div class="table-responsive">
                                                <table
                                                    class="table table-bordered custom-table"
                                                    v-if="
                                                        item.service_category_id !=
                                                        2
                                                    "
                                                >
                                                    <thead>
                                                        <tr class="text-center">
                                                            <th
                                                                class="text-muted"
                                                            >
                                                                บุคลากรภายในคณะ
                                                            </th>
                                                            <th
                                                                class="text-muted"
                                                            >
                                                                ภายในมหาวิทยาลัย
                                                            </th>
                                                            <th
                                                                class="text-muted"
                                                            >
                                                                สถาบันการศึกษาอื่น
                                                            </th>
                                                            <th
                                                                class="text-muted"
                                                            >
                                                                หน่วยงานราชการ/รัฐวิสาหกิจ
                                                            </th>
                                                            <th
                                                                class="text-muted"
                                                            >
                                                                เอกชน
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="text-center">
                                                            <td
                                                                class="text-muted"
                                                            >
                                                                {{
                                                                    item.price1 !=
                                                                    null
                                                                        ? item.price1 !=
                                                                          0
                                                                            ? item.price1.toLocaleString(
                                                                                  "en-US"
                                                                              )
                                                                            : "ฟรี"
                                                                        : "-"
                                                                }}
                                                            </td>
                                                            <td
                                                                class="text-muted"
                                                            >
                                                                {{
                                                                    item.price2 !=
                                                                    null
                                                                        ? item.price2 !=
                                                                          0
                                                                            ? item.price2.toLocaleString(
                                                                                  "en-US"
                                                                              )
                                                                            : "ฟรี"
                                                                        : "-"
                                                                }}
                                                            </td>
                                                            <td
                                                                class="text-muted"
                                                            >
                                                                {{
                                                                    item.price3 !=
                                                                    null
                                                                        ? item.price3 !=
                                                                          0
                                                                            ? item.price3.toLocaleString(
                                                                                  "en-US"
                                                                              )
                                                                            : "ฟรี"
                                                                        : "-"
                                                                }}
                                                            </td>
                                                            <td
                                                                class="text-muted"
                                                            >
                                                                {{
                                                                    item.price4 !=
                                                                    null
                                                                        ? item.price4 !=
                                                                          0
                                                                            ? item.price4.toLocaleString(
                                                                                  "en-US"
                                                                              )
                                                                            : "ฟรี"
                                                                        : "-"
                                                                }}
                                                            </td>
                                                            <td
                                                                class="text-muted"
                                                            >
                                                                {{
                                                                    item.price5 !=
                                                                    null
                                                                        ? item.price5 !=
                                                                          0
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
                                                            <th
                                                                class="text-muted"
                                                            >
                                                                รายการ
                                                            </th>
                                                            <th
                                                                class="text-muted"
                                                            >
                                                                บุคลากรภายในคณะ
                                                            </th>
                                                            <th
                                                                class="text-muted"
                                                            >
                                                                ภายในมหาวิทยาลัย
                                                            </th>
                                                            <th
                                                                class="text-muted"
                                                            >
                                                                สถาบันการศึกษาอื่น
                                                            </th>
                                                            <th
                                                                class="text-muted"
                                                            >
                                                                หน่วยงานราชการ/รัฐวิสาหกิจ
                                                            </th>
                                                            <th
                                                                class="text-muted"
                                                            >
                                                                เอกชน
                                                            </th>
                                                            <th
                                                                class="text-muted"
                                                            >
                                                                หน่วย
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr
                                                            class="text-center"
                                                            v-for="(
                                                                itt, idx
                                                            ) in item.test_types"
                                                            :key="idx"
                                                        >
                                                            <td>
                                                                {{
                                                                    itt.name_th
                                                                }}
                                                            </td>
                                                            <td
                                                                class="text-muted"
                                                            >
                                                                {{
                                                                    itt.price1 !=
                                                                    null
                                                                        ? itt.price1 !=
                                                                          0
                                                                            ? itt.price1.toLocaleString(
                                                                                  "en-US"
                                                                              )
                                                                            : "ฟรี"
                                                                        : "-"
                                                                }}
                                                            </td>
                                                            <td
                                                                class="text-muted"
                                                            >
                                                                {{
                                                                    itt.price2 !=
                                                                    null
                                                                        ? itt.price2 !=
                                                                          0
                                                                            ? itt.price2.toLocaleString(
                                                                                  "en-US"
                                                                              )
                                                                            : "ฟรี"
                                                                        : "-"
                                                                }}
                                                            </td>
                                                            <td
                                                                class="text-muted"
                                                            >
                                                                {{
                                                                    itt.price3 !=
                                                                    null
                                                                        ? itt.price3 !=
                                                                          0
                                                                            ? itt.price3.toLocaleString(
                                                                                  "en-US"
                                                                              )
                                                                            : "ฟรี"
                                                                        : "-"
                                                                }}
                                                            </td>
                                                            <td
                                                                class="text-muted"
                                                            >
                                                                {{
                                                                    itt.price4 !=
                                                                    null
                                                                        ? item.price4 !=
                                                                          0
                                                                            ? itt.price4.toLocaleString(
                                                                                  "en-US"
                                                                              )
                                                                            : "ฟรี"
                                                                        : "-"
                                                                }}
                                                            </td>
                                                            <td
                                                                class="text-muted"
                                                            >
                                                                {{
                                                                    itt.price5 !=
                                                                    null
                                                                        ? itt.price5 !=
                                                                          0
                                                                            ? itt.price5.toLocaleString(
                                                                                  "en-US"
                                                                              )
                                                                            : "ฟรี"
                                                                        : "-"
                                                                }}
                                                            </td>
                                                            <td class="text-center">
                                                                {{
                                                                    itt.unit_th
                                                                }}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div
                                                class="d-flex justify-content-between mt-10"
                                                v-if="item.service_category_id != 2"
                                            >
                                                <div class="text-end">
                                                    <h5
                                                        class="text-danger mb-1"
                                                    >
                                                        THB

                                                        {{
                                                            item.price5 ==
                                                                null ||
                                                            item.price5 == 0
                                                                ? "-"
                                                                : item.price1 ==
                                                                  item.price5
                                                                ? item.price5.toLocaleString(
                                                                      "en-US"
                                                                  ) + unit_th
                                                                : item.price1.toLocaleString(
                                                                      "en-US"
                                                                  ) +
                                                                  "-" +
                                                                  item.price5.toLocaleString(
                                                                      "en-US"
                                                                  ) +
                                                                  " บาท " +
                                                                  unit_th
                                                        }}
                                                    </h5>
                                                </div>
                                            </div>

                                            <div
                                                class="mt-20"
                                                v-html="
                                                    item.rates_th == null
                                                        ? ''
                                                        : item.rates_th
                                                "
                                            ></div>
                                        </div>
                                        <!-- End Rate -->
                                        <!-- Start Location -->
                                        <div
                                            class="mt-10 pl-10 pt-15 pb-10 bg-grey"
                                        >
                                            <h4 class="section-bg-primary">
                                                <i
                                                    class="fas fa-map-marker-alt"
                                                ></i>
                                                <span class="ml-10">
                                                    สถานที่
                                                </span>
                                            </h4>
                                        </div>

                                        <div
                                            class="postbox__details-content-wrapper p-2"
                                        >
                                            <div
                                                v-html="
                                                    item.location_th == null
                                                        ? ''
                                                        : item.location_th
                                                "
                                            ></div>
                                        </div>
                                        <!-- End Location -->
                                        <!-- Start Contact -->
                                        <div
                                            class="mt-10 pl-10 pt-15 pb-10 bg-grey"
                                        >
                                            <h4 class="section-bg-primary">
                                                <i class="fas fa-phone"></i>
                                                <span class="ml-10"
                                                    >ข้อมูลติดต่อ</span
                                                >
                                            </h4>
                                        </div>

                                        <div
                                            class="postbox__details-content-wrapper p-2"
                                        >
                                            <div v-if="item.phone">
                                                <i
                                                    class="fa fa-phone text-main me-2 ms-1 fs-5 mb-20"
                                                ></i>
                                                <span class="fs-6">{{
                                                    item.phone
                                                }}</span>
                                            </div>
                                            <div
                                                v-if="
                                                    item.email &&
                                                    item.email != null &&
                                                    item.email != 'null'
                                                "
                                            >
                                                <i
                                                    class="fa fa-envelope text-main me-2 ms-1 fs-5"
                                                ></i>
                                                <span class="fs-6">{{
                                                    item.email
                                                }}</span>
                                            </div>

                                            <div
                                                class="mt-20 ms-1"
                                                v-html="
                                                    item.contact_th == null
                                                        ? ''
                                                        : item.contact_th
                                                "
                                            ></div>
                                        </div>
                                        <!-- End Contact -->

                                        <!-- Start Gallery -->
                                        <!-- <div
                                            class="mt-10 pl-10 pt-15 pb-10 bg-grey"
                                        >
                                            <h4 class="section-bg-primary">
                                                <i class="fas fa-image"></i>
                                                <span class="ml-10"
                                                    >ภาพกิจกรรม</span
                                                >
                                            </h4>
                                        </div>

                                        <div
                                            class="postbox__details-content-wrapper p-2"
                                        >
                                            <div
                                                v-html="
                                                    item.contact_th == null
                                                        ? ''
                                                        : item.contact_th
                                                "
                                            ></div>
                                        </div> -->
                                        <!-- End Contact -->
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
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);
import { useRuntimeConfig } from "#app";

const route = useRoute();
const config = useRuntimeConfig();
const { apiBase } = config.public;

const item = ref(null);

// Fetch

const { data: res } = await useAsyncData("serve", async () => {
    let data = await $fetch(`${apiBase}/serve/${route.params.id}`, {
        params: {},
    });
    return data;
});

item.value = res.value.data;

const unit_th = item.value.unit_th ? " / " + item.value.unit_th : "";

// useHead({
//     title: item.value.title,
// });
</script>

<style scoped>
.breadcrumb__title {
    font-size: 50px;
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
