/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#2D89FF",
					secondary: "#642DFF",
					paragraph1: "#575757",
					textb: "#1e1e1e",
					"base-100": "#FFFFFF",
					info: "#CAE2E8",
					success: "#DFF2A1",
					warning: "#F7E488",
					error: "#F2B6B5",
				},
			},
		],
	},
};
