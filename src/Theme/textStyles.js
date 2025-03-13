import { defineTextStyles } from "@chakra-ui/react"

export const textStyles = defineTextStyles({
  body: {
    description: "The text style - used in all over the styles",
    value: {
        fontFamily: "Inter, system-ui, sans-serif",
    },
  },

  text: {
    description: "The text style - used in all over the paragraph styles",
    value: {
        fontFamily: "Inter, system-ui, sans-serif",
        margin: '0px',
        padding: '0px',
        fontSize: '14px'
    },
  },
})