angular.module('starter.controllers', [])

.controller('TestCtrl', ["$scope", "$log", "$http", function($scope, $log, $http) {
    $scope.query = function(keyword){ $http({
  method: 'JSONP',
  url: "https://api.bestbuy.com/v1/products((search="+ keyword +"))?apiKey=z8wap8rkradxspdsnppndagz&callback=JSON_CALLBACK&format=json"
}).then(function successCallback(response) {
                $log.log('response success');
                $log.log(Object.keys(response.data.products[0]));
                $log.log(response.data.products[0].name);
        $scope.responses = response.data.products;
    },
        function errorCallback(response) {
                $log.log(response);
                $log.log('response fail');
                $scope.responses = 'response';
  }
       );
};
    }
                         
    
])
.controller('LocationCtrl', ["$scope", "$log", "$http", "$ionicSlideBoxDelegate", "QueryGenerator", function($scope, $log, $http, $ionicSlideBoxDelegate, QueryGenerator) {
    this.keyword;
    this.test = function(){
        $log.log($scope.keyword);
      alert('working');  
    };
    this.query = function(keyword){
        $scope.responseObject = QueryGenerator.locationSearch(keyword, $scope);
        $ionicSlideBoxDelegate.update();
        $log.log('query fired');
//            "https://api.bestbuy.com/v1/stores((area(" + latitude + "," + longitude + "," + radius + ")))?apiKey=z8wap8rkradxspdsnppndagz&callback=JSON_CALLBACK&format=json"
        //before query factory
//            $http({
//            method: 'JSONP',
//            url: "https://api.bestbuy.com/v1/stores((city="+ keyword +"))?apiKey=z8wap8rkradxspdsnppndagz&callback=JSON_CALLBACK&format=json"
//                
//        }).then(
//            function successCallback(response) {
//                $log.log('BestBuy response success');
//                //db5his
//                $log.log(Object.keys(response.data.stores[0]));
//    //            $log.log(response.data.products[0].name);
//                //db4hie
//                this.responses = response.data.stores;
//                $log.log($scope.responses[0].name);
//            },
//            function errorCallback(response) {
//                $log.log(response);
//                $log.log('BestBuy response fail');
//                $scope.responses = 'response';
//            });
    };
}
])

.controller('ProductsCtrl', ["$scope", "$log", "$http", "QueryGenerator", function($scope, $log, $http, QueryGenerator) {
    this.keyword;
    this.query = function(keyword){
        $scope.responseObject = QueryGenerator.productSearch(keyword, $scope);
        $log.log('query fired');
        
        //working
//            $http({
//            method: 'JSONP',
//            url: "https://api.bestbuy.com/v1/products((search="+ keyword +"))?apiKey=z8wap8rkradxspdsnppndagz&callback=JSON_CALLBACK&format=json"
//        }).then(
//            function successCallback(response) {
//                $log.log('BestBuy response success');
//                //db5his
//    //            $log.log(Object.keys(response.data.products[0]));
//    //            $log.log(response.data.products[0].name);
//                //db4hie
//                $scope.responses = response.data.products;
//                $log.log($scope.responses[0].name);
//            },
//            function errorCallback(response) {
//                $log.log(response);
//                $log.log('BestBuy response fail');
//                $scope.responses = 'response';
//            });
        
    };
}
])

.controller('AccountCtrl', ["$scope", "$rootScope", function($scope, $rootScope) {
    this.login = function(){
        $rootScope.isLoggedIn = !$rootScope.isLoggedIn;
    }
    if($rootScope.isLoggedIn){
        this.title = "Hello ";
    }else{
        this.title = "Sign up";
    }
  $scope.settings = {
    enableFriends: true
  };
}]);
