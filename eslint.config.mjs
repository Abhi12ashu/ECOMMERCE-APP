import js from "@eslint/js";
import next from "@next/eslint-plugin-next";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    plugins: {
      next,
    },
    rules: {
      ...next.configs.recommended.rules,
      "react/no-unescaped-entities": "off",
    },
  },
];
