import { Component } from '@angular/core';

const todos= [{
  id:1,
  title:'吃饭',
  done:true
},{
  id:2,
  title:'碎觉',
  done:false
},{
  id:3,
  title:'打豆豆',
  done:false
}]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos:{
    id: number,
    title:string,
    done: boolean
  }[] = todos;

  addTodo(e):void {
    // console.log(e.target.value);e.target dom元素
    // console.log(e.keyCode); 事件修饰符
    // console.log("添加方法被调用了");
    const titleText = e.target.value;
    if(!titleText.length){
      return;
    }
    const last = this.todos[this.todos.length - 1];
    this.todos.push({
      id: last?last.id + 1:1,
      title: titleText,
      done:false
    });
    // 清除文本框
    e.target.value ='';
    console.log(this.todos);
  }
}
