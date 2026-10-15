import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:lang(fa|ckb|en)/projects/instagram-shop-deployment",
        destination: "/:lang/projects/insta-shop-direct",
        permanent: true,
      },
      {
        source: "/projects/instagram-shop-deployment",
        destination: "/projects/insta-shop-direct",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
