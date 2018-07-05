/*
* @Author: Jessica Wang
* @Date:   2018-06-27 22:56:47
* @Last Modified by:   Jessica Wang
* @Last Modified time: 2018-07-04 21:40:30
*/
'use strict';

(function(angular){
	// 由于默认angular提供的异步请求对象不支持自定义回调函数名
	// angular随机分配的回调函数名称不被豆瓣支持
	var http = angular.module('moviecat.services.http', []);
	http.service('HttpService', [
		'$document', 
		'$window',
		function($document, $window){
		// console.log($document);
		this.jsonp =  function(url,data,callback){
			 // 1.挂载回调函数
			  var cbFuncName = 'my_json_cb'+Math.random().toString().replace('.','');


			 // url: http://api.douban.com/vsdf -> <script> ->http自动执行
			  // 2.将data转换为url字符串的形式
			  // {id:1,name:zhangsan}=>id=1&name=张三
			  var queryString = url.indexOf('?')==-1?'?':'&';
			  for(var key in data){
			  	queryString += key + '=' + data[key]+'&';

			  }  
			  // 3.处理url中的回调参数
			 
			  queryString += 'callback='+cbFuncName;

			  // url+=callback= xxxxx
			  // 4.创建一个script标签
			  var scriptElement = $document[0].createElement('script');
			  scriptElement.src = url + queryString;
			  // ==注意此时还不能讲其append到页面上
			
			 
			  $window[cbFuncName] = function(data){
			  	callback(data);
			  	$document[0].body.removeChild(scriptElement);
			  };
			  
			  // 5.将script标签放页面
			  $document[0].body.appendChild(scriptElement);
			// appdend过后页面会自动对这个地址发送请求，请求完成以后自动执行
		
		}
		// console.log($window);
		// console.log($document);
	}])
})(angular);