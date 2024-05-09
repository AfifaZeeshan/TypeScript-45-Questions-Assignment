// Great Magicians: Start a copy of your program from Exercise 41. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase 
// the Great to each magician’s name. call show_magicians() to see that the list has actually been modified.


function show_magicians(magicians:string[]):void {
   for (const magician of magicians) {
       console.log(magician + " " + "The Great");
       
   }
}
const magicianNames: string [] = ['Criss Angel', 'David Blaine', 'Derren Brown']

show_magicians(magicianNames)