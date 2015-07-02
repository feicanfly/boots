var elixir = require('laravel-elixir');
require('laravel-elixir-angular');
require('laravel-elixir-livereload');

elixir(function(mix) {
    mix.sass('app.scss');
    mix.scripts(['angular.min.js', 'script.js']);
    mix.livereload();
});
