<template>
    <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="breadcrumb__content p-relative z-index-1">
                        <div class="breadcrumb__list">
                            <span> จัดการข้อมูล </span>
                            <span class="dvdr"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span>
                                <NuxtLink href="/admin/serve">
                                    รายการงานบริการวิชาการ
                                </NuxtLink></span
                            >
                            <span class="dvdr"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span> เพิ่มข้อมูล </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="portfolio__area pt-40 pb-40">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-20">
                    <h4>แบบฟอร์มเพิ่มข้อมูล</h4>
                </div>

                <div class="col-12">
                    <div class="">
                        <div class="">
                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >หน่วยงาน :
                                </label>
                                <div>
                                    <client-only>
                                        <v-select
                                            label="title"
                                            placeholder="หน่วยงาน"
                                            :options="selectOptions.departments"
                                            v-model="item.department_id"
                                            class="v-select-no-border"
                                            :clearable="true"
                                        ></v-select>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >ประเภทการบริการวิชาการ :
                                </label>
                                <div>
                                    <client-only>
                                        <v-select
                                            label="title"
                                            placeholder="ประเภทการบริการวิชาการ"
                                            :options="
                                                selectOptions.service_categories
                                            "
                                            v-model="item.service_category_id"
                                            class="v-select-no-border"
                                            :clearable="true"
                                        ></v-select>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >หมวดหมู่การบริการวิชาการ :
                                </label>
                                <div>
                                    <client-only>
                                        <v-select
                                            label="title"
                                            placeholder="หมวดหมู่การบริการวิชาการ"
                                            :options="selectOptions.types"
                                            v-model="item.type_id"
                                            class="v-select-no-border"
                                            :clearable="true"
                                        ></v-select>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >รูปภาพปก 500x350 :
                                </label>
                                <div>
                                    <input
                                        ref="file"
                                        class="form-control"
                                        type="file"
                                        id="formFile"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >หัวข้อ :
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.title_th"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >รายละเอียโดยย่อ :
                                </label>
                                <div>
                                    <textarea
                                        v-model="item.breif_detail_th"
                                        class="form-control custom-textarea"
                                        rows="5"
                                    ></textarea>
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >รายละเอียด :
                                </label>
                                <div>
                                    <client-only>
                                        <froala
                                            tag="textarea"
                                            :config="config.detail_th"
                                            v-model="item.detail_th"
                                        ></froala>

                                        <div id="detail-th"></div>
                                    </client-only>
                                </div>
                            </div>

                            <div
                                class="form-group mt-20"
                                v-if="
                                    item.service_category_id == null ||
                                    item.service_category_id.value != 2
                                "
                            >
                                <label for="" class="label label-required"
                                    >อัตราค่าใช้บริการ (บาท) :
                                </label>
                                <br />
                                <small
                                    >กรณี ไม่ระบุ ให้เว้นว่าง, ฟรีระบุ 0
                                </small>
                                <div>
                                    <table class="table table-bordered">
                                        <tr class="text-center">
                                            <th>บุคลากรภายในคณะ</th>
                                            <th>ภายในมหาวิทยาลัย</th>
                                            <th>สถาบันการศึกษาอื่น</th>
                                            <th>หน่วยงานราชการ/รัฐวิสาหกิจ</th>
                                            <th>เอกชน</th>
                                        </tr>
                                        <tr class="text-center">
                                            <td class="p-2">
                                                <input
                                                    type="number"
                                                    class="form-control form-control-sm mx-auto text-center input-small w-50"
                                                    v-model="item.price1"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    class="form-control form-control-sm mx-auto text-center input-small w-50"
                                                    v-model="item.price2"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    class="form-control form-control-sm mx-auto text-center input-small w-50"
                                                    v-model="item.price3"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    class="form-control form-control-sm mx-auto text-center input-small w-50"
                                                    v-model="item.price4"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    class="form-control form-control-sm mx-auto text-center input-small w-50"
                                                    v-model="item.price5"
                                                />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <div
                                class="form-group mt-10"
                                v-if="
                                    item.service_category_id == null ||
                                    item.service_category_id.value != 2
                                "
                            >
                                <label for="" class="label label-required"
                                    >หน่วย :
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.unit_th"
                                    />
                                </div>
                            </div>

                            <div
                                class="form-group mt-20"
                                v-if="
                                    item.service_category_id != null &&
                                    item.service_category_id?.value == 2
                                "
                            >
                                <label for="" class="label label-required"
                                    >อัตราค่าใช้บริการ (บาท) :
                                </label>
                                <br />
                                <small
                                    >กรณี ไม่ระบุ ให้เว้นว่าง, ฟรีระบุ 0
                                </small>
                                <div>
                                    <table class="table table-bordered">
                                        <tr class="text-center">
                                            <th>บุคลากรภายในคณะ</th>
                                            <th>ภายในมหาวิทยาลัย</th>
                                            <th>สถาบันการศึกษาอื่น</th>
                                            <th>หน่วยงานราชการ/รัฐวิสาหกิจ</th>
                                            <th>เอกชน</th>
                                            <th>หน่วย</th>
                                            <th>จัดการ</th>
                                        </tr>
                                        <template
                                            v-for="(itt, idx) in item_test_type"
                                            :key="idx"
                                        >
                                            <tr class="text-start">
                                                <td class="p-2" colspan="7">
                                                    <span>ชื่อรายการ</span>
                                                    <input
                                                        type="text"
                                                        class="form-control form-control-sm mx-auto text-start w-100"
                                                        v-model="itt.name_th"
                                                    />
                                                </td>
                                            </tr>
                                            <tr class="text-center">
                                                <td class="p-2">
                                                    <input
                                                        type="number"
                                                        class="form-control form-control-sm mx-auto text-center input-small w-50"
                                                        v-model="itt.price1"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        class="form-control form-control-sm mx-auto text-center input-small w-50"
                                                        v-model="itt.price2"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        class="form-control form-control-sm mx-auto text-center input-small w-50"
                                                        v-model="itt.price3"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        class="form-control form-control-sm mx-auto text-center input-small w-50"
                                                        v-model="itt.price4"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        class="form-control form-control-sm mx-auto text-center input-small w-50"
                                                        v-model="itt.price5"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        class="form-control form-control-sm mx-auto text-center input-small w-50"
                                                        v-model="itt.unit_th"
                                                    />
                                                </td>
                                                <td>
                                                    <button
                                                        @click="
                                                            removeItemType(idx)
                                                        "
                                                        class="btn btn-danger"
                                                    >
                                                        ลบ
                                                    </button>
                                                </td>
                                            </tr>
                                        </template>
                                    </table>
                                </div>

                                <div clas="div-button text-right text-end">
                                    <button
                                        class="btn btn-success"
                                        @click="addItemType()"
                                    >
                                        + เพิ่ม
                                    </button>
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label"
                                    >รายละเอียดอัตราค่าใช้บริการอื่นๆ :
                                </label>
                                <div>
                                    <client-only>
                                        <froala
                                            tag="textarea"
                                            :config="config.rates_th"
                                            v-model="item.rates_th"
                                        ></froala>

                                        <div id="detail-th"></div>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >สถานที่ :
                                </label>
                                <div>
                                    <client-only>
                                        <froala
                                            tag="textarea"
                                            :config="config.location_th"
                                            v-model="item.location_th"
                                        ></froala>

                                        <div id="detail-th"></div>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group mt-20">
                                <label for="" class="label label-required"
                                    >เบอร์ติดต่อ :
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.phone"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-20">
                                <label for="" class="label label-required"
                                    >Email :
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        class="form-control form-control-plaintext"
                                        v-model="item.email"
                                    />
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label"
                                    >ข้อมูลติดต่ออื่น ๆ :
                                </label>
                                <div>
                                    <client-only>
                                        <froala
                                            tag="textarea"
                                            :config="config.contact_th"
                                            v-model="item.contact_th"
                                        ></froala>

                                        <div id="detail-th"></div>
                                    </client-only>
                                </div>
                            </div>

                            <div class="form-group mt-10">
                                <label for="" class="label label-required"
                                    >สถานะ :
                                </label>
                                <div>
                                    <client-only>
                                        <v-select
                                            label="name_th"
                                            placeholder="การเผยแพร่"
                                            :options="selectOptions.publishes"
                                            id="slt-is_publish"
                                            v-model="item.is_publish"
                                            class="v-select-no-border"
                                            :clearable="true"
                                        ></v-select>
                                    </client-only>
                                </div>
                            </div>

                            <!-- btn save -->
                            <div class="col-md-12 mt-20">
                                <div class="contact__btn-2 text-center">
                                    <button
                                        class="btn btn-primary"
                                        @click="onSubmit"
                                    >
                                        บันทึก
                                    </button>
                                </div>
                            </div>
                            <!--  -->
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
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import froala_data from "~~/mixins/froalaData";
import basic_data from "~~/mixins/basicData";
import { useRuntimeConfig } from "#app";

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

