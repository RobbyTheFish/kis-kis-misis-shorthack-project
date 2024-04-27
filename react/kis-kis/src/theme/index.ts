import { Text, Heading, Button, Container } from "./components";
import { colors, fonts } from "./foundations";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors,
  fonts,
  components: { Text, Heading, Button, Container },
});
export default theme;
