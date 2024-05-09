//Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, 
//or anything else you’d like. Write a program that creates a list containing these items.
var language_list = ["English", "Urdu", "German", "French"];
console.log("List of Languages");
for (var i = 0; i < language_list.length; i++) {
    console.log("".concat(language_list[i], " "));
}
