module.exports = {
	'src/**/*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix', 'git add'],
	'src/*.{css,scss,less,json,html,yml}': ['prettier --write', 'git add'],
	'*.{md,markdown}': ['prettier --write --parser markdown --prose-wrap never']
};
