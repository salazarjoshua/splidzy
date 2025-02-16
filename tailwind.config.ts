import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-sfProRounded)'],
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				'shake': 'shake 0.5s linear',
			},
			keyframes: {
				'shake': {
					'41%, 8%': {
						transform: 'translate3d(-6px, 0, 0)'
					},
					'25%, 58%': {
						transform: 'translate3d(6px, 0, 0)'
					},
					'75%': {
						transform: 'translate3d(-3px, 0, 0)'
					},
					'92%': {
						transform: 'translate3d(3px, 0, 0)'
					},
					'0%': {
						transform: 'translate3d(0, 0, 0)'
					}
				}
			}
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
};
export default config;
