const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

module.exports = {
    module: {
        rules: [
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'images',
                    limit: 8192,
                },
            },
            ],
        },
        ],
    },
};