(function (angular) {
	'use strict';//不允许使用不安全的
	/**
	* myTodoMvc Module
	*
	* Description
	* 应用程序的主模块
	*/
	var myapp = angular.module('myTodoMvc', [])
	// 注册一个主要的控制器
	myapp.controller('MainController', ['$scope', function($scope){
		//文本框需要一个模型
		$scope.text='';
		// 任务列表也需要一个
		// 每一个任务的结构{id:1,text:'学习',completed:true}
		$scope.todos = [
		{id:1,text:'学习',completed:false},
		{id:2,text:'睡觉',completed:false},
		{id:3,text:'打豆豆',completed:true}
		];
		// 添加todo
		$scope.add =function(){
			$scope.todos.push({
				// 自动增长
				id: $scope.todos.length+1,
				// 由于$scope.text是双向绑定的，add同时肯定可以同时拿到界面上的输入值
				text: $scope.text,
				completed:false}) ;
			// 清空文本框
			$scope.text = '';
		}
	}])

	
	

})(angular);
