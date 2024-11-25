<template>
    <CommonBanner />

    <section class="section bg-white pt-10 mt-40">
        <div class="container mb-5">
            <div class="row">
                <!-- Filter Section -->
                <div class="col-lg-3 filter-section d-none d-lg-block">
                    <div class="p-4">
                        <h6 class="text-main mb-4 fw-bold">
                            ตัวกรองบริการวิชาการ
                        </h6>
                        <h6 class="mt-4 fw-bold">หมวดหมู่</h6>
                        <div
                            class="form-check"
                            v-for="(t, idx) in selectOptions.types"
                            :key="idx"
                        >
                            <input
                                class="form-check-input"
                                type="checkbox"
                                v-model="search.type_ids"
                                :value="t.value"
                                :id="'checkbox-' + idx"
                            />
                            <label
                                class="form-check-label fs-12"
                                :for="'checkbox-' + idx"
                                >{{ t.title }}
                            </label>
                        </div>
                        <div class="mt-6"><hr /></div>

                        <h6 class="mt-4 fw-bold">ประเภท</h6>
                        <client-only>
                            <v-select
                                v-model="search.service_category_id"
                                label="title"
                                placeholder="ประเภท"
                                :options="selectOptions.service_categories"
                                class="v-select-no-border"
                                :clearable="true"
                            />
                        </client-only>

                        <!-- <select class="form-select mb-3 form-control fs-12">
                            <option selected>อบรม</option>
                            <option value="1">วิศวกรรม</option>
                            <option value="2">เทคโนโลยี</option>
                        </select> -->
                        <h6 class="mt-4 fw-bold">หน่วยงาน</h6>
                        <client-only>
                            <v-select
                                v-model="search.department_id"
                                label="title"
                                placeholder="หน่วยงาน"
                                :options="selectOptions.departments"
                                class="v-select-no-border"
                                :clearable="true"
                            />
                        </client-only>
                    </div>
                </div>
                <!-- Course List Section -->
                <div class="col-lg-9">
                    <!-- Search Bar -->
                    <div class="position-relative mb-4">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">
                                <i class="fa fa-search text-muted"></i>
                            </span>
                            <input
                                type="text"
                                class="form-control input-serve-search"
                                placeholder="ค้นหา"
                                aria-label="Example text with button addon"
                                aria-describedby="button-addon1"
                                v-model="search.text_all"
                            />
                            <button
                                class="btn btn-primary"
                                type="button"
                                id="button-addon1"
                                @click="onSearch()"
                            >
                                ค้นหา
                            </button>
                        </div>

                        <div class="d-flex justify-content-between mt-30 mb-30">
                            <div class="fs-12">
                                ผลลัพธ์การค้นหา {{ totalItems }} รายการ
                            </div>
                            <!-- <div class="fs-12">
                                <select name="" id="" class="form-select">
                                    <option value="">ทั้งหมด</option>
                                    <option value="">ใหม่ล่าสุด</option>
                                    <option value="">เรียงจากตัวอักษร</option>
                                </select>
                            </div> -->
                        </div>
                    </div>

                    <!-- Courses Listing -->
                    <div class="row">
                        <div
                            v-for="(it, idx) in items"
                            class="col-12 col-md-12"
                            v-if="items.length > 0"
                        >
                            <ListGridItem2
                                :item="{
                                    link: '/serve/',
                                    id: it.id,
                                    title: it.title,
                                    file: it.serve_file,
                                    type: it.type,
                                    department: it.department,
                                    price1: it.price1,
                                    price2: it.price2,
                                    price3: it.price3,
                                    price4: it.price4,
                                    price5: it.price5,
                                    unit_th: it.unit_th,
                                    phone: it.phone,
                                    email: it.email,
                                    breif_detail_th: it.breif_detail_th,
                                    test_types: it.test_types,
                                    service_category_id: it.service_category_id
                                }"
                            />
                        </div>

                        <div class="col-xxl-12">
                            <div class="tp-pagination mt-30">
                                <blog-pagination
                                    :totalPage="totalPage"
                                    :currentPage="currentPage"
                                    :totalItems="totalItems"
                                    @update:currentPage="currentPage = $event"
                                />
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
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { useRuntimeConfig } from "#app";
// Import
import NewsListItem from "~/components/list/ServeListItem.vue";
import BlogPagination from "~/components/common/pagination/BlogPagination.vue";
// Variable
const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const { apiBase } = config.public;

