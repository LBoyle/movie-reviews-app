angular
  .module('movieApp')
  .controller('MoviesIndexCtrl', MoviesIndexCtrl);

MoviesIndexCtrl.$inject = [];
function MoviesIndexCtrl() {
  const vm = this;

  vm.movies = 'Welcome to movies index page';
}
