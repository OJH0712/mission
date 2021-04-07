module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/typescript/recommended', '@vue/prettier', '@vue/prettier/@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		camelcase: 'off',
		'@typescript-eslint/camelcase': ['off', { properties: 'always' }],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'no-console': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': [
			'error',
			{},
			{
				usePrettierrc: true,
				tabWidth: 2,
				useTabs: false
			}
		]
	}
}
