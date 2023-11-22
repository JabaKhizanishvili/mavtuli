/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
    ...defaultColors,
    ...{
        "custom-yellow": {
            500: "#EDAE0A",
        },
        "custom-blue": {
            500: "#2680EB",
            800: "#1C3C51",
            // 900: "#1e1b4b",
            // 900: "#131419",
            900: "#16181d",
            1000: "#2e1065",
        },
    },
};
// module.exports = {
//     // content: ["./resources/**/*.{html,js}"],
//     content: [
//         // "./resources/**/*.blade.php",
//         "./resources/**/*.js",
//         "./resources/**/*.jsx",
//         // "./resources/**/*.vue",
//     ],

//     theme: {
//         extend: {},
//     },
//     plugins: [],
// }

module.exports = {
    content: ["./resources/js/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: colors,
        },
    },
    plugins: [],
};
