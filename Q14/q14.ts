// //Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

let guestList:string[] = [`Bisma`, `Shahmeer`, `Tahir`,`Shakeel`];
for(let guest of guestList){
    console.log(`Dear ${guest}, \n I would like to invite your for dinner tomorrow.`)
}

export{guestList}