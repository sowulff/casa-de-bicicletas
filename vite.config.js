import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    assetsInclude: ["public/assets/**/*"],
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
    ],
});
