import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "layout-custom" | "layout-eight" | "layout-eleven" | "layout-five" | "layout-four" | "layout-nine" | "layout-one" | "layout-seven" | "layout-six" | "layout-ten" | "layout-three" | "layout-twelve" | "layout-two" | "default" | "footers-footer" | "footers-footer-custom" | "footers-footer-eight" | "footers-footer-eleven" | "footers-footer-five" | "footers-footer-four" | "footers-footer-nine" | "footers-footer-seven" | "footers-footer-six" | "footers-footer-ten" | "footers-footer-three" | "footers-footer-two" | "footers-component-back-to-top" | "headers-header-custom" | "headers-header-eight" | "headers-header-eleven" | "headers-header-five" | "headers-header-four" | "headers-header-fourteen" | "headers-header-nine" | "headers-header-one" | "headers-header-seven" | "headers-header-six" | "headers-header-ten" | "headers-header-thirteen" | "headers-header-three" | "headers-header-twelve" | "headers-header-two" | "headers-component-header-info" | "headers-component-language" | "headers-component-search-popup" | "headers-menus"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}