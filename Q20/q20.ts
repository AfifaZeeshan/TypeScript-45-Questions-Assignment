//Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, 
//or anything else you’d like. Write a program that creates a list containing these items.

let language_list:string [] = ["English", "Urdu" , "German", "French"];

console.log("List of Languages");
for ( let i=0; i<language_list.length; i++){
    console.log(`${language_list[i]} `)
}