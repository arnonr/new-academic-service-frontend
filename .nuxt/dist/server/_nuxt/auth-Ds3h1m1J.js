import { e as defineStore, d as useCookie, g as useRuntimeConfig } from "../server.mjs";
import { u as useFetch } from "./fetch-DNDFQiYI.js";
const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false
  }),
  actions: {
    async authenticateUser({ email, password }) {
      var _a, _b, _c, _d, _e, _f, _g;
      const runtimeConfig = useRuntimeConfig();
      const { data, pending } = await useFetch(
        `${runtimeConfig.public.apiBase}/user/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            username: email,
            password
          }
        },
        "$L7GOUGH2Ei"
      );
      this.loading = pending;
      if (data.value) {
        const token = useCookie("token");
        token.value = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.token;
        const user = useCookie("user");
        user.value = {
          id: (_b = data == null ? void 0 : data.value) == null ? void 0 : _b.id,
          username: (_c = data == null ? void 0 : data.value) == null ? void 0 : _c.username,
          email: (_d = data == null ? void 0 : data.value) == null ? void 0 : _d.email,
          department_id: (_e = data == null ? void 0 : data.value) == null ? void 0 : _e.department_id,
          name: (_f = data == null ? void 0 : data.value) == null ? void 0 : _f.name,
          group_id: (_g = data == null ? void 0 : data.value) == null ? void 0 : _g.group_id
        };
        this.authenticated = true;
      }
    },
    logUserOut() {
      const token = useCookie("token");
      const user = useCookie("user");
      this.authenticated = false;
      token.value = null;
      user.value = null;
      console.log("Logout Success");
    }
  }
});
export {
  useAuthStore as u
};
//# sourceMappingURL=auth-Ds3h1m1J.js.map
