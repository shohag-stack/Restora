import { createSystem, defaultBaseConfig, defineConfig ,} from "@chakra-ui/react";
import { buttonRecipe } from "./recipe/button.recipe"

const customConfig = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: "Inter, system-ui, sans-serif",
    },
    cssVarsRoot: ":where(:root, :host)",
    cssVarsPrefix: "ck",

    'h1': {
      fontSize: 50,
      fontWeight: '400',
    }, 
    'h2': {
      fontSize: 30,
      fontWeight: '400',
    },
    'h3': {
      fontSize: 20,
      fontWeight: '400',
    },
    'h4': {
      fontSize: 18,
      fontWeight: '400',
    },
    'h5': {
      fontSize: 16,
      fontWeight: '400',
    }
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
          500: { value: "#F54D2C" }, // Your primary color
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

    recipes: {
      Button: buttonRecipe,
    },
  },
});

export const system = createSystem(defaultBaseConfig, customConfig);