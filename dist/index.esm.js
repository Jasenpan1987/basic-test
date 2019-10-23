import React from 'react';
import { Typography } from '@material-ui/core';

var Footer = function Footer(_ref) {
  var name = _ref.name,
      age = _ref.age;
  return React.createElement("div", null, React.createElement(Typography, {
    variant: "h2",
    color: "primary"
  }, "Footer"), React.createElement(Typography, {
    variant: "h3",
    color: "primary"
  }, name), React.createElement(Typography, {
    variant: "h4",
    color: "primary"
  }, age));
};

var Header = function Header(_ref) {
  var foo = _ref.foo,
      bar = _ref.bar;
  return React.createElement("div", null, React.createElement("h2", null, "Header: ", foo, " ", bar));
};

export { Footer, Header };
