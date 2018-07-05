(function(angular){
	'use strict';
// 创建正在热映模块
	var module = angular.module('moviecat.movie-detail', [
		'ngRoute',
		'moviecat.services.http'
		]);
// 配置模块的路由
	module.config(['$routeProvider', function($routeProvider) {
	   console.log("1111");
	  $routeProvider.when('/detail/:id', {
	    templateUrl: 'movie-detail/view.html',
	    controller: 'MovieDetailCtrl'
	  });
	}]);

	module.controller('MovieDetailCtrl', [
		'$scope', 
		'$route',
		'$routeParams',
		'HttpService',
		function($scope,$route,$routeParams,HttpService) {
			$scope.movie = {};
			$scope.loading = true;
			var detailApiAddress ='https://api.douban.com/v2/movie/subject/'+$routeParams.id;
			HttpService.jsonp(detailApiAddress,{},function(data){
				$scope.loading = false;
				$scope.movie =data;
				$scope.$apply();
			});
	}]);
})(angular);
//  var doubanApiAddress = 'https://api.douban.com/v2/movie/in_theaters';
		// // 测试$http服务
		// // 在Angular中使用JSONP的方式做跨域请求，
		// // 就必须给当前地址加上一个参数callbaclk=JSON_CALLBACKE
		// $http.jsonp(doubanApiAddress+'?callbaclk=JSON_CALLBACK').then(function (data){
		// 	if(data.status == 200){
		// 		$scope.subjects = data.data.subjects;
		// 	}else{
		// 		$scope.message='获取数据失败,错误信息：'+res.status;
		// 	}
			
		// },function (err){
		// 	console.log(err);
		// 	$scope.message='获取数据失败,错误信息：'+err.status;
		// });