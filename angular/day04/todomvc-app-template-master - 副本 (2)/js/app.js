(function (angular) {
	'use strict';//不允许使用不安全的
	/**
	* myTodoMvc Module
	*
	* Description
	* 应用程序的主模块
	*/
	var myapp = angular.module('app', ['ngRoute','app.controllers.main']);
	// 漏油配置
	// $routeProvider
	myapp.config(['$routeProvider',function($routeProvider) {
			$routeProvider
			.when('/:status?',{
				controller: 'MainController',
				templateUrl:'main_tmpl'
			 })
			// 别的请求
			.otherwise({
				// 跳转到一个地址
					redirectTo:'/'
			});
	}]);
})(angular);
