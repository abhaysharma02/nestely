/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    orange: '#FF6B00',
                    gradientStart: '#FF8C00',
                    gradientEnd: '#FF3D00',
                    dark: '#0A0A0A',
                    darker: '#050505',
                    card: '#141414',
                    gray: '#A1A1AA',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'brand-gradient': 'linear-gradient(to right, #FF8C00, #FF3D00)',
            }
        },
    },
    plugins: [],
}
