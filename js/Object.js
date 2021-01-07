// 下面代码的输出是什么？解释下原因？

const person = {
  name: "yd"
}

Object.defineProperty(person, "age", {
  value: 21
})

person.age = 18


// Object.defineProperty直接创建的属性writable默认为false，value值不可修改，
// 此时修改age为18，在非严格模式下不会报错，但操作被忽略，在严格模式下会报错。

console.log(person) // {name: "yd",age: 21}

// enumerable表示对象属性是否可以在for...in和Object.keys()中被枚举。
console.log(Object.keys(person))

// 补充点

/**
 * 
 * 
var person = {};
Object.defineProperty(person, "a", { value : 1, enumerable:true });
Object.defineProperty(person, "b", { value : 2, enumerable:false });
Object.defineProperty(person, "c", { value : 3 }); // enumerable defaults to false
person.d = 4; // 如果使用直接赋值的方式创建对象的属性，则这个属性的enumerable默认为true

for (var i in person) {    
  console.log(i);  
}　　//  'a' 和 'd' 

Object.keys(person); // ["a", "d"]

 * **/

/**
 * 
 * 
Object.defineProperty()

通过Object.defineProperty() 可以直接在对象上创建一个属性，也可以修改已有的属性。

Object.defineProperty(obj, prop, descriptor) 接收三个参数：

　　obj：属性所在的对象　　

　　prop：要访问的属性名

　　descriptor：描述符对象

描述符对象包含六个属性：configurable、enumerable、writable、value、get、set ，要修改属性的特性，必须使用Object.defineProperty()方法。

通过以上两种方式添加的对象属性，其布尔值特性默认值是true，通过Object.defineProperty来修改属性特性时，只设置需要修改的特性即可；而通过Object.defineProperty创建的属性，其布尔值特性默认值是false。

ECMAScript中属性分为两种：数据属性和访问器属性。

数据属性
数据属性包含四个属性描述符：

[[Configurable]] : 表示能否通过delete删除属性从而重新定义属性，能否修改属性特性，能否把属性修改为访问器属性。通过以上方式添加的对象属性，默认为true。

[[Enumerable]] : 表示能否通过for-in 循环访问属性。通过以上方式添加的对象属性，默认为true。

[[Writable]] : 表示能否修改属性的值。通过以上方式添加的对象属性，默认为true。

[[Value]] : 包含这个属性的数据值，可读取写入。通过以上方式添加的对象属性，默认为undefined。


 * 
 * 
 * 
 * 
 * 
 * **/