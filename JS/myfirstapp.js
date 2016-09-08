var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
 
    $routeProvider
    .when("/login", {
        templateUrl : "HTMLFiles/login.htm",
        controller  : "myCtrl"
    })
    .when("/clothes", {
        templateUrl : "HTMLFiles/clothes.htm",
        controller  : "retctrl"
        
    })
    .when("/electronics", {
        templateUrl : "HTMLFiles/electronics.htm",
        controller  : "retctrl"
        
    })
    .when("/books", {
        templateUrl : "HTMLFiles/books.htm",
        controller  : "retctrl"
        
    })
    .otherwise({
        templateUrl : "HTMLFiles/home.htm",
	controller : "defctrl"
    });
});

app.run(function($rootScope){
	$rootScope.hid == 1;
});


