// import { blue, green, purple, yellow } from "@material-ui/core/colors";
import createMuiTheme, {
  ThemeOptions,
  Theme
} from "@material-ui/core/styles/createMuiTheme";
import { typography, ITypography } from "./typography";
import { palette, ICustomPalette } from "./palette";
import { colors, colorCodes } from "./colors";
import { url } from "./url";
import { checkbox } from "./checkbox";
import { globals } from "./global";
import { outlinedInput } from "./outlinedInput";
import { formHelperText } from "./formHelperText";
import { inputLabel } from "./inputLabel";

export interface ITheme extends Theme {
  palette: ICustomPalette;
}

const createCustomizedTheme = (options: ThemeOptions) => {
  const theme = createMuiTheme({
    ...options
  });

  return theme;
};

export const themeWithCustoms = createCustomizedTheme({
  typography: {
    fontSize: 10,
    htmlFontSize: 10,
    fontFamily: "Inter"
  },
  palette,
  props: {
    MuiFormControl: {
      variant: "outlined"
    }
  },
  overrides: {
    ...typography,
    ...globals,
    MuiCheckbox: {
      ...checkbox
    },
    MuiLink: {
      ...url
    },
    MuiInputLabel: {
      ...inputLabel
    },
    MuiFormHelperText: {
      ...formHelperText
    },
    MuiOutlinedInput: {
      ...outlinedInput
    }
  },
  // breakpoints for Atlantis
  // Desktop: >= 1280px, eg: up("lg")
  // Tablet: 768px ~ 1279.95px, eg: down("md")
  // Mobile: 0 ~ 767.95px, eg: down("sm")
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1280,
      xl: 1920
    }
  }
});
