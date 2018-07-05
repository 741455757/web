/*
* 手写jsonp
* @Author: Jessica Wang
* @Date:   2018-06-27 22:56:47
* @Last Modified by:   Jessica Wang
* @Last Modified time: 2018-06-28 21:19:46
*/


(function(window,document){
	'use strict';
	// url = http://sss?df=xxx
		// console.log($document);
		var jsonp = function(url,data,callback){
			 // 1.挂载回调函数
			  var cbFuncName = 'my_json_cb'+Math.random().toString().replace('.','');
			  window[cbFuncName] = callback;


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
			  var scriptElement = document.createElement('script');
			  scriptElement.src = url + queryString;
			  // ==注意此时还不能讲其append到页面上
			 
			  // 5.将script标签放页面
			  document.body.appendChild(scriptElement);
			// appdend过后页面会自动对这个地址发送请求，请求完成以后自动执行
		}
		window.$jsonp = jsonp;
	
})(window,document);