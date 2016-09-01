const config = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "globals": {}, // added programatically later
  "rules": {
    "prefer-stateless-function": 0,
    "import/no-unresolved": [2, { ignore: ['meteor/*'] }], // ignore meteor imports
    "no-unused-expressions": 0, // allows to do x && x();
    "no-underscore-dangle": 0, // allows x._bla
    "one-var": 0, // allow const x = 1, y = 2;
    "consistent-return": 0, // allow () => { if (x) { return; } ... }
    "no-empty": 0, // allow {} // used for error catching like try {...} catch (e) {}
    "react/wrap-multilines": 0, // allow normal html syntax
    "jsx-a11y/img-has-alt": 0, // allow no alt attribute on images
    "global-require": 0,
    "no-param-reassign": 1, // allow to change input parameters
    "semi": 0
  },
  "parserOptions":{
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
  },
  globals: {
    Meteor: true,
    FlowRouter: true,
  },
};

module.exports = config;
