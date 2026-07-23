import type { NextConfig } from "next";

const isVercelBuild = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  typescript: isVercelBuild
    ? {
        tsconfigPath: "tsconfig.vercel.json",
      }
    : undefined,
};

export default nextConfig;
