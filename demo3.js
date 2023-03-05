// control statement
// if ,if-else, nested if-else, switch, breack, continue
// if,if-else
var a1 = 10;
if (a1 > 12) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}
console.log("--------------------");
// nested if-else
var a1 = 20;
if (a1 > 22) {
    console.log("condition is true");
}
else if (a1 == 20) {
    console.log("condistion is equal");
}
else {
    console.log("condistion is false");
}
console.log("--------------------");
// switch
var choice = 9;
switch (choice) {
    case 1:
        console.log("in cond 1");
        break;
    case 2:
        console.log("in cond 2");
        break;
    default:
        console.log("in cond defualt");
        break;
}
console.log("--------------------");
// loop statement
// for loop, while loop, do while loop, 
// for loop
var i;
for (i = 1; i < 5; i++) {
    console.log("the value of i is" + i);
}
var a2 = 3;
while (a2 != 0) {
    console.log("a2 is " + a2);
    a2--;
}
