import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      port: mode === "production" ? 8080 : 5173,
      host: "0.0.0.0",
      ...(mode !== "production" && {
        hmr: {
          port: 5173,
          host: "0.0.0.0",
          protocol: "ws",
        },
      }),
    },
    plugins: [react()],
  };
});
