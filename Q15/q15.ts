// //Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// •	Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it. https://youtu.be/DdnoCqrgg8Y?si=hSgy6gUE6TB_I6h
// •	Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// •	Print a second set of invitation messages, one for each person who is still in your list.

let guestList:string[] = [`Bisma`, `Shahmeer`, `Tahir`,`Shakeel`];
for(let guest of guestList){
    console.log(`Dear ${guest}, \n I would like to invite your for dinner tomorrow.`)
}
let notAttending: string = `Shakeel`;
let newGuest:string = `Irma`;
console.log(`${notAttending} is not coming to dinner tomorrwo due to some urgency.`);

let indexMissingGuest:number = guestList.indexOf(notAttending);

guestList[indexMissingGuest] = newGuest;

for(let guest of guestList){
    console.log(`Dear ${guest}, \n I would like to invite your for dinner tomorrow.`)
}









