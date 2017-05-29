angular
  .module('movieApp')
  .factory('Actor', Actor);

Actor.$inject = ['$resource', 'API'];
function Actor($resource, API) {
  return new $resource(`${API}/actors/:id`, { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
