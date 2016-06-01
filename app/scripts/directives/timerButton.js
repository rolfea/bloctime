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

      vm.completedWorkSessions = 0;
      vm.onBreak = false;
      vm.workLength = TIMER_LENGTHS.WORK;
      vm.breakLength = TIMER_LENGTHS.BREAK;
      vm.longBreakLength = TIMER_LENGTHS.LONG_BREAK;

      vm.timerRemain = vm.workLength;


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
      }

      var countdownTimer = function() {
        if (vm.timerRemain > 0) {
          vm.timerRemain -= 1;
        } else {
          vm.buttonText = "Start";
          if (vm.onBreak == false && vm.completedWorkSessions < 3) {
            vm.completedWorkSessions += 1;
            vm.timerRemain = vm.breakLength;
            swapBreakStatusCancelTimerInterval();
          } else if (vm.onBreak == false && vm.completedWorkSessions == 3) {
            vm.completedWorkSessions = 0;
            vm.timerRemain = vm.longBreakLength;
            swapBreakStatusCancelTimerInterval();
          } else {
            vm.timerRemain = vm.workLength;
            swapBreakStatusCancelTimerInterval();
          }
        }
      };

      var swapBreakStatusCancelTimerInterval = function() {
        vm.onBreak = !vm.onBreak;
        $interval.cancel(vm.timerInterval);
      }
    }
  }

  var dingSound = new buzz.sound( "/assets/sounds/ding_sound.mp3", {
    preload: true
  });
})();
