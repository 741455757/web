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

  public currentEditing:{
    id: number,
    title:string,
    done: boolean
  } = null;
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

  get toggleAll(){
    return this.todos.every(t => t.done);
  }
  set toggleAll(val){
    this.todos.forEach(t => t.done = val)
  }
  removeTodo(index: number){
    // console.log(index);
    this.todos.splice(index,1);
  }
  saveEdit(todo,e){
    // 保存编辑
    todo.title = e.target.value;
    // 取消编辑状态
    this.currentEditing=null;
  }
  handleEditKeyUp(e){
    const {keyCode,target} = e;
    // console.log(keyCode);
    // console.log(e);
    if(keyCode==27){
      // 取消编辑状态
      // 把文本框的值恢复为原来的值
      target.value = this.currentEditing.title;
      this.currentEditing=null;
    }
  }
}
