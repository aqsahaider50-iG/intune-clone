module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { brand: { blue: "#0078D4", dark: "#0B0B0C", light: "#F3F4F6" } },
      maxWidth: { content: "1200px" },
      boxShadow: { soft: "0 4px 24px rgba(0,0,0,0.08)" },
    },
  },
  plugins: [],
};
