import React from "react";

interface IProps {
  name: string;
  age: string;
}

export const Footer = ({ name, age }: IProps) => {
  return (
    <div>
      <h2>Footer</h2>
      <h3>{name}</h3>
      <h3>{age}</h3>
    </div>
  );
};
