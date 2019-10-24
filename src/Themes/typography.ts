import { palette } from "./palette";
import { Overrides } from "@material-ui/core/styles/overrides";
import {
  Typography,
  TypographyStyle
} from "@material-ui/core/styles/createTypography";

export interface ITypography extends Typography {
  h7: TypographyStyle;
}

export const typography: Overrides = {
  MuiTypography: ({
    h1: {
      fontSize: "3.4rem",
      fontWeight: 700,
      color: "#434343"
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#434343"
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#434343"
    },
    h4: {
      fontSize: "1.8rem",
      fontWeight: 700,
      color: "#434343"
    },
    h5: {
      fontSize: "1.6rem",
      fontWeight: 600,
      color: "#434343"
    },
    h6: {
      fontSize: "1.4rem",
      fontWeight: 700,
      color: "#434343"
    },
    subtitle1: {
      fontSize: "1.6rem",
      fontWeight: 400,
      color: "#434343"
    },
    body1: {
      fontSize: "1.6rem",
      fontWeight: 400,
      color: "#434343"
    },
    body2: {
      fontSize: "1.4rem",
      fontWeight: 400,
      color: "#434343"
    },
    caption: {
      fontSize: "1.2rem",
      fontWeight: 400,
      color: "#434343"
    }
  } as unknown) as Typography
};
