/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgAuth:
          'url("https://images.unsplash.com/photo-1527766833261-b09c3163a791?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        bgMain: 'url("./public/assets/img/bgMain.jpg")',
      },

      boxShadow: {
        custom: "inset 0 2px 33px 3px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
