var elixir = require('laravel-elixir');
require('laravel-elixir-angular');
elixir(function(mix) {
    mix.sass('app.scss');
    mix.scripts(['angular.min.js', 'script.js']);
});
