<template>
    <section class="login__area pt-110 pb-110">
        <div class="container">
            <div class="login__inner p-relative z-index-1">
                <login-shapes />
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8 col-md-10">
                        <div class="login__wrapper">
                            <div class="login__top mb-30 text-center">
                                <h3 class="login__title">
                                    ลงทะเบียนเข้าใช้งาน
                                </h3>
                            </div>
                            <div class="login__form">
                                <!-- form start -->
                                <register-form />
                                <div class="login__register-now">
                                    <p>
                                        กลับไปหน้า
                                        <nuxt-link href="/login"
                                            >เข้าสู่ระบบ</nuxt-link
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import RegisterForm from "../forms/RegisterForm.vue";
import LoginShapes from "./LoginShapes.vue";
import LoginWithSocial from "./LoginWithSocial.vue";

export default {
    components: { LoginShapes, RegisterForm, LoginWithSocial },
};
</script>
