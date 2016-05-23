(function() {
  angular
    .module('bloctime')
    .directive('timerButton', timerButton);

  function timerButton(event) {
    return {
      restrict: 'A',
      scope: { },
      link: linkFunction
    };
  }

  function linkFunction(scope, element, attributes) {
    // default values
    scope.buttonState = null;
    scope.buttonText = "Start";
    scope.workSessionCounter = 0; // This will count the number of work sessions to trigger breaks later

    var workButton = $(element);

    scope.workButtonToggle = function() {
      var buttonState = scope.buttonState;
      if (buttonState == null || buttonState == "break") {
        scope.buttonText = "Start"
        scope.buttonState = "working";
      } else if (buttonState == "working") {
        scope.buttonText = "Reset Timer";
        scope.buttonState = "break";
      }
    }
  }
})();
