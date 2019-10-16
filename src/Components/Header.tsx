import React from "react";
import leftPad from "left-pad";

interface IProps {
  foo: string;
  bar: string;
}

export const Header = ({ foo, bar }: IProps) => {
  return (
    <div>
      <h2>LeftPad: {leftPad("A", 5, "*")}</h2>
      <h2>
        Header: {foo} {bar}
      </h2>
    </div>
  );
};
