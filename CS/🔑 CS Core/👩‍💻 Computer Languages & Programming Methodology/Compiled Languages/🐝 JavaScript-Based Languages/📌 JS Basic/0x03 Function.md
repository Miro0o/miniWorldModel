# [Function](https://www.liaoxuefeng.com/wiki/1022910821149312/1023021087191360)

## Basics

```js
'use strict';

// <---------------- function declaration & function call ---------------> 
var test_2 = function(x, y, z){							// #1 function declaration ...
	
};														// !! 此处写封号（虽然编译器会自动行末补分号）
														// ... #2 function declaration 
function test (a, b, ...c){								// no type declaration
	console.log(a);
	console.log(b);
	console.log(c);										// the rest of arguments
	
	for(var i = 1; i <= arguments.length; i++){
		console.log(arguments[i]);
	}

	return {
		name: "fool",
		age : 18,
		sex : "male",
	};
	return "fool";										// various return type 
}
console.log(test (1,2,3,4,5,6,7,8));



// <------------ scope of variable & destructuring assignment ----------> 
// -------------- Variable Hoisting ---------------
var x = 'Hello, ' + y;								
console.log(x);											// Hello, undefined
var y = 'Bob';

var MYAPP = {};
MYAPP.name = 'myapp';									// 其他变量:
MYAPP.version = 1.0;
MYAPP.foo = function () {								// 其他函数:
    return 'foo';
};
console.log(MYAPP);
console.log(MYAPP.foo());
console.log(MYAPP.name);
console.log(MYAPP.sex);


function boo() {
    var x = 1;
    function bar() {
    	console.log(" x = ");
        console.log(x+1);							 	// bar可以访问foo的变量x!
    	var decoy = x + 1;
    }
    bar();
    var z = decoy + 1; 									// ReferenceError! foo不可以访问bar的变量decoy!
    console.log(z);
}

// window.boo();


// ----------- destructuring assignment ------------
var arr = [1, 'hello', [true, 'world!']];				// array
var [, x, [y, z]] = arr;								// nested structure
console.log(x);
console.log(y);
console.log(z);

function TEST (){										// object
	return {
		name: 'alex',
		age: 18,
		sex: 'male',
		person: {
			1: 1,
			2: 2,
			3: 3,
		},
	};
}
var {name, age, sex:sex_decoy, person: decoy} = TEST();
console.log(name);
console.log(age);
console.log(sex_decoy);
console.log(decoy);


var xx = 1, yy = 2;										// swap value
[xx, yy] = [yy, xx];
console.log(xx);
console.log(yy);


// <----------------------------- method ---------------------------> 
// ref: https://www.liaoxuefeng.com/wiki/1022910821149312/1023023754768768



```



## [Higher-order function](https://www.liaoxuefeng.com/wiki/1022910821149312/1023021271742944)

```js
// <----------------------------- Higher-order function --------------------------->

/*
*	Higher-order functions are functions can 
*	take other functions as paremeter so as to 
*	adapt to difference scenario.
*   Instances given below are methods within Array.
*/

// --------------- map & reduce --------------- 
var arr = ['23','3','2','88','123'];
console.log(arr);
console.log(arr.map(String));
console.log(arr.reduce((x, y) => (x + y) ));


// console.log(arr.map(parseInt));
console.log(arr.map(i=>parseInt(i)));
// console.log(parseInt('12'));


var str =['tom','aleX','mRIo'];										// --> [ 'Tom', 'Alex', 'Mrio' ]
console.log(str.map(x => x.toUpperCase().slice(0,1) + x.toLowerCase().slice(1)));
console.log(arr.map(Number));


// --------------- filter --------------- 
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function get_primes(arr){											// find the primes in an an array
	return arr.filter((e,i,a)=>{									// efficency aside, this code reveal the concision of JS code
      return e!=1 && a.filter(x=>e%x ==0).length<=2
    })
}

function get_odd(arr){
	return arr.filter(x=>x%2);
}

function deduplication(arr){
	return arr.filter((e,i,a)=>a.indexOf(e)===i);
}


// --------------- sort --------------- 
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
console.log(a1); 													// ['A', 'B', 'C']
console.log(a2); 													// ['A', 'B', 'C']
console.log(a1 === a2); 											// true, a1和a2是同一对象


arr.sort(function (x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    return 0;
}); 																// [20, 10, 2, 1]
console.log(arr);

// --------------- others --------------- 
arr.find();
arr.findIndex();
arr.forEach();
arr.every();


```



1. 利用reduce()求积：

```
function product(arr) {
    returnarr.reduce(function(x,y){ return x*y})
}
```

2. 练习：不要使用JavaScript内置的parseInt()函数，利用map和reduce操作实现一个string2int()函数：

```
function string2int(s) {
    var arr=[];
    for (let i of s){arr.push(i*1);}; 
    return arr.reduce(function (x,y) {return x*10+y;});
}
```

3. 请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。输入：['adam','LISA', 'barT']，输出：['Adam','Lisa', 'Bart']。

```
function normalize(arr) {
return arr.map(function get_norm(x) {return x.slice(0,1).toUpperCase()+x.slice(1).toLowerCase();});
}
```

4. 小明希望利用map()把字符串变成整数

```
var arr = ['1', '2', '3'];
var r;
r = arr.map((x)=>parseInt(x));
console.log(r);
```

小明做法不成功的原因:每次送入parseInt()的有3个元素:element, index和array本身。parseInt本身是有2个参数的:string和radix，所以element和index纳入了函数运算，array被抛弃了。parseInt(‘1’,0)表示1的数字值所以输出是1。parseInt(‘2’,1)返回NaN因为radix是2到32之间的整数不能是1。parseInt(‘3’,2)也是NaN因为2进制下没有3这样的表达。我们的修改是通过明确定义只有一个元素用于函数计算(element)。





```js
'use strict'

// <----------------------------- generator ---------------------------> 
function* test(max){
	var
        t,
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}
var T = test(10);
console.log(T);
console.log(T.next());
for(var {value: n,done: s} = T.next();!s;{value: n,done: s} = T.next()){
	console.log(n);
}

for(var i of test(10)){											// for.. of is for iterable	
	console.log(i);													// 遍历
}
// --------------------------------------
/*										|
for(var i in test(10)){					|						// for.. in is for class's attributes!
	console.log(i);						|	
}										|
*/											

var person = {
	name : 1,
	2 : 2,
	amazon : 3,
	google : 4,
	3: 'asdf'
};

for(var i in person){
	console.log(person[i]);
}

console.log(person[3]);
// console.log(person.3);											// unlawful
console.log(person.name); 											// lawful
// --------------------------------------



// <----------------------------- closure ---------------------------> 
// --------------------------------------
function lazy_sum(arr) {
    return function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
}
// --------------------------------------

function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));														// instant execuated anonamous function 

    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

f1(); // 1
f2(); // 4
f3(); // 9
// --------------------------------------


```



###### Refs:

[少年：不要滥用箭头啊](https://www.open-open.com/lib/view/open1482063707519.html)

