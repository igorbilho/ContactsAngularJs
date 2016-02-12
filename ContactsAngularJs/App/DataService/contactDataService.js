contactApp.factory('contactDataService', ['$http', '$q',
function ($http, $q) {
    var _contacts = [];

    var _getContacts = function () {
        var deferred = $q.defer();
        var controllerQuery = "contact/GetContacts";

        $http.get(controllerQuery)
          .then(function (result) {
              // Successful
              angular.copy(result.data, _contacts);
              deferred.resolve();
          },
          function (error) {
              // Error
              deferred.reject();
          });
        return deferred.promise;
    }

    //Expose methods and fields through revealing pattern
    return {
        contacts: _contacts,
        getContacts: _getContacts
    }

}]);