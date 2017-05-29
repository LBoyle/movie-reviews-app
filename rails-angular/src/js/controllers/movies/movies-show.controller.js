angular
  .module('movieApp')
  .controller('MoviesShowCtrl', MoviesShowCtrl);

MoviesShowCtrl.$inject = ['Movie', 'Comment', '$stateParams'];
function MoviesShowCtrl(Movie, Comment, $stateParams) {
  const vm = this;

  Movie.get($stateParams)
  .$promise
  .then(movie => {
    // console.log(movie);
    vm.movie = movie;
    // console.log(Movie.get(movie.id));
    vm.newComment.movie = movie;
  });

  vm.newComment = {
    author: '',
    content: ''
  };

  vm.addComment = () => {
    Comment
      .save(vm.newComment)
      .$promise
      .then(comment => {
        console.log(comment);
      });
  };
}
