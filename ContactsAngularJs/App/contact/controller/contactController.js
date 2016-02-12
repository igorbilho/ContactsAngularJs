contactApp.controller('contactController',
    ['$scope', 'contactDataService', '$location',
    function categoryController($scope, contactDataService) {
        $scope.contacts = [];

        loadContactData();

        function loadContactData() {
            contactDataService.getContacts()
            .then(function () {
                $scope.contacts = contactDataService.contacts;
            },
                function () {
                    //Error goes here...
                })
                .then(function () {
                    $scope.isBusy = false;
                });
        };

    }]);