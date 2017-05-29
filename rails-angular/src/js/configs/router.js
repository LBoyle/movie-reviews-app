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
    });

  $urlRouterProvider.otherwise('/');
}
