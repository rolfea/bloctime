function() {
  angular
    .module('bloctime')
    .directive("timerButton", TimerButtonDirective);

  function TimerButtonDirective() {
    return {
      controller: TimerButtonController, // should I place the buttonController in another file?
      controllerAs: "$ctrl",
        restict: "E",
      templateUrl: "timer-button.html"
    };

    function TimerButtonController() {
      var vm = this;
      vm.buttonText = "Start";
      vm.handleClick = function() {
        vm.buttonText = vm.buttonText == "A" ? "B" : "A";
      };
    }
  }
