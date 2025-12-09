/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#050505',
                'bg-secondary': '#0a0a0a',
                'bg-card': '#111111',
                'accent-primary': '#00f0ff',
                'accent-secondary': '#7000ff',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                mono: ['Space Grotesk', 'monospace'],
            }
        },
    },
    plugins: [],
}
