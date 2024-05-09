"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// •	Store the locations in an array. Make sure the array is not in alphabetical order.
let places = ["Makkah", "Azerbaijan", "Sydney", "New York", "Paris"];
//•	Print your array n its original order.
console.log('original ' + places);
//•	Print your array in an alphabetical order without modifying the actual list.
console.log('copy' + [...places].sort());
//•	Show that your array is still in its original order by printing it.
console.log('original ' + places);
//•	Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy' + [...places].sort().reverse());
//•	Show that our array is still in its original order by printing it again.
console.log('copy' + [...places].sort().reverse());
//•	Reverse the order of your list. Print the array to show that its order has changed.
console.log('copy' + [...places].sort());
//•	Reverse the order of your list again. Print the list o show it’s back to its original order.
console.log('copy' + [...places].sort().reverse());
// •	Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('copy' + [...places].sort());
