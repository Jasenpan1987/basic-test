import React from "react";

interface IProps {
  foo: string;
  bar: string;
}

export const Header = ({ foo, bar }: IProps) => {
  return (
    <div>
      <h2>
        Header: {foo} {bar}
      </h2>
    </div>
  );
};
