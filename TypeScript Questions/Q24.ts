console.log("Testing for equality and Inequality with Strings");
console.log("Test 1" ,"apple" === "apple");
console.log("Test 2" ,"orange" === "orange");
console.log("Test 3" ,("banana" as any) === "apple");

console.log("__________________________________________________________________________________________________________________________________")
console.log("Testing for Lower Case");
console.log("Test 4" ,"HELLO".toLowerCase() === "hello");
console.log("Test 5" ,"HELLO".toLowerCase() === "HeLlo");

console.log("__________________________________________________________________________________________________________________________________")
console.log("Testing for Lower Case");
console.log("Test 4" ,"HELLO".toLowerCase() === "hello");
console.log("Test 5" ,"HELLO".toLowerCase() === "HeLlo");

console.log("__________________________________________________________________________________________________________________________________")
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log("Test 6" ,2 === 2);
console.log("Test 7" ,10 !== 10);
console.log("Test 8" ,11 > 10);
console.log("Test 9" ,9 < 10);
console.log("Test 10" ,10 == 10);

console.log("__________________________________________________________________________________________________________________________________")
console.log("Tests using and and or operators");
console.log("Test 11",(10>5)&& (10>6));
console.log("Test 12",(4>5)&& (10>6));

console.log("__________________________________________________________________________________________________________________________________");
let array:number[]=[1,2,3,4 ,5,6,7,8,9]
console.log("Test whether an item is in a array");
console.log("Test 13",array.includes(1));
console.log("Test 14",array.includes(10));

console.log("__________________________________________________________________________________________________________________________________");
console.log("Test whether an item is in a array");
console.log("Test 13",!array.includes(1));
console.log("Test 14",!array.includes(10));