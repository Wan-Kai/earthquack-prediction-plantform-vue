module.exports = {
    "env": {
        "browser": true,
        "amd": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "legacyDecorators": true
        },
        "experimentalObjectRestSpread": true
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "no-console": 0,
        "no-unused-vars": "off"
    }
};