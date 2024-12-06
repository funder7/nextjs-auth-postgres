/** @type {import("next").NextConfig} */
export default {
 
  // https://nextjs.org/docs/pages/api-reference/next-config-js/output#automatically-copying-traced-files
  output: "standalone",

  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
}

/* TODO @next-15 TS version
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //* config options here 
};

export default nextConfig;
*/