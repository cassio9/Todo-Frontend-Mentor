/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				BrightBlue: "hsl(220, 98%, 61%)",
				VeryLightGray: "hsl(0, 0%, 98%)",
				VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
				LightGrayishBlue: "hsl(233, 11%, 84%)",
				DarkGrayishBlue: "hsl(236, 9%, 61%)",
				VeryDarkGrayishBlue: "hsl(235, 19%, 35%)",
				VeryDarkBlue: "hsl(235, 21%, 11%)",
				VeryDarkUnsaturatedBlue: "hsl(235, 24%, 19%)",
				LightGrayishBlue: "hsl(234, 39%, 85%)",
				LightGrayishBlueHover: "hsl(236, 33%, 92%)",
				DarkGrayishBlue: "hsl(234, 11%, 52%)",
				VeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
				VeryDarkGrayishBlue: "hsl(237, 14%, 26%)",
				LinerFrom: "hsl(192, 100%, 67%)",
				LinearTo: "hsl(280, 87%, 65%)",
			},
			fontFamily: {
				Josefin: ["'Josefin Sans', sans-serif"],
			},
			backgroundImage: {
				bgLightMobile: "url('./src/assets/bg-mobile-light.jpg')",
			},
		},
	},
	plugins: [],
};
