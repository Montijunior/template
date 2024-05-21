import js from "@eslint/js";


export default [
  js.configs.recommended,

  {
    rules: {
       
      semi: "error",

      "prefer-const": "off",

      "comma-dangle": "warn",

      "prefer-template": "error",

      "no-var": "warn",

      "no-undefined": "off",

      "no-proto": "error",

      eqeqeq: "error",

      "block-scoped-var": "error",

      "no-use-before-define": "warn",

      "no-duplicate-imports": "error",

      "no-console": "warn",

      "max-len": ["error", { code: 180 }],

      "no-multiple-empty-lines": "error",

      "indent": ["error", 2],

      "quotes": ["warn", "double"]
    }
  }
];