const items = ref([]);
const perPage = ref(10);
const currentPage = ref(parseInt(route.query.page) || 1);
const totalPage = ref(1);
const totalItems = ref(0);
const search = ref({
    department_id: null,
    service_category_id: null,
    title: "",
    created_year: null,
    created_month: null,
    is_publish: 1,
    text_all: "",
    type_ids: [],
});

const selectOptionsFields = [
    {
        options: "service_categories",
        model: "service_category_id",
        label: "title",
        placeholder: "ประเภทงานบริการวิชาการ",
    },
    {
        options: "departments",
        model: "department_id",
        label: "title",
        placeholder: "หน่วยงาน",
    },
];

const selectOptions = ref({
    news_types: [],
    perPage: [
        { title: "20", value: 20 },
        { title: "40", value: 40 },
        { title: "60", value: 60 },
    ],
    service_categories: [],
    departments: [],
    types: [],
});

// Function Fetch
const fetchOptions = async (endpoint, params = {}) => {
    try {
        const { data } = await $fetch(`${apiBase}/${endpoint}`, {
            params: params,
        });

        return data.map((e) => {
            return { title: e.name_th, value: e.id };
        });
    } catch (error) {
        console.error("Error fetching ", error);
        return [];
    }
};

const mapItemToProps = (item) => ({
    link: "/serve/",
    id: item.id,
    title: item.title,
    file: item.serve_file,
    created: item.created_serve,
    type_name: item.service_category.name_th,
    dep_name: item.department.name_th,
});

// // fetch
const { data: departmentsData } = await useAsyncData("departments", () =>
    fetchOptions("department", { is_publish: 1, perPage: 100 })
);

selectOptions.value.departments = departmentsData.value;

const { data: serviceCategoriesData } = await useAsyncData(
    "service-categories",
    () => fetchOptions("service-category", { is_publish: 1, perPage: 100 })
);
selectOptions.value.service_categories = serviceCategoriesData.value;

const { data: typesData } = await useAsyncData("type", () =>
    fetchOptions("type", { is_publish: 1, perPage: 100 })
);
selectOptions.value.types = typesData.value;

if (route.query.service_category_id != null) {
    search.value.service_category_id =
        selectOptions.value.service_categories.find((x) => {
            return x.value == route.query.service_category_id;
        });
}

if (route.query.type_id != null) {
    search.value.type_id = selectOptions.value.types.find((x) => {
        return x.value == route.query.type_id;
    });
}

if (route.query.page) {
    currentPage.value = route.query.page;
}

const { data: res } = await useAsyncData("serve", async () => {
    let text_all =
        search.value.text_all.length > 3 ? search.value.text_all : "";

    let params = {
        ...search.value,
        text_all: text_all,
        type_ids: search.value.type_ids
            ? search.value.type_ids.join(",")
            : undefined,
        service_category_id: search.value.service_category_id?.value,
        department_id: search.value.department_id?.value,
        type_id: search.value.type_id?.value,
        created_year: search.value.created_year?.value,
        created_month: search.value.created_month?.value,
        perPage: perPage.value,
        currentPage: currentPage.value,
    };

    let data = await $fetch(`${apiBase}/serve`, {
        params: params,
    });


    return data;
});

items.value = res.value.data;
totalPage.value = res.value.totalPage;
totalItems.value = res.value.totalData;

const onSearch = () => {
    refreshNuxtData("serve");
};

watch(
    [currentPage, search],
    () => {
        router.replace({
            name: "serve",
            query: { page: currentPage.value },
        });
        refreshNuxtData("serve");
    },
    { deep: true }
);

watch(res, (newData) => {
    if (newData) {
        items.value = newData.data;
        totalPage.value = newData.totalPage;
        totalItems.value = newData.totalData;
    } else {
        items.value = [];
    }
});

onMounted(async () => {});

watchEffect(() => {
    if (currentPage.value > totalPage.value)
        currentPage.value = totalPage.value;
});

useHead({
    title: "งานบริการวิชาการ มจพ.",
});
</script>

<style scoped>
input[type="text"].input-serve-search,
textarea {
    background-color: #ffffff;
    height: auto !important;
    line-height: 2.2em;
    margin-top: 0px !important;
    padding-left: 10px;
    padding-right: 10px;
    border: var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);
}
</style>
