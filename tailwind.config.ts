import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",

                primary: "hsl(180, 66%, 49%)",
                secondary: "var(--secondary)",
                "grayish-violet": "hsl(257, 7%, 63%)",
                "very-dark-violet": "hsl(260, 8%, 14%)",
            },
        },
    },
    plugins: [],
} satisfies Config;
