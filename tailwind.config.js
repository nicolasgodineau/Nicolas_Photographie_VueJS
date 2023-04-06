/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                fluid: "repeat(auto-fit, minmax(150px,1fr))",
            },
            backgroundImage: {
                accueil: "url('../src/assets/img/index.webp')",
            },
            colors: {
                whiteTheme: "rgb(245, 245, 245)",
            },
            screens: {
                max_2xl: { max: "1535px" },
                // => @media (max-width: 1535px) { ... }

                max_xl: { max: "1279px" },
                // => @media (max-width: 1279px) { ... }

                max_lg: { max: "1023px" },
                // => @media (max-width: 1023px) { ... }

                max_md: { max: "767px" },
                // => @media (max-width: 767px) { ... }

                max_sm: { max: "639px" },
                // => @media (max-width: 639px) { ... }
            },
        },
    },
    plugins: [],
};
