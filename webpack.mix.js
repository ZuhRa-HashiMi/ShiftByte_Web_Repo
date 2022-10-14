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
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();
//     <!-- <nav class="navbar navbar-expand-sm my-color navbar-dark fixed-top">
//     <a href="#" class="navbar-brand">
//         <img src="https://cdn4.vectorstock.com/i/1000x1000/89/93/z-letter-logo-design-brush-paint-stroke-vector-20688993.jpg" alt="" style="width: 80px; ">
//     </a>

//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//     </button>

//     <div class="collapse navbar-collapse" id="navbarNav">
//         <ul class="navbar-nav">
//             <li class="nav-item"><a class="nav-link" href="#">Logo</a></li>
//             <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
//             <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
//             <li class="nav-item"><a class="nav-link" href="#">Partners</a></li>
//             <li class="nav-item"><a class="nav-link" href="#">Insights</a></li>
//             <li class="nav-item"><a class="nav-link" href="#">Career</a></li>
//         </ul>

//     </div>
// </nav> -->