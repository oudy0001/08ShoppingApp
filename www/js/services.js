angular.module('starter.services', [])

.factory('QueryGenerator', ["$http", '$log', function($http, $log, $scope){
    return{ 
        "productSearch": function(keyword, $scope){ 
            var query = "https://api.bestbuy.com/v1/products(search=" + keyword + "))?apiKey=z8wap8rkradxspdsnppndagz&callback=JSON_CALLBACK&format=json";
          
         var responseObject;
            $http({
  method: 'JSONP',
  url: "https://api.bestbuy.com/v1/products((search=ipod))?apiKey=z8wap8rkradxspdsnppndagz&callback=JSON_CALLBACK&format=json"
}).then(function successCallback(response) {
                $log.log(response);
                $log.log('response success');
                $log.log(Object.keys(response.data.products[0]));
                responseObject = response
  }, function errorCallback(response) {
                $log.log(response);
                $log.log('response fail');
                responseObject = 'response'
  });
//                             }
          }
            
    
}
    }
])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
