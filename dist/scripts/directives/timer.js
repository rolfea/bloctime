(function() {
  angular
    .module('bloctime')
    .directive('timer', TimerDirective);

    function TimerDirective() {
      return {
        controller: timerController,
        controllerAs: '$ctrl',
        restrict: 'E',
        templateUrl: '/templates/directives/timer.html'
      };

      function TimerController() {
        var vm = this;
        // need milliseconds to regular time logic here
        // then interval call every second
        // data binding shoul update the view from here
      }
    }
})();
