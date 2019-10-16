import React from 'react';

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

export { Footer, Header };
//# sourceMappingURL=index.esm.js.map
