var appFilter = angular.module('filters', []);

appFilter.filter('kebab', function(){
  return function(input){
    var string = input.toString();
    return string.replace(/_/g, "-");
  };
});

appFilter.filter('camel', function(){
  return function(input){
    var inputString = input.toString();
    var withSpace = inputString.replace(/[_-]/g, ' ');
    console.log(withSpace);
    var allCapitals =  withSpace.replace(/\b./g, function(x){
      return x.toUpperCase();
    });
    return allCapitals.replace(/ /g, '').replace(/\b./g, function(y){
        return y.toLowerCase();
    });
  };
});

appFilter.filter('pigLatin', function(){
  return function(input){
    var inputString = input.toString();
    var words = inputString.split(' ');
    for (var i = 0; i < words.length; i++) {
      var indWords = words[i].split('');
    }

  };
});
