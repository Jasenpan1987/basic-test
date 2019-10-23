'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var core = require('@material-ui/core');

var Footer = function Footer(_ref) {
  var name = _ref.name,
      age = _ref.age;
  return React.createElement("div", null, React.createElement(core.Typography, {
    variant: "h2",
    color: "primary"
  }, "Footer"), React.createElement(core.Typography, {
    variant: "h3",
    color: "primary"
  }, name), React.createElement(core.Typography, {
    variant: "h4",
    color: "primary"
  }, age));
};

var Header = function Header(_ref) {
  var foo = _ref.foo,
      bar = _ref.bar;
  return React.createElement("div", null, React.createElement("h2", null, "Header: ", foo, " ", bar));
};

exports.Footer = Footer;
exports.Header = Header;
