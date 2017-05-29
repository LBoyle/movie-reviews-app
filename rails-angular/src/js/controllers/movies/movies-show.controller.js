angular
  .module('movieApp')
  .controller('MoviesShowCtrl', MoviesShowCtrl);

MoviesShowCtrl.$inject = ['Movie', '$stateParams'];
function MoviesShowCtrl(Movie, $stateParams) {
  const vm = this;

  vm.movie = Movie.get($stateParams);
}
