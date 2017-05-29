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
    vm.movie.actor_ids = [];
    vm.movie.actor_ids.push(vm.movie.actors_id);
    const movieObj = {
      'movie': vm.movie
    };
    console.log(movieObj);
    Movie
      .save(movieObj)
      .$promise
      .then((data) => {
        console.log(data);
        $state.go('moviesIndex');
      });
  }
}
