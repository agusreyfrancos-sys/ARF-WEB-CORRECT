import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // La fotografía es el activo central: habilitamos calidades altas.
    qualities: [75, 90, 95, 100],
  },
};

export default nextConfig;
