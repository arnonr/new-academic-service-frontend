import { e as defineStore } from "../server.mjs";
const useUtilsStore = defineStore("utils", {
  state: () => ({
    activeIndex: null,
    isCartMiniOpen: false,
    isOffCanvasOpen: false
  }),
  actions: {
    setIsActiveIndex(value) {
      this.activeIndex = value;
    },
    setIsCartMiniOpen() {
      this.isCartMiniOpen = true;
    },
    closeCartMini() {
      this.isCartMiniOpen = false;
    },
    setIsOffCanvasOpen() {
      this.isOffCanvasOpen = true;
    },
    setOffCanvasClose() {
      this.isOffCanvasOpen = false;
    }
  }
});
export {
  useUtilsStore as u
};
//# sourceMappingURL=utils-Cinv2m6T.js.map
