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
	myapp.controller('MainController', ['$scope', '$location', function($scope,$location){
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
			if(!$scope.text){
				return;
			}
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

		// $scope.checkall = false;
		// $scope.$watch('checkall', function(now, old) {
		// 	for (var i = 0; i < $scope.todos.length; i++) {
		// 		$scope.todos[i].completed = now;
				
		// 	}
			
		// });
		var now = false;
		$scope.checkall = function(){
			for (var i = 0; i < $scope.todos.length; i++) {
				$scope.todos[i].completed = now;
			}
			now =!now;
		} 
		// 让$scope也有一个指向location的数据成员
		// $watch只能监视属于$scope的成员
		$scope.$location = $location;
		$scope.$watch('$location.path()', function(now, old) {
			// 状态筛选
			// $scope.selector = {completed:false};// {},{completed:false},{completed:true}
			// 点击事件的方式不合适，有dom操作
			
			// 1.拿到锚点值
			// 这样写就要求执行环境必须要有window对象
			// var hash= window.location.hash;
			// console.log($location);
			// var path = $location.path();
			// 2.根据锚点值对selector做变化
			switch(now){
				case '/active':
				$scope.selector = {completed:false};
				break;
				case '/completed':
				$scope.selector = {completed:true};
				break;
				default:
				$scope.selector = {};
				break
			}
		});
		//自定义比较函数
		$scope.equalCompare = function(source, target){
			// console.log("sourse。。"+source);
			// console.log("target。。"+target);
			return source===target;
		}


		
	}])
	
	
	

})(angular);
