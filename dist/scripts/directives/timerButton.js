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

    function TimerButtonController($interval, TIMER_LENGTHS) {
      var vm = this;

      vm.buttonText = "Start";

      vm.onBreak = false;
      vm.workLength = TIMER_LENGTHS.WORK;
      vm.breakLength = TIMER_LENGTHS.BREAK;

      vm.timerRemain = vm.onBreak ? vm.breakLength : vm.workLength;


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
        vm.timerRemain = vm.onBreak ? vm.breakLength : vm.workLength;
      }

      var countdownTimer = function() {
        if (vm.timerRemain > 0) {
          vm.timerRemain -= 1;
        } else {
         vm.timerRemain = vm.onBreak ? "Back to Work!" : "Work Session Completed!";
         vm.onBreak = !vm.onBreak;
         $interval.cancel(vm.timerInterval);
        }
      };
    }
  }
})();
