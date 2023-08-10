import replace from "@rollup/plugin-replace";
import { config as configDotenv } from "dotenv";

configDotenv();

export default {
  input: "javascript/index.js",
  output: {
    file: "bundle.js",
    format: "iife",
  },
  plugins: [
    replace({
      preventAssignment: true,
      values: {
        GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY,
      },
    }),
  ],
};
