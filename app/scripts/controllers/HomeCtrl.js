(function() {
  function HomeCtrl() {
    var vm = this;
    vm.timer = "25:00";
    vm.timerButton = "Start";
  }

  angular
    .module('bloctime')
    .controller('HomeCtrl', HomeCtrl)
})();
