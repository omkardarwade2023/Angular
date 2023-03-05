// day 5
// variable(exm - ab, a1, Ab , bA, M_w,)
//data type(number(int,long,short,float,double) , string("",'',) ,boolean(true,false),
// any(number,string,boolean)
//void(used in only method)
//mislinious (null and undefind)
//number
console.log("number DataType =>");
var a = 24;
console.log(a);
var a = 1233446363634634;
console.log(a);
var a = -23;
console.log(a);
var a = 3.5;
console.log(a);
var a = 123123.23123123;
console.log(a);
console.log("----------------------------------");
console.log("string DataType =>");
var a2 = "sdgo";
console.log(a2);
var a2 = 'A';
console.log(a2);
var ab = 'hi';
console.log("\n".concat(ab, "\n"));
console.log("----------------------------------");
console.log("Boolean DataType =>");
//Boolean
var t1 = true;
console.log(t1);
var t1 = false;
console.log(t1);
var tr;
tr = true;
console.log(tr + "-----");
console.log("----------------------------------");
var str;
console.log("valule of str is" + str);
str = "omkar";
console.log(str);
var s1;
s1 = 45;
s1 = 4.5;
console.log(s1);
var any1;
any1 = 78;
console.log(any1);
//type asserstion
//it converts the one data type to another type
//it tells to compiler which datatype fuctionality have to acsses
//pre-requiest 
//varaible datatype shold be any/object/unknwon
// it has 2 ways
// 1 angle bracket syntex=>mostly used in typescript file
// 2 as syntex=> u can use has file an view file(html file)
// 1 angle bracket syntex
var s1;
var temp = s1;
temp = "omkar";
console.log("/////" + temp);
// 2 as syntex
var temp = s1;
temp = "omi";
console.log(temp);
console.log("--------------------------------");
//operators
//Arithmatic = +,-,*,/,%
//Logical = &&,||,
//Bitwise = &,|,!,^,<<,>>
//Condistional = <,>,==(it chakes only value),===(strongly equlity=>it chakes value and data type also)
//Relational = <=,>=,!=
//unary = ++,--,pre/post
//ternary = condition?expression1:expresstion2
//assignment = +=,-=,*=,/=,%=
console.log("----------Anonymous Function---------");
// Anonymous Function
// 1 Anonymous Fuction with parameter and return type
var temp1 = function (a, b) {
    return (a + b);
};
var re = temp1(1, 4);
console.log(re);
// 2 Anonymous Fuction without parameter and with return type
var temp2 = function () {
    var re = 6 + 4;
    return re;
};
console.log(temp2());
// 3 Anonymous Fuction with parameter and without return type
var temp3 = function (a, b) {
    var re = a + b;
    console.log(re);
};
temp3(10, 5);
console.log("---------------------------------------------");
console.log("----------Fat Arrow Function---------");
// fat arrow function 
// 1 fat arrow function with parameter & return type
var A1 = function (a, b) {
    return a + b;
};
var res = A1(10, 10);
console.log(res);
// 2 fat arrow function without parameter & with return type
var A2 = function () {
    var re = 20 + 5;
    return re;
};
console.log(A2());
// 3 fat arrow function with parameter & without return type
var A3 = function (a, b) {
    var r = a + b;
    console.log(r);
};
A3(25, 5);
