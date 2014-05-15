'use strict';

angular.module('motoApp')
  .service('Search', function Search($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
        getAdds: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: 'www.utahmotomarket.com/search/'})
                .success(function(data){
                    deferred.resolve(data);
                });
            return deferred.promise;
        },



    }




  });
