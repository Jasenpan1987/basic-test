import { palette } from "./palette";
import { colors } from "./colors";

export const outlinedInput = {
  root: {
    "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
      borderColor: "#484848"
    },
    "&$focused:not($error)": {
      "& $notchedOutline": {
        border: "1px solid #484848"
      }
    },
    "&$error": {
      "& $notchedOutline": {
        border: "1px solid #972323"
      }
    }
  },
  notchedOutline: {
    border: "1px solid #b4b4b4",
    borderColor: "#b4b4b4"
  },
  disabled: {}
};
