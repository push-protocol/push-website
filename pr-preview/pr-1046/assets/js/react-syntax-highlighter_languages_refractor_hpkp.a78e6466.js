"use strict";
exports.id = 2281;
exports.ids = [2281];
exports.modules = {

/***/ 618359:
/***/ ((module) => {



module.exports = hpkp
hpkp.displayName = 'hpkp'
hpkp.aliases = []
function hpkp(Prism) {
  /**
   * Original by Scott Helme.
   *
   * Reference: https://scotthelme.co.uk/hpkp-cheat-sheet/
   */
  Prism.languages.hpkp = {
    directive: {
      pattern:
        /\b(?:includeSubDomains|max-age|pin-sha256|preload|report-to|report-uri|strict)(?=[\s;=]|$)/i,
      alias: 'property'
    },
    operator: /=/,
    punctuation: /;/
  }
}


/***/ })

};
;