/* Ex6基本语法 
let 块级作用域  
const 块级作用域  常量
var 全局作用域
*/
var ma = true;
if (ma) {
    //let name = 'zhangsan';
    //var name = 'zhangsan';

}

const name = 'zhangsan'
//name = 'lisi'   //报错  常量不可修改
console.log(name);

/* 箭头函数 */
let fun = (name) => {
    console.log(name);

}
fun('张三');

/* 模板字符串 */
let age = 20;
let addAge = (age) => {
    return ++age;
}
console.log(`年龄${age},增加一岁的年龄:${addAge(age)}`);

/* 对象  属性  简写 */
let ids = 1;
let pwd = '123456';
var obj = {
    ids,
    pwd,
    run(name) {
        console.log(`${name}在跑步`);

    }
}
console.log(`ids是${obj.ids}---密码是:${obj.pwd}`);
obj.run('zhangsan ')

/* 异步调用 */
//传统回调函数
let getpwdbyname = (name, callback) => {
    setTimeout(() => {
        console.log(`回调函数传入参数 ${name}`);
        var pwd = '这是密码';
        callback(pwd)
    }, 1000);
}
getpwdbyname('李斯', (pwd) => {
    console.log(`这是获取到的密码:${pwd}`);

})



