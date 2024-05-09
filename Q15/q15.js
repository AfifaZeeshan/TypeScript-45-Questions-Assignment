// //Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// •	Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it. https://youtu.be/DdnoCqrgg8Y?si=hSgy6gUE6TB_I6h
// •	Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// •	Print a second set of invitation messages, one for each person who is still in your list.
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
