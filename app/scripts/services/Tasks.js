(function() {
  angular
    .module('bloctime')
    .factory('completedTasksFactory', ['$firebaseArray', Tasks]);

  function Tasks($firebaseArray) {
    var firebaseRef = new Firebase('https://glaring-heat-8178.firebaseio.com')

    var tasks = $firebaseArray(firebaseRef);

    return {
      all: tasks
    };
  }
})();
