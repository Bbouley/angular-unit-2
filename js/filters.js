var appFilter = angular.module('filters', []);

appFilter.filter('kebab', function(){
  return function(input){
    var string = input.toString();
    return string.replace(/_/g, "-");
  };
});


