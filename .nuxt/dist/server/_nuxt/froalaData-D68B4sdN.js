import { g as useRuntimeConfig } from "../server.mjs";
const froala_data = {
  data() {
    return {
      froala_config: function() {
        const runtimeConfig = useRuntimeConfig();
        return {
          height: 300,
          // inlineMode: false,
          pastePlain: true,
          paragraphy: false,
          quickInsertEnabled: false,
          toolbarButtons: [
            "undo",
            "redo",
            "fullscreen",
            "|",
            "fontSize",
            "color",
            "bold",
            "italic",
            "underline",
            "inlineClass",
            "subscript",
            "superscript",
            "|",
            "paragraphFormat",
            "align",
            "outdent",
            "indent",
            "|",
            "formatOL",
            "formatUL",
            "quote",
            "-",
            "insertLink",
            "insertImage",
            "insertVideo",
            "insertFile",
            "insertTable",
            "|",
            "fontAwesome",
            "insertHR",
            "selectAll",
            "clearFormatting",
            "|",
            "print",
            "getPDF",
            "html"
          ],
          // Change buttons for XS screen.
          toolbarButtonsXS: [
            ["undo", "redo"],
            [
              "bold",
              "italic",
              "underline",
              "subscript",
              "superscript"
            ]
          ],
          placeholderText: "",
          attribution: false,
          key: "enter-your-license-key-here",
          disableRightClick: true,
          imageUploadURL: `${runtimeConfig.public.apiBase}/froala/image`,
          imageAllowedTypes: ["jpeg", "jpg", "png"],
          fileUploadURL: `${runtimeConfig.public.apiBase}/froala/document`,
          videoUploadURL: `${runtimeConfig.public.apiBase}/froala/video`,
          // fileUpload: false,
          // imageUpload: false,
          imagePaste: false,
          imagePasteProcess: false,
          imageResize: true,
          crossDomain: true
        };
      }
    };
  }
};
export {
  froala_data as f
};
//# sourceMappingURL=froalaData-D68B4sdN.js.map