// Variable
const configR = useRuntimeConfig();
const { apiBase } = configR.public;
const router = useRouter();

const item = ref({
    title_th: null,
    title_en: null,
    department_id: null,
    service_category_id: null,
    type_id: null,
    detail_th: "",
    detail_en: "",
    is_publish: {
        id: 1,
        value: 1,
        name_th: "publish",
        name_en: "publish",
        color: "success",
    },
    rates_th: "",
    rates_en: "",
    location_th: "",
    location_en: "",
    contact_th: "",
    contact_en: "",
    breif_detail_th: "",
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0,
    price5: 0,
    phone: "",
    email: "",
});
const file = ref(null);
const item_test_type = ref([]);

const selectOptions = ref({
    publishes: basic_data.data().publishes,
    departments: [],
    service_categories: [],
    types: [],
});

const r = (Math.random() + 1).toString(36).substring(7);
let config = {};

config["detail_th"] = froala_data.data().froala_config();
config["detail_th"]["events"] = {
    keyup: function (inputEvent) {
        item.value.detail_th = this.html.get();
    },
    click: function (clickEvent) {
        item.value.detail_th = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.detail_th = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.detail_th = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.detail_th);
    },
};
//
config["rates_th"] = froala_data.data().froala_config();
config["rates_th"]["events"] = {
    keyup: function (inputEvent) {
        item.value.rates_th = this.html.get();
    },
    click: function (clickEvent) {
        item.value.rates_th = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.rates_th = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.rates_th = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.rates_th);
    },
};

