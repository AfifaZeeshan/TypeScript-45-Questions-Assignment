//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//•	Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//•	Add one new guest to the beginning of your array.
//•	Add one new guest to the middle of your array.
//•	Use append() to add one new guest to the end of your list.
//•	Print a new invitation messages, one for each person in your list.
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
