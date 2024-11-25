<template>
    <div>
        <form class="d-flex me-3">
            <input
                style="min-width: 150px"
                ref="searchInput"
                v-model="textSearch"
                class="form-control input-tranparent"
                type="search"
                placeholder="ค้นหา..."
                aria-label="Search"
            />
        </form>

        <!-- Search Modal -->
        <div
            ref="courseSearchOffcanvas"
            class="offcanvas offcanvas-start fade w-100"
            style="top: 70px"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabindex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
        >
            <div class="container mx-auto">
                <div class="offcanvas-header">
                    <h5
                        class="offcanvas-title mt-40"
                        id="offcanvasScrollingLabel"
                    >
                        <span v-if="textSearch == ''"
                            ></span
                        >
                        <!-- หัวข้อที่มีการค้นหามากที่สุด -->
                        <span v-else
                            >12 ผลลัพธ์สำหรับการค้นหา
                            <span class="text-main"
                                >“{{ textSearch }}”</span
                            ></span
                        >
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>

                <div
                    class="offcanvas-header border-bottom border-block-end-dashed"
                    v-if="selectOptions.types && selectOptions.types.length > 0"
                >
                    <div class="btn-list mb-4">
                        <!-- <button
                            class="btn btn-outline btn-outline-primary mt-2"
                            @click="onChangeType('all')"
                        >
                            ทั้งหมด -->
                        <!-- </button> -->
                        <button
                            class="btn btn-outline btn-outline-primary mt-2 ms-2"
                            v-for="(type, idx) in selectOptions.types"
                            :key="idx"
                        >
                            <span @click="onChangeType(type.id)">{{
                                type.name_th
                            }}</span>
                        </button>
                        <!-- <button
                            class="btn btn-outline btn-outline-primary mt-2 ms-2"
                            v-for="(type, idx) in selectOptions.types"
                            :key="idx"
                        >
                            <span @click="onChangeType(type.value)">{{
                                type.title
                            }}</span>
                        </button> -->
                    </div>
                </div>
                <div
                    class="offcanvas-body"
                    style="max-height: 90vh; overflow-y: auto"
                >
                    <div class="row">
                        <div
                            v-for="(it, idx) in items"
                            class="col-12 col-md-12 text-start"
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

                        <div
                            class="card-footer text-center pe-2 mt-4"
                            style="margin-bottom: 130px"
                            v-once
                        >
                            <button class="btn btn-outline-main">
                                ดูทั้งหมด
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Search Modal -->
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRuntimeConfig } from "#app";
import BlogPagination from "~/components/common/pagination/BlogPagination.vue";

export default {
    components: {
        BlogPagination,
    },
    async setup() {
        const config = useRuntimeConfig();
        const { apiBase } = config.public;

        const router = useRouter();
        const route = useRoute();
        const perPage = ref(12);
        const currentPage = ref(1);
        const totalPage = ref(1);
        const totalItems = ref(0);
        const searchInput = ref(null);
        const courseSearchOffcanvas = ref(null);
        const textSearch = ref("");
        const search = ref({
            is_pubish: 1,
            type_id: null,
        });

        const selectOptions = ref({
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

        const { data: typesData } = useAsyncData("types", () =>
            $fetch(`${apiBase}/type`, {
                params: {
                    is_publish: 1,
                    perPage: 100,
                },
            })
        );

        selectOptions.value.types = typesData.value;

        const items = ref([]);

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

        onMounted(() => {
            if (searchInput.value) {
                searchInput.value.addEventListener("focus", () => {
                    if (courseSearchOffcanvas.value) {
                        const courseSearchInstance = new bootstrap.Offcanvas(
                            courseSearchOffcanvas.value
                        );
                        courseSearchInstance.show();
                    }
                });

                courseSearchOffcanvas.value.addEventListener(
                    "hidden.bs.offcanvas",
                    () => {
                        search.value = "";
                    }
                );
            }
        });
        const { data: res } = await useAsyncData(
            "search-serve",
            async () => {
                let data = await $fetch(`${apiBase}/serve`, {
                    params: {
                        text_all: textSearch.value,
                        ...search.value,
                        perPage: 8,
                        currentPage: 1,
                        orderBy: "id",
                        order: "desc",
                        type_id:
                            search.value.type_id != null
                                ? search.value.type_id
                                : undefined,
                        lang: useCookie("lang").value,
                    },
                });

                return data && data.data ? { data: data.data } : { data: [] };
            },
            {
                initialCache: true, // ช่วยแคชข้อมูลที่ดึงมาใน SSR เพื่อให้ Client ไม่ต้องเรียกซ้ำ
                default: () => ({ data: [] }), // กำหนดค่าเริ่มต้นเพื่อหลีกเลี่ยง null หรือ undefined
            }
        );

        if (res.value != null) {
            items.value = res.value.data;
            totalPage.value = res.value.totalPage;
            totalItems.value = res.value.totalData;
        }

        const onChangeType = (type_id) => {
            search.value.type_id = type_id;
            if (type_id == "all") {
                search.value.type_id = null;
            }
            refreshNuxtData("search-serve");
        };

        watch([textSearch], () => {
            refreshNuxtData("search-serve");
        });

        watch(res, (newData) => {
            console.log(newData);
            if (newData) {
                items.value = newData.data;
                totalPage.value = newData.totalPage;
                totalItems.value = newData.totalData;
            } else {
                items.value = [];
            }
        });

        return {
            items,
            searchInput,
            search,
            textSearch,
            courseSearchOffcanvas,
            perPage,
            currentPage,
            totalPage,
            totalItems,
            selectOptions,
            onChangeType,
        };
    },
};
</script>
