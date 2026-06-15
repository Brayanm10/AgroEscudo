import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandGreen: "#0B5D3B",
        brandGreenDark: "#063B27",
        brandAmber: "#D6A84F",
        brandField: "#F6F8F4",
        brandText: "#102018",
        brandMuted: "#5C6B62",
        brandInk: "#031F16"
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
