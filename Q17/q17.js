//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//•	Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//•	Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//•	Print a message to each of the two people still on your list, letting them know they’re still invited.
//•	Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestList = ["Bisma", "Shahmeer", "Tahir", "Shakeel"];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", \n I would like to invite your for dinner tomorrow."));
}
var notAttending = "Shakeel";
var newGuest = "Irma";
console.log("".concat(notAttending, " is not coming to dinner tomorrwo due to some urgency."));
var indexMissingGuest = guestList.indexOf(notAttending);
guestList[indexMissingGuest] = newGuest;
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ", \n I would like to invite your for dinner tomorrow."));
}
console.log("Hey Everyone, I've just found a bigger dinner table.");
var len = guestList.unshift('Tazeem');
var middleIndex = Math.round(len / 2);
guestList.splice(middleIndex, 0, 'Bushra');
guestList.push('Meriem');
for (var _b = 0, guestList_3 = guestList; _b < guestList_3.length; _b++) {
    var guest = guestList_3[_b];
    console.log("Dear ".concat(guest, ", \n I would like to invite your for dinner tomorrow."));
}
console.log("I can invite only two people for dinner.");
//guestList.pop()
for (var i = guestList.length - 1; i >= 2; i--) {
    console.log("Sorry ".concat(guestList[i], "! I can't invite you to the dinner"));
    guestList.pop();
}
for (var _c = 0, guestList_4 = guestList; _c < guestList_4.length; _c++) {
    var guest = guestList_4[_c];
    console.log("Dear ".concat(guest, ", \n I would like to inform you that you are still invited for dinner tomorrow.\nThankyou."));
}
guestList.splice(0, 2);
console.log(guestList);
