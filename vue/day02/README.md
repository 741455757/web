###品牌列表案例
## 03.完成品牌列表添加功能
+ 1. 比较好的代码段
    <div class="panel-heading">
        <h3 class="panel-title">添加品牌</h3>
    </div>
    <div class="panel-body form-inline">
        <label for="">
            Id:
            <input type="text" class="form-control">
        </label>
        <label for="">
            Name:
            <input type="text" class="form-control">
        </label>
        <input type="button" value="添加" class="btn btn-primary">
    </div>
+ 2. 我们更多的是在进行VM中Model数据的操作，同时操作Model数据的时候，指定业务逻辑
## 04.根据 id完成品牌的删除
数组的遍历用法
+ 1.
    this.list.some((item, i)=>{
        if(item.id == id) {
            this.list.splice(i, 1);
            // 在数组的some方法中，如果returntrue，就会立即终止这个数组的循环
            return true;
        }
    })
+ 2.
    var index =  this.list.findIndex(item => {
        if(item.id == id) {
            return true;
        }
    }) 
## 05.Vue调试工具`vue-devtools`的安装步骤和使用

[Vue.js devtools - 翻墙安装方式 - 推荐](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-CN) 


## 06.品牌案例-根据关键字实现数组的过滤
