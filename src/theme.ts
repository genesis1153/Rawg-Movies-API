import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const fonts = {
    body: "Sulphur point",
    heading: "Sulphur point",
};

const colors = {
    gray: {
        50: "#f9f9f9",
        100: "#ededed",
        200: "#d3d3d3",
        300: "#b3b3b3",
        400: "#A0A0A0",
        500: "#898989",
        600: "#636363",
        700: "#202020",
        800: "#121212",
        900: "#111",
    },
};

const config: ThemeConfig = {
    initialColorMode: "light",
};

const theme = extendTheme({ config, fonts, colors });

export default theme;
