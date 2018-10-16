// .ts后缀表示是一个TypeScript文件
// TypeScript兼容es6

// TypeScript为javascript增加了类型的概念
// var foo:string = 'bar';

// TypeScript是强类型，一旦定义是数据的类型，则不能动态修改
// 这样的话就帮助我们在开发阶段避免掉很多低级错误
// foo=[];
// foo=true;
// foo='hello';


var user:{
    name: string,
    age: number
} = {
    name: 'Jack',
    age: 18
}
console.log(user.age);