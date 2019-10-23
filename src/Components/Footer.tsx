import React from "react";
import { Typography } from "@material-ui/core";

interface IProps {
  name: string;
  age: string;
}

export const Footer = ({ name, age }: IProps) => {
  return (
    <div>
      <Typography variant="h2" color="primary">
        Footer
      </Typography>
      <Typography variant="h3" color="primary">
        {name}
      </Typography>
      <Typography variant="h4" color="primary">
        {age}
      </Typography>
    </div>
  );
};
