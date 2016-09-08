app.controller("defctrl",function($rootScope,$scope,$location) {

$rootScope.hid = 1;
$scope.log = function(){
	$location.path('/login');
	};
});
