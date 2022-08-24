module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    JSX: true,
    React: true,
  },
  extends: [
    "plugin:react/recommended",
    "next",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "linebreak-style": 0,
    "jsx-a11y/interactive-supports-focus": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/require-default-props": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": [2, { extensions: [".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
      },
    ],
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@styles", "./src/styles"],
          ["@shared", "./src/shared"],
          ["@strings", "./src/shared/constants/strings"],
          ["@services", "./src/services"],
          ["@@", "./src/components"],
          ["@", "./src"],
          ["@root", "./"],
        ],
        extensions: [".ts", ".tsx", ".scss", ".js"],
      },
    },
  },
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        "no-undef": "off",
        "linebreak-style": 0,
      },
    },
  ],
};
