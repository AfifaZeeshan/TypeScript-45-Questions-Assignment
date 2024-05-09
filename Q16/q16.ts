//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//•	Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//•	Add one new guest to the beginning of your array.
//•	Add one new guest to the middle of your array.
//•	Use append() to add one new guest to the end of your list.
//•	Print a new invitation messages, one for each person in your list.

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

console.log("Hey Everyone, I've just found a bigger dinner table.");

let len: number = guestList.unshift('Tazeem');

let middleIndex = Math.round(len / 2);

guestList.splice(middleIndex, 0, 'Bushra');

guestList.push('Meriem');

for(let guest of guestList){
    console.log(`Dear ${guest}, \n I would like to invite your for dinner tomorrow.`)
}

























