module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react-hooks"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    // "airbnb-typescript",
  ],
  rules: {
    "react/jsx-curly-brace-presence": 0,
    "react/jsx-tag-spacing": 0,
    "no-empty-pattern": 0,
    "react/prop-types": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": 1
  }
};
