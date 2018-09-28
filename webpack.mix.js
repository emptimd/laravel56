let mix = require('laravel-mix');

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

process.on('SIGTSTP', () => process.exit(1));
let mode = process.env.WEBPACK_SERVE ? 'development' : 'production';
mix.disableNotifications();

mix.browserSync('laravel56');

/*CSS Part*/
mix.styles([
    'public/css/bootstrap.min.css',
    'public/fonts/font-awesome/css/font-awesome.css',
    'public/css/offcanvas.min.css'
], 'public/css/vendor.css').version();

mix.sass('resources/assets/sass/app.scss', 'public/css').version();
mix.css('resources/assets/sass/desc_reader.css', 'public/css');
mix.css('resources/assets/sass/desc_reader_mobile.css', 'public/css');

/*JS Part*/
mix.scripts([
    'public/js/bootstrap.min.js',
    'public/js/offcanvas.js'
], 'public/js/vendor.js').version();

mix.js('resources/assets/js/app.js', 'public/js').version();
mix.js('resources/assets/js/push.js', 'public/js');
mix.js('resources/assets/js/sw.js', 'public/js');
// mix.js('resources/assets/js/catalog.js', 'public/js').version();
// mix.js('resources/assets/js/desc_reader.js', 'public/js');
// mix.js('resources/assets/js/desc_reader_mobile.js', 'public/js');