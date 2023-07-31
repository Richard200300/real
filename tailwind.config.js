/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: { 
            colors: {
              "twitter-blue": "#1DA1F2",
              "aisi-dark": "#0B0B0B",
            },
          },
    },
    plugins: [],
};
