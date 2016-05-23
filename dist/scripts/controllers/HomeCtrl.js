(function() {
  function HomeCtrl() {
    var vm = this;
    vm.timer = "25:00";
  }

  angular
    .module('bloctime')
    .controller('HomeCtrl', HomeCtrl)
})();
