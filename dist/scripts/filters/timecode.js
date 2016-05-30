(function() {
  angular
    .module('bloctime')
    .filter('timecode', timecode);

  function timecode() {
    return function(seconds) {
      if (typeof seconds === 'string') {
        return seconds;
      }

      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = seconds % 60;

      var output = minutes + ':';

      if (remainingSeconds < 10) {
        remainingSeconds = '0' + remainingSeconds;
      }

      output += remainingSeconds;

      return output;
    };
  }
})();
