


app.controller("myCtrl",function($scope,$location,$rootScope) {
    
    
    
    $scope.total = function(form){
		
		var mydata = JSON.parse(data);
		var am = 1;
                for(var i=0;i<mydata.length;i++){
		if((form.user == mydata[i].uname) && (form.pwd == mydata[i].age)){
		$rootScope.ob = form.user;
		$rootScope.hid = 0;
		$location.path('/clothes');
		am = 0;
	        }

		
		

     }         
		if(am == 1){
		alert ("Incorrect");}
    };
});
