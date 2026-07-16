import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandGreen: "#0B6B50",
        brandGreenDark: "#073E32",
        brandAmber: "#D69A27",
        brandAmberLight: "#F2C66D",
        brandAmberDark: "#9A6516",
        brandField: "#EEF2EE",
        brandText: "#10231C",
        brandMuted: "#4C5A54",
        brandInk: "#071D18"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(16, 32, 24, 0.08)",
        lift: "0 24px 70px rgba(3, 31, 22, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
