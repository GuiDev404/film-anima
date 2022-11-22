import { extendTheme, defineStyleConfig, color  } from "@chakra-ui/react";

const fonts = {
  heading: "Roboto, Inter, sans-serif",
  body: "Roboto, Inter, sans-serif",
};

const colors = {
  green: {
    50: "#E9FCEE",
    100: "#C1F6D0",
    200: "#98F0B1",
    300: "#70EA93",
    400: "#48E574",
    500: "#20DF56",
    600: "#1AB245",
    700: "#138634",
    800: "#0D5922",
    900: "#062D11",
  },
  gray: {
    50: "#fafafa",
    100: "#f1f1f1",
    200: "#e7e7e7",
    300: "#d4d4d4",
    400: "#adadad",
    500: "#7f7f7f",
    600: "#545454",
    700: "#373737",
    800: "#202020",
    900: "#191919",
  },
};

const config = {
  initialColorMode: localStorage.getItem("chakra-ui-color-mode") || "dark",
  useSystemColorMode: true,
};

const Link = defineStyleConfig({
  baseStyle: ({ theme })=> ({
    fontWeight: 'bold',
    color: theme.colors.gray[500],
    _hover: {
      textDecoration: 'none',
      color: theme.colors.green[300]
    }
  }),
}) 

const Button = defineStyleConfig({
  defaultProps: {
    colorScheme: {
     
    }
  }
})


const theme = extendTheme({
  config,
  fonts,
  colors,
  components: {
    Link,
    // Button
  }
});

export default theme;
