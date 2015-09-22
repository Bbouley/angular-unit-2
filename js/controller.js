app.controller('HomeController', function($scope){
  $scope.message = 'hello, is it me you\'re looking for?';
  $scope.filterTest =  9999;
  $scope.camelFilter1 = 'testing_this';
  $scope.camelFilter2 = 'testing-also-this-thing';
});

app.controller('DogsController', function($scope){
  $scope.message = 'Dogs Dogs Dogs';
});

app.controller('apiController', function ($scope, $http){
  $scope.test = 'Success';
  $http.get('https://api.github.com/zen').then(function(data){
    console.log(data);
    $scope.zenData = data.data;
  });
  $http.get('https://itunes.apple.com/search?term=jack+johnson').then(function(data){
    console.log(data);
    $scope.itunes = data.data;
  });
});


