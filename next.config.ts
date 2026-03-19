import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // ✅ Add this line for static export
  output: "export",

  // ✅ Optional but IMPORTANT for GitHub Pages
  basePath: "/Automation_Practice_Site",
  assetPrefix: "/Automation_Practice_Site/",
};

export default nextConfig;