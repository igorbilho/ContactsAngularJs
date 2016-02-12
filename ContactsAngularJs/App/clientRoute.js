contactApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: "/app/Home/home.html"
    }),

    $routeProvider.when('/about', {
        templateUrl: "app/Home/about.html"
    }),

    $routeProvider.when('/mycontacts', {
        templateUrl: "app/contact/html/contactList.html",
        controller: "contactController"
    }),

    $routeProvider.when('/mycontacts/newcontacts', {
        templateUrl: "app/contact/html/contactForm.html"
    }),

    $routeProvider.otherwise({
        redirectTo: '/'
    });

}]);