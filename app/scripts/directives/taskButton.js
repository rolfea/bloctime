(function() {
  angular
    .module('bloctime')
    .directive("taskButton", TaskButtonDirective);

  function TaskButtonDirective() {
    return {
      controller: TaskButtonController,
      controllerAs: "$ctrl",
      restrict: "E",
      templateUrl: "/templates/directives/task_button.html",
      scope: {}
    };

    function TaskButtonController(completedTasksFactory) {
      var vm = this;

      vm.completedTask = "Test";

      vm.allTasks = completedTasksFactory.all;

      vm.saveTaskAsCompleted = function() {
        completedTasksFactory.all.$add({"task":vm.completedTask});
      }
    }
  }
})();
