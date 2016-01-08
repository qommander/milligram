Package.describe({
	name: 'milligram:milligram',
	version: '1.0.3',
	summary: 'A minimalist CSS framework.',
	git: 'https://github.com/milligram/milligram.git',
	documentation: 'readme.md'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.0');
	api.addFiles([
		'dist/milligram.css'
	], 'client');
});
