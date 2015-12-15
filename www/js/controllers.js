angular.module('starter.controllers', [])

.controller('TestCtrl', ["$scope", "QueryGenerator", "$log", "$http", function($scope, QueryGenerator, $log, $http) {
    $scope.query = function(keyword){ $http({
  method: 'JSONP',
  url: "https://api.bestbuy.com/v1/products((search="+ keyword +"))?apiKey=z8wap8rkradxspdsnppndagz&callback=JSON_CALLBACK&format=json"
}).then(function successCallback(response) {
                $log.log('response success');
                $log.log(Object.keys(response.data.products[0]));
                $log.log(response.data.products[0].name);
        $scope.responses = response.data.products;
        
                         });
};
    }
                         
    
])
.controller('LocationCtrl', ["$scope", function($scope) {}])
.controller('TabCtrl', ["$scope", "$rootScope", "$location", function($scope, $rootScope, $location) {
    return{
        loginCheck: function(){
            alert('hello');
            if($rootScope.isLoggedIn)
                {
                    
    $location.path('/login');
                }else{
                    $location.path('/login');
                }
        }
    }
}])

.controller('ChatsCtrl', ["$scope", "Chats", function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
}])

.controller('AccountCtrl', ["$scope", "$rootScope", function($scope, $rootScope) {
    this.login = function(){
        $rootScope.isLoggedIn = !$rootScope.isLoggedIn;
    }
  $scope.settings = {
    enableFriends: true
  };
}]);
