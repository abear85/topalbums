var topAlbumsApp = angular.module('topAlbumsApp', ['ngSanitize']);

topAlbumsApp.controller('albumsListController', function albumsListController($scope, $http, $sce){
	$http({
		method: 'get',
		url: '../data/test.json'
	}).then(function(response){
		console.log(response);
		$scope.mainTitle = response.data.Title;
		$scope.desc = response.data.Desc;
		$scope.testNames = response.data.Items;
	}, function(error){
		console.log(error, 'can not get data');
	});
	$scope.testYT = function(ytcode){
		return $sce.trustAsHtml(ytcode);
	};
	$scope.gridlayout = function(rank){
		var classes = "";
		if(rank < 3){
			classes = "col-xs-12 col-sm-6";
		}else if(rank >=3 && rank <=6){
			classes = "col-xs-12 col-sm-6 col-md-3";
		}else{
			classes = "col-xs-12 col-sm-6 col-md-2";
		}
		return classes;
	}
});