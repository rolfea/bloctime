(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: fales
      });

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/home.html'
      });
  }

  angular
    .module('bloctime', ['ui-router', 'firebase'])
    .config(config);
})();