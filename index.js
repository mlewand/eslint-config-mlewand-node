module.exports = {
	"env": {
		"es2020": true,
		"node": true
	},
	"globals": {},
	"rules": {
		"camelcase": [ "error" ],
		"no-multi-spaces": [ "error", {
			exceptions: {
				"Property": false
			}
		} ],
		"no-multiple-empty-lines": "error",
		"no-else-return": "warn",
		"no-empty": "warn",
		"no-implicit-coercion": [ "warn", { "boolean": false }],

		"array-bracket-spacing": [
			2,
			"always"
		],
		"block-scoped-var": 2,
		"brace-style": [
			"error",
			"1tbs"
		],
		"comma-style": [
			2,
			"last"
		],
		"curly": [
			2,
			"all"
		],
		"dot-notation": [
			2
		],
		"eol-last": [
			"warn",
			"never"
		],
		"indent": [
			1,
			"tab",
			{
				"SwitchCase": 1
			}
		],
		"key-spacing": [
			2,
			{
				"beforeColon": false,
				"afterColon": true
			}
		],
		"keyword-spacing": [
			2,
			{}
		],
		"linebreak-style": [
			2,
			"unix"
		],
		"max-len": [
			2,
			200
		],
		"new-cap": 0,
		"no-caller": "error",
		"no-cond-assign": [
			2,
			"except-parens"
		],
		"no-debugger": "error",
		"no-duplicate-case": "error",
		"no-eq-null": 2,
		"no-eval": 2,
		"no-extra-semi": "error",
		"no-invalid-this": 0,
		"no-irregular-whitespace": 2,
		"no-loop-func": 2,
		"no-mixed-spaces-and-tabs": 2,
		"no-multi-str": 2,
		"no-spaced-func": 2,
		"no-trailing-spaces": 2,
		"no-undef": 2,
		"no-unused-expressions": 2,
		"no-unused-vars": 2,
		"no-use-before-define": [
			2,
			{
				"functions": false
			}
		],
		"no-whitespace-before-property": 2,
		"no-with": 2,
		"object-curly-spacing": [
			"error",
			"always"
		],
		"operator-linebreak": [
			2,
			"after"
		],
		"padded-blocks": [
			"error",
			"never"
		],
		"object-property-newline": "error",
		"quote-props": [
			"error",
			"as-needed"
		],
		"quotes": [
			2,
			"single",
			{
				"avoidEscape": true
			}
		],
		"semi": [
			"error",
			"always"
		],
		"space-before-blocks": [
			2,
			"always"
		],
		"space-before-function-paren": [
			2,
			"never"
		],
		"space-in-parens": [
			2,
			"always"
		],
		"space-infix-ops": 2,
		"space-unary-ops": [
			2,
			{
				"words": false,
				"nonwords": false
			}
		],
		"strict": [
			2,
			"global"
		],
		"valid-typeof": "error",
		"wrap-iife": [
			2,
			"inside"
		],
		"yoda": [
			2,
			"never"
		]
	}
};