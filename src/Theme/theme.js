import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  cssVarsRoot: ":where(:root, :host)",
  cssVarsPrefix: "ck",

  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: "Inter, system-ui, sans-serif",
    },
    h1: {
      fontSize: "50px",
      fontWeight: "400",
    },
    h2: {
      fontSize: "30px",
      fontWeight: "400",
    },
    h3: {
      fontSize: "20px",
      fontWeight: "400",
    },
    h4: {
      fontSize: "18px",
      fontWeight: "400",
    },
    h5: {
      fontSize: "16px",
      fontWeight: "400",
    },
  },

  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#FFECE8" },
          100: { value: "#FFC9C1" },
          200: { value: "#FFA599" },
          300: { value: "#FF8071" },
          400: { value: "#FF5C4A" },
          500: { value: "#F54D2C" },
          600: { value: "#C93E23" },
          700: { value: "#9D2F1A" },
          800: { value: "#711F10" },
          900: { value: "#451008" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.100}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultBaseConfig, customConfig);