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

  public visibility: string = 'active';

  // 该函数是一个特殊的Angular生命周期钩子函数
  // 它会在Angular应用初始化的时候执行一次
  ngOnInit () {
    window.onhashchange = () =>{
      // 当用户点击了锚点的时候，我们需要获取当前的锚点标识
      // 然后动态的将根组件中的visibility设置为当前点击的锚点标识
      // console.log(this.visibility);
      const hash = window.location.hash.substr(1);
      switch(hash){
        case '/':
          this.visibility='all';
        break;
        case '/active':
        this.visibility='active';
          break;
        case '/completed':
          this.visibility='completed';
        break;
      }
    }
  }
  // 实现导航切换数据过滤的功能
  // 1.提供一个属性，该属性会根据当前点击的链接返回过滤之后的数据
  // filterTodos
  // 2.提供一个属性，用来存储当前点击的链接标识
  //    visibility 字符串
  //    all active completed
  // 3.为链接添加事件，当点击导航链接的时候，改变

  get filterTodos(){
    if(this.visibility == 'all'){
      return this.todos;
    }else if(this.visibility == 'active'){
      return this.todos.filter(t => !t.done)
    }else if(this.visibility == 'completed'){
      return this.todos.filter(t => t.done)
    }
  }
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
  get remainingCount(){
    return this.todos.filter(t => !t.done).length;
  }
  clearAllDone(){
    this.todos = this.todos.filter(t => !t.done);
  }
  
}
