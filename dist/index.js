"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function leftPad(e,t,a){if(e+="",(t-=e.length)<=0)return e;if(a||0===a||(a=" ")," "===(a+="")&&t<10)return cache[t]+e;for(var r="";;){if(1&t&&(r+=a),!(t>>=1))break;a+=a}return r+e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(require("react")),leftPad_1=leftPad,cache=[""," ","  ","   ","    ","     ","      ","       ","        ","         "];const Footer=({name:name,age:age})=>React.createElement("div",null,React.createElement("h2",null,"Footer"),React.createElement("h3",null,name),React.createElement("h3",null,age)),Header=({foo:foo,bar:bar})=>React.createElement("div",null,React.createElement("h2",null,"LeftPad: ",leftPad_1("A",5,"*")),React.createElement("h2",null,"Header: ",foo," ",bar));exports.Footer=Footer,exports.Header=Header,exports.leftPad=leftPad_1;
//# sourceMappingURL=index.js.map
