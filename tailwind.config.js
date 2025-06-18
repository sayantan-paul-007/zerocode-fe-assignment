/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
module.exports = {
  darkMode: ["selector", "class"],
 content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 theme: {
 	extend: {
 		borderRadius: {
 			lg: 'var(--radius)',
 			md: 'calc(var(--radius) - 2px)',
 			sm: 'calc(var(--radius) - 4px)'
 		},
 		colors: {
 			background: 'oklch(var(--background))',
 			foreground: 'oklch(var(--foreground))',
 			card: {
 				DEFAULT: 'oklch(var(--card))',
 				foreground: 'oklch(var(--card-foreground))'
 			},
 			popover: {
 				DEFAULT: 'oklch(var(--popover))',
 				foreground: 'oklch(var(--popover-foreground))'
 			},
 			primary: {
 				DEFAULT: 'oklch(var(--primary))',
 				foreground: 'oklch(var(--primary-foreground))'
 			},
 			secondary: {
 				DEFAULT: 'oklch(var(--secondary))',
 				foreground: 'oklch(var(--secondary-foreground))'
 			},
 			muted: {
 				DEFAULT: 'oklch(var(--muted))',
 				foreground: 'oklch(var(--muted-foreground))'
 			},
 			accent: {
 				DEFAULT: 'oklch(var(--accent))',
 				foreground: 'oklch(var(--accent-foreground))'
 			},
 			destructive: {
 				DEFAULT: 'oklch(var(--destructive))',
 				foreground: 'oklch(var(--destructive-foreground))'
 			},
 			border: 'oklch(var(--border))',
 			input: 'oklch(var(--input))',
 			ring: 'oklch(var(--ring))',
 			sidebar: {
 				DEFAULT: 'hsl(var(--sidebar-background))',
 				foreground: 'hsl(var(--sidebar-foreground))',
 				primary: 'hsl(var(--sidebar-primary))',
 				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
 				accent: 'hsl(var(--sidebar-accent))',
 				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
 				border: 'hsl(var(--sidebar-border))',
 				ring: 'hsl(var(--sidebar-ring))'
 			},
 			chart: {
 				'1': 'oklch(var(--chart-1))',
 				'2': 'oklch(var(--chart-2))',
 				'3': 'oklch(var(--chart-3))',
 				'4': 'oklch(var(--chart-4))',
 				'5': 'oklch(var(--chart-5))'
 			}
 		},
 		fontFamily: {
 			sans: [
 				'var(--font-sans)',
                    ...fontFamily.sans
                ],
 			serif: [
 				'var(--font-serif)',
                    ...fontFamily.serif
                ],
 			mono: [
 				'var(--font-mono)',
                    ...fontFamily.mono
                ]
 		},
 		letterSpacing: {
 			tighter: 'var(--tracking-tighter)',
 			tight: 'var(--tracking-tight)',
 			normal: 'var(--tracking-normal)',
 			wide: 'var(--tracking-wide)',
 			wider: 'var(--tracking-wider)',
 			widest: 'var(--tracking-widest)'
 		},
 		spacing: {
 			base: 'var(--spacing)'
 		},
 		boxShadow: {
 			'2xs': 'var(--shadow-2xs)',
 			xs: 'var(--shadow-xs)',
 			sm: 'var(--shadow-sm)',
 			DEFAULT: 'var(--shadow)',
 			md: 'var(--shadow-md)',
 			lg: 'var(--shadow-lg)',
 			xl: 'var(--shadow-xl)',
 			'2xl': 'var(--shadow-2xl)'
 		},
 		container: {
 			center: true
 		}
 	}
 },
  plugins: [require("tailwindcss-animate")],
}

