import { Component } from '@angular/core';

const todos= [{
  id:1,
  title:'吃饭',
  done:true
},{
  id:2,
  title:'碎觉',
  done:true
},{
  id:3,
  title:'打豆豆',
  done:true
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
}
