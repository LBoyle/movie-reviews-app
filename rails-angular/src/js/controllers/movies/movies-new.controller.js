angular
  .module('movieApp')
  .controller('MoviesNewCtrl', MoviesNewCtrl);

MoviesNewCtrl.$inject = ['Movie', 'Actor', '$state'];
function MoviesNewCtrl(Movie, Actor, $state) {
  const vm = this;

  vm.test = 'Hello';
  vm.actors = Actor.query();

  vm.create = createMovie;
  function createMovie() {
    Movie
      .save(vm.movie)
      .$promise
      .then(() => {
        console.log(vm.movie);
        $state.go('moviesIndex');
      });
  }
}
