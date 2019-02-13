### 3.01.品牌列表-从数据库获取列表
+ bs3-table
+ bs3-panel
+ form-inline form-control
### 3.02品牌列表-完成添加功能
### 3.03.品牌列表-完成删除功能
### 3.04.品牌列表-全局配置数据接口的根域名
 // 如果我们通过全局配置了，请求的数据接口 根域名，则每次单独发起http请求的时候，请求的url路径，应该以相对路径开头，前面不能带/，否则不会启用根路径拼接
    Vue.http.options.root = 'http://vue.studyit.io';