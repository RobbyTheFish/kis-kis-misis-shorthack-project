import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({});

const sizes = {
  xs: defineStyle({
    track: {
      w: "180px",
      p: "4px",
    },
    thumb: {
      w: "90px",
      h: "90px",
      _checked: {
        transform: "translateX(94px)",
      },
    },
  }),
};

const Switch = defineStyleConfig({
  baseStyle,

  sizes,
  defaultProps: {
    size: "xs",
  },
});
export default Switch;
