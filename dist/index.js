'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

const Footer = ({ name, age }) => {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Footer"),
        React.createElement("h3", null, name),
        React.createElement("h3", null, age)));
};

const Header = ({ foo, bar }) => {
    return (React.createElement("div", null,
        React.createElement("h2", null,
            "Header: ",
            foo,
            " ",
            bar)));
};

exports.Footer = Footer;
exports.Header = Header;
//# sourceMappingURL=index.js.map
