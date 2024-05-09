// Pizzas: Think of a least three kinds of your pizza. Store these pizza names in an array, 
// and then use a for loop to print the name of each pizza.
// •	Modify you’re for loop to print a sentence using the name of the pizza instead of printing 
//      just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// •	Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//      The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let myPizza = ['Tikka Pizza', 'Deep Dish Pizza', 'Afghani Feast Pizza']

//Print only names of Pizza

for (let i=0; i < myPizza.length; i++){
    console.log(myPizza[i]);
    
}

//Print names and sentences

for (let i=0; i <myPizza.length; i++){
    console.log(`I like ${myPizza[i]}.`);

}
console.log('\nI really like pizza as it comes in different variety of flavours but I like Tikka Pizza, Deep Dish Pizza and Afghani Feast Pizza the most as they have all the flavors according to my taste buds. It depends that which flavor from one of them I would like to have according to my mood. I love Pizza as it gives satisfaction to my cravings. ');
