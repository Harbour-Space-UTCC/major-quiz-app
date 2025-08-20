import type { NextConfig } from "next";
import path from "path";

// Explicitly set roots to avoid multiple-lockfile workspace warnings
const config = {
  reactStrictMode: true,
  // Used by Node.js tracing during build/production
  outputFileTracingRoot: path.join(__dirname),
  // Used by Turbopack in dev
  turbopack: {
    root: __dirname,
  },
} as unknown as NextConfig;

export default config;
