angular
  .module('movieApp')
  .controller('ActorsShowCtrl', ActorsShowCtrl);

ActorsShowCtrl.$inject = ['Actor', '$stateParams'];
function ActorsShowCtrl(Actor, $stateParams) {
  const vm = this;

  vm.actor = Actor.get($stateParams);
}
