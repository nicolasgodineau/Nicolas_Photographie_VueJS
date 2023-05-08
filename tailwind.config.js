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

                max_xsm: { max: "380px" },
                // => @media (max-width: 380px) { ... }

                xsm: "380px",
                // => @media (min-width: 380px) { ... }
            },
            backgroundPosition: {
                bottom: "bottom",
                "bottom-4": "center bottom 1rem",
                center: "center",
                left: "left",
                "left-bottom": "left bottom",
                "left-top": "left top",
                right: "right",
                "right-10rem": "right -10rem bottom",
                "right-14%": "right 14% bottom",
                top: "top",
                "top-4": "center top 1rem",
            },
            fontFamily: {
                titre: ["Poiret One"],
                texte: ["Lato"],
            },
        },
    },
    plugins: [],
};
