import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import path from "path";
import { APIUrl } from "./config/build/const/apiURL";
import { BuildMode } from "./config/build/const/BuildMode";
import { BaseName } from "./config/build/const/BaseName";

type BuildEnv = {
  mode: BuildMode;
}

export default (env: BuildEnv) => {
  const IS_DEV = env.mode === 'development';

  const API_URL = (() => {
    switch (env.mode) {
        case BuildMode.Prod: return APIUrl.Prod;
        case BuildMode.Dev: return APIUrl.Dev;
        case BuildMode.Test: return APIUrl.Test;
    }
  })();

  const BASE_NAME = (() => {
    switch (env.mode) {
        case BuildMode.Prod: return BaseName.Prod;
        case BuildMode.Dev: return BaseName.Dev;
        case BuildMode.Test: return BaseName.Test;
    }
  })();

  return defineConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    define: {
      'process.env.API_URL': JSON.stringify(API_URL),
      'process.env.IS_DEV': JSON.stringify(IS_DEV),
      'process.env.BASE_NAME': JSON.stringify(BASE_NAME),
    },
    plugins: [react()],
    css: {
      postcss: {
        plugins: [autoprefixer({})],
      },
    },
    server: {
        open: BASE_NAME,
    }
  });
}