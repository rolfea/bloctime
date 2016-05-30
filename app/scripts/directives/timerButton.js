(function() {
  angular
    .module('bloctime')
    .directive("timerButton", TimerButtonDirective);

  function TimerButtonDirective() {
    return {
      controller: TimerButtonController,
      controllerAs: "$ctrl",
        restrict: "E",
      templateUrl: "/templates/directives/timer_button.html"
    };

    function TimerButtonController($interval) {
      var vm = this;
      vm.buttonText = "Start";
      vm.startingTime = 1500;
      vm.timerRemain = vm.startingTime;

      vm.handleClick = function() {
        if (vm.buttonText == "Start") {
          startTimer();
        } else {
          resetTimer();
        }
      };

      var startTimer = function() {
        vm.timerInterval = $interval(countdownTimer, 1000);
        vm.buttonText = "Reset";
      };

      var resetTimer = function() {
        $interval.cancel(vm.timerInterval);
        vm.buttonText = "Start";
        vm.timerRemain = vm.startingTime;
      }

      var countdownTimer = function() {
        if (vm.timerRemain > 0) {
          vm.timerRemain -= 1;
        } else {
         vm.timerRemain = "Work Session Completed!";
         $interval.cancel(vm.timerInterval);
        }
      };
    }
  }
})();
