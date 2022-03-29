module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true
	},
	parser: 'babel-eslint',
	extends: [
		'eslint:recommended',
		'airbnb-base',
		'plugin:react/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:jsx-a11y/recommended',
		'prettier'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 11,
		sourceType: 'module'
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	plugins: ['react', 'react-hooks', 'prettier'],
	rules: {
		'no-underscore-dangle': ['error', { allow: ['_id'] }],
		'class-methods-use-this': 0,
		'no-console': 0,
		'no-param-reassign': 0,
		'react/prop-types': 0,
		quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				parser: 'flow',
				semi: true,
				trailingComma: 'none',
				endOfLine: 'auto'
			}
		],
		camelcase: 'off',
		'import/no-anonymous-default-export': [2, { allowAnonymousFunction: true }],
		'arrow-body-style': 'off'
		// 'prefer-arrow-callback': 'off'
	},
	ignorePatterns: [
		'tests/*',
		'public/*',
		'src/js/*',
		'src/fonts/*',
		'src/css/*',
		'build/*',
		'node_modules/*'
	]
};
