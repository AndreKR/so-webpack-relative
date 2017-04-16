module.exports = function (env) {

	process.env.NODE_ENV = env.live ? 'production' : '';

	return [
		{
			entry: './src/js/main.js',
			output: {
				path: __dirname,
				filename: 'assets/js/bundle.js'
			},
			module: {
				rules: [
					{
						test: /\.vue$/,
						use: {
							loader: 'vue-loader'
						}
					},
					{
						// for images used in .vue components
						test: /\.jpg/,
						use: {
							loader: 'file-loader',
							options: {
								name: 'assets/images/[hash].[ext]'
							}
						}
					}
				]
			}
		}
	];
};
