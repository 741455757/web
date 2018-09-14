import { Component } from '@angular/core';

// 在Angular中，组件就是一个类（构造函数的另一种写法）
// @Component组件的装饰器
//   selector用来定义组件渲染的标签名称，说白了就是组件的名字
//   templateUrl用来指定组件的模板文件
//  styleUrls一个数组，用来存放组件相关的样式文件

// vue中，组件由自己的data和methods等选项
// 在angular中也有
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  count=0;
  increment=function(){
    // 在组件方法中，可以直接通过this访问组件成员
    this.count++;
  }
}
