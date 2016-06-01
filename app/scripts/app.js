(function() {
  angular
    .module('bloctime', ['ui.router', 'firebase'])
    .constant("TIMER_LENGTHS", {
      "WORK": 2,
      "BREAK": 1,
      "LONG_BREAK": 4
    })
    .config(config);

  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl',
        controllerAs: 'home',
        templateUrl: '/templates/home.html'
      });
  }

  $scope.$watch('timerRemain', function(newVal, oldVal) {
    console.log(newVal, oldVal);
  });
})();
