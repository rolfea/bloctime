(function() {
  angular
    .module('bloctime', ['ui.router', 'firebase'])
    .constant("TIMER_LENGTHS", {
      "WORK": 1500,
      "BREAK": 300
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
})();
