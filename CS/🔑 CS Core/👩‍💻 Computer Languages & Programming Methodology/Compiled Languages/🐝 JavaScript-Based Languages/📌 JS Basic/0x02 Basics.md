> ref : 
> [廖雪峰：js/快速入门](https://www.liaoxuefeng.com/wiki/1022910821149312/1023020895584256)

# Data type & variable

```js
'use strict'; // use var declare variable mandotarily, to avoid variable scope confliction.

// <----------------- basic data type ---------------> 
var x = 100;
x = 123; // 整数123
x = 0.456; // 浮点数0.456
x = 1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5
x = -99; // 负数
x = NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
x = Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity

console.log(x);
x = true;
console.log(x);
x = NaN;
console.log(x);
var y = false; 
var z = 1;
console.log(x == y);
console.log(x == z);
console.log(x === y);
console.log(x == x); 											// NaN !== NaN
console.log(x === x);											// NaN !=== NaN
console.log(isNaN(x));											// true


// <----------------- comparison operator ---------------> 
var MIN = 0.0000001;
console.log((1 / 3) === (1 - 2 / 3));
console.log(Math.abs(1 / 3 - (1 - 2 / 3)) < MIN);				// true


// <------------------------ Array ----------------------> 
var a =  [1, 2, 3.14, 'Hello', null, true];
var b = new Array(1, 2, 3.14, 'Hello', null, true);
console.log(a);
console.log(b[0]);

a.slice();
a.splice();
a.push();
a.pop();
a.shift();
a.unshift();
a.sort();
a.reverse();
a.concat();
a.join();



// <------------------------ class ----------------------> 
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};
console.log(person.name);
console.log(person.zipcode); 									// null
console.log(person.spouse); 									// undefined

var xiaoming = {
    name: '小明'
};
console.log(xiaoming.age);
xiaoming.age = 18; 												// add a new attribute
console.log(xiaoming.age);
delete xiaoming.age;											// delete an attribute
delete xiaoming.name;
console.log(xiaoming.name);
delete xiaoming.school;											// NO ERROR output for deleting an nonexistent attribute

console.log('name' in xiaoming);								// false

// <------------------------ String ---------------------> 
var str = 'i\'m \"ok\"!';										// escape character
console.log(str);
str = '\x41';													// Ascii ‘A’		
console.log(str);
str = '\u4e2d\u6587';											// Unicode ’中文‘
console.log(str);										

var name = '小明';												// template string
var age = 20;
var message = `你好, ${name}, 你今年${age}岁了!`;
console.log(message);

str = "Hello, World!";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("hello"));
console.log(str.indexOf("Hello"));



// <-------------- iterable (array, map, set)------------> 
console.log("in:");
for(var j in person){console.log(j);} 

console.log("set:");
var s = new Set(['A', 'B', 'C']);								// 初始化传入数组 
s.forEach(function (element, sameElement, set) {		
    console.log(element);
});
for(var i of s){console.log(i);}

console.log("map:");
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z'],['u',3]]);		// 初始化传入数组 
m.forEach(function (value, key, map) {
    console.log(value);
    console.log(key);
    console.log(map);
});

console.log("array:");
var a = ['A', 'B', 'C'];
a.forEach(function (element) {
    console.log(element);
});


```
