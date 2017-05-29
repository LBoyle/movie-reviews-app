angular
  .module('movieApp')
  .controller('MoviesIndexCtrl', MoviesIndexCtrl);

MoviesIndexCtrl.$inject = ['Movie'];
function MoviesIndexCtrl(Movie) {
  const vm = this;

  console.log('Controller works');

  vm.movies = Movie.query();

  // Movie.query()
  // .then(movies => {
  //   vm.movies = movies;
  //   console.log(vm.movies);
  // });
}
