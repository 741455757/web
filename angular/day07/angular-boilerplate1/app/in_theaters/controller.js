(function(angular){
	'use strict';
// 创建正在热映模块
	var module = angular.module('moviecat.in_theaters', [
		'ngRoute',
		'moviecat.services.http'
		]);
// 配置模块的路由
	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/in_theaters/:page', {
	    templateUrl: 'in_theaters/view.html',
	    controller: 'inTheatersCtrl'
	  });
	}]);

	module.controller('inTheatersCtrl', [
		'$scope', 
		'$route',
		'$routeParams',
		'HttpService',
		function($scope,$route,$routeParams,HttpService) {
			var count =10;//每一页条数
			var page =parseInt($routeParams.page);//页码
			var start =(page-1)*count;//当前页从哪里开始
		// 控制器分为2步 1.设计暴露数据 2.设计暴露行为
		 $scope.subjects = [];
		 $scope.message = '';
		 $scope.title = '';
		 $scope.totalCount = 0;
		 $scope.totalPages = 0;
		 $scope.currentPage = page;
		 $scope.loading = true;
		 HttpService.jsonp('https://api.douban.com/v2/movie/in_theaters',{start:start,count:count},function(data){
		 	// console.log(data);
		 	$scope.subjects = data.subjects;
		 	$scope.title = data.title;
		 	$scope.totalCount = data.total;
		 	$scope.loading = false;
		 	$scope.totalPages = Math.ceil($scope.totalCount/count);
		 	$scope.$apply();
		 });
		 // 暴露一个上一页和下一页
		 $scope.goPage = function(page){
		 	// 传过来的是第几页我就跳第几页
		 	// 一定要做合法性校验
		 	if(page >= 1 && page <= $scope.totalPages){
		 		$route.updateParams({page:page});
		 	}
		 }
	}]);
})(angular)
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