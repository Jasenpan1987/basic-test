import React, { ReactNode } from "react";
import Typography, { TypographyClassKey } from "@material-ui/core/Typography";
import classnames from "classnames";

interface IProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "srOnly"
    | "inherit"
    | undefined;
  className?: string;
  children: ReactNode;
}

export const MyTypography = ({ variant, className, children }: IProps) => {
  return (
    <Typography variant={variant} className={classnames(className)}>
      {children}
    </Typography>
  );
};