config["location_th"] = froala_data.data().froala_config();
config["location_th"]["events"] = {
    keyup: function (inputEvent) {
        item.value.location_th = this.html.get();
    },
    click: function (clickEvent) {
        item.value.location_th = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.location_th = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.location_th = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.location_th);
    },
};

config["contact_th"] = froala_data.data().froala_config();
config["contact_th"]["events"] = {
    keyup: function (inputEvent) {
        item.value.contact_th = this.html.get();
    },
    click: function (clickEvent) {
        item.value.contact_th = this.html.get();
    },
    "commands.after": function (cmd, param1, param2) {
        item.value.contact_th = this.html.get();
    },
    "paste.after": function (pasteEvent) {
        item.value.contact_th = this.html.get();
    },
    initialized: function () {
        this.html.insert(item.value.contact_th);
    },
};

// Function Fetch
const fetchDepartments = async () => {
    let data = await $fetch(`${apiBase}/department`, {
        params: {
            is_publish: 1,
            perPage: 100,
        },
    }).catch((error) => error.data);

    selectOptions.value.departments = data.data
        .map((e) => {
            return { title: e.name_th, value: e.id };
        })
        .filter((x) => {
            if (
                useCookie("user").value &&
                useCookie("user").value.group_id == 2
            ) {
                if (x.value == useCookie("user").value.department_id) {
                    return true;
                } else {
                    return false;
                }
            }

            return true;
        });
};

