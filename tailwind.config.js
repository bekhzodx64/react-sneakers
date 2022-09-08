/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: 20,
			},
			screens: {
				xl: 'none',
				'2xl': 'none',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}
