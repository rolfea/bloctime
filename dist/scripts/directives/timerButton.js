(function() {
  angular
    .module('bloctime')
    .directive('timerButton', timerButton);

  function timerButton() {
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
    console.log(scope);
    var workButton = $(element);

    scope.workButtonToggle = function() {
      console.log(scope);
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
