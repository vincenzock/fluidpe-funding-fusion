
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
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
				fluidpe: {
					teal: '#004d4d',
					'light-teal': '#e6f3f3',
					'medium-teal': '#007070',
					gold: '#f5cc7f',
					'light-gold': '#fdf7e9',
					charcoal: '#222222',
					'light-gray': '#f7f7f7',
					'medium-gray': '#e5e5e5',
					red: '#ea384c',
					'light-red': '#ffeaec',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					},
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					},
				},
				'pulse-soft': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					},
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					},
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					},
				},
				'shine': {
					'0%': { backgroundPosition: '200% center' },
					'100%': { backgroundPosition: '-200% center' },
				},
				'float-slow': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-15px)'
					},
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(0, 77, 77, 0.3), 0 0 10px rgba(0, 77, 77, 0.1)'
					},
					'50%': {
						boxShadow: '0 0 15px rgba(0, 77, 77, 0.5), 0 0 20px rgba(0, 77, 77, 0.3)'
					}
				},
				'text-blur-out': {
					'0%': { filter: 'blur(0.01px)' },
					'50%': { filter: 'blur(2px)', opacity: '0.6' },
					'100%': { filter: 'blur(0.01px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
				'scale-in': 'scale-in 0.5s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
				'shine': 'shine 8s ease-in-out infinite',
				'float-slow': 'float-slow 6s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'text-blur': 'text-blur-out 8s ease-in-out infinite'
			},
			backgroundImage: {
				'hero-pattern': 'linear-gradient(to bottom right, rgba(230, 243, 243, 0.8), rgba(255, 255, 255, 0.8))',
				'cta-pattern': 'linear-gradient(to bottom right, #e6f3f3, #ffffff)',
				'footer-pattern': 'linear-gradient(to bottom, #004d4d, #003535)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
