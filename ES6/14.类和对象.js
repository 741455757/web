{
	// 基本定义和生成实例
	class Parent {
		   constructor(name='mukewang'){
		   		this.name = name;
		   }
	}
	let v_parent = new Parent('v');
	console.log('构造函数和实例',v_parent);//构造函数和实例 Parent {name: "v"}
}
{
	// 继承
	class Parent {
		   constructor(name='mukewang'){
		   		this.name = name;
		   }
	}
	class Child extends Parent{

	}
	console.log('继承',new Child());//继承 Child {name: "mukewang"}
}
{
	// 继承
	class Parent {
	   constructor(name='mukewang'){
	   		this.name = name;
	   }
	}
	class Child extends Parent{
		constructor(name='child'){
		   		super(name);
		   		this.type='child';//定义自己的属性super放第一行
		  }
	}
	console.log('继承传递参数',new Child());//继承传递参数 Child {name: "child", type: "child"}
}
{
	// getter  setter
	class Parent {
	   constructor(name='mukewang'){
	   		this.name = name;
	   }
	   get longName(){//属性
	   		return 'mk'+this.name
	   }
	   set longName(value){
	   	this.name =value;
	   }
	}
	let v= new Parent();
	console.log('getter',v.longName);//getter mkmukewang
	v.longName = 'hello';
	console.log('setter',v.longName);//setter mkhello
}
{
	// 静态方法
	// 通过类去调用而不是类的实例调用
	class Parent {
	   constructor(name='mukewang'){
	   		this.name = name;
	   }
	   static tell(){
			console.log('tell');
		}
	}
	
	Parent.tell();//tell
}
{
	// 静态属性
	class Parent {
	   constructor(name='mukewang'){
	   		this.name = name;
	   }
	   static tell(){
			console.log('tell');
		}	
	}
	Parent.type='test';
	
	console.log('静态属性',Parent.type);//静态属性 test

}
