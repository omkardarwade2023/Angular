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
console.log("---------------------------------------------");
