module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "google"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "quotes": [
            "error",
            "double"
        ],
        "require-jsdoc": "off",
        "no-invalid-this": "off",
        "comma-dangle": [
            "error",
            {
                "arrays": "never",
                "objects": "never",
                "imports": "never",
                "exports": "never",
                "functions": "never"
            }
        ],
        "linebreak-style": [
            "off",
            "windows"
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "padded-blocks": [
            "error",
            "never"
        ],
        "max-len": "off",
        "no-unused-vars": [
            "off",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false
            }
        ],
        "space-before-function-paren": [
            "error",
            {
                "asyncArrow": "always",
                "anonymous": "never",
                "named": "never"
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1
            }
        ]
    }
};
