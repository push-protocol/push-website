"use strict";
exports.id = 7904;
exports.ids = [7904];
exports.modules = {

/***/ 833934:
/***/ ((module) => {



module.exports = csv
csv.displayName = 'csv'
csv.aliases = []
function csv(Prism) {
  // https://tools.ietf.org/html/rfc4180
  Prism.languages.csv = {
    value: /[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,
    punctuation: /,/
  }
}


/***/ })

};
;