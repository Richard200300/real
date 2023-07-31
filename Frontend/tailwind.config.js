/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'page_background': "url('./src/assets/images/bg_img.png')",
              }
        },
    },
    plugins: [],
};
