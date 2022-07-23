/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#EAEDF6",
                    main: "#3041C7",
                    dark: "#000320",
                    accent: "#0f30ab",
                    "contrast-text": "#ffffff",
                },
            },
        },
    },
    plugins: [],
}