angular.module('starter.services', [])

.factory('QueryGenerator', ["$http", '$log', function($http, $log, $scope){
    return{ 
        "productSearch": function(keyword, $scope){ 
            var query = "http://api.bestbuy.com/v1/products((search=" + keyword + "))?show=name,sku,salePrice,image&format=json&apiKey=z8wap8rkradxspdsnppndagz";
          
         var responseObject;
            $http({
  method: 'GET',
  url: query
}).then(function successCallback(response) {
                $log.log(response);
                $log.log('response success');
                
                $scope.responses = response.data.products;
                $log.log($scope.responses[0].name);
//                $log.log(Object.keys(response.data.stores[0]));
//                return responseObject = response.data.stores
  }, function errorCallback(response) {
                    var dummyObject = {"name": "We could not find what you are looking for"};
                    $scope.responses[0] = dummyObject;
                $log.warn('response fail');
                responseObject = dummyObject;
  });
            
    return responseObject;
//                             }
          },
        "locationSearch": function(location, $scope){
//            var query
//            if(location.)
            
            $log.log(location.lat);
           var query = "https://api.bestbuy.com/v1/stores((city="+ location +"))?apiKey=z8wap8rkradxspdsnppndagz&callback=JSON_CALLBACK&format=json"
            var responseObject;
            $http({
  method: 'JSONP',
  url: query
}).then(function successCallback(response) {
                $log.log('response success');
                $scope.responses = response.data.stores;
                //handles empty reponses
                if($scope.responses[0] == undefined){
                    var dummyObject = {"name": "Nothing found in your area!"};
                    $scope.responses[0] = dummyObject;
                    $log.log('caught exception');
                }else{
            //I was working on a parser that would have changed the hours to a mon-fri kind of deal but I ran out of time
                    
                    var newHoursHTMLString = '';
                    var newCheckingString = '';
                    //which days match current simlarities
                    var localFirstDayName = '';
                    var localCurrentDayName = '';
                    var localFirstHoursValue = '';
                    var localCurrentHoursValue = '';
                    //flags for string management
                    var localIsHoursBool = false;
                    var localFirstDayEmptyBool = false;
                    //local character
                    var localCharater = '';
                    
                    //for each response
                    for(var i = 0; i< $scope.responses.length; i++){
                        //for each character in hours
                        for(var j = 0; j < $scope.responses[i].hours.length; j++) {
                            localCharater = $scope.responses[i].hours[j];
                            if(localCharater == ':'){
                                localIsHoursBool = true;
                            }else{
                                if(localIsHoursBool){
                                    localCurrentHoursValue += localCharater;
                                }else{
                                    localCurrentDayName += localCharater;
                                }
                            }
                            //at the end of every day specifier
                            if(localCharater === ';'){
                                //If angular would just use innerHTML instead of text this code would have put every hour on its own line :( 
//                                newHoursHTMLString += "<br/>";
                                
                                if(localFirstDayName == ''){
                                    localFirstDayName = localCurrentDayName;
                                    localFirstHoursValue = localCurrentHoursValue;
                                }else if(localFirstHoursValue == localCurrentHoursValue){
                                    
                                }
                                
                                $log.log(newHoursHTMLString);//db4hi
                                //resets booleans
                                localIsHoursBool = false;
                            }else{
                                newCheckingString += localCharater;
                            }
                            
                        }
                        //after looping through hours string
                        $scope.responses[i].hours = newHoursHTMLString;
                        
                        localFirstDayName = '';
                        localCurrentDayName = '';
                        localFirstHoursValue = '';
                        localCurrentHoursValue = '';
                        newHoursHTMLString = '';
                        $log.log(newHoursHTMLString);
                    }
                }
                
  }, function errorCallback(response) {
                var dummyObject = 
                    $scope.responses[0] = dummyObject;
                $log.warn('response fail');
  });
            
        }
            
}
    }
])
.factory('longinFactory', ["$log", function($log){
    return{
        "checkUserName": function(name){
            var lowerCaseName = name.toLowerCase();
            var currentDate = Date();
            if(lowerCaseName == "guest"){
                $log.log(name + " failed to login at: " + currentDate);
                return false;
            }else{
                $log.log(name + " is an acceptable login name at: " + currentDate);
                return true;
            }
        }
    }
}])
.factory('localStorageFactory', [ function(){
    return{
        "store": function(message){
            localStorage.setItem()
        }
    }
}])

