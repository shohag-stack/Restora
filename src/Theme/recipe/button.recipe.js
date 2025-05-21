import { defineRecipe } from "@chakra-ui/react"

export const buttonRecipe = defineRecipe({
  base: {
    borderRadius: "100px", // Rounded corners
          padding: "12px 24px", // More padding
          margin: "8px 0", // Vertical spacing
          fontSize: "16px",
          fontWeight: "bold",
          border: "2px solid transparent", // Remove black border
          _focus: {
            boxShadow: "0 0 0 0px {colors.brand.focusRing}",
          },
  },
  variants: {
    visual: {
      solid: {
        bg: "#F54D2C",
        color: "white",
        _hover: {
            bg: "#DD4324",
          } },
      outline: { borderWidth: "1px", bg: "#EDEDED", borderColor:"#E5E5E5", color:"#898989", fontWeight:"600",  _hover: {
        bg: "#E4E4E4",
        color: "#898989"
      }, },
    },
    size: {
      sm: { padding: "8px", fontSize: "12px" },
      lg: { padding: "12px", fontSize: "24px" },
    },

    defaultVariants: {
        visual: "solid",
        size: "lg",
      },
  },
})
