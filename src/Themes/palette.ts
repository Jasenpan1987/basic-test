import { Palette, PaletteColor } from "@material-ui/core/styles/createPalette";

export interface ICustomPalette extends Palette {
  success: PaletteColor;
  cyan: PaletteColor;
  disabled: PaletteColor;
}

export const palette = ({
  primary: {
    main: "#00497a",
    light: "#007acc",
    dark: "#013457",
    bg: "#fffde8",
    bgDark: "#fff9c6",
    contrastText: "#fff"
  },
  secondary: {
    main: "#00497A",
    light: "#aea6d0",
    dark: "#4d4290",
    bg: "#ece9f3",
    bgDark: "#cec9e2",
    contrastText: "#434343"
  },
  success: {
    main: "#428226",
    light: "#81c784",
    dark: "#3B7522",
    bg: "#e8f5e9",
    bgDark: "#c8e6c9",
    contrastText: "#fff"
  },
  warning: {
    main: "#fbc02d",
    light: "#ffeb3b",
    dark: "#f9a825",
    bg: "#fffde7",
    bgDark: "#fff9c4",
    contrastText: "#fff"
  },
  info: {
    main: "#286fbb",
    light: "#358ddb",
    dark: "#225eaa",
    bg: "#e3f1fa",
    bgDark: "#bbdbf4",
    contrastText: "#fff"
  },
  cyan: {
    main: "#0097a7",
    light: "#00bcd4",
    dark: "#00838f",
    bg: "#e0f7fa",
    bgDark: "#b2ebf2",
    contrastText: "#fff"
  },
  text: {
    primary: "#484848",
    secondary: "#171717",
    disabled: "rgba(0, 0, 0, 0.26)",
    hint: "rgba(0, 0, 0, 0.6)"
  },
  disabled: {
    main: "rgba(0, 0, 0, 0.12)",
    contrastText: "rgba(0, 0, 0, 0.26)"
  },
  error: {
    light: "#972323",
    main: "#972323",
    dark: "#972323",
    contrastText: "#972323"
  }
} as unknown) as ICustomPalette;
// main: "#484848",
// dark: "#001828",
// light: "#171717",
// contrastText: "#ffffff"
