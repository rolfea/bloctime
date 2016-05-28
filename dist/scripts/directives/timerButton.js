(function() {
  angular
    .module('bloctime')
    .directive("timerButton", TimerButtonDirective);

  function TimerButtonDirective() {
    return {
      controller: TimerButtonController, // how does Angular locate the appropriate controller?
      controllerAs: "$ctrl",
        restrict: "E",
      templateUrl: "/templates/directives/timer_button.html"
    };

    function TimerButtonController() {
        var vm = this;
      vm.buttonText = "Start";
      vm.handleClick = function() {
        vm.buttonText = vm.buttonText == "Start" ? "Reset" : "Start";
      };
    }
  }
})();
