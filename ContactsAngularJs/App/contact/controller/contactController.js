contactApp.controller('contactController',
    ['$scope',
    function categoryController($scope) {

        $scope.contacts = [
            {
                firstName: 'John',
                lastName: 'Parson',
                email: 'parson@gmail.com',
                mobile: '233-900-2933'
            },
            {
                firstName: 'Joe',
                lastName: 'Paris',
                email: 'paris@gmail.com',
                mobile: '233-900-2933'
            },
            {
                firstName: 'Donna',
                lastName: 'Lim',
                email: 'lim@gmail.com',
                mobile: '552-221-2222'
            }
        ];

        $scope.contact = {};

    }]);