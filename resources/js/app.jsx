import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import.meta.glob("../../public/assets/**/*");

createInertiaApp({
    resolve: async (name) =>
        await resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob(`./Pages/**/*.jsx`)
        ),

    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
