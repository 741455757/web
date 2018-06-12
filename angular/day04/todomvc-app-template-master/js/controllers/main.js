/*
* @Author: Jessica Wang
* @Date:   2018-06-11 22:16:39
* @Last Modified by:   Jessica Wang
* @Last Modified time: 2018-06-12 23:19:09
*/
(function(angular){
	'use strict';
	// 独立模块
	var controllers = angular.module('app.controllers.main', ['app.services.main']);
	controllers.controller('MainController', [
	 '$scope',
	 '$routeParams',
	 '$route',
	 'MainService', 
	 function($scope,$routeParams,$route,MainService){
		//文本框需要一个模型
		$scope.text='';
		// 任务列表也需要一个
		// 每一个任务的结构{id:1,text:'学习',completed:true}
		// 添加todo
	    $scope.todos = MainService.get();
		$scope.add =function(){
			if(!$scope.text){
				return;
			}
			MainService.add($scope.text);
			// 清空文本框
			$scope.text = '';
		}
		// 处理删除
		$scope.remove = function(id){
			// 删除谁
			MainService.remove(id);

		}
		// 清空已完成
		$scope.clear= function(){
			var newTodos = MainService.clearCompleted();
			$scope.todos = newTodos;
		}
		//是否已经有完成的
		$scope.existCompleted = function(){
			return MainService.existCompleted();
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
			MainService.checkall();
		} 
		// 状态筛选
		// $scope.selector = {completed:false};// {},{completed:false},{completed:true}
		// 点击事件的方式不合适，有dom操作
		
		// 1.拿到锚点值
		// 这样写就要求执行环境必须要有window对象
		$scope.selector = {};
		// 2.根据锚点值对selector做变化
		var status = $routeParams.status;
		switch(status){
			case 'active':
			$scope.selector = {completed:false};
			break;
			case 'completed':
			$scope.selector = {completed:true};
			break;
			default:
			$route.updateParams({status:''})
			$scope.selector = {};
			break
		}
		//自定义比较函数
		$scope.equalCompare = function(source, target){
			// console.log("sourse。。"+source);
			// console.log("target。。"+target);
			return source===target;
		}
		$scope.toggle = function(){
			MainService.save();
		}
		
	}]);	
})(angular);