import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer", flexDirection: "row" });

const sizes = {
  sm: defineStyle({
    h: "74px",
    fontSize: "30px",
    px: "30px",
  }),
  xs: defineStyle({
    h: "50px",
    fontSize: "30px",
    px: "28px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      yellow_100: {
        bg: "yellow.100",
        color: "red.300",
      },
      blue_gray_100: {
        bg: "blue_gray.100",
        color: "black.900",
      },
      deep_orange_100: {
        bg: "deep_orange.100",
        color: "red.300",
      },
      blue_100: {
        bg: "blue.100",
        color: "blue.A200",
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["deep_orange_100"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Button;
