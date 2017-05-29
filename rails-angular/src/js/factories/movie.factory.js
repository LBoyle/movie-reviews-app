angular
  .module('movieApp')
  .factory('Movie', Movie);

Movie.$inject = ['$resource', 'API'];
function Movie($resource, API) {
  return new $resource(`${API}/movies/:id`, { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
