angular
  .module('movieApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [];
function MainCtrl() {
  const vm = this;

  vm.message = 'Welcome to angular';
}
