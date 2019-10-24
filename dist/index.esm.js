import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import React from 'react';
import { Typography } from '@material-ui/core';
import Typography$1 from '@material-ui/core/Typography';
import classnames from 'classnames';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var typography = {
  MuiTypography: {
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
  }
};

var palette = {
  primary: {
    main: "#00497a",
    light: "#007acc",
    dark: "#013457",
    bg: "#fffde8",
    bgDark: "#fff9c6",
    contrastText: "#fff"
  },
  secondary: {
    main: "#00497A",
    light: "#aea6d0",
    dark: "#4d4290",
    bg: "#ece9f3",
    bgDark: "#cec9e2",
    contrastText: "#434343"
  },
  success: {
    main: "#428226",
    light: "#81c784",
    dark: "#3B7522",
    bg: "#e8f5e9",
    bgDark: "#c8e6c9",
    contrastText: "#fff"
  },
  warning: {
    main: "#fbc02d",
    light: "#ffeb3b",
    dark: "#f9a825",
    bg: "#fffde7",
    bgDark: "#fff9c4",
    contrastText: "#fff"
  },
  info: {
    main: "#286fbb",
    light: "#358ddb",
    dark: "#225eaa",
    bg: "#e3f1fa",
    bgDark: "#bbdbf4",
    contrastText: "#fff"
  },
  cyan: {
    main: "#0097a7",
    light: "#00bcd4",
    dark: "#00838f",
    bg: "#e0f7fa",
    bgDark: "#b2ebf2",
    contrastText: "#fff"
  },
  text: {
    primary: "#484848",
    secondary: "#171717",
    disabled: "rgba(0, 0, 0, 0.26)",
    hint: "rgba(0, 0, 0, 0.6)"
  },
  disabled: {
    main: "rgba(0, 0, 0, 0.12)",
    contrastText: "rgba(0, 0, 0, 0.26)"
  },
  error: {
    light: "#972323",
    main: "#972323",
    dark: "#972323",
    contrastText: "#972323"
  }
}; // main: "#484848",
// dark: "#001828",
// light: "#171717",
// contrastText: "#ffffff"

var url = {
  root: {
    "&:link, &:focus": {
      color: palette.primary.main,
      textDecoration: "none"
    },
    "&:hover, &:active": {
      color: palette.primary.dark
    }
  }
};

var checkbox = {
  root: {
    color: "#484848",
    "&$checked": {
      color: palette.primary.main
    }
  },
  colorPrimary: {
    color: "#484848",
    "&$checked": {
      color: palette.primary.main
    }
  },
  colorSecondary: {
    color: "#484848",
    "&$checked": {
      color: palette.primary.main
    }
  }
};

var globals = {
  MuiCssBaseline: {
    "@global": {
      "@font-face": "Inter",
      html: {
        fontSize: 10,
        htmlFontSize: 10
      }
    }
  }
};

var outlinedInput = {
  root: {
    "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
      borderColor: "#484848"
    },
    "&$focused:not($error)": {
      "& $notchedOutline": {
        border: "1px solid #484848"
      }
    },
    "&$error": {
      "& $notchedOutline": {
        border: "1px solid #972323"
      }
    }
  },
  notchedOutline: {
    border: "1px solid #b4b4b4",
    borderColor: "#b4b4b4"
  },
  disabled: {}
};

var formHelperText = {
  root: {
    fontSize: "1rem",
    color: "#484848",
    "&$error": {
      color: "#972323"
    }
  }
};

var inputLabel = {
  root: {
    fontSize: "1rem",
    color: "#b4b4b4",
    "&$error": {
      color: "#972323"
    }
  }
};

var createCustomizedTheme = function createCustomizedTheme(options) {
  var theme = createMuiTheme(_objectSpread2({}, options));
  return theme;
};

var themeWithCustoms = createCustomizedTheme({
  typography: {
    fontSize: 10,
    htmlFontSize: 10,
    fontFamily: "Inter"
  },
  palette: palette,
  props: {
    MuiFormControl: {
      variant: "outlined"
    }
  },
  overrides: _objectSpread2({}, typography, {}, globals, {
    MuiCheckbox: _objectSpread2({}, checkbox),
    MuiLink: _objectSpread2({}, url),
    MuiInputLabel: _objectSpread2({}, inputLabel),
    MuiFormHelperText: _objectSpread2({}, formHelperText),
    MuiOutlinedInput: _objectSpread2({}, outlinedInput)
  }),
  // breakpoints for Atlantis
  // Desktop: >= 1280px, eg: up("lg")
  // Tablet: 768px ~ 1279.95px, eg: down("md")
  // Mobile: 0 ~ 767.95px, eg: down("sm")
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1280,
      xl: 1920
    }
  }
});

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

var MyTypography = function MyTypography(_ref) {
  var variant = _ref.variant,
      className = _ref.className,
      children = _ref.children;
  return React.createElement(Typography$1, {
    variant: variant,
    className: classnames(className)
  }, children);
};

var themeWithCustoms$1 = themeWithCustoms;

export { Footer, Header, MyTypography, themeWithCustoms$1 as themeWithCustoms };
