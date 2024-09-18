"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[5208],{

/***/ 573776:
/***/ ((module) => {



module.exports = hoon
hoon.displayName = 'hoon'
hoon.aliases = []
function hoon(Prism) {
  Prism.languages.hoon = {
    comment: {
      pattern: /::.*/,
      greedy: true
    },
    string: {
      pattern: /"[^"]*"|'[^']*'/,
      greedy: true
    },
    constant: /%(?:\.[ny]|[\w-]+)/,
    'class-name': /@(?:[a-z0-9-]*[a-z0-9])?|\*/i,
    function: /(?:\+[-+] {2})?(?:[a-z](?:[a-z0-9-]*[a-z0-9])?)/,
    keyword:
      /\.[\^\+\*=\?]|![><:\.=\?!]|=[>|:,\.\-\^<+;/~\*\?]|\?[>|:\.\-\^<\+&~=@!]|\|[\$_%:\.\-\^~\*=@\?]|\+[|\$\+\*]|:[_\-\^\+~\*]|%[_:\.\-\^\+~\*=]|\^[|:\.\-\+&~\*=\?]|\$[|_%:<>\-\^&~@=\?]|;[:<\+;\/~\*=]|~[>|\$_%<\+\/&=\?!]|--|==/
  }
}


/***/ })

}]);