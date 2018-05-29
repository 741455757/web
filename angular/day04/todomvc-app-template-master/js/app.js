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
		function getId(){
			var id = Math.random();
			for (var i = 0; i < $scope.todos.length; i++) {
				if($scope.todos[i].id === id){
					id = getId();
					break;
				}
			}
			return id;
		}

		//文本框需要一个模型
		$scope.text='';
		// 任务列表也需要一个
		// 每一个任务的结构{id:1,text:'学习',completed:true}
		$scope.todos = [
		{id:0.123,text:'学习',completed:false,editing:false},
		{id:0.222,text:'睡觉',completed:false,editing:false},
		{id:0.34,text:'打豆豆',completed:true,editing:false}
		];
		// 添加todo
		$scope.add =function(){
			$scope.todos.push({
				// 自动增长
				id: getId(),
				// 由于$scope.text是双向绑定的，add同时肯定可以同时拿到界面上的输入值
				text: $scope.text,
				completed:false,
				editing:false}) ;
			// 清空文本框
			$scope.text = '';
		}
		// 处理删除
		$scope.remove = function(id){
			// 删除谁
			for (var i = 0; i < $scope.todos.length; i++) {
				if($scope.todos[i].id === id){
					$scope.todos.splice(i,1);
					break;
				}
			}

		}
		// 清空已完成
		$scope.clear= function(){
			var result = [];
			for (var i = 0; i < $scope.todos.length; i++) {
				if(!$scope.todos[i].completed){
					result.push($scope.todos[i]);
				}
			}
			$scope.todos = result;
		}
		//是否已经有完成的
		$scope.existCompleted = function(){
			for (var i = 0; i < $scope.todos.length; i++) {
				if($scope.todos[i].completed){
					return true;
				}
			}
			return false;
		}

		// 当前编辑哪个元素
		$scope.currentEditingId = -1;
		$scope.editing = function(id) {
			$scope.currentEditingId = id;
		}

		$scope.save = function(){
			$scope.currentEditingId = -1;
		}
	}])

	
	

})(angular);
