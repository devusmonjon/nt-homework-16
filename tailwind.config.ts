import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation(utils) {
                return {
                    show: "show .5s linear forwards",
                };
            },
            keyframes: {
                show: {
                    from: {
                        backdropFilter: "0",
                    },
                    to: {
                        backdropFilter: "16px",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