const fetchServiceCategories = async () => {
    let data = await $fetch(`${apiBase}/service-category`, {
        params: {
            is_publish: 1,
            perPage: 100,
        },
    }).catch((error) => error.data);

    selectOptions.value.service_categories = data.data.map((e) => {
        return { title: e.name_th, value: e.id };
    });
};

const fetchTypes = async () => {
    let data = await $fetch(`${apiBase}/type`, {
        params: {
            is_publish: 1,
            perPage: 100,
        },
    }).catch((error) => error.data);

    selectOptions.value.types = data.data.map((e) => {
        return { title: e.name_th, value: e.id };
    });
};

// Event
const onSubmit = async () => {
    if (
        item.value.is_publish == null ||
        item.value.is_publish.value == null ||
        item.value.service_category_id == null ||
        item.value.type_id == null ||
        item.value.title_th == "" ||
        item.value.title_th == null ||
        item.value.detail_th == "" ||
        item.value.detail_th == null ||
        item.value.breif_detail_th == ""
    ) {
        useToast("โปรดระบุข้อมูลให้ครบถ้วน", "error");
        return;
    }

    let type_object = {
        text_success: "เพิ่มรายการเสร็จสิ้น",
        method: "post",
        url: apiBase + "/serve/",
    };

    let data = {
        ...item.value,
        serve_file: file.value.files != null ? file.value.files[0] : null,
        is_publish: item.value.is_publish.value,
        department_id:
            item.value.department_id == null
                ? undefined
                : item.value.department_id.value,
        service_category_id:
            item.value.service_category_id == null
                ? undefined
                : item.value.service_category_id.value,
        type_id:
            item.value.type_id == null ? undefined : item.value.type_id.value,
        created_serve: dayjs().format("YYYY-MM-DD"),
    };

    var form_data = new FormData();
    for (var key in data) {
        form_data.append(key, data[key]);
    }

    await $fetch(type_object.url, {
        method: type_object.method,
        body: form_data,
    })
        .then((res) => {
            if (res.msg == "success") {
                item.value.id = res.id;
                useToast(type_object.text_success, "success");
                saveItemTestTypes();
            } else {
                throw new Error("ERROR");
            }
        })
        .catch((error) => error.data);
};

const saveItemTestTypes = async () => {
    for (const itt of item_test_type.value) {
        let type_object = {
            text_success: "บันทึกข้อมูลสำเร็จ",
            method: "post",
            url: `${apiBase}/test-type`,
        };

        let data = {
            ...itt,
            serve_id: item.value.id,
        };

        await $fetch(type_object.url, {
            method: type_object.method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.msg == "success") {
                    // useToast(type_object.text_success, "success");
                } else {
                    throw new Error("ERROR");
                }
            })
            .catch((error) => error.data);
    }

    // Redirect after saving all item_test_type
    router.push({ path: "/admin/serve/" });
};

const addItemType = () => {
    item_test_type.value.push({
        name_th: "",
        name_en: null,
        price1: "",
        price2: "",
        price3: "",
        price4: "",
        price5: "",
        unit_th: "",
        detail_th: "",
        detail_en: "",
        is_publish: 1,
    });
};

const removeItemType = (index) => {
    item_test_type.value.splice(index, 1);
};

onMounted(() => {
    fetchDepartments();
    fetchServiceCategories();
    fetchTypes();
});

useHead({
    title: "เพิ่มงานบริการวิชาการ",
});

definePageMeta({
    middleware: "auth",
});
</script>

<style scoped>
.custom-textarea {
    height: 100px; /* ปรับความสูงตามต้องการ */
}
</style>
