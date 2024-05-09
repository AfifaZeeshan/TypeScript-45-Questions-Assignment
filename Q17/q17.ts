//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//•	Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//•	Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//•	Print a message to each of the two people still on your list, letting them know they’re still invited.
//•	Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



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

console.log("I can invite only two people for dinner.");

//guestList.pop()
for(let i = guestList.length - 1; i >= 2; i--){
    console.log(`Sorry ${guestList[i]}! I can't invite you to the dinner`);
    guestList.pop();
}

for(let guest of guestList){
    console.log(`Dear ${guest}, \n I would like to inform you that you are still invited for dinner tomorrow.\nThankyou.`);

}

guestList.splice(0 , 2);
console.log(guestList);