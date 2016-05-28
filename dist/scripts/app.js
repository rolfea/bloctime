(function() {
  angular
    .module('bloctime', ['ui.router', 'firebase'])
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
