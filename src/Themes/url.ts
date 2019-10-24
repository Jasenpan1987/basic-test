import { palette } from "./palette";
import { colors } from "./colors";

export const url = {
  root: {
    "&:link, &:focus": {
      color: palette.primary.main,
      textDecoration: "none"
    },
    "&:hover, &:active": {
      color: palette.primary.dark
    }
  }
};
