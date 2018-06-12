/*
* @Author: Jessica Wang
* @Date:   2018-06-11 23:09:25
* @Last Modified by:   Jessica Wang
* @Last Modified time: 2018-06-12 08:08:19
*/
(function(angular){
	// 注册一个新模块
	angular.module('app.services.main', [])
		.service('MainService', [function(){
			var tods =[
				{id:0.123,text:'学习',completed:false,editing:false},
				{id:0.222,text:'睡觉',completed:false,editing:false},
				{id:0.34,text:'打豆豆',completed:true,editing:false}
				];
			function getId() {
				var id = Math.random();
				for (var i = 0; i < todos.length; i++) {
					if (todos[i].id === id) {
						id = getId();
						break;
					}
				}
				return id;
			}
			// 控制私有字段的访问权限{即代码结构的访问权限}
			this.get = function(){
				return todos;
			}
			// 业务逻辑都必须出现在服务中（专门定义业务逻辑）
			// 添加todo
			this.add =function(text){
				todos.push({
				// 自动增长
				id: getId(),
				// 由于$scope.text是双向绑定的，add同时肯定可以同时拿到界面上的输入值
				text: text,
				completed:false,
				editing:false}) ;
			}
			// 处理删除
			this.remove = function(id){
				// 删除谁
				for (var i = 0; i < todos.length; i++) {
					if(todos[i].id === id){
						todos.splice(i,1);
						break;
					}
				}
			}
			// 清空已完成
			this.clearCompleted= function(){
				var result = [];
				for (var i = 0; i < todos.length; i++) {
					if(!todos[i].completed){
						result.push(todos[i]);
					}
				}
				todos = result;
			}
			//是否已经有完成的
			this.existCompleted = function(){
				for (var i = 0; i < todos.length; i++) {
					if(todos[i].completed){
						return true;
					}
				}
				return false;
			}

			// 更新
			this.update = function(id, target){
				
			}

			var now = false;
			this.checkall = function(){
				for (var i = 0; i < todos.length; i++) {
					todos[i].completed = now;
				}
				now =!now;
			} 
		}]);
})(angular)

