angular
  .module('movieApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/home.html'
    })
    .state('moviesIndex', {
      url: '/movies',
      templateUrl: 'js/views/movies/index.html',
      controller: 'MoviesIndexCtrl as movies'
    })
    .state('moviesShow', {
      url: '/movies/:id',
      templateUrl: 'js/views/movies/show.html',
      controller: 'MoviesShowCtrl as movies'
    })
    .state('actorsShow', {
      url: '/actors/:id',
      templateUrl: 'js/views/actors/show.html',
      controller: 'ActorsShowCtrl as actors'
    });

  $urlRouterProvider.otherwise('/');
}
