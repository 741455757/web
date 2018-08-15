// 这是Node中向外暴露成员的形式：
// module.exports ={}


// 在ES6中,通过规范的形式规定了ES6中如何导入和导出模块
// ES6中导入模块,使用import模块名称from‘模块标识符’ import ‘表示路径’

// 在ES6中，使用export default和export向外暴露成员

// export default {
//     name: 'zs',
//     age:20
// }
var info={
    name: 'zs',
    age:20
}
export default info
// 注意：exports default向外暴露的成员，可以使用任意的变量来接收
// 注意：在一个模块中exports default只允许向外暴露1次
// 注意：在一个模块中，可以同时使用exports default和export向外暴露成员


export var title='小星星'
export var content = 'hahaha'

// 注意：使用export向外暴露的成员，只能使用{}形式来接收，这种形式，叫做【按需导出】
// 注意：export可以向外暴露多个成员，同时，如果某些成员，我们在import的时候，不需要，则可以不在{}中定义
// 注意：使用export导出的成员，必须严格按照导出时候的名称，来使用{} 按需接收
// 注意：使用export导出的成员，如果就想换个名称来接收，可以使用as来起别名