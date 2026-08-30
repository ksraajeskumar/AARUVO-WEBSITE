import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /*
     * The illustration set in /public is our own vector art, so the optimiser
     * is allowed to serve it. The CSP keeps those files inert: no scripts, no
     * external fetches, and they can only ever be rendered as an image.
     */
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox; style-src 'unsafe-inline'",
  },
};

export default nextConfig;
