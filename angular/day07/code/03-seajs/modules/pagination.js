/*
* @Author: Jessica Wang
* @Date:   2018-07-11 21:52:00
* @Last Modified by:   Jessica Wang
* @Last Modified time: 2018-07-11 22:46:10
*/
define(function(require,exports,module){
	function Pagination(current,total,show){
		this.current =current;
		this.total = total;
		this.show = show;
		// 1.根据显示数量算出正常情况当前页的左右各有几个
		var region = Math.floor(show / 2);
		// 2.计算出当前界面上的起始值
		begin = current - region;//可能小于1
		begin= begin < 1 ? 1: begin;
		end = begin + show ;
		if(this.end > total){
			end = total + 1;
			begin = end - show;
			begin= begin < 1 ? 1: begin;
		}
		this.begin =begin;
		this.end =end;
	}
	/**
	 * 渲染这个组件到界面上
	 * @return {[type]} [description]
	 */
	Pagination.prototype.render = function(containers){
		//获取分页展示容器
		// var container =document.getElementsByClassName('pagination')[0];
		if(typeof containers === 'string'){
			containers = document.querySelectorAll(containers);
		}
		if(containers.length === undefined){
			// dom对象
			containers =[containers];
		}
		for(var c=0; c<containers.length; c++){
			var container = containers[c];
			//先append上一页
			var preElement = document.createElement('li');
			preElement.innerHTML = '<a href="?page='+(this.current-1)+'"aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>';
			if(1== this.current){
				preElement.classList.add('disabled');
			}
			container.appendChild(preElement);
			for(var i=this.begin;i<this.end;i++){
				// console.log(i);
				var liElement = document.createElement('li');
				liElement.innerHTML = '<a href="?page='+i+'">'+i+'</a>';
				if(i==this.current){
					//此时是当前页
					liElement.classList.add('active');
				}

				container.appendChild(liElement);
			}
			var nextElement = document.createElement('li');
			nextElement.innerHTML = '<a href="?page='+(this.current+1)+'"aria-label="Next"><span aria-hidden="true">&raquo;</span></a>';
			if(this.total== this.current){
				nextElement.classList.add('disabled');
			}
			container.appendChild(nextElement);
		}
		
	}; 

	module.exports = Pagination;
})