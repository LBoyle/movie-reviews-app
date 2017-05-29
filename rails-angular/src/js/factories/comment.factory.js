angular
  .module('movieApp')
  .factory('Comment', Comment);

Comment.$inject = ['$resource', 'API'];
function Comment($resource, API) {
  return new $resource(`${API}/comments/:id`, { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